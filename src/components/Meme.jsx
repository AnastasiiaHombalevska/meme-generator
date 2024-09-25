import React, { useState } from "react";
import memesData from "../memesData.js";

export default function Meme() {
  const [memeImage, setMemeImage] = useState('');

  function getRandomIndex(max) {
    return Math.floor(Math.random() * max) + 1;
  }

  function getMemeImage(ev) {
    ev.preventDefault();

    const memesArray = memesData?.data?.memes;

    if (memesArray && memesArray.length > 0) {
      const randomIndex = getRandomIndex(memesArray.length);
      setMemeImage(memesArray[randomIndex].url);
    }
  }

  return (
    <main>
      <form action="" className="form">
      <label htmlFor="" className="form--label">Top text
        <input type="text" className="form--input"/>
      </label>

      <label htmlFor="" className="form--label">Bottom text
        <input type="text" className="form--input"/>
      </label>

      <button onClick={getMemeImage} className="form--btn">Get a new meme image  🖼</button>
    </form>

      {memeImage && (<img className="image" src={memeImage} alt="random generated image"/>)}
    </main>
  )
}