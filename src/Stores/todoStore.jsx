import { EventEmitter } from "events";

import dispatcher from "../Dispatcher/dispatcher";

class TodoStore extends EventEmitter {
    constructor() {
        super();

        this.todos = [
            {
                id: 9919919,
                text: "Do Yoga",
                complete: false
            },
            {
                id: 99199890,
                text: "Go Shopping",
                complete: false
            },
        ];
    }

    createTodo = (text) => {
        const id = Date.now();
        this.todos.push({
            text,
            complete: false,
            id: id
        })

        this.emit('change');
    }

    getAll = () => {
        return this.todos;
    }

    handleActions = (action) => {
        switch(action.type){
            case "CREATE_TODO": { 
                this.createTodo(action.text);
            }
            break;
            case "RECEIVE_TODO": { 
                this.todos = action.todos;
                this.emit("change")
            }
        }
    }

}

const todoStore = new TodoStore;
dispatcher.register(todoStore.handleActions.bind(todoStore))
// window.dispatcher = dispatcher;

export default todoStore;