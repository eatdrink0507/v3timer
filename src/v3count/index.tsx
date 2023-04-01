import { useState, useEffect } from "react";
import useInterval from "../useInterval";
import styled from "styled-components";

const Div = styled.div`
  display: grid;
  text-align: center;
  grid-template-rows: 0.5fr 1fr 0.5fr 50%;
  width: 70%;
  padding-top: 13rem;
  background-color: ${(props) => props.color};
  .leftcount {
    font-size: 3em;
  }
  .now {
    font-size: 8em;
    text-align: left;
    padding-left: 30%;
  }
`;

function V3Count() {
  const [isRunning, setIsRunning] = useState(false);
  const [leftv, setLeftv] = useState(2);
  const [bgcolor, setBgcolor] = useState("white");

  useEffect(() => {
    const onKeySet = (e: KeyboardEvent) => {
      if (e.key === "Enter") {
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
    };

    window.addEventListener("keydown", onKeySet);

    return () => {
      window.removeEventListener("keydown", onKeySet);
    };
  });

  const [count, setCount] = useState(300);
  useInterval(
    () => {
      setCount(count - 1);
    },
    isRunning ? 100 : null
  );
  if (count === 0) {
    setIsRunning(false);
    setCount(300);
    setLeftv(2);
  }

  useEffect(() => {
    if (leftv === 2) {
      setBgcolor("white");
    } else if (leftv === 1) {
      setBgcolor("lightblue");
    } else {
      setBgcolor("#E96479");
    }
  }, [leftv]);

  return (
    <Div color={bgcolor}>
      <div>
        Start Enter <br /> Reset ESC
      </div>
      <div className="now">
        {Math.floor(count / 10) < 10
          ? `0${Math.floor(count / 10)}`
          : Math.floor(count / 10)}
        :{count % 10}
      </div>
      <div className="leftcount">{leftv}</div>
      <div></div>
    </Div>
  );
}

export default V3Count;
