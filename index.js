'use strict';

$(document).ready(function () {
  // Optimize Scrolling Effect
  const header = $('header');
  $(window).on('scroll', function () {
      header.toggleClass('nav-show', $(window).scrollTop() > 0);
  });

  // Toggle Navigation
  const toggleNav = () => {
      const navbar = $('.nav-bar');
      const navLinks = $('.nav-bar li');
      const hamburger = $('.hamburger');

      navLinks.each(function (index) {
          $(this).css('animation', navbar.hasClass('nav-active')
              ? ''
              : `navLinkFade 0.5s ease forwards ${index / 7 + 1}s`);
      });

      navbar.toggleClass('nav-active');
      hamburger.toggleClass('toggle');
  };

  // Handle Hamburger Click
  const hamburger = $('.hamburger');
  hamburger.on('click', toggleNav);

  // Add Event Listeners for smooth animations
  hamburger.on('transitionend', function () {
      if (hamburger.hasClass('toggle')) {
          header.css('opacity', '0');
      } else {
          header.css('opacity', '1');
      }
  });
});

// JavaScript to detect when the document is fully loaded
document.addEventListener('DOMContentLoaded', function () {
  // Add CSS Transition for Smooth Animations
  const style = document.createElement('style');
  style.innerHTML = `
  .nav-bar li {
      transition: transform 0.5s;
  }
  @keyframes navLinkFade {
      from {
          transform: translateY(-50px);
          opacity: 0;
      }
      to {
          transform: translateY(0);
          opacity: 1;
      }
  }
  `;
  document.head.appendChild(style);
});
