/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!*****************************!*\
  !*** ./resources/js/app.js ***!
  \*****************************/
// Navigation toggle
window.addEventListener('load', function () {
  var main_navigation = document.querySelector('#primary-menu');
  document.querySelector('#primary-menu-toggle').addEventListener('click', function (e) {
    e.preventDefault();
    main_navigation.classList.toggle('hidden');
  });
});
/******/ })()
;