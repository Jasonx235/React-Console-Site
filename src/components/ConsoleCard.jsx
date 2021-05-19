import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function ConsoleCard({ id, name, image }) {
  return (
    <div className='card'>
      <div className='row no-gutters'>
        <div className='col-md-4'>
          <img src={image} alt={name} className='img-fluid' />
        </div>
        <div className='col-md-8'>
          <div className='card-body'>
            <h5 className='card-title'>{name}</h5>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ConsoleCard;
