import React, { useContext, useEffect } from "react";
import Issue from "./Issue.jsx";
import { UserContext } from "../context/UserContext";

export default function IssueList({
  issues,
  showInteractions = true,
  showForm = true,
}) {
  const { getAllIssues, deleteIssue, editIssue } = useContext(UserContext);

  useEffect(() => {
    getAllIssues();
  }, []);

  return (
    <div className="issue-list">
      {issues.map((issue) => (
        <Issue
          {...issue}
          issue={issue}
          key={issue._id}
          deleteIssue={deleteIssue}
          editIssue={editIssue}
          showInteractions={showInteractions}
          showForm={showForm}
        />
      ))}
    </div>
  );
}
