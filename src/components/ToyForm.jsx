import React, { useState } from "react";

const API = "http://localhost:3000/toys";

function ToyForm({ onAddToy }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    const newToyData = {
      name,
      image,
      likes: 0,
    };

    fetch(API, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newToyData),
    })
      .then((res) => res.json())
      .then((newToy) => {
        onAddToy(newToy);
        setName("");
        setImage("");
      });
  }

  return (
    <form className="add-toy-form" onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Enter a toy's name..."
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        name="image"
        placeholder="Enter a toy's image URL..."
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />
      <input type="submit" value="Create New Toy" />
    </form>
  );
}

export default ToyForm;