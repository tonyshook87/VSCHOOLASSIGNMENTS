import React, { useState } from "react";
import axios from "axios";

export const UserContext = React.createContext();

const userAxios = axios.create();

userAxios.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  } else {
    console.warn("No token found, requests might be unauthorized.");
  }
  return config;
});

export default function UserProvider(props) {
  const initState = {
    user: JSON.parse(localStorage.getItem("user")) || {},
    token: localStorage.getItem("token") || "",
    issues: [],
    errMsg: "",
  };

  const [userState, setUserState] = useState(initState);
  const [allIssues, setAllIssues] = useState([]);
  const [allComments, setAllComments] = useState([]);

  async function signup(credentials) {
    try {
      const res = await axios.post("/api/auth/signup", credentials);
      const { user, token } = res.data;
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));
      setUserState((prevUserState) => ({ ...prevUserState, user, token }));
    } catch (err) {
      handleAuthErr(err.response.data.errMsg);
    }
  }

  async function login(credentials) {
    try {
      const res = await axios.post("/api/auth/login", credentials);
      const { user, token } = res.data;
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));
      setUserState((prevUserState) => ({ ...prevUserState, user, token }));
    } catch (err) {
      handleAuthErr(err.response.data.errMsg);
    }
  }

  function logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUserState({ user: {}, token: "", issues: [] });
  }

  function handleAuthErr(errMsg) {
    setUserState((prevUserState) => ({ ...prevUserState, errMsg }));
  }

  function resetAuthErr() {
    setUserState((prevUserState) => ({ ...prevUserState, errMsg: "" }));
  }

  async function getUserIssues() {
    try {
      const res = await userAxios.get("/api/main/issue/user");
      setUserState((prevState) => ({ ...prevState, issues: res.data }));
    } catch (err) {
      console.log(err);
    }
  }

  async function addIssue(newIssue) {
    try {
      const res = await userAxios.post("/api/main/issue", newIssue);
      setUserState((prevState) => ({
        ...prevState,
        issues: [...prevState.issues, res.data],
      }));
    } catch (err) {
      console.log(err);
    }
  }

  async function getAllIssues() {
    try {
      const res = await userAxios.get("/api/main/issue");
      setAllIssues(res.data);
    } catch (err) {
      console.log(err);
    }
  }

  async function getAllComments() {
    try {
      const res = await userAxios.get("/api/main/comments");
      setAllComments(res.data);
    } catch (err) {
      console.log(err);
    }
  }

  async function addComment(id, comment) {
    try {
      const res = await userAxios.post(`/api/main/comments/${id}`, comment);
      setAllComments((prevAllComments) => [...prevAllComments, res.data]);
    } catch (err) {
      console.log(err);
    }
  }

  async function upvoteIssue(issueId) {
    try {
      const res = await userAxios.put(`/api/main/issue/upvote/${issueId}`);
      setAllIssues((prevIssues) =>
        prevIssues.map((issue) => (issue._id === issueId ? res.data : issue))
      );
      setUserState((prevUserState) => ({
        ...prevUserState,
        issues: prevUserState.issues.map((issue) =>
          issue._id === issueId ? res.data : issue
        ),
      }));
    } catch (err) {
      console.log(err);
    }
  }
  async function deleteIssue(issueId) {
    try {
      await userAxios.delete(`/api/main/issue/${issueId}`); // Backend delete
      setUserState((prevUserState) => ({
        ...prevUserState,
        issues: prevUserState.issues.filter((issue) => issue._id !== issueId), // Remove from local state
      }));
      getAllIssues(); // Refresh the issue list from the backend
    } catch (err) {
      console.error("Error deleting issue:", err);
    }
  }

  async function deleteComment(commentId) {
    try {
      await userAxios.delete(`/api/main/comments/${commentId}`);
      setAllComments((prevComments) =>
        prevComments.filter((comment) => comment._id !== commentId)
      );
    } catch (err) {
      console.error("Error deleting comment:", err);
    }
  }

  async function editIssue(issueId, updatedIssue) {
    try {
      const res = await userAxios.put(
        `/api/main/issue/${issueId}`,
        updatedIssue
      );
      setAllIssues((prevIssues) =>
        prevIssues.map((issue) => (issue._id === issueId ? res.data : issue))
      );
      setUserState((prevUserState) => ({
        ...prevUserState,
        issues: prevUserState.issues.map((issue) =>
          issue._id === issueId ? res.data : issue
        ),
      }));
    } catch (err) {
      console.log(err);
    }
  }
  async function editComment(commentId, updatedData) {
    try {
      const res = await userAxios.put(
        `/api/main/comments/${commentId}`,
        updatedData
      );
      setAllComments((prevComments) =>
        prevComments.map((comment) =>
          comment._id === commentId ? res.data : comment
        )
      );
    } catch (err) {
      console.error("Error editing comment:", err);
    }
  }

  async function downvoteIssue(issueId) {
    try {
      const res = await userAxios.put(`/api/main/issue/downvote/${issueId}`);
      console.log("downvote", res.data);
      setAllIssues((prevIssues) =>
        prevIssues.map((issue) => (issue._id === issueId ? res.data : issue))
      );
      setUserState((prevUserState) => ({
        ...prevUserState,
        issues: prevUserState.issues.map((issue) =>
          issue._id === issueId ? res.data : issue
        ),
      }));
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <UserContext.Provider
      value={{
        ...userState,
        signup,
        login,
        logout,
        addIssue,
        resetAuthErr,
        getUserIssues,
        getAllIssues,
        allIssues,
        getAllComments,
        allComments,
        addComment,
        upvoteIssue,
        downvoteIssue,
        deleteIssue,
        deleteComment,
        editComment,
        editIssue,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
}
