document.addEventListener("DOMContentLoaded", () => {

// Tombol scroll ke produk
const heroBtn = document.querySelector(".hero-btn");
if (heroBtn) {
    heroBtn.addEventListener("click", () => {
        document.querySelector("#produk").scrollIntoView({
            behavior: "smooth"
        });
    });
}

// Efek navbar saat discroll
const header = document.querySelector(".header");
window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        header.style.boxShadow = "0 3px 10px rgba(0,0,0,0.15)";
    } else {
        header.style.boxShadow = "0 2px 8px rgba(0,0,0,0.07)";
    }
});

});
