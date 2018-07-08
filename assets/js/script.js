//
////// caching DOM items
//
const goTop = document.getElementById("top");
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

const hideOnScroll = () => {
  if (document.body.scrollTop > 350 || document.documentElement.scrollTop > 350){
      if (screen.availWidth <=768) {
        goTop.style.display = 'none';
      } else {
        goTop.style.display = 'block';
      }
  } else {
    goTop.style.display = 'none';
  }
}

//
////// Event Listeners on Elements
//
window.addEventListener("scroll", hideOnScroll);
window.addEventListener("load", hideOnScroll);
window.addEventListener("resize", hideOnScroll);
goTop.addEventListener("click", goToTop);
navBarToggler.addEventListener("click", changeNavBg);
aboutMeNavButton.addEventListener("click", goToAbout);
contactMeNavButton.addEventListener("click", goToContact);
portfolioNavButton.addEventListener("click", goToPortfolio);
scrollDown.addEventListener("mouseover", goToAbout);