import {
  createContext,
  Accessor,
  Setter,
  useContext,
  JSX,
  ParentProps,
  Component,
} from "solid-js";
import { createStore } from "solid-js/store";

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

type ContextPropsChildren<P = {}> = Component<ParentProps<P>>;

export interface ContextProps {
  items: ItemProps[];
  setItems: Setter<ItemProps[]>;
}

const GlobalContext = createContext<ContextProps>();

export const GlobalContextProvider: ContextPropsChildren = (props) => {
  const [items, setItems] = createStore<ItemProps[] | []>([]);

  return (
    <GlobalContext.Provider value={{ items, setItems }}>
      {props.children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext)!;
