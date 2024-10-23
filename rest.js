'use strict';


// scrool butoon top

let scrollToTopBtn = document.getElementById("my-btn");
let rootElement = document.documentElement;

function scrollToTop() {
  rootElement.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}
scrollToTopBtn.addEventListener("click", scrollToTop);


// bar browser

let docTitle = document.title;
window.addEventListener("blur", () => {
  document.title = "Please Come Back"
});

window.addEventListener('focus', () => {
  document.title = docTitle;
});

//social media button

const socialMedia = document.querySelector(".social-media");

window.addEventListener("scroll", () => {
  if (window.scrollY > 100){
    socialMedia.classList.add("active");
  }else{
    socialMedia.classList.remove("active");
  }
});

// Gallery photos

const liItem = document.querySelectorAll("ul li");
const imgItem = document.querySelectorAll(".product img");


liItem.forEach(li => {
    li.onclick = function() {
        liItem.forEach(li => {
            li.className = "";
        })
        li.className = "active";

        const value = li.textContent;
        imgItem.forEach(img => {
            img.style.display = "none";
            if(img.getAttribute("data-filter") == value.toLowerCase() || value == "All") {
                img.style.display = "block";
            }
        })
    }
});

// popup card

// function togglePopup(){
//   document.getElementById("popup-1").classList.toggle("active");
// }

// function togglePopupSecond(){
//   document.getElementById("popup-2").classList.toggle("active");
// }

// function togglePopupThree(){
//   document.getElementById("popup-3").classList.toggle("active");
// }