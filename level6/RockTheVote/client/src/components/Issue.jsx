import { useContext, useState } from "react";
import moment from "moment";
import CommentContainer from "./CommentContainer";
import { UserContext } from "../context/UserContext";
import IssueForm from "./IssueForm";

export default function Issue({
  issue,
  deleteIssue,
  showForm = true,
  showInteractions = true,
}) {
  const { upvoteIssue, downvoteIssue, user, editIssue } =
    useContext(UserContext);
  const [editing, setEditing] = useState(false);

  const isOwner = user._id === issue.user;
  const timeStamp = moment(issue.createdAt).fromNow();

  function handleEdit(updatedInputs) {
    editIssue(issue._id, updatedInputs); // Call the edit function from context
    setEditing(false); // Exit editing mode after saving
  }

  return (
    <div className="issue">
      <h3>Issue posted by: {issue.username}</h3>

      {editing && isOwner ? (
        <IssueForm
          initialInputs={{
            title: issue.title,
            description: issue.description,
            imgUrl: issue.imgUrl,
          }}
          onSubmit={handleEdit}
          buttonText="Save Changes"
        />
      ) : (
        <>
          <h1>Title: {issue.title}</h1>
          <h3>Description: {issue.description}</h3>
          {issue.imgUrl && (
            <img src={issue.imgUrl} alt={issue.title} className="issue-image" />
          )}
          <p>{timeStamp}</p>

          {showInteractions && (
            <>
              <div className="upvote">
                <p>Upvotes: {issue.likedUsers.length}</p>
                <button onClick={() => upvoteIssue(issue._id)}>Upvote</button>
              </div>

              <div className="downvote">
                <p>Downvotes: {issue.dislikedUsers.length}</p>
                <button onClick={() => downvoteIssue(issue._id)}>
                  Downvote
                </button>
              </div>
            </>
          )}

          <CommentContainer
            issueId={issue._id}
            showForm={showForm}
            showInteractions={showInteractions}
          />

          {isOwner && (
            <div>
              <button onClick={() => setEditing(true)}>Edit</button>
              <button onClick={() => deleteIssue(issue._id)}>Delete</button>
            </div>
          )}
        </>
      )}
    </div>
  );
}
