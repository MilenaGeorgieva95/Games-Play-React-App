import { Component } from "react";

export default class AdmminCommentItem extends Component {
  onDeleteHandler() {
    console.log("deleted");
  }
  render() {
    return (
      <li>
        {this.props.comment}{" "}
        <button onClick={this.onDeleteHandler}>Delete</button>
      </li>
    );
  }
}
