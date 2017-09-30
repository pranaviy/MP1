/** scrollTo function source: https://stackoverflow.com/questions/8917921/cross-browser-javascript-not-jquery-scroll-to-top-animation/8918062#8918062**/
function scrollTo(element, to, duration) {
    console.log("scrollto function executed");
    if (duration <= 0) return;
    var difference = to - element.scrollTop;
    var perTick = difference / duration * 10;

    setTimeout(function() {
        element.scrollTop = element.scrollTop + perTick;
        if (element.scrollTop === to) return;
        scrollTo(element, to, duration - 10);
    }, 10);
}

//event listeners for all the navigation bar buttons
var homeButton = document.getElementById("homeb")
var homeElmnt = document.getElementById("#home");
homeButton.addEventListener("click", function(){scrollTo(document.body, homeElmnt.offsetTop, 600);}, false);

var aboutMeButton = document.getElementById("aboutmeb")
var aboutMeElmnt = document.getElementById("#aboutme");
aboutMeButton.addEventListener("click", function(){scrollTo(document.body, aboutMeElmnt.offsetTop, 600);}, false);

var expButton = document.getElementById("experienceb")
var experienceElmnt = document.getElementById("#experience");
expButton.addEventListener("click", function(){scrollTo(document.body, experienceElmnt.offsetTop, 600);}, false);

var photosButton = document.getElementById("photosb")
var photosElmnt = document.getElementById("#photos");
photosButton.addEventListener("click", function(){scrollTo(document.body, photosElmnt.offsetTop, 600);}, false);


//Set active link initially based on load then on scroll 
function setActive(elmnt) {
    //console.log("called set active on " + elmnt);
    for(var i = 0; i < 4; i++) {
        if (document.links[i].getAttribute("href") == elmnt) {
            //console.log("changed element to active");
            document.links[i].className = 'active';
        }
        else {
            //console.log(document.links[i].getAttribute("href"));
            //console.log("changed to inactive");
            document.links[i].className = 'inactive';
        }
    }
}

//resize nav function based on the element that is most in view
function resizeNav(size) {
    if(size == "small") {
        document.getElementById("nav").style.paddingTop = "0.5vh";
        document.getElementById("nav").style.paddingBottom = "0.5vh";
        document.getElementById("nav").style.fontSize = "2.5vh";
    }
    else {
        document.getElementById("nav").style.paddingTop = "2vh";
        document.getElementById("nav").style.paddingBottom = "2vh";
        document.getElementById("nav").style.fontSize = "3.5vh";
    }
}

window.addEventListener('scroll', function(ev) {
    
    var homeDiv = document.getElementById('#home');
    var homeDistanceToTop = homeDiv.getBoundingClientRect().top;
    //console.log("Home: " + homeDistanceToTop);
    
    var aboutMeDiv = document.getElementById('#aboutme');
    var aboutMeDistanceToTop = aboutMeDiv.getBoundingClientRect().top;
    //console.log("AboutMe: " + aboutMeDistanceToTop);
    
    var expDiv = document.getElementById('#experience');
    var expDistanceToTop = expDiv.getBoundingClientRect().top;
    //console.log("Experience: " + expDistanceToTop);
    
    var photosDiv = document.getElementById('#photos');
    var photosDistanceToTop = photosDiv.getBoundingClientRect().top;
    //console.log("Photos: " + photosDistanceToTop);
    
    var curDiv;

    if(homeDistanceToTop >= -600)
        curDiv = "#home";
    else if(aboutMeDistanceToTop >= -600)
        curDiv = "#aboutme";
    else if(expDistanceToTop >= -600)
        curDiv = "#experience";
    else
        curDiv = "#photos";
    
    //console.log("calling setActive on: " + curDiv);
    setActive(curDiv);
    
    if(homeDistanceToTop <= -200) 
        resizeNav("small");
    else
        resizeNav("big");
});


//code for carousel
var slideIndex = 1;

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  console.log(x);
  if (n > x.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
}

var leftButton = document.getElementById("left")
leftButton.addEventListener("click", function(){plusDivs(-1);}, false);

var rightButton = document.getElementById("right")
rightButton.addEventListener("click", function(){plusDivs(+1);}, false);

//code for resume modal --> https://www.w3schools.com/howto/howto_css_modals.asp
var modal = document.getElementById('myModal');
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

//setup code
resizeNav("big");
setActive('#home');
showDivs(slideIndex);