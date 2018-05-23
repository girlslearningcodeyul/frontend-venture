//service-worker.js implementing caching and retrieval for the app shell, 
//but even though we're caching the data

//When the service worker is registered, 
//an install event is triggered the first time the user visits the page. 
//In this event handler, we will cache all the assets that are needed for the application.

var cacheName = 'venture';
//dataCacheName so that we can separate our applications data from the app shell. 
//When the app shell is updated and older caches are purged, our data will remain untouched, 
//ready for a super fast load.

var dataCacheName = 'ventureData';
var filesToCache = [
    '/',
    //public folder
    '/public/index.html',
    '/public/favicon.png',
    '/public/manifest.json',
    //scripts
    '/App.js',
    '/App.test.js',
    '/Choices.js',
    '/Food.js',
    '/Fun.js',
    '/index.js',
    '/Intro.js',
    '/Map.js',
    '/mapTheme.js',
    '/OpenWeatherMap.js',
    '/Preferences.js',
    '/Price.js',
    '/Rules.js',
    '/TypeWriter.js',
    //styles
    '/App.css',
    '/index.css',
    //images below
    '/images/background.jpg',
    '/images/checkbox.png',
    '/images/logo.gif',
    '/images/logo.jpg',
    '/images/logo.png',
    '/images/parchment.jpg'
];

self.addEventListener('install', function (e) {
    console.log('[ServiceWorker] Install');
    e.waitUntil(
        caches.open(cacheName).then(function (cache) {
            console.log('[ServiceWorker] Caching app shell');
            return cache.addAll(filesToCache);
        })
    );
});


//activate event is fired when the service worker starts up and includes some logic to update the cache
self.addEventListener('activate', function (e) {
    console.log('[ServiceWorker] Activate');
    e.waitUntil(
        caches.keys().then(function (keyList) {
            return Promise.all(keyList.map(function (key) {
                if (key !== cacheName && key !== dataCacheName) {
                    console.log('[ServiceWorker] Removing old cache', key);
                    return caches.delete(key);
                }
            }));
        })
    );
    return self.clients.claim();
});

//Service workers provide the ability to intercept requests made from our 
//Progressive Web App and handle them within the service worker. 
//That means we can determine how we want to handle the request and potentially 
//serve our own cached response.

//fetch event handler to handle requests to the data API separately from other requests.
self.addEventListener('fetch', function(e) {
    console.log('[Service Worker] Fetch', e.request.url);
    var dataUrl = 'https://query.yahooapis.com/v1/public/yql';
    if (e.request.url.indexOf(dataUrl) > -1) {
      /*
       * When the request URL contains dataUrl, the app is asking for fresh
       * data. In this case, the service worker always goes to the
       * network and then caches the response. This is called the "Cache then
       * network" strategy:
       * https://jakearchibald.com/2014/offline-cookbook/#cache-then-network
       */
      e.respondWith(
        caches.open(dataCacheName).then(function(cache) {
          return fetch(e.request).then(function(response){
            cache.put(e.request.url, response.clone());
            return response;
          });
        })
      );
    } else {
      /*
       * The app is asking for app shell files. In this scenario the app uses the
       * "Cache, falling back to the network" offline strategy:
       * https://jakearchibald.com/2014/offline-cookbook/#cache-falling-back-to-network
       */
      e.respondWith(
        caches.match(e.request).then(function(response) {
          return response || fetch(e.request);
        })
      );
    }
  });
