import { useParams } from "@solidjs/router";
import { createResource, Show } from "solid-js";
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

const fetchDocs = async (id: string): Promise<ItemProps> => {
  const res = await fetch(
    `https://leafy-parfait-dd1dba.netlify.app/.netlify/functions/api/posts/${id}`
  );

  return res.json();
};

export const DocsDetails = () => {
  const params = useParams();
  const [doc] = createResource(params.id, fetchDocs);

  return (
    <Show when={doc()} fallback={<h1>Loading...</h1>}>
      <h1>{doc()?._id}</h1>
      <h1>{doc()?.title}</h1>
      <img src={doc()?.img} alt="" />
    </Show>
  );
};
