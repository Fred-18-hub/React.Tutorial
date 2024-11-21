import UseState from "./native/UseState";
import UseReducer from "./native/UseReducer";

function App() {
  return (
    <>
      <UseState show={true} />
      <br />
      <UseReducer show={true} />
    </>
  );
}

export default App;
