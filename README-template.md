# Frontend Mentor - Room homepage solution

This is a solution to the [Room homepage challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/room-homepage-BtdBY_ENq). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview
This was a challenge provided on the Frontend Mentor website, this project consists of building a home page for e-commerce that will be fully responsive, with a slide show that the user can switch pictures using their mouse or keyboard.

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Navigate the slider using either their mouse/trackpad or keyboard

### Screenshot

[./images/desktop-screenshot.jpg](./images/desktop-screenshot.jpg)

[./images/mobile-screenshot.jpg](./images/mobile-screenshot.jpg)

### Links

- Solution URL: [https://github.com/jose-digiweb](https://github.com/jose-digiweb)
- Live Site URL: [https://home-room.netlify.app/](https://home-room.netlify.app/)

## My process

Usually, I start by analyzing the design files and I define how I will structure the HTML and the best CSS properties I can use to make it happen. 

After having everything structured in my head, sometimes I write in a google doc (when is a big project), then I jump to my code editor (VS code).

I always start by creating a repository in Github using the terminal, after that, I run the "npm init" to create a "package.json", then I install all the dependencies I will need, and when is all set, I create the HTML file, and inside of the "app folder" I create the Sass folder and the JavaScript folder with their containing files inside.  

Having these all set, then I start writing the HTML structure for the all page, after I finish with the HTLM I link the CSS and JavaScript files and start styling the page right away. Usually, I use "Scss Sass extension" in all my projects, it makes things way easier to structure/organize and the workflow is much more fluid as well.

My workflow is always starting from the header, making it totally responsive, then I jump to the Hero Section, and so on. 

### Built with

- Semantic HTML5 markup,
- Sass (Scss) custom properties,
- Flexbox,
- Vanilla JavaScript
- Mobile-first workflow,
- [Bootstrap](https://getbootstrap.com/) - HTML, CSS & JS library

### What I learned

It was a very good way to pratice a lot of things that I already knew, but I dont use often, such as: 
- Implementing a slide show in especific area of a section (using bootstrap),
- Sass variables ans Mixins,    
- Changing images source depending on the window size (device size) using vanilla JavaScript, 
- Window event listener,
- DOM Manipulation.

```html
<div class="carousel-item active">
   <img
     src="./images/mobile-image-hero-1.jpg"
     class="d-block w-100"
     alt="chair"
    />
</div>
```
```js
window.addEventListener('resize', () => {
  if (window.innerWidth > 1220) {
    carouselImages[0].src = './images/desktop-image-hero-1.jpg';
    carouselImages[1].src = './images/desktop-image-hero-2.jpg';
    carouselImages[2].src = './images/desktop-image-hero-3.jpg';
  } else if (window.innerWidth < 1220) {
    carouselImages[0].src = './images/mobile-image-hero-1.jpg';
    carouselImages[1].src = './images/mobile-image-hero-2.jpg';
    carouselImages[2].src = './images/mobile-image-hero-3.jpg';
  }
```

### Useful resources

- [Stack Overflow](https://stackoverflow.com/) - Stack Overflow is always a great help on finding help.
- [W3School](https://www.w3schools.com/) - W3School is one of the most websites I use to find help as well.

## Author

- Website - [Github](https://github.com/jose-digiweb)
- Frontend Mentor - [@JoseDigiweb](https://www.frontendmentor.io/profile/JoseDigiweb)
- Instagram - [@JoseDigiWeb](https://www.instagram.com/jose.digiweb/)
