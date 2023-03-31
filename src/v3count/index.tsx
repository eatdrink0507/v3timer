import React, { useState } from "react";
import useInterval from "../useInterval";
import styled from "styled-components";

const Div = styled.div`
  display: grid;
  color: blue;
  align-content: left;
  text-aling: center;
  font-size: 10em;
  border: black solid 1px;
  width: 490px;
  height: 100%;
`;

const Vdiv = styled.div`
  display: grid;
`;

function V3Count() {
  const [isRunning, setIsRunning] = useState(false);
  const [leftv, setLeftv] = useState(2);
  window.addEventListener("keydown", (e) => {
    if (e.key === "s") {
      if (!isRunning) {
        setIsRunning(true);
        setLeftv(1);
      } else {
        setLeftv(0);
      }
    } else if (e.key === "Escape") {
      setIsRunning(false);
      setCount(300);
      setLeftv(2);
    }
  });

  const [count, setCount] = useState(300);
  useInterval(
    () => {
      setCount(count - 1);
    },
    isRunning ? 100 : null
  );
  //
  if (count === 0) {
    setIsRunning(false);
    setCount(300);
    setLeftv(2);
  }

  return (
    <Div>
      <Vdiv>{count}</Vdiv>
      <div>{leftv}</div>
    </Div>
  );
}

export default V3Count;
