import React from "react";

export default function Meme() {
  return (
    <main>
      <form action="" className="form">
      <label htmlFor="" className="form--label">Top text
        <input type="text" className="form--input"/>
      </label>

      <label htmlFor="" className="form--label">Bottom text
        <input type="text" className="form--input"/>
      </label>

      <button className="form--btn">Get a new meme image  🖼</button>
    </form>
    </main>
  )
}