import React, { useContext, useEffect } from "react";
import { UserContext } from "../context/UserContext.jsx";
import IssueForm from "./IssueForm.jsx";
import IssueList from "./IssueList.jsx";

export default function Profile() {
  const {
    issues,
    user: { username },
    getUserIssues,
    getAllComments,
    addIssue,
  } = useContext(UserContext);

  useEffect(() => {
    getUserIssues();
    getAllComments();
  }, []);

  return (
    <div className="profile">
      <h1>Welcome @{username}!</h1>
      <h3>Add An Issue</h3>
      {/* Use the reusable IssueForm for adding issues */}
      <IssueForm onSubmit={addIssue} buttonText="Add An Issue" />
      <h3>Your Issues</h3>
      <IssueList issues={issues} showForm={false} showInteractions={false} />
    </div>
  );
}
