import Use from "./components/use/use.js";

import { useState } from "react";

import MainScreen from "./components/use/my-second-project/mainscreen.js";

import "./App.css";

function App() {
  const [useCss, setUseCss] = useState(false);

  const handleUseCss = (target) => {
    setUseCss(target);
  };

  return (
    <div className={!useCss ? "App" : "App2"}>
      {/* <Use/> */}
      <MainScreen handleUseCss={handleUseCss} />
    </div>
  );
}

export default App;
