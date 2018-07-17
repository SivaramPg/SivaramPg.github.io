//
////// caching DOM items
//

const aboutMeNavButton = document.getElementById("aboutme");
const contactMeNavButton = document.getElementById("contactme");
const portfolioNavButton = document.getElementById("portfolio");
const navBarToggler = document.getElementById("navbar-toggler");
const navbar = document.getElementById("navbar");
const downPointer = document.getElementById("scrolldown");
const goTop = document.getElementById("top");
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
const goToAbout = () => {
  aboutMeSection.scrollIntoView({ behavior: "smooth", block: "start" });
};

const goToContact = () => {
  contactMeSection.scrollIntoView({ behavior: "smooth", block: "start" });
}

const goToPortfolio = () => {
  portfolioSection.scrollIntoView({ behavior: "smooth", block: "start" });
}

const goToTop = () => {
  beginning.scrollIntoView({ behavior: "smooth", block: "start" });
}

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
aboutMeNavButton.addEventListener("click", goToAbout);
contactMeNavButton.addEventListener("click", goToContact);
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

// $("#scrolldown").mouseover(() => {
//   $('html, body').animate({
//     scrollTop: $('#aboutmesection').offset().top
// }, 'slow');
// });

// $("#top").click(() => {
//   $('html, body').animate({
//     scrollTop: $('#beginning').offset().top
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


// $(window).scroll(function () {
//     // console.log($(window).scrollTop());
//     // var topDivHeight = $(".wrapper").height();
//     // var viewPortSize = $(window).height();

//     // var triggerAt = 350;
//     // var triggerHeight = (topDivHeight - viewPortSize) + triggerAt;

//     if ($(window).scrollTop() >= 550) {
//         $('.myimg').css('visibility', 'visible');
//         $('.myimg').hide();
//         $('.myimg').fadeIn();
//         $(this).off('scroll');
//     } else {
//             $('.myimg').css('visibility', 'hidden');
//             // $('.myimg').hide();
//             // $('.myimg').fadeOut();
//             $(this).off('scroll');
//     }
// });

