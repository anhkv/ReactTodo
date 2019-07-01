import React, {Component} from 'react';

export default class NewTodoForm extends Component{

    state = {
        newTodoName: ''
    };

    onInputChange(newTodoName) {
        this.setState({
            newTodoName: newTodoName
        });
    }

    render() {
        const {onNewTodo} = this.props;
        return (
            <div>
                <input type="text" onChange={(event) => {
                    console.log(event.target);
                    this.onInputChange(event.target.value)
                }} value={this.state.newTodoName}/>
                <button disabled={!this.state.newTodoName} type="submit" onClick={() => {onNewTodo({name: this.state.newTodoName, done: false})}}>Create</button>
            </div>
        );
    }
}