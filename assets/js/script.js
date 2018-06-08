//
////// caching DOM items
//
const aboutMeNavButton = document.getElementById("aboutme");
const contactMeNavButton = document.getElementById("contactme");
const portfolioNavButton = document.getElementById("portfolio");
const navBarToggler = document.getElementById("navbar-toggler");
const navbar = document.getElementById("navbar");
const aboutMeSection = document.getElementById("aboutmesection");
const contactMeSection = document.getElementById("contactmesection");
const portfolioSection = document.getElementById("portfoliosection");

//
////// Functions
//

// Function for changing the navbar background to black on click of navbar-toggle button
const changeNavBg = () => navbar.classList.toggle("navbgblackonclick") ;

//Functions for taking to different sections of website on click of respective navbar button...... Some more could be added later.
const goToAbout = () => aboutMeSection.scrollIntoView({behavior: 'smooth', block:'start'});
const goToContact = () => contactMeSection.scrollIntoView({behavior: 'smooth', block:'start'});
const goToPortfolio = () => portfolioSection.scrollIntoView({behavior: 'smooth', block:'start'});

//
////// Event Listeners on Elements
// 
navBarToggler.addEventListener("click", changeNavBg );
aboutMeNavButton.addEventListener("click", goToAbout);
contactMeNavButton.addEventListener("click", goToContact);
portfolioNavButton.addEventListener("click", goToPortfolio);

