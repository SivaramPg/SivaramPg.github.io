//
////// caching DOM items
//
const goTop = document.getElementById("top");
// const goBottom = document.getElementById("bottom");
const aboutMeNavButton = document.getElementById("aboutme");
const contactMeNavButton = document.getElementById("contactme");
const portfolioNavButton = document.getElementById("portfolio");
const navBarToggler = document.getElementById("navbar-toggler");
const navbar = document.getElementById("navbar");
const scrollDown = document.getElementById("scrolldown");
const aboutMeSection = document.getElementById("aboutmesection");
const contactMeSection = document.getElementById("contactmesection");
const portfolioSection = document.getElementById("portfoliosection");
const beginning = document.getElementById("beginning");
// const ending = document.getElementById("ending");
//
////// Functions
//

// Function for changing the navbar background to black on click of navbar-toggle button
const changeNavBg = () => navbar.classList.toggle("navbgblackonclick");

//Functions for taking to different sections of website on click of respective navbar button...... Some more could be added later.
const goToAbout = () =>
  aboutMeSection.scrollIntoView({ behavior: "smooth", block: "start" });
const goToContact = () =>
  contactMeSection.scrollIntoView({ behavior: "smooth", block: "start" });
const goToPortfolio = () =>
  portfolioSection.scrollIntoView({ behavior: "smooth", block: "start" });
const goToTop = () =>
  beginning.scrollIntoView({ behavior: "smooth", block: "start" });
// const goToBottom = () =>
//   ending.scrollIntoView({ behavior: "smooth", block: "start" });
//
////// Event Listeners on Elements
//
goTop.addEventListener("click", goToTop);
// goBottom.addEventListener("click", goToBottom);
navBarToggler.addEventListener("click", changeNavBg);
aboutMeNavButton.addEventListener("click", goToAbout);
contactMeNavButton.addEventListener("click", goToContact);
portfolioNavButton.addEventListener("click", goToPortfolio);
scrollDown.addEventListener("mouseover", goToAbout);