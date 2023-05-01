/*$(document).ready(function() {
    $('.menu li:has(ul)').click(function(e) {
        e.preventDefault();

        var $submenu = $(this).children('ul');

        if ($(this).hasClass('activado')) {
            $(this).removeClass('activado');
            $submenu.slideUp();
        } else {
            $('.menu li ul').slideUp();
            $('.menu li').removeClass('activado');
            $(this).addClass('activado');
            $submenu.slideDown();
        }
    });

    $('.menu li ul li:has(ul) > a').click(function(e) {
        e.preventDefault();
        $(this).siblings('ul').slideToggle();
        $(this).parent('li').toggleClass('activado');
    });

    $('.menu li ul li ul li a').click(function() {
        window.location.href = $(this).attr('href');
    });
});
*/

function openNav() {
    document.getElementById("mySidenav").style.width = "450px";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }


