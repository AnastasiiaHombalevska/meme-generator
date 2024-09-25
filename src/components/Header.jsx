import React from "react";

import imageSourse from "../images/troll-face.png";

export default function Header() {
  return (
    <header className="header--container">
      <div className="header--container--top">
          <img 
            src={imageSourse}
            alt="troll fase image"
            className="header--image"
          />

        <h2 className="header--title">Meme Generator</h2>
      </div>

      <h3 className="header--subtitle">React Course - Project 3</h3>
    </header>
  )
}