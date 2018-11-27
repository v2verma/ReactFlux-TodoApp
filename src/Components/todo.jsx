import React, { Component } from "react";

export default class Todo extends Component {
  constructor(props) {
    super();
  }

  handleDelete = (id) => {
    console.log("ID", )
  }

  render() {
    const { complete, edit, text, id } = this.props;
    console.log("Props", complete,edit,text,id);

    const icon = complete ? "\u2714" : "\u2716"

    if (edit) {
      return (
        <li>
          <input value={text} focus="focused"/>
        </li>
      );
    }

    return (
      <li>
        <span>{text}</span>
        <span >{icon}</span>
      </li>
    );
  }
}