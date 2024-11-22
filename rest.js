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
const imgItem = document.querySelectorAll(".product div"); // Lucrăm cu div-urile, nu doar cu img

liItem.forEach(li => {
    li.addEventListener("click", () => {
        // Resetează clasa activă pentru toate butoanele
        liItem.forEach(li => li.className = "");
        li.className = "active";

        // Obține categoria selectată
        const value = li.textContent.trim().toLowerCase();

        // Filtrează imaginile (ascunde/afișează div-urile din grilă)
        imgItem.forEach(div => {
            const filter = div.querySelector("img").getAttribute("data-filter").toLowerCase();
            if (filter === value || value === "all") {
                div.style.display = "block"; // Afișează div-ul
            } else {
                div.style.display = "none"; // Ascunde div-ul
            }
        });
    });
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