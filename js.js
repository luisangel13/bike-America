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

// window.addEventListener("click",function(e){
//     this.console.log(e.target)
//     if(menuAbierto){
//         if(e.target !== abrirMenu){
//             toggleMenu();
//             menuAbierto=false;
//         }
//     }
// })

let botonSubir = document.querySelector(".subir");
botonSubir.addEventListener("click",function(){
    document.documentElement.scrollTop=0;
})

window.addEventListener("scroll",function(){
    if(document.documentElement.scrollTop > 0){
        botonSubir.style.display="flex";
        botonSubir.style.transition="transform 500ms ease-in-out"
    }
    else{
        botonSubir.style.display="none";
        botonSubir.style.transition="transform 500ms ease-in-out"

    }
})
