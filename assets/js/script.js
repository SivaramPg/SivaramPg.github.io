//
////// caching DOM items
//
const aboutMeNavButton = document.getElementById("aboutme");
const contactMeNavButton = document.getElementById("contactme");
const portfolioNavButton = document.getElementById("portfolio");
const navBarToggler = document.getElementById("navbar-toggler");
const navbar = document.getElementById("navbar");

//
////// Functions
//

// Function for changing the navbar background to black on click of navbar-toggle button
const changeNavBg = () => navbar.classList.toggle("navbgblackonclick") ;

//Functions for taking to different sections of website on click of respective navbar button...... Some more could be added later.
// const goToAbout = () => html.body.animate({scrollTop: .section1});
// const goToContact = () => ;
// const goToPortfolio = () => ;

//
////// Event Listeners on Elements
// 
navBarToggler.addEventListener("click", changeNavBg );
// aboutMeNavButton.addEventListener("click", goToAbout);
// contactMeNavButton.addEventListener("click", goToContact);
// portfolioNavButton.addEventListener("click", goToPortfolio);

