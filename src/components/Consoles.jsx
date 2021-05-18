import React, { useState, useEffect } from "react";
import axios from "axios";

function Consoles() {
  const [consoleData, setConsoleData] = useState(null);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axios
      .get("http://csc225.mockable.io/consoles")
      .then((res) => setConsoleData(res.data))
      .catch((err) => console.log("Database error"));
  };

  console.log(consoleData);

  return <p>These are consoles!</p>;
}

export default Consoles;
