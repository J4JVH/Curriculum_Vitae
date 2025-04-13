const menu = document.getElementById("Menu");
document.addEventListener("mousemove", (e) => {
    if (e.clientY <= 50) { 
        menu.style.transform = "translateY(0)";
    } else {
        menu.style.transform = "translateY(-100%)";
    }
});

const rightbtn = document.querySelector("#scrolling-button-right");
const leftbtn = document.querySelector("#scrolling-button-left");
const content = document.querySelector("#container-flex");
rightbtn.addEventListener("click", (A) => {
    content.scrollLeft +=200;
});
leftbtn.addEventListener("click", (A) => {
    content.scrollLeft -=200;
});