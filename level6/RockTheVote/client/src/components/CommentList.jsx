import { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";

function CommentList({ issueId, showInteractions = true }) {
  const { allComments, editComment, deleteComment, user } =
    useContext(UserContext);
  const [editingId, setEditingId] = useState(null);
  const [editText, setEditText] = useState("");

  const filteredComments = allComments.filter(
    (comment) => comment.issue === issueId
  );

  function handleEditClick(comment) {
    setEditingId(comment._id);
    setEditText(comment.text); // Pre-fill input with current comment text
  }

  function handleSave(commentId) {
    editComment(commentId, { text: editText });
    setEditingId(null); // Exit edit mode
  }

  function handleCancel() {
    setEditingId(null);
  }

  return (
    <div>
      {filteredComments.map((comment) => (
        <div key={comment._id} className="comment-container">
          <p className="username">{comment.username}</p>

          {editingId === comment._id ? (
            // Show input field when editing
            <div>
              <input
                type="text"
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
              />
              <button onClick={() => handleSave(comment._id)}>Save</button>
              <button onClick={handleCancel}>Cancel</button>
            </div>
          ) : (
            // Show normal text when not editing
            <>
              <p className="comment-text">{comment.text}</p>

              {/* Conditionally render Edit/Delete buttons only if allowed */}
              {showInteractions && comment.user === user._id && (
                <div>
                  <button onClick={() => handleEditClick(comment)}>Edit</button>
                  <button onClick={() => deleteComment(comment._id)}>
                    Delete
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      ))}
    </div>
  );
}

export default CommentList;
