export default function Commentitem({ comment, email }) {
  console.log(comment);

  return (
    <li className="comment">
      <p>{comment.email}</p>
      <p>{comment.comment}</p>
    </li>
  );
}
