import React, { useState, useEffect } from "react";
import axios from "axios";

function Console({ id }) {
  const [consoleInfo, setConsoleInfo] = useState({});

  const { name, price, country, releaseYear, image } = consoleInfo;

  useEffect(() => {
    axios
      .get(`http://csc225.mockable.io/consoles/${id}`)
      .then((res) => {
        setConsoleInfo(res.data);
      })
      .catch((err) =>
        console.log("Database Error: Problem retrieving console information")
      );
  }, [id]);

  if (Object.keys(consoleInfo).length === 0) {
    return <p>Loading...</p>;
  }

  return (
    <div className='card mb-3'>
      <div className='row no-gutters'>
        <div className='col-md-4'>
          <img src={image} alt={name} className='img-fluid' />
        </div>
        <div className='col-md-8'>
          <div className='card-body'>
            <h5 className='card-title'>{name}</h5>
            <p className='card-text'>
              {price}, {country}, {releaseYear}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Console;
