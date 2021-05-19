import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function ConsoleCard({ id, name, image }) {
  return (
    <div className='card console-card'>
      <img src={image} className='card-img-top img-fluid' alt={name} />
      <div className='card-body'>
        <p className='card-text'>{name}</p>
      </div>
    </div>
  );
}

export default ConsoleCard;
