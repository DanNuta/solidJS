/* @refresh reload */
import { render } from "solid-js/web";
import { Router } from "@solidjs/router";
import { createContext, Accessor, Setter } from "solid-js";

import { GlobalContextProvider } from "./GlobalContext/store";

import { App } from "./App";
import { createStore, SetStoreFunction } from "solid-js/store";

const root = document.getElementById("root") as HTMLDivElement;

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
    "Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?"
  );
}

render(
  () => (
    <Router>
      <GlobalContextProvider>
        <App />
      </GlobalContextProvider>
    </Router>
  ),
  root
);
