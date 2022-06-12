const abrirMenu = document.querySelector(".caja-navegacion");
const desaparecerMenu = document.querySelector(".menu-escondido");
const aparecerMenu = document.querySelector(".aparecer-menu");
let menuAbierto = false;

const toggleMenu=()=>{
    desaparecerMenu.classList.toggle("aparecer-menu")
    desaparecerMenu.style.transition="transform 500ms ease-in-out"
}

abrirMenu.addEventListener("click", function(){
    toggleMenu();
    if (document.querySelector(".menu-escondido.aparecer-menu")){
        menuAbierto=true
    }
    else{
        menuAbierto=false
    }
})

let botonSubir = document.querySelector(".subir");
botonSubir.addEventListener("click",function(){
    document.documentElement.scrollTop=0;
})

window.addEventListener("scroll",function(){
    if(document.documentElement.scrollTop > 0){
        botonSubir.style.display="flex";
    }
    else{
        botonSubir.style.display="none";
    }
})


const abrirProductos = document.querySelector(".poner-filtros");
const desaparecerProductos = document.querySelector(".filtros-productos");
const aparecerMenuProductos = document.querySelector(".aparecer-productos");
let menuAbiertoProductos = false;

const toggleProductos=()=>{
    desaparecerProductos.classList.toggle("aparecer-productos")
    desaparecerProductos.style.transition="transform 500ms ease-in-out"
}

abrirProductos.addEventListener("click",function(){
    toggleProductos();
    if (document.querySelector(".filtros-productos.aparecer-productos")){
        menuAbiertoProductos=true;
    }
    else{
        menuAbiertoProductos=false;
    }
})


const botonAdulto = document.querySelector(".adulto");
const adulto = document.querySelector(".caja-adulto");
const botonNiños = document.querySelector(".niños")
const niños = document.querySelector(".caja-niños");
const botonAccesorios = document.querySelector(".accesorios")
const accesorios = document.querySelector(".caja-accesorios");
const botonDescuentos = document.querySelector(".descuentos");
const descuentos = document.querySelector(".caja-descuentos");
const quitarFiltro = document.querySelector(".quitar-filtros")

botonAdulto.addEventListener("click",function(e){
    adulto.style.display="flex";
    niños.style.display="none";
    accesorios.style.display="none";
    descuentos.style.display="none";

    quitarFiltro.style.opacity="1";

    toggleProductos();
})

botonNiños.addEventListener("click",function(e){
    adulto.style.display="none";
    niños.style.display="flex";
    accesorios.style.display="none";
    descuentos.style.display="none";

    quitarFiltro.style.opacity="1";

    toggleProductos();
})

botonAccesorios.addEventListener("click",function(e){
    adulto.style.display="none";
    niños.style.display="none";
    accesorios.style.display="flex";
    descuentos.style.display="none";

    quitarFiltro.style.opacity="1";

    toggleProductos();
})

botonDescuentos.addEventListener("click",function(e){
    adulto.style.display="none";
    niños.style.display="none";
    accesorios.style.display="none";
    descuentos.style.display="flex";

    quitarFiltro.style.opacity="1";

    toggleProductos();
})

quitarFiltro.addEventListener("click",function(){
    adulto.style.display="flex";
    niños.style.display="flex";
    accesorios.style.display="flex";
    descuentos.style.display="flex"

    quitarFiltro.style.opacity="0";
})

