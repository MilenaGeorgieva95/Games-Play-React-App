export default function Commentitem({ comment }) {
  return (
    <li className="comment">
      <p>{comment.comment}</p>
    </li>
  );
}
