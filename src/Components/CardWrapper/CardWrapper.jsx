import React from "react";
import "./cardWrapper.css";
import CollectionCard from "../CollectionCard/CollectionCard";

const CardWrapper = () => {
  return (
    <div>
      <section className="container">
        <h1>Explore Products</h1>
        <ul className="card-collection">
          <li>
            <CollectionCard />
          </li>
          <li>
            <CollectionCard />
          </li>
          <li>
            <CollectionCard />
          </li>
        </ul>
      </section>
    </div>
  );
};

export default CardWrapper;
