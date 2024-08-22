import React from "react";
import "./collectionCard.css";

const CollectionCard = () => {
  return (
    <>
      <div>
        <div className="card-container">
          <div className="card-image">
            <img src="https://picsum.photos/200/300" />
          </div>
          <div className="card-content">
            <a href="#">Explore All</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default CollectionCard;
