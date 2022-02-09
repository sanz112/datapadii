
$(window).scroll(function() {
if ($(window).scrollTop() > 10) {
$('section.navigation').addClass('floatingNav');
} else {
$('section.navigation').removeClass('floatingNav');
}
});

(function ($) {
$(function () {
//  open and close nav
$("#navbar-toggle").click(function () {
$("nav ul").slideToggle();
});

// Hamburger toggle
$("#navbar-toggle").on("click", function () {
this.classList.toggle("active");
});

// If a link has a dropdown, add sub menu toggle.
$("nav ul li a:not(:only-child)").click(function (e) {
$(this).siblings(".navbar-dropdown").slideToggle("slow");

// Close dropdown when select another dropdown
$(".navbar-dropdown").not($(this).siblings()).hide("slow");
e.stopPropagation();
});

// Click outside the dropdown will remove the dropdown class
$("html").click(function () {
$(".navbar-dropdown").hide();
});
});
})(jQuery);



window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
if (window.pageYOffset >= sticky) {
navbar.classList.add("sticky")
} else {
navbar.classList.remove("sticky");
}
}

