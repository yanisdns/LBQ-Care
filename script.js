const fadeEls = document.querySelectorAll(".fade");

window.addEventListener("scroll", () => {
fadeEls.forEach(el => {
const top = el.getBoundingClientRect().top;
if(top < window.innerHeight - 100){
el.classList.add("show");
}
});
});

let serviceSlides = document.querySelectorAll(".slide-service");
let s = 0;

if(serviceSlides.length > 0){
setInterval(() => {

serviceSlides[s].classList.remove("active");
s = (s + 1) % serviceSlides.length;
serviceSlides[s].classList.add("active");

}, 3000);
}
// ===== Slider avant / après =====
const compareRange = document.getElementById("compareRange");
const compareAfter = document.getElementById("compareAfter");
const compareHandle = document.getElementById("compareHandle");

if(compareRange){
compareRange.addEventListener("input", () => {
const val = compareRange.value;
compareAfter.style.clipPath = `inset(0 0 0 ${val}%)`;
compareHandle.style.left = `${val}%`;
});
}

// ===== Sélecteur gabarit véhicule =====
// 💡 Modifie ces montants si tes tarifs changent selon le gabarit du véhicule
// 💡 Grille officielle LBQ Care — V1 Citadine / V2 Berline-Break / V3 SUV-4x4
const vehiclePrices = {
citadine:   { essentiel: "105,00 €", premium: "150,00 €" }, // V1
berline:    { essentiel: "115,00 €", premium: "160,00 €" }, // V2 - Berline/Break
campingcar: { essentiel: "125,00 €", premium: "170,00 €" }  // V3 - SUV/4x4 (pas de tarif camping-car dans ta grille, à ajuster si tu en as un)
};

const vehicleButtons = document.querySelectorAll(".vehicle-btn");
const priceEssentiel = document.querySelector('[data-price="essentiel"]');
const pricePremium = document.querySelector('[data-price="premium"]');

vehicleButtons.forEach(btn => {
btn.addEventListener("click", () => {
vehicleButtons.forEach(b => b.classList.remove("active"));
btn.classList.add("active");

const vehicle = btn.dataset.vehicle;
if(priceEssentiel) priceEssentiel.textContent = vehiclePrices[vehicle].essentiel;
if(pricePremium) pricePremium.textContent = vehiclePrices[vehicle].premium;
});
});
// ===== Hero "zoom" au scroll (effet "on rentre dans l'image") =====
// ===== Hero "zoom" au scroll (effet "on rentre dans l'image") =====
const zoomHero = document.getElementById("zoomHero");
const zoomHeroFixed = document.getElementById("zoomHeroFixed");
const zoomHeroImg = document.getElementById("zoomHeroImg");
const zoomHeroOverlay = document.getElementById("zoomHeroOverlay");
const zoomHeroContent = document.getElementById("zoomHeroContent");

const heroBaseScale = 1.5;

if(zoomHero && zoomHeroImg){

function updateZoomHero(){
const scrollDistance = zoomHero.offsetHeight - window.innerHeight;
let progress = window.scrollY / scrollDistance;
progress = Math.min(Math.max(progress, 0), 1);

const scale = heroBaseScale + progress * 1.5;
const contentOpacity = 1 - progress * 2.2;
const contentMove = progress * 60;
const overlayOpacity = progress * 0.9;

zoomHeroImg.style.transform = `scale(${scale})`;
zoomHeroContent.style.opacity = Math.max(contentOpacity, 0);
zoomHeroContent.style.transform = `translateY(-${contentMove}px)`;
zoomHeroOverlay.style.opacity = Math.min(overlayOpacity, 1);

// une fois le zoom terminé, on masque le calque fixe pour laisser voir la suite
zoomHeroFixed.style.visibility = progress >= 1 ? "hidden" : "visible";
}

window.addEventListener("scroll", () => {
requestAnimationFrame(updateZoomHero);
});

updateZoomHero();
}
// ===== Navbar transparente en haut, pleine au scroll =====
const navbarEl = document.querySelector(".navbar");

function updateNavbar(){
if(window.scrollY > 40){
navbarEl.classList.add("scrolled");
} else {
navbarEl.classList.remove("scrolled");
}
}

if(navbarEl){
window.addEventListener("scroll", updateNavbar);
updateNavbar();
}
const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".nav-menu");

if(menuToggle){
menuToggle.addEventListener("click", () => {
menuToggle.classList.toggle("open");
navMenu.classList.toggle("open");
});
}