import { useEffect, useState } from "react";
import useInterval from "../useInterval";
import styled from "styled-components";

const Div = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  padding-top: 10rem;
  .guide {
    text-align: center;
  }
  .current {
    font-size: 3em;
    text-align: left;
    padding-left: 15%;
  }
  border-left: dotted 5px black;
`;
const Li = styled.li`
  list-style: none;
  font-size: 1.5em;
  text-align: left;
  padding-right: 20%;
`;

const Timer = () => {
  const [isCounting, setIsCounting] = useState(false);
  const [now, setNow] = useState(0);
  const [arr, setArr] = useState<number[]>([]);

  useEffect(() => {
    const keyCtrl = (e: KeyboardEvent) => {
      if (e.key === "r") {
        if (isCounting) {
          setArr([...arr, now]);
          setNow(0);
        } else {
          setIsCounting(true);
        }
      } else if (e.key === "f") {
        if (isCounting) {
          setIsCounting(false);
          setArr([...arr, now]);
          setNow(0);
        }
      }
    };
    window.addEventListener("keydown", keyCtrl);
    return () => {
      window.removeEventListener("keydown", keyCtrl);
    };
  });

  useInterval(
    () => {
      setNow(now + 1);
    },
    isCounting ? 100 : null
  );

  const timeconvert = (e: number) => {
    if (e / 600 > 10) return Math.floor(e / 600);
    else if (e / 600 < 10) return `0${Math.floor(e / 600)}`;
  };

  return (
    <Div>
      <div className="guide">
        Start R <br /> Stop F
      </div>
      <div className="current">
        {timeconvert(now)}:
        {Math.floor(now % 600) > 100
          ? Math.floor((now % 600) / 10)
          : `0${Math.floor((now % 600) / 10)}`}
        :{now % 10}
      </div>
      <div>
        <ul>
          {arr.map((el, index) => {
            return (
              <Li key={index}>
                {timeconvert(el)}:
                {Math.floor(el % 600) >= 100
                  ? Math.floor((el % 600) / 10)
                  : `0${Math.floor((el % 600) / 10)}`}
                :{el % 10}
              </Li>
            );
          })}
        </ul>
      </div>
    </Div>
  );
};

export default Timer;
