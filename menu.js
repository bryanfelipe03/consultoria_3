let btnMenu = document.getElementById('btn-menu')
let menu = document.getElementById('menu-mobile')
let overlay = document.getElementById('overlay-menu')


btnMenu.addEventListener('click', ()=>{
    menu.classList.add('abrir-menu')
})

menu.addEventListener('click', ()=>{
    menu.classList.remove('abrir-menu')
})

overlay.addEventListener('click', ()=>{
    menu.classList.remove('abrir-menu')
})

/*CODIGO DO CARROSSEL*/
const slides = document.querySelector(".carrossel-slides");
const imgs = slides.querySelectorAll("img");
const btnAnterior = document.querySelector(".btn-anterior");
const btnProximo = document.querySelector(".btn-proximo");

let index = 0;

function mostrarSlide(i) {
  const totalSlides = imgs.length;
  index = (i + totalSlides) % totalSlides;
  slides.style.transform = `translateX(-${index * 100}%)`;
}

btnAnterior.addEventListener("click", () => {
  mostrarSlide(index - 1);
});

btnProximo.addEventListener("click", () => {
  mostrarSlide(index + 1);
});

// Opcional: autoplay
let autoplay = setInterval(() => {
    mostrarSlide(index + 1);
  }, 5000);
  
  const carrossel = document.querySelector(".carrossel-container");
  
  carrossel.addEventListener("mouseenter", () => {
    clearInterval(autoplay);
  });
  
  carrossel.addEventListener("mouseleave", () => {
    autoplay = setInterval(() => {
      mostrarSlide(index + 1);
    }, 5000);
  });
  
