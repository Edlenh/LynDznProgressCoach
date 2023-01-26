const primaryHeader = document.querySelector('.primary-header')
const navToggle = document.querySelector(".mobile-nav-toggle");
const primaryNav = document.querySelector(".primary-navigation");

navToggle.addEventListener('click', ()=>{
    primaryNav.hasAttribute('data-visible')
     ? navToggle.setAttribute('aria-expanded', false)
     : navToggle.setAttribute('aria-expanded', true)
    primaryNav.toggleAttribute('data-visible');
    primaryHeader.toggleAttribute('data-overlay')
})

const slider = new A11YSlider(document.querySelector('.slider'), {
    adaptiveHeight: false,
    dots: true,
    centerMode:true,
    arrows:false,
    responsive: {
        480: {
          dots: false // dots enabled 1280px and up
        }
      }
  });

'use strict';
var pause = 2;
var speed = 2;
var texts = ['feel stuck and confused about life?' ,
 'feel dissatisfied with where you are in life?',
 'desire change in your life ?',
];
(function() {
  var text = texts[0];
  var cur = 0,
    dir = 1,
    cur_text = 0;

  var s = 0;

  setInterval(function loop() {
    cur += dir;
    if (cur < 0) {
      cur = 0;
      dir = -dir;
      cur_text = (++cur_text) % 3;
      text = texts[cur_text];
    }
    if (cur > text.length) {
      cur = text.length;
      if (s++ > pause) {
        s = 0
        dir = -dir;
      }
    }
    document.querySelector("#animation").setAttribute('class', text.toLowerCase())
    document.querySelector("#animation").innerHTML = text.substring(0, cur);
  }, 100 / speed)

})()