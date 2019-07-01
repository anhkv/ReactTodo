import React, {Component} from 'react';
// import logo from '../../logo.svg';
import '../../App.css';
import Stat from "../Stat";
import Todo from "../Todo";
import NewTodoForm from "../NewTodoForm";

export default class Content extends Component {

    state = {
        todos: [],
    };

    countDone() {
        let done = 0;
        this.state.todos.forEach(todo => {
            if (todo.done) {
                done++;
            }
        });
        return done;
    }

    async deleteTodo(todoId) {
        await fetch('http://todos.sphinx-demo.com/todos/'+todoId, {
            method: 'DELETE',
        }).then(res => res.json());
    }

    async clearDone() {
        await this.state.todos.filter(async (todo) => todo.done ? await this.deleteTodo(todo.id) : !todo.done);
        await this.loadTodo();
    }

    async putTodo(todo) {
        await fetch('http://todos.sphinx-demo.com/todos/'+todo.id, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({done: todo.done}),
        });
    }

    async handleDoneChange(todoIndex) {
        let updatedTodos = this.state.todos;
        updatedTodos[todoIndex].done = !updatedTodos[todoIndex].done;
        await this.putTodo(updatedTodos[todoIndex]);
        await this.loadTodo();
    }

    async postTodo(newTodo) {
        await fetch('http://todos.sphinx-demo.com/todos', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newTodo)
        })
    }

    async addNewTodo(newTodo) {
        // this.setState({
        //     todos: [newTodo, ...this.state.todos]
        // })

        await this.postTodo(newTodo);
        await this.loadTodo();
    }
    async loadTodo() {
        await fetch('http://todos.sphinx-demo.com/todos')
            .then(response => response.json())
            .then(todo => this.setState({todos: todo}));
    }

    async componentDidMount() {
        await this.loadTodo();
    }

    render() {
        const done = this.countDone();
        const total = this.state.todos.length;
        const todoLabelStyle = {
            textDecoration: 'line-through',
            color: "gray"
        };

        return (
            <div>
                <div className={'todo-header'}>
                    <Stat done={done} total={total}/>
                    <button onClick={() => this.clearDone()}>Clear</button>
                </div>
                <div className={'todo-list'}>
                    <ul>
                        {
                            this.state.todos.map((todo, index) => {
                                if (!!todo.done) {
                                    return (<Todo onDoneChange={() => {
                                        this.handleDoneChange(index)
                                    }} key={index} todo={todo} style={todoLabelStyle}/>)
                                }
                                return (<Todo onDoneChange={() => {
                                    this.handleDoneChange(index)
                                }} key={index} todo={todo}/>)
                            })
                        }
                    </ul>
                </div>
                <div>
                    <NewTodoForm onNewTodo={(newTodo) => {
                        this.addNewTodo(newTodo)
                    }}/>
                </div>
            </div>
        );
    }
}