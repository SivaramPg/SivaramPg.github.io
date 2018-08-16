//
////// caching DOM items
//

const homeNavButton = document.getElementById("home");
const aboutMeNavButton = document.getElementById("aboutme");
const skillsNavButton = document.getElementById("skills");
const portfolioNavButton = document.getElementById("portfolio");

const navBarToggler = document.getElementById("navbar-toggler");
const navbar = document.getElementById("navbar");

const downPointer = document.getElementById("scrollout");
const goTop = document.getElementById("scrollhome");

const header = document.getElementById("header");
const aboutMeSection = document.getElementById("about");
const skillsSection = document.getElementById("skillssection");
const portfolioSection = document.getElementById("portfoliosection");

//
////// Functions
//

// Function for changing the navbar background to black on click of navbar-toggle button
const changeNavBg = () => navbar.classList.toggle("navbgblackonclick");

//Functions for taking to different sections of website on click of respective navbar button...... Some more could be added later.
const goToAbout = () => {
  aboutMeSection.scrollIntoView({ behavior: "smooth", block: "start" });
};

const goToSkills = () => {
  skillsSection.scrollIntoView({ behavior: "smooth", block: "start" });
};

const goToPortfolio = () => {
  portfolioSection.scrollIntoView({ behavior: "smooth", block: "start" });
};

const goToTop = () => {
  header.scrollIntoView({ behavior: "smooth", block: "start" });
};

// Function to change display property of the goToTop button
const hideOnScroll = () => {
  if (
    document.body.scrollTop > 350 ||
    document.documentElement.scrollTop > 350
  ) {
    if (screen.availWidth <= 768) {
      goTop.style.display = "none";
    } else {
      goTop.style.display = "block";
    }
  } else {
    goTop.style.display = "none";
  }
};

//
// //// Event Listeners on Elements
//

window.addEventListener("scroll", hideOnScroll);
window.addEventListener("load", hideOnScroll);
window.addEventListener("resize", hideOnScroll);
navBarToggler.addEventListener("click", changeNavBg);
homeNavButton.addEventListener("click", goToTop);
aboutMeNavButton.addEventListener("click", goToAbout);
skillsNavButton.addEventListener("click", goToSkills);
portfolioNavButton.addEventListener("click", goToPortfolio);
goTop.addEventListener("click", goToTop);
downPointer.addEventListener("mouseover", goToAbout);

//CONVERTING THE ABOVE TO jQuery for learning reasons
//NEED TO CONVERT VANILLA JS SYNTAX TO JQUERY SYNTAX LIKE classlist toggle and scrollintoview

// $("#navbar-toggler").click(() => $("#navbar").toggleClass("navbgblackonclick"));

// $('#aboutme').click(() => {
//   $('html, body').animate({
//       scrollTop: $('#aboutmesection').offset().top
//   }, 'slow');
// });

// $("#contactme").click(() => {
//   $('html, body').animate({
//       scrollTop: $('#contactmesection').offset().top
//   }, 'slow');
// });

// $("#portfolio").click(() => {
//   $('html, body').animate({
//     scrollTop: $('#portfoliosection').offset().top
// }, 'slow');
// });

// $("#scrollouter(() => {
//   $('html, body').animate({
//     scrollTop: $('#aboutmesection').offset().top
// }, 'slow');
// });

// $("#top").click(() => {
//   $('html, body').animate({
//     scrollTop: $('#header').offset().top
// }, 'slow');
// });

// Look more into this.

// $("window").bind('scroll load resize', () => {
//   if (
//     $("document").body.scrollTop > 350 ||
//     $("document").documentElement.scrollTop > 350
//   ) {
//     if (screen.availWidth <= 768) {
//       goTop.style.display = "none";
//     } else {
//       goTop.style.display = "block";
//     }
//   } else {
//     goTop.style.display = "none";
//   }
// })

$(window).on("load", function() {
  $(".header__content-heading").animate(
    {
      top: "0px",
      left: "0px",
      opacity: "1"
    },
    800,
    "linear"
  );

  $(".header__content-greeting").animate(
    {
      top: "0px",
      left: "0px",
      opacity: "1"
    },
    800,
    "linear"
  );
});

$(window).scroll(function logovis() {
  if ($(window).scrollTop() >= 350) {
    $(".about__image").css("visibility", "visible");
    $(".about__image").animate(
      {
        left: "0px",
        opacity: "1"
      },
      800,
      "linear"
    );
    $(".about__image").off("scroll");
  }
});

$(window).scroll(function introvis() {
  if ($(window).scrollTop() >= 700) {
    $(".about__intro").css("visibility", "visible");
    $(".about__intro").animate(
      {
        opacity: "1"
      },
      800,
      "linear"
    );
    $(".about__intro").off("scroll");
  }
});

$(window).scroll(function() {
  if ($(window).scrollTop()) {
    $("nav").removeClass("bg-none");
    $("nav").addClass("bg-dark");
    $(".navbar__style").css("boxShadow", "0 0 10px 1px black");
  } else {
    $("nav").addClass("bg-none");
    $("nav").removeClass("bg-dark");
    $(".navbar__style").css("boxShadow", "0 0 0 0 transparent");
  }
});
