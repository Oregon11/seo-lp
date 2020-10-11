'use strict';
{
  function nav() {
    const body = document.body;
    const hamburger = document.getElementById('js-hamburger');
    const close = document.getElementById('js-black-bg');

    hamburger.addEventListener('click', () => {
      body.classList.toggle('nav-open');
    });
    close.addEventListener('click', () => {
      body.classList.remove('nav-open');
    });
  }

  nav();

  $('.show').click(function() {
    const $answer = $(this).find('.answer');
    const $up = $(this).find('.fa-chevron-up');
    const $down = $(this).find('.fa-chevron-down');
    if ($answer.hasClass('kw')) {
      $answer.removeClass('kw');
      $answer.slideUp();
      $(this).find('span').text('+');
    } else {
      $answer.addClass('kw');
      $answer.slideDown();
      $(this).find('span').text('-');
    }

  });

}
