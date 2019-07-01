import React, {Component} from 'react';

export default class MyComponent extends Component{
    render() {
        const {name} = this.props.user;
        return (
            <p>Hello {name}</p>
        );
    }
}