$(document).ready(function(){

    var menuBtn = document.querySelector('.btn--menu');
    var menu = document.querySelector('.navigation--mobile');
    menuBtn.addEventListener('click', function() {
      menu.classList.toggle('active');
    });


});

