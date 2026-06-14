const toggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

toggle.addEventListener("click", ()=>{
    navLinks.classList.toggle("active");
});

document.getElementById("form").addEventListener("submit", function(e){
    e.preventDefault();
    alert("Mensaje enviado ✅");
});