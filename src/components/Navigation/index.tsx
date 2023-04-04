import React from "react";
import { Link } from "react-router-dom";
import { INavigate } from "../../interfaces/navigate";

interface IProp {
  items: INavigate[];
}

export default function Navigation({ items }: IProp) {
  return (
    <ul>
      {items.map(({ path, title }) => (
        <li key={title}>
            <Link to={`${path}`}>{title}</Link></li>
      ))}
    </ul>
  );
}
