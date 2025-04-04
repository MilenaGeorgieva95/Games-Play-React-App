import { Component } from "react";
import { request } from "../../../utils/requester";

const commentsUrl = "/data/comments";

export default class AdminComments extends Component {
  async componentDidMount() {
    const comments = await request.get(commentsUrl);
    console.log(comments);
  }
  render() {
    return (
      <ul>
        <li></li>
      </ul>
    );
  }
}
