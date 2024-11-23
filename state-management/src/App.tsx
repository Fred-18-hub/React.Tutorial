import UseState from "./1_native/UseState";
import UseReducer from "./1_native/UseReducer";
import UseMemo from "./1_native/UseMemoAndUseCallback";
import UseEffect from "./1_native/UseEffect";
import UseRef from "./1_native/UseRef";
import CustomHookAndContext from "./1_native/CustomHookAndContext";
import ReactQueryAndReactLocation from "./2_indirect/ReactQueryAndReactLocation";

function App() {
  return (
    <>
      <section id="native" className="hidden">
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
        <CustomHookAndContext show={true} />
      </section>

      <section id="indirect">
        <ReactQueryAndReactLocation show={true} />
      </section>
    </>
  );
}

export default App;
