import React, { useState, useEffect } from "react";
import axios from "axios";
import Loading from "./Loading";

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
    return (
      <div className='d-flex justify-content-center align-items-center '>
        <Loading type='bars' />
      </div>
    );
  }

  return (
    <div className='card mb-3 glass-background console-page'>
      <div className='row no-gutters'>
        <div className='col-lg-4'>
          <img src={image} alt={name} className='d-block mx-auto' />
        </div>
        <div className='col-lg-8'>
          <h5 className='card-title console-name text-center text-lg-left pl-lg-5'>
            {name}
          </h5>
          <p className='card-text text-center text-lg-left pl-lg-5'>
            <b>Price:</b> ${price}
            <br />
            <b>Release Country:</b> {country}
            <br />
            <b>Release Year:</b> {releaseYear}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Console;
