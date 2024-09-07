import React from "react";
import { people } from "./data.js";
import { getImageUrl } from "./utils.js";
import "./my.css";

export default function List() {
  if (people && people.length > 0) {
    const listCardView = people.map((person) => (
      <li key={person.id}>
        {/* get image */}
        <img src={getImageUrl(person)} alt={person.id} />
        <p>
          {/* bold person name */}
          <b>{person.name}</b>
          {" " + person.profession + " "}
          known for {person.accomplishment}
        </p>
      </li>
    ));
    return <ul className="ListCard">{listCardView}</ul>;
  } else {
    return "No Data Found";
  }
}
