import dispatcher from "../Dispatcher/dispatcher";

export function createTodo(text){
    dispatcher.dispatch({
        type: "CREATE_TODO",
        text,
    });
}
export function deleteTodo(id){
    dispatcher.dispatch({
        type: "DELETE_TODO",
        id,
    });
}

export function reloadTodo(){
    //axios("http://someurl.com/somedateendpoint").then((date) => {
    //    console.log("got the data", data);
    //})
    dispatcher.dispatch({
        type: "FETCH_TODO",
    })

    let asynData = [
        {
            id: 9919229,
            text: "Do Yoga Again",
            complete: false
        },
        {
            id: 99198890,
            text: "Go Shopping Again",
            complete: false
        },
    ]

    setTimeout(() => {
        dispatcher.dispatch({ type: "RECEIVE_TODO",todos: asynData});
    }, 1000)
}