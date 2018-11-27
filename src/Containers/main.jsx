import React, { Component } from "react";
import M from 'materialize-css'
import Todo from "../Components/todo";
import BreadcrumbsTab from "../Containers/breadcrumbsTab";
import TodoStore from "../Stores/todoStore";
import * as TodoActions from "../Actions/todoAction";

let toastHTML = '<span id="wrng_msg">Please enter the task!!</span>';

export default class Main extends Component {
    constructor() {
        super();

        this.state = {
            todos: TodoStore.getAll(),
            ipValue: ''
        };
    }

    componentWillMount() {
        TodoStore.on("change", () => {
            this.setState({
                todos: TodoStore.getAll()
            })
        })
    }

    createTodo = (e) => {
        e.preventDefault();
        this.state.ipValue !== '' || null || undefined ?
            TodoActions.createTodo(this.state.ipValue) : M.toast({ html: toastHTML }, 1000, "red")
    }
    reloadTodo = () => {
        TodoActions.reloadTodo(Date.now());
    }

    render() {
        const { todos } = this.state;

        const TodoComponents = todos.map((todo) => {
            return <Todo key={todo.id} {...todo} />
        })
        return (
            <div className="row">
                <nav>
                    <div class="nav-wrapper" style={{ backgroundColor: '#166177' }}>
                        <a href="#" className="brand-logo" style={{ paddingLeft: '1%' }}>Logo</a>
                        <ul id="nav-mobile" class="right hide-on-med-and-down">
                            {/* <li><a href="sass.html">Sass</a></li>
                            <li><a href="badges.html">Components</a></li>
                            <li><a href="collapsible.html">JavaScript</a></li> */}
                        </ul>
                    </div>
                </nav><br />
                <div className="container">
                    <div className="card-panel">
                        <div className="row">
                            <div className="col s11">
                                <form onSubmit={this.createTodo}>
                                    <input type="text" id="inputBox" value={this.state.ipValue} onChange={(e) => this.setState({ ipValue: e.target.value })} />
                                </form>
                            </div>
                            <div className="col s1">
                                <a className="btn-floating btn-medium waves-effect waves-light white" style={{ marginTop: '4%' }}>
                                    <i className="material-icons" style={{ color: '#161166' }}>keyboard_voice</i>
                                </a>
                            </div>
                            <div className="col s12">
                                <button className="waves-effect waves-light btn green" onClick={this.createTodo}><i className="material-icons left">add</i><b>ADD</b></button>&nbsp;
                        <button className="waves-effect waves-light btn grey" onClick={this.reloadTodo}><b>Reload</b></button>
                            </div>
                        </div>
                    </div>
                    <br />
                    <BreadcrumbsTab />
                    {/* <h2 style={{ color: '#166198' }}>Todos</h2> */}
                    <ul>
                        {TodoComponents}
                    </ul>
                </div>
            </div>
        )
    }
}