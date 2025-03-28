export default function Commentitem({ comment, email }) {
  return (
    <li className="comment">
      <p>{email}</p>
      <p>{comment.comment}</p>
    </li>
  );
}
