  // TEAM: Virtuality
  // MEMBERS: Justin Fink, Mike Hammond, Luka Horiuchi, Deric Kruse, Josh Murphy, Leon Vong
  // PROJECT: Game Design + Augmented Reality/Virtual Reality - Homepage for Virtuality
  // FILE: javascript.js
  // FINAL VERSION: 04/20/2023
  // DESCRIPTION: This file contain the page movement for the homepage navigation.

$(document).ready(function() {
    $('a[href^="#"]').on('click', function(event) {
      var target = $(this.getAttribute('href'));
      if (target.length) {
        event.preventDefault();
        $('html, body').stop().animate({
          scrollTop: target.offset().top
        }, 1000);
      }
    });
  });