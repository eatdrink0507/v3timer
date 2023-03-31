// 타이머 로직
// 현재 시간 구하기
// 1초마다 현재시간 + 1
// 한번 더  눌리면 카운트한 분 배열에 추가
// 새로 00 부터 시작
import { useState } from "react";
import useInterval from "../useInterval";

const Timer = () => {
  const [isCounting, setIsCounting] = useState(false);
  const [now, setNow] = useState(0);
  const [arr, setArr] = useState<number[]>([]);

  window.addEventListener("keydown", (e) => {
    if (e.key === "d") {
      // 이미 작동중일때 이전 기록은 push, 새기록시작
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
  });

  // isRunning === true 면 카운트 시작
  useInterval(
    () => {
      setNow(now + 1);
    },
    isCounting ? 1000 : null
  );

  return (
    <>
      <div>1 {now}</div>
      <div>
        <ul>
          {arr.map((el, index) => {
            return <li key={index}>{el}</li>;
          })}
        </ul>
      </div>
    </>
  );
};

export default Timer;
