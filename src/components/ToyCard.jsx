import React from "react";

const API = "http://localhost:3000/toys";

function ToyCard({ toy, onDeleteToy, onLikeToy }) {
  function handleLikeClick() {
    fetch(`${API}/${toy.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        likes: toy.likes + 1,
      }),
    })
      .then((res) => res.json())
      .then((updatedToy) => onLikeToy(updatedToy));
  }

  function handleDonateClick() {
    onDeleteToy(toy.id);
  }

  return (
    <div className="card" data-testid="toy-card">
      <h2>{toy.name}</h2>
      <img src={toy.image} alt={toy.name} className="toy-avatar" />
      <p>{toy.likes} Likes </p>
      <button onClick={handleLikeClick}>Like &lt;3</button>
      <button onClick={handleDonateClick}>Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;