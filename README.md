# Frontend Mentor - Results summary component solution

This is a solution to the [Results summary component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/results-summary-component-CE_K6s0maV). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)


## Overview

### The challenge

Users should be able to:

- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![](./assets/images/Screenshot%202023-04-24%20220817.png)

### Links

- Solution URL: [https://www.frontendmentor.io/solutions/resultssummarycomponent-zYgmV4Ht8b](https://www.frontendmentor.io/solutions/resultssummarycomponent-zYgmV4Ht8b)
- Live Site URL: [https://tahobbit11.github.io/Results-summary/](https://tahobbit11.github.io/Results-summary/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- JS

### What I learned

I learned how to get info out of a JSON file and display the info in said file.

To see how you can add code snippets, see below:

```html
<div class="results-row">
          <div class="results-row-holder">
            <img src="./assets/images/icon-reaction.svg" alt="reaction-pic">
            <h5 id="reaction"></h5>
          </div>
          <span class="score"><span id="reaction-score"></span> / 100</span>
        </div>
```
```css
     .results {
      background-image: linear-gradient(to bottom, hsl(252, 100%, 67%), hsl(241, 81%, 54%));
      display: flex;
      flex-direction: column;
      align-items: center;
      border-bottom-left-radius: 30px;
      border-bottom-right-radius: 30px;
      padding-bottom: 2em 3em;
     }
```
```js
fetch("./data.json")
.then(response => response.json())
.then(data => {
    //console.log(data)
    //console.log(data[0].category)
    //console.log(data[0].score)
    //console.log(data[0]['category'])
    document.querySelector("#reaction").innerHTML = data[0]['category']
    document.querySelector("#reaction-score").innerText = data[0]['score']
    document.querySelector("#memory").innerHTML = data[1]['category']
    document.querySelector("#memory-score").innerText = data[1]['score']
    document.querySelector("#verbal").innerHTML = data[2]['category']
    document.querySelector("#verbal-score").innerText = data[2]['score']
    document.querySelector("#visual").innerHTML = data[3]['category']
    document.querySelector("#visual-score").innerText = data[3]['score']
});
```


### Continued development

I plan on coming back in the future and fixing how the site is displayed on higher resolution making it more even. I also plan to try and get the pictures from the json files.

## Author

- Frontend Mentor - [@tahobbit11](https://www.frontendmentor.io/profile/tahobbit11)

