//place scripts at the bottom of the <body> element. This can improve page load, because script compilation can slow down the display.

//this is to test if js file is linked properly... it will show on chrome if you select console by   View / Developer / Developer Tools … it gives white tabs like Console (and Elements)
console.log("Testing my js link");


// script for hero animated carousel via https://jsfiddle.net/Grobbert/gkder2Lw/2/
// carousel will only work when page is live

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    dots:false,
    nav:true,
    mouseDrag:false,
    autoplay:true,
    animateOut: 'slideOutUp',
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
});


// this is common practice to use LOAD event to show proper visitor browser setting
window.addEventListener('load', function() {
      alert('Hi!');
    });

