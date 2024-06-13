import { render } from "solid-js/web";

import NavBar from "remote/NavBar";

import "./index.scss";

const App = () => (
  <>
    <NavBar />
    <div class="mt-10 text-3xl mx-auto max-w-6xl">
      <div>Name: host</div>
      <div>Framework: solid-js</div>
      <div>Language: JavaScript</div>
      <div>CSS: Tailwind</div>
    </div>
  </>
);
render(App, document.getElementById("app"));
