import { createRoot } from "react-dom/client";
import React, { useEffect, useRef } from "react";
import ReactDOM from "react-dom";

import NavBarWrapper from "remote/NavBarWrapper";

import "./index.scss";

const App = () => {
  const navBarRef = useRef(null);

  useEffect(() => {
    NavBarWrapper(navBarRef.current);
  }, []);

  return (
    <>
      <div ref={navBarRef}></div>
      <div className="mt-10 text-3xl mx-auto max-w-6xl">
        <div>Name: react-host</div>
        <div>Framework: react</div>
        <div>Language: JavaScript</div>
        <div>CSS: Tailwind</div>
      </div>
    </>
  );
};

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<App />);
