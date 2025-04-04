import { Component } from "react";
import { request } from "../../../utils/requester";
import AdmminCommentItem from "./AdminCommentItem";

const commentsUrl = "/data/comments";

export default class AdminComments extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: [{ text: "testTest" }],
      name: "John Smith",
    };
  }

  async componentDidMount() {
    console.log(this.state);

    const comments = await request.get(commentsUrl);
    this.setState({ comments }, () => {
      console.log(this.state);
    });
  }
  render() {
    return (
      <ul>
        {this.state.comments.map((comment) => (
          <AdmminCommentItem key={comment._id} comment={comment.comment} />
        ))}
      </ul>
    );
  }
}
