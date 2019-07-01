import React, {Component} from 'react';
import MyFuckingBeautifulButton from "./MyFuckingBeautifulButton";

export default class Counter extends Component{
    constructor(props) {
        super(props);
        this.state = {
            count: props.number,
        }
    }

    handleButtonClick() {
        this.setState({
            count: this.state.count + this.props.number
        });
    }

    render() {
        console.log('vanh');
        const count = this.state.count;
        return (
            <MyFuckingBeautifulButton onClick={() => this.handleButtonClick()} label={count}/>
        );
    }
}