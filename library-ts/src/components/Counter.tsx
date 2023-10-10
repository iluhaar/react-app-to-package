import React, { useState } from "react";

export const Counter = () => {
  const [counter, setCounter] = useState(0);
  return (
    <>
      <p>Vite Ts app: {counter}</p>
      <button onClick={() => setCounter((prev) => prev + 1)}>Increase</button>
    </>
  );
};
