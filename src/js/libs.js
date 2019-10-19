$(document).ready(function(){

    var menuBtn = document.querySelector('.btn--menu');
    var menu = document.querySelector('.menu ul');
    menuBtn.addEventListener('click', function() {
      menu.classList.toggle('active');
    });


});

