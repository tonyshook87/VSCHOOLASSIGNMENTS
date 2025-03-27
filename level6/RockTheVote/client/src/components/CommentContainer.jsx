import { useState } from "react";
import CommentForm from "./CommentForm";
import CommentList from "./CommentList";

function CommentContainer({
  issueId,
  showForm = true,
  showInteractions = true,
}) {
  const [isHidden, setIsHidden] = useState(true);

  function toggleView() {
    setIsHidden(!isHidden);
  }

  return (
    <div className="comment-container">
      {showForm && <CommentForm issueId={issueId} />}
      <button onClick={toggleView}>
        {isHidden ? "Show Comments" : "Hide Comments"}
      </button>
      {!isHidden && (
        <CommentList issueId={issueId} showInteractions={showInteractions} />
      )}
    </div>
  );
}

export default CommentContainer;
