import { ForwardRef, UseImperative, UseRef } from "./Examples/Hooks";
import "./index.css";
function App() {
  console.log("app running");
  return (
    <div className="App">
      {/* <ForwardRef /> */}
      <UseImperative />
      {/* <UseRef /> */}
    </div>
  );
}

export default App;
