import React from "react";

import imageSourse from "../images/troll-face.png";

export default function Header() {
  return (
    <>
      <div className="header--container">
        <img src={imageSourse} alt="troll fase image" />
        <h1>Meme Generator</h1>
      </div>

      <h2>React Course - Project 3</h2>
    </>
  )
}