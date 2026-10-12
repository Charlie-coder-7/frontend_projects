import React from "react";

const History = (props) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex flex-row">
        <h2 className="m-2 p-2 bg-blue-400 rounded-2xl">History</h2>
        <button
          className="m-2 p-2 bg-red-900 rounded-2xl"
          onClick={() => {
            props.setHistory([]);
          }}
        >
          Clear History
        </button>
      </div>
      {props.history.length === 0 ? (
        <p className="m-2 p-5 bg-red-900 rounded-2xl">No history yet.</p>
      ) : (
        <div className="flex flex-col">
          {props.history.map((item, index) => (
            <div key={index}>
              <p className="m-2 p-2 bg-emerald-600 rounded-2xl">
                {item.operation} {item.previous} → {item.current}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default History;
