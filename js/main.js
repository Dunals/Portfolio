// Get references to DOM elements
var audio = document.getElementById("audioPlayer");
var loader = document.getElementById("preloader");

// Hide preloader and show popup on window load
window.addEventListener("load", function () {
  loader.style.display = "none";
  document.querySelector('.hey').classList.add('popup');
});

// Toggle settings visibility
function settingtoggle(){
  document.getElementById("setting-container").classList.toggle('settingactivate');
  document.getElementById("visualmodetogglebuttoncontainer").classList.toggle('visualmodeshow');
  document.getElementById("soundtogglebuttoncontainer").classList.toggle('soundmodeshow');
}

// Play or pause audio based on sound switch status
function playpause() {
  if (document.getElementById('switchforsound').checked == false) {
    audio.pause();
  } else {
    audio.play();
  }
}

// Variables for mobile menu and hamburger menu animation
let emptyArea = document.getElementById("emptyarea");
let mobileTogglemenu = document.getElementById("mobiletogglemenu");

// Toggle mobile menu visibility and hamburger animation
function hamburgerMenu() {
  document.body.classList.toggle("stopscrolling");
  document.getElementById("mobiletogglemenu").classList.toggle("show-toggle-menu");
  document.getElementById("burger-bar1").classList.toggle("hamburger-animation1");
  document.getElementById("burger-bar2").classList.toggle("hamburger-animation2");
  document.getElementById("burger-bar3").classList.toggle("hamburger-animation3");
}

// Hide mobile menu and remove hamburger animation
function hidemenubyli(){
  document.body.classList.toggle("stopscrolling");
  document.getElementById("mobiletogglemenu").classList.remove("show-toggle-menu");
  document.getElementById("burger-bar1").classList.remove("hamburger-animation1");
  document.getElementById("burger-bar2").classList.remove("hamburger-animation2");
  document.getElementById("burger-bar3").classList.remove("hamburger-animation3");
}

// Highlight current section in navigation based on scroll position
const sections = document.querySelectorAll('section');
const navLi = document.querySelectorAll('.navbar .navbar-tabs .navbar-tabs-ul a li');
const mobilenavLi = document.querySelectorAll('.mobiletogglemenu .mobile-navbar-tabs-ul a li');

window.addEventListener('scroll', ()=>{
  let current = "";
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if(pageYOffset >= (sectionTop - 500)){
      current = section.getAttribute('id');
    }
  });

  mobilenavLi.forEach( li => {
    li.classList.remove('activeThismobiletab');
    if(li.classList.contains(current)){
      li.classList.add('activeThismobiletab');
    }
  });

  navLi.forEach( li => {
    li.classList.remove('activeThistab');
    if(li.classList.contains(current)){
      li.classList.add('activeThistab');
    }
  });
});

// Display "Back to Top" button after scrolling down 400px
let mybutton = document.getElementById("backtotopbutton");
window.onscroll = function(){
  scrollFunction();
};

function scrollFunction(){
  if(document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// Scroll to the top of the page
function scrolltoTopfunction(){
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// Prevent context menu on images
document.addEventListener("contextmenu", function(e){
  if (e.target.nodeName === "IMG") {
    e.preventDefault();
  }
}, false);

// Eye movement effect for pupils
let pupils = document.getElementsByClassName('pupil');
let pupilsArr = Array.from(pupils);

let pupilStartPoint = -1;
let pupilRange = 3;

let mouseXStartPoint = 0;
let mouseXEndPoint = window.innerWidth;
let currentXPosition = 0;
let fracXValue = 0;

let mouseYEndPoint = window.innerHeight;
let currentYPosition = 0;
let fracYValue = 0;

let mouseXRange = mouseXEndPoint - mouseXStartPoint;

const mouseMove = (event) => {
  currentXPosition = event.clientX - mouseXStartPoint;
  fracXValue = currentXPosition / mouseXRange;

  currentYPosition = event.clientY;
  fracYValue = currentYPosition / mouseYEndPoint;

  let pupilXCurrrentPosition = pupilStartPoint + (fracXValue * pupilRange);
  let pupilYCurrrentPosition = pupilStartPoint + (fracYValue * pupilRange);

  pupilsArr.forEach((curPupil) => {
    curPupil.style.transform= `translate(${pupilXCurrrentPosition}px, ${pupilYCurrrentPosition}px)`;
  });
}

const windowResize = (event) => {
  mouseXEndPoint = window.innerWidth;
  mouseYEndPoint = window.innerHeight;
  mouseXRange = mouseXEndPoint - mouseXStartPoint;
}

window.addEventListener('mousemove', mouseMove);
window.addEventListener('resize', windowResize);

// Count up animation for counters when they are visible
document.addEventListener('DOMContentLoaded', function() {
  const counters = document.querySelectorAll('.custom-heading');
  const speed = 200; // Adjust the speed of the count up (higher is slower)

  const countUp = (counter) => {
    const target = +counter.getAttribute('data-to');
    const count = +counter.innerText;
    const increment = target / speed;

    if (count < target) {
      counter.innerText = Math.ceil(count + increment);
      setTimeout(() => countUp(counter), 20);
    } else {
      counter.innerText = target; // Ensure it ends exactly at the target value
    }
  };

  const options = {
    threshold: 0.5 // 50% of the element is visible
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const counter = entry.target;
        countUp(counter);
        observer.unobserve(counter); // Stop observing once the count is complete
      }
    });
  }, options);

  counters.forEach(counter => {
    observer.observe(counter);
  });
});

// Open a PDF file in a new tab
function openURL() {
  var url = "#"; // Add your resume dpf here...
  window.open(url, '_blank');
}

// Custom cursor effect
const cursor = document.querySelector(".cursor");
const links = document.querySelectorAll("a,label,button");

window.addEventListener("mousemove", (e) => {
  let x = e.pageX;
  let y = e.pageY;

  cursor.style.left = `${x}px`;
  cursor.style.top = `${y}px`;

  links.forEach(link => {
    link.addEventListener("mouseenter", () => {
      cursor.classList.add("hover");
    });
    link.addEventListener("mouseleave", () => {
      cursor.classList.remove("hover");
    });
  });
});
