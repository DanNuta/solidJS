import { Component, createResource, For, Resource, Show } from "solid-js";
import { Item } from "./Item";

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

interface Props {
  data: ItemProps[] | undefined;
}

const fetchData = async (): Promise<ItemProps[]> => {
  const res = await fetch(
    "https://leafy-parfait-dd1dba.netlify.app/.netlify/functions/api/posts"
  );

  return res.json();
};

export const AllItems: Component = () => {
  const [docs] = createResource(fetchData);
  return (
    <Show when={docs()} fallback={<h1>Loading...</h1>}>
      <For each={docs()}>{(item) => <Item items={item} />}</For>
    </Show>
  );
};
