import React, {Component} from 'react';

export default class Displayer extends Component{
    render() {
        return (
            <h2>
                Current value is: {this.props.number}
            </h2>
        );
    }
}