import logo from "./logo.svg";
import "./App.css";
import StateTutorial from "./UseState/StateTutorial";
import ReducerTutorial from "./UseReducer/ReducerTutorial";
import EffectTutorial from "./UseEffect/EffectTutorial";
import RefTutorial from "./UseRef/RefTutorial";
import LayoutEffectTutorial from "./UseLayoutEffect/UseLayoutEffectTutorial";
import UseImperativeHandle from "./UseImperativeHandle/UseImperativeHandle";
import ContextTutorial from "./UseContext/ContextTutorial";
import MemoTutorial from "./UseMemo/UseMemoTutorial";

function App() {
  return (
    <div className="App">
      <StateTutorial />
      <ReducerTutorial />
      <EffectTutorial />
      <RefTutorial />
      <LayoutEffectTutorial />
      <UseImperativeHandle />
      <ContextTutorial />
      <MemoTutorial />
    </div>
  );
}

export default App;
