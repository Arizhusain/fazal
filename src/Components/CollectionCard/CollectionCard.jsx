import React from "react";
import "./collectionCard.css";

const CollectionCard = () => {
  return (
    <>
      <li className="card-list-item">
        <img src="https://cdn-media.powerlook.in/catalog/category/festive.jpg?aio=w-256" alt="" class="collection-card" />
        <a href="#" class="btn">
          <span>Explore All</span>
          <ion-icon name="arrow-forward-outline" aria-hidden="true"></ion-icon>
        </a>
      </li>
    </>
  );
};

export default CollectionCard;
