import React, { useState } from "react";

interface Props {
  text: string;
}

const Button = ({ text }: Props) => {
  const [counter, setCounter] = useState(0);
  return (
    <>
      <p>{counter}</p>
      <button onClick={() => setCounter((prev) => prev + 1)}>Increase</button>
      <button>{text}</button>
    </>
  );
};

export default Button;
