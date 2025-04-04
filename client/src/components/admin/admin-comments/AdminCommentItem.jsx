import { Component } from "react";

export default class AdmminCommentItem extends Component {
  render() {
    return <li>{this.props.comment}</li>;
  }
}
