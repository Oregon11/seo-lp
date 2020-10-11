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

}
