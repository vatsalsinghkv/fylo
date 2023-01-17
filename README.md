# Frontend Mentor - Fylo dark theme landing page solution

This is a solution to the [Fylo dark theme landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/fylo-dark-theme-landing-page-5ca5f2d21e82137ec91a50fd). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Dark mode and light mode according to the device's theme

### Screenshot

![](https://user-images.githubusercontent.com/68834718/212843973-ef864a5a-f393-4901-b422-6f775a043cdb.png)

### Links

- Solution URL: [https://www.frontendmentor.io/solutions/fylo-dark-theme-landing-page-BEBZEdxN6d](https://www.frontendmentor.io/solutions/fylo-dark-theme-landing-page-BEBZEdxN6d)
- Live Site URL: [https://fylo-kv.netlify.app/](https://fylo-kv.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS Grid
- Mobile-first workflow
- [TypeScript](https://www.typescriptlang.org/) - TypeScript is JavaScript with syntax for types
- [Tailwindcss](https://tailwindcss.com/) - CSS framework
- [Font awesome icons](https://fontawesome.com/) - For icons
- [Parcel](https://parceljs.org/) - Bundler

### What I learned

I've learned lot of things in this challenge:

- How use tailwindcss
- How to configure tailwindcss
- How to make dark mode toggler
- How to toggle navbar while scrolling:

```js
const navbarHider = () => {
  let prevScrollPos = window.scrollY;

  window.onscroll = () => {
    let currentScrollPos = window.scrollY;

    if (currentScrollPos > prevScrollPos) {
      nav.style.top = '-80px';
    } else {
      nav.style.top = '0';
    }

    prevScrollPos = currentScrollPos;
  };
};
```

### Continued development

Technologies I'd be learning soon:

- Blockchain Development
- Backend Development with NodeJS
- Data Structures and algorithms
- Testing (JS)
- React Native
- Cyber Security

### Useful resources

- [MDN Docs](https://developer.mozilla.org/en-US/) - This is an amazing reference which helped me finally understand detailed concepts like data- attr, aria attr, input range etc.
- [W3Schools](https://www.w3schools.com/) - This is an amazing website for learning, I've learned about semantic tags from here only and learned many important HTML elements. I'd recommend it to anyone still learning this concept.
- [Tailwindcss Docs](https://tailwindcss.com/docs/installation) - Best reference to get started with Tailwindcss

## Author

- Website - [Vatsal Singh](https://vatsalsinghkv.vercel.app/)
- Github - [@vatsalsinghkv](https://github.com/vatsalsinghkv)
- Twitter - [@vatsalsinghkv](https://www.twitter.com/vatsalsinghkv)
- Instagram - [@vatsal.sing.hkv](https://www.instagram.com/vatsal.singh.kv)
- Facebook - [@vatsalsinghkv](https://www.facebook.com/vatsal.singh.kv)
- Frontend Mentor - [@vatsalsinghkv](https://www.frontendmentor.io/profile/vatsalsinghkv)

## Acknowledgments

- Favicon - [Share icons created by Creatype - Flaticon](https://www.flaticon.com/free-icons/share)
