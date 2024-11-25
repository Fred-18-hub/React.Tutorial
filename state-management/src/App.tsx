import UseState from "./1_native/UseState";
import UseReducer from "./1_native/UseReducer";
import UseMemo from "./1_native/UseMemoAndUseCallback";
import UseEffect from "./1_native/UseEffect";
import UseRef from "./1_native/UseRef";
import CustomHookAndContext from "./1_native/CustomHookAndContext";
import ReactQuery from "./2_indirect/ReactQuery";
import Zustand from "./3_direct/Zustand/Zustand";

function App() {
  return (
    <>
      <section id="native">
        <UseState show={false} />
        <br />
        <UseReducer show={false} />
        <br />
        <UseMemo show={false} />
        <br />
        <UseEffect show={false} />
        <br />
        <UseRef show={false} />
        <br />
        <CustomHookAndContext show={false} />
      </section>

      <section id="indirect">
        <ReactQuery show={false} />
      </section>

      <section id="direct">
        <Zustand show={true} />
      </section>
    </>
  );
}

export default App;
