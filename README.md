# Meme Generator with React

This is a solution to the Meme Generator with React.

Solution: [DEMO LINK](https://anastasiiahombalevska.github.io/meme-generator/)

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)

## Overview

### The challenge

Users should be able to:

- get random meme image
- add top and bottom text to it

### Screenshot

![screenshot](/public/meme-generator.png)

## My process

### Built with

- react components
- SCSS custom properties
- CSS Flex Layout
- fetching data with useEffect hook

### What I learned

With this project the newest things I learnt are:

- How to fetch the data to react component using the useEffect hook

```react component
    useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setAllMemes(data.data.memes))
    }, []) 
```
