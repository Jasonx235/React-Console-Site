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
    return (
      <div>
        <Console id={consoleID} />
        <button
          onClick={() => {
            setConsoleID(null);
          }}
        >
          Go back
        </button>
      </div>
    );
  }
  console.log(consoleID);

  return (
    <div>
      {consoleData.map((console) => {
        return (
          <button
            onClick={() => {
              setConsoleID(console.id);
            }}
            key={console.id}
          >
            <ConsoleCard
              name={console.name}
              id={console.id}
              image={console.image}
            />
          </button>
        );
      })}
    </div>
  );
}

export default Consoles;
