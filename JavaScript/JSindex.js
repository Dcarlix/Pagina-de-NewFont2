const boton = document.querySelector("#btn");
const navMenu = document.querySelector(".navegador");
const cuerpo = document.querySelector(".cuerpo");
const piePagina = document.querySelector("#Pie");

boton.addEventListener("click", () => {
    navMenu.classList.toggle("navegador_activo");
    cuerpo.classList.toggle("cuerpo_on");
    piePagina.classList.toggle("footer_on");
})

window.addEventListener('scroll', function(){
    let animacion = document.getElementById('barraNavegacion');
    let fondo = document.getElementById('FondoPrincipal');
    let posicionNav = animacion.getBoundingClientRect().bottom;
    let tamañoDePantalla = fondo.getBoundingClientRect().bottom;
    
    if(posicionNav > tamañoDePantalla){
        animacion.style.backgroundColor = 'rgb(33, 47, 60)';
    }

    if(posicionNav < tamañoDePantalla){
        animacion.style.backgroundColor = 'rgba(0, 0, 0, 0)';
    }

    boton.addEventListener("click", () => {
        if(posicionNav < tamañoDePantalla){
            animacion.style.backgroundColor = 'rgb(33, 47, 60)';
        }
    })
})
