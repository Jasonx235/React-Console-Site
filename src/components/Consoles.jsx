import React, { useState, useEffect } from "react";
import Console from "./Console";
import ConsoleCard from "./ConsoleCard";
import Loading from "./Loading";

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
      .catch((err) =>
        console.log("Database error: Error finding console list")
      );
  };

  if (consoleData.length === 0) {
    return (
      <div className='d-flex justify-content-center align-items-center'>
        <Loading type='bars' />
      </div>
    );
  }

  if (!!consoleID) {
    return (
      <div>
        <Console id={consoleID} />
        <button
          className='glass-background go-back '
          onClick={() => {
            setConsoleID(null);
          }}
        >
          Go back
        </button>
      </div>
    );
  }

  return (
    <div className='row d-flex justify-content-center align-content-center'>
      {consoleData.map((console) => {
        return (
          <div
            className='col-6-lg col-sm d-flex justify-content-center align-content-center'
            key={console.id}
          >
            <button
              onClick={() => {
                setConsoleID(console.id);
              }}
            >
              <ConsoleCard
                name={console.name}
                id={console.id}
                image={console.image}
              />
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default Consoles;
