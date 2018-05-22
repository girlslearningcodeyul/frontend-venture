import React, { Component } from 'react';

let timeout;
function delay(ms) {
    return new Promise(resolve => {
        timeout = setTimeout(resolve, ms);
    });
}

class TypeWriter extends Component {
    constructor () {
        super();
        this.state = {
            text: '',
        };
    }
    componentDidMount() {
        this.startWriting(this.props);
    }
    componentWillReceiveProps(nextProps) {
        this.setState({ text: '' });
        this.startWriting(nextProps);
    }
    startWriting = async (props) => {
        const element = props.children;
        const text = element.props.children;
        const textArr = text.split('');
        const duration = props.duration ? props.duration * 1000 : 3000;
        this.setState({ type: element.type });
        for(let i = 0; i < textArr.length; i++) {
            await delay(100);
            this.setState({ text: this.state.text + textArr[i] })
        }
    }
    componentWillUnmount() {
        clearTimeout(timeout);
    }
    render() {
        if(!this.state.type) return <div></div>;
        const Tag = this.state.type;
        return (
            <Tag><span className="react-typewriter">{this.state.text}</span></Tag>
        );
    }
}

export default TypeWriter;