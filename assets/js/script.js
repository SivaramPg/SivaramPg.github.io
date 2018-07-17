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

$(window).on('load', function () {
    $('.contentheading').animate({
      top: '0px',
      left: '0px',
      opacity: '1'
    }, 800, "linear");

    $('.mainpageseparation').css('visibility','visible');
    $('.mainpageseparation').animate({
      left: '0px',
      opacity: '1'
    }, 800, "linear");

    $('.contentmaterial').animate({
      top: '0px',
      left: '0px',
      opacity: '1'
    }, 800, "linear");
});


$(window).scroll(function logovis() {
  if ($(window).scrollTop() >= 350) {
    $('.myimg').css('visibility', 'visible');
    $('.myimg').animate({
      left: '0px',
      opacity: '1'
    }, 800, "linear");
    $('.myimg').off('scroll');
  }
});

$(window).scroll(function introvis() {
  if ($(window).scrollTop() >= 700) {
    $('.intro').css('visibility', 'visible');
      $('.intro').animate({
        opacity: '1',
      }, 800, "linear");
      $('.intro').off('scroll');
    }
});

