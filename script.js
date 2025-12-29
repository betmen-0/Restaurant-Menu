const arrow = document.getElementById("arrow");
const guideBtn = document.getElementById("guidebutton");

const startX =0;
const startY =0;

let endX = window.innerWidth * 0.5;
let endY = window.innerHeight * 1.2;

function setEndCoordinates() {
    endX = window.innerWidth * 0.5;
    endY = window.innerHeight * 1.2;
}
window.addEventListener("resize", setEndCoordinates);

function updateArrow(progress) {
    const x = startX + (endX - startX) * progress;
    const y = startY + (endY - startY) * progress;
    arrow.style.transform = `translate(${x}px, ${y}px)`;
}

window.addEventListener("scroll",() => {
    const scrollTop = window.scrollY;
    const scrollProgress = Math.min(Math.max(scrollTop / 500, 0), 1);
    updateArrow(scrollProgress);
});

guideBtn.addEventListener("click")