"use strict";

/* Variables */
var infoIcon = document.querySelectorAll(".info__icon");
var infoContent = document.querySelectorAll(".info__content");
var infoPlus = document.querySelectorAll(".info__icon-2");
var header = document.querySelector("#menu");
var eqt = document.querySelector("#etq");
var gLink = document.querySelectorAll(".g-link");
var iconPlus = document.querySelectorAll(".menu__plus");
var cart = document.querySelector("#cart");
/* Funciones */

var showHeader = function showHeader(event) {
  if (document.body.scrollTop == 0 || document.documentElement.scrollTop == 0) {
    header.classList.remove("is-background-white");
    etq.classList.remove("is-color-black");

    for (var i = 0; i < gLink.length; i++) {
      gLink[i].classList.remove("is-color-black");
    }

    for (var i = 0; i < iconPlus.length; i++) {
      iconPlus[i].classList.remove("is-background-black");
    }

    cart.classList.remove("is-color-white");
    cart.classList.remove("is-background-black");
  }

  if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
    header.classList.add("is-background-white");
    etq.classList.add("is-color-black");

    for (var i = 0; i < gLink.length; i++) {
      gLink[i].classList.add("is-color-black");
    }

    for (var i = 0; i < iconPlus.length; i++) {
      iconPlus[i].classList.add("is-background-black");
    }

    cart.classList.add("is-color-white");
    cart.classList.add("is-background-black");
  }
};

var showMenu = function showMenu(event) {
  var content = event.currentTarget.parentElement.nextSibling;
  var plus = event.currentTarget.parentElement.children[0].children[1];
  content.classList.toggle("is-info-visible");
  plus.classList.toggle("is-plus-hide");
};
/* Main*/


var mainFunc = function mainFunc(event) {
  for (var i = 0; i < infoIcon.length; i++) {
    infoIcon[i].addEventListener("click", showMenu);
  }

  window.addEventListener("scroll", showHeader);
};
/* Listeners */


document.addEventListener("DOMContentLoaded", mainFunc);
ScrollReveal().reveal('.reveal', {
  reset: true,
  mobile: true,
  delay: 150,
  duration: 450,
  opacity: .2,
  viewFactor: 0.2,
  origin: 'bottom',
  distance: '20px',
  easing: 'ease-in-out'
});