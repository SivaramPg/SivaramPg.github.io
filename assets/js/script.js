// Function for changing the navbar background to black on click of navbar-toggle button
const navbar = document.getElementById("navbar");
const changeNavBg = (param = navbar) => {param.classList.toggle("navbgblackonclick")};