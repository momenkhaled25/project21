"use strict";

//addeventListener on element
const addEventListener = function (elems, event, callBack) {
  if (elems.length > 1) {
    for (let i = 0; i < elems.length; i++) {
      elems[i].addEventListener(event, callBack);
    }
  } else {
    elems.addEventListener(event, callBack);
  }
};

/**
 * NAVBAR toggle for mobile
 */
//
const toggler = document.querySelector("[data-nav-toggler]");
const navBar = document.querySelector("[data-navbar]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");

addEventListener(toggler, "click", function () {
  toggler.classList.toggle("active");
  navBar.classList.toggle("active");
});

addEventListener(navbarLinks, "click", function () {
  toggler.classList.remove("active");
  navBar.classList.remove("active");
});

/**
 * HEADER
 * botton to top
 */

const header = document.querySelector("[data-header]");
const btnToTop = document.querySelector("[data-to-top-btn]");
window.addEventListener("scroll", function () {
  header.classList.toggle("active", this.scrollY >= 50);
  btnToTop.classList.toggle("active", this.scrollY >= 50);
  //this.scrollY >= 50 &&
  //(header.classList.toggle("active"), btnToTop.classList.toggle("active"));
});
