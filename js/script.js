//place scripts at the bottom of the <body> element. This can improve page load, because script compilation can slow down the display.

//this is to test if js file is linked properly... it will show on chrome if you select console by   View / Developer / Developer Tools … it gives white tabs like Console (and Elements)
console.log("Testing my js link");

// this is common practive to use LOAD event to sllow proprt visiotr browser setting
window.addEventListener("load", (function) {
  console.log("page is fully loaded"); const h2 = document.querySelector (“h2”); console.log (h2)
});

