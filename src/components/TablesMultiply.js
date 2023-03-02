import React, { useState } from "react";
import "../App.css";
function TablesMultiply() {
  const [startNumber, setStartNumber] = useState("");
  const [endNumber, setEndNumber] = useState("");
  const [tables, setTables] = useState([]);
  const resetTabla = () => {
    setTables([]);
    startNumber(0);
  };
  function generateTables() {
    const star = parseInt(startNumber);
    const end = parseInt(endNumber);
    const newTables = [];

    for (let i = star; i <= end; i++) {
      let table = [];
      for (let j = 1; j <= 10; j++) {
        table.push(`${i} x ${j} = ${i * j}`);
      }
      newTables.push(table);
    }

    setTables(newTables);
  }

  return (
    <div className="row">
      <h2 className=" text-center p-4 text-bg-success sticky-top">
        Times Table Generator
      </h2>
      <form className="form text-center ">
        <label htmlFor="startNumber" className="text-primary fs-5">
          Start Number:
        </label>
        <input
          className="mb-2"
          type="number"
          id="startNumber"
          placeholder="# star"
          value={startNumber}
          onChange={(e) => setStartNumber(e.target.value)}
        />
        <label htmlFor="endNumber" className="text-primary fs-5">
          End Number:
        </label>
        <input
          className="mb-2"
          type="number"
          id="endNumber"
          placeholder="# end"
          value={endNumber}
          onChange={(e) => setEndNumber(e.target.value)}
        />
        <button
          data-testid="mytestid"
          className="btn btn-secondary mb-1 mt-1"
          type="button"
          onClick={generateTables}
        >
          generate tables
        </button>
        <button
          data-testid="mytestid2"
          onClick={resetTabla}
          className="btn btn-danger mb-1"
        >
          reset table
        </button>
      </form>
      <div className=" bg-secondary mt-2 ">
        {tables.map((table, index) => (
          <div key={index}>
            <h3 className=" text-center p-5">
              Table of <br />
              multiply from {index + parseInt(startNumber)}
            </h3>
            <ul className="p-5 text-center text-light">
              {table.map((operation, index) => (
                <li key={index}>{operation}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TablesMultiply;
