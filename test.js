'use strict';

const liItem = document.querySelectorAll("ul li");
const imgItem = document.querySelectorAll(".product div");
const valueLi = li.textContent;
console.log(valueLi);
liItem.forEach(li => {
    li.onclick = function() {
        liItem.forEach(li => {
            li.className = "";
        })
        li.className = "active";

       
        imgItem.forEach(div => {
            div.style.display = "none";
            if(img.getAttribute("data-filter") == valueLi.toLowerCase() || valueLi == "All") {
                div.style.display = "block"; 
            }
        }) 
    }
});









