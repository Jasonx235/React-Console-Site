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
    <p>
      Console Page: {name}, {price}, {country}, {releaseYear}, {image}
    </p>
  );
}

export default Console;
