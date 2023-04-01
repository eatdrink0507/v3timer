import "./App.css";
import V3Count from "./v3count";
import Timer from "./timecount";
import styled from "styled-components";

const Div = styled.div`
  display: flex;
  flex-direction: row;
  min-height: 100%;
`;

function App() {
  return (
    <div className="App">
      <Div>
        <V3Count />
        <Timer />
      </Div>
    </div>
  );
}

export default App;
