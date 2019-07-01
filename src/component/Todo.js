import React, {Component} from 'react';

export default class Todo extends Component{

    render() {
        const todoList = this.props.todo;
        const style = this.props.style;
        return (
            <li style={style}>
                <input type='checkbox' onChange={this.props.onDoneChange} checked={todoList.done} readOnly={true}/>
                <span>{todoList.name}</span>
            </li>
        );
    }
}