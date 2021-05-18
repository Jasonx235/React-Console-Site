import React, { useState, useEffect } from "react";
import Console from "./Console";
import ConsoleCard from "./ConsoleCard";
import axios from "axios";

function Consoles() {
  const [consoleData, setConsoleData] = useState([]);
  const [consoleID, setConsoleID] = useState(null);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axios
      .get("http://csc225.mockable.io/consoles")
      .then((res) => setConsoleData(res.data))
      .catch((err) => console.log("Database error"));
  };

  if (consoleData.length === 0) {
    return <p>Loading</p>;
  }

  if (!!consoleID) {
    return <Console />;
  }

  return (
    <div>
      {consoleData.map((console) => {
        return (
          <ConsoleCard
            key={console.id}
            name={console.name}
            id={console.id}
            image={console.image}
          />
        );
      })}
    </div>
  );
}

export default Consoles;
