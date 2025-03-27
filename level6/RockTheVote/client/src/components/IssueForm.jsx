import React, { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";

const initInputs = {
  title: "",
  description: "",
  imgUrl: "",
};

export default function IssueForm({
  initialInputs = initInputs,
  onSubmit,
  buttonText,
}) {
  const [inputs, setInputs] = useState(initialInputs);

  function handleChange(e) {
    const { name, value } = e.target;
    setInputs((prevInputs) => ({
      ...prevInputs,
      [name]: value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit(inputs); // Pass inputs to the parent component
    setInputs(initialInputs); // Reset inputs after submission
  }

  const { title, description, imgUrl } = inputs;

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        value={title}
        onChange={handleChange}
        placeholder="Title"
      />
      <input
        type="text"
        name="description"
        value={description}
        onChange={handleChange}
        placeholder="Description"
      />
      <input
        type="text"
        name="imgUrl"
        value={imgUrl}
        onChange={handleChange}
        placeholder="Image URL"
      />
      <button>{buttonText}</button>
    </form>
  );
}
