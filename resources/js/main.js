var mixer=mixitup('.grid-portfolio-container');$(function(){$.scrollify({section:".scrollify",setHeights:!1,updateHash:!1,scrollSpeed:800,})});function openMenu(){document.getElementById('navbar').style.height="100%";document.getElementById('menuIcon').style.visibility="hidden"}
function closeMenu(){document.getElementById('navbar').style.height="0%";document.getElementById('menuIcon').style.visibility="visible"}
$(function(){$('.menu-items a, .scroll-down a').on('click',function(){$('html, body').animate({scrollTop:$($.attr(this,'href')).offset().top},1000);return!1})})
