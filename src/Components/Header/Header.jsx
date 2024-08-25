import React from "react";
import "./header.css";

const Header = () => {
  return (
    <header className="header">
      <section className="header-container">
        <div className="header-wrapper">
          <div className="company-logo">
            <h1 className="logo-name">Fazal-Kart</h1>
          </div>
          <nav className="nav">
            <ul className="nav-list">
              <li className="nav-list-item">
                <a href="#">New Arrivals</a>
              </li>
              <span>|</span>
              <li className="nav-list-item">
                <a href="#">Shirts</a>
              </li>
              <span>|</span>
              <li className="nav-list-item">
                <a href="#">T-shirts</a>
              </li>
              <span>|</span>
              <li className="nav-list-item">
                <a href="#">Track order</a>
              </li>
            </ul>
          </nav>
          <div className="action-container">
            <div class="header-search">
              <input
                type="search"
                name="search"
                placeholder="Search Product..."
                class="input-field"
              />

              <button class="search-btn" aria-label="Search">
                <ion-icon name="search-outline"></ion-icon>
              </button>
            </div>
            <div className="action-btn-container">
              <button>
                <ion-icon name="person-outline"></ion-icon>
                <span>Sign-in</span>
              </button>
              <button>
                <ion-icon name="cart-outline"></ion-icon>
                <span>Cart</span>
              </button>
              <button>
                <ion-icon name="heart-outline"></ion-icon>
                <span>Wishlist</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </header>
  );
};

export default Header;
