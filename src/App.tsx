import {
  Component,
  createResource,
  For,
  createEffect,
  createSignal,
  JSX,
} from "solid-js";
import { createStore } from "solid-js/store";
import { useGlobalContext, ContextProps } from "./GlobalContext/store";

import { Route, Routes, A } from "@solidjs/router";

import { About, AllItems, DocsDetails } from "./components";

interface ItemProps {
  author: {
    name: string;
    prenume: string;
  };
  _id: string;
  title: string;
  description: string;
  date: string;
  img: string;
  __v: number;
}

export const App: Component = () => {
  const { items, setItems } = useGlobalContext();

  console.log(items, "items");

  const [count, setCount] = createSignal<number>(0);
  const [increment, setIncrement] = createSignal(0);

  setInterval(() => {
    setCount((prev) => prev + 1);
  }, 1000);

  createEffect(() => {
    // here can listen data
  });

  const [products, setProducts] = createStore([
    {
      name: "Dan",
      prenume: "Nuta",
      id: 0,
    },
    {
      name: "Ion",
      prenume: "Anton",
      id: 1,
    },
  ]);

  const [person, setPerson] = createStore({
    name: {
      firstName: "Ilie",
      lastName: "Frunza",
    },
  });

  const changePersonName = () => {
    setPerson("name", "firstName", "Andrei");

    setProducts(0, "name", "Ana");
  };

  const updateName = (id: number) => {
    setProducts((p) => p.id === id, "name", "Ionel4");
  };

  const inputChange: JSX.EventHandler<HTMLInputElement, InputEvent> = (e) => {
    console.log(e.currentTarget.value);
  };

  return (
    <div>
      <h1>{count()}</h1>

      <button onClick={() => setIncrement((prev) => prev + 1)}>
        Increment
      </button>
      <h1>{increment()}</h1>
      <button onClick={() => setIncrement((prev) => prev - 1)}>
        Decrement
      </button>

      <form>
        <input type="text" onInput={inputChange} />
      </form>

      <nav>
        <ul>
          <li>
            <A href="/about">Despre</A>
          </li>
          <li>
            <A href="/docs">Blogs</A>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/about" component={About} />
        <Route path="docs/:id" component={DocsDetails} />
        <Route path="/docs" component={AllItems} />
      </Routes>

      <For each={products}>{(item) => <div>{item.name}</div>}</For>

      <h1>{person.name.firstName}</h1>
      <button onClick={changePersonName}>Change Name</button>
      <button onClick={() => updateName(1)}>Update by id</button>
    </div>
  );
};
