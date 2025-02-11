import React from "react";
import "../index.css";

const Main = () => {
  return (
    <div className="main">
      <div className="item-list">
        <div className="item-list__header">
          <h2>Popular artists</h2>
          <a className="item-list__link" href="/">
            Show all
          </a>
        </div>

        <div className="single-item">
            <img className="single-item__image" src="https://i.scdn.co/image/ab676161000051744dcd8a3bff84cd7703892cf4" alt="" />
            <p>Henrique & Juliano</p>
            <p>Artist</p>
            <i className="fa fa-trash"></i>
        </div>
      </div>
    </div>
  );
};

export default Main;
