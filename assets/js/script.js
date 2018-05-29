// Function for changing the navbar background to black on click of navbar-toggle button
const navBarToggler = document.getElementById("navbar-toggler");
const navbar = document.getElementById("navbar");
const changeNavBg = () => navbar.classList.toggle("navbgblackonclick") ;

navBarToggler.addEventListener("click", changeNavBg );


