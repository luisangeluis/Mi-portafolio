const menuPrincipal = document.querySelector('#menu-principal_ul');
const optionsMainList = Array.from(menuPrincipal.children);

//Pintar los botones del menu principal al hacer click
menuPrincipal.addEventListener('click', (e) => {
    let elemento = e.target;
    
    optionsMainList.forEach(element => {
        element.children[0].classList.remove('active')
    });
    elemento.classList.add('active');
    

})
const SectionsGroup = document.querySelector('.scrollspy-example');


// addEventListener('scroll',(e)=>{

//     let seccionesPrincipales = [...SectionsGroup.children]
//     console.log(seccionesPrincipales);

//     for(i=0;i<seccionesPrincipales.length;i++){
//         if(seccionesPrincipales[i].scrollTop===0){
//             console.log(seccionesPrincipales[i].id);

//             console.log(seccionesPrincipales[i].scrollTop);
//         }
//     }
        
    
// })

addEventListener('scroll',(e)=>{
    // console.log(document.documentElement.scrollTop);
    //scrollTop muestra en este caso la altura del scroll de la pagina
    let scrollTopDocumento = document.documentElement.scrollTop;

    console.log("altura documento"+scrollTopDocumento);
    //Devuelve el valor de la altura del elemento
    console.log("altura elemento"+document.querySelector('.experiencie').offsetTop);

    if(scrollTopDocumento > document.querySelector('.animado').offsetTop-500){
        document.querySelector('.animado').style.opacity ='1';
        document.querySelector('.animado').classList.add('mostrarArriba');
        
        
    }

    



});



