import React, { Component } from "react";

export default class TodoForm extends Component {
    constructor(props){
        super();
    }

    render() {
        const {ipText} = this.props;
        return(
            <div>
                <form >
                    <input type="text" value={ipText} onChange={(e)=> console.log(e.target.value)}/>
                </form>
            </div>
        )
    }

}