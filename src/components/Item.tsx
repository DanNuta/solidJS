import { Component, For, Resource, Show } from "solid-js";
import { A } from "@solidjs/router";

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

interface IProps {
  items: ItemProps | undefined;
}

export const Item: Component<IProps> = (props) => {
  return (
    <A href={`/docs/${props?.items?._id}`}>
      <div>
        <div>
          <h1>{props?.items?.author.name}</h1>
          <p>{props?.items?.author.prenume}</p>
          <p>{props?.items?.date}</p>
          <h3>{props?.items?.title}</h3>
          <img src={props?.items?.img} alt="" />
        </div>
      </div>
    </A>
  );
};
