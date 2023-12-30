import React from "react";
import Root from "./routes/Root";
import "./Main.scss";
import { OrbitSpace } from 'orbit-space'

const App = () => {
  return (
    <>
      <OrbitSpace>
        <Root />
      </OrbitSpace>
    </>
  );
};

export default App;