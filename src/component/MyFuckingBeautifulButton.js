import React, {Component} from 'react';

export default class MyFuckingBeautifulButton extends Component{
    render() {
        const label = this.props.label;
        const onClickCallBack = this.props.onClick;
        console.log('render child component');
        return (
            <button onClick={() => onClickCallBack()}>{label}</button>
        );
    }
}