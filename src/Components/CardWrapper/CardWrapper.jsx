import React from "react";
import "./cardWrapper.css";
import CollectionCard from "../CollectionCard/CollectionCard";
import HeaderContent from "../HeaderContent/HeaderContent";

const CardWrapper = () => {
  return (
    <div>
      <section className="container">
        <HeaderContent />
        <ul className="card-collection">
          <CollectionCard />
          <CollectionCard />
          <CollectionCard />
        </ul>
      </section>
    </div>
  );
};

export default CardWrapper;
