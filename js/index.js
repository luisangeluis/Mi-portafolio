const menuPrincipal = document.querySelector('#menu-principal_ul');
const optionsMainList = Array.from(menuPrincipal.children);

//Pintar los botones del menu principal al hacer click
menuPrincipal.addEventListener('click', (e) => {
    // console.log(e.target);
    if (e.target && e.target.tagName === 'A') {
        let elemento = e.target;
        let scrollTopPagina = document.documentElement.scrollTop;

        optionsMainList.forEach(element => {
            element.children[0].classList.remove('active')
        });

        elemento.classList.add('active');

        

    }

    
})

//Agregar clase active a los elementos del menu principal en scroll
const mainMenuOptions = document.querySelector('#menu-principal_ul');
arrayOptions = Array.from(mainMenuOptions.children);

const mainSections = document.querySelector('.scrollspy-example');
const arraySections = Array.from(mainSections.children);
console.log(arraySections);
// console.log(arrayOptions);

addEventListener('scroll',()=>{
    // arrayOptions[1].lastElementChild.classList.add('active');
    scrollTopPagina = document.documentElement.scrollTop;

    for(let i=0; i<arraySections.length;i++){
        let topSection = arraySections[i].offsetTop;
        if(scrollTopPagina>topSection-300){
            arrayOptions.forEach(element=>element.firstElementChild.classList.remove('active'))
            arrayOptions[i].firstElementChild.classList.add('active');
        }
    }
})


//Opciones del observador
options={
    //root:
    //rootMargin y threshold nos ayudan a indicar cuando quiero que se dispare el callback
    rootMargin: '-80px'
    //threshold = Se lanza el callback cuando el elemento se alcanza a ver al 25% y cuando se está ocultando y queda 25% en este ejemplo
    // threshold:0.25
}
//Callback del observador
const animadoArriba =(entryes)=>{
    entryes.forEach(entry=>{
        // entry.target.classList.remove('mostrarArriba');

        if(entry.isIntersecting){

            entry.target.classList.add('mostrarArriba')
        }  
    })
}
//Efecto suave hacia arriba de los elementos 
const elementosAnimadoArriba = document.querySelectorAll('.animado');
//Se crea el observador
const observerAnimadoArriba = new IntersectionObserver(animadoArriba,options);

elementosAnimadoArriba.forEach(element=>{
    observerAnimadoArriba.observe(element);
})




addEventListener('scroll', () => {
    // scrollTopPagina = document.documentElement.scrollTop;
    // //console.log(scrollTopPagina);
    // // console.log(typeof elementosAnimados);
    // arrayAnimados = Array.from(elementosAnimados);

    // elementosAnimados.forEach((element) => {
    //     // console.log(element);

    //     if (scrollTopPagina > element.offsetTop - 1000) {
    //         // element.style.opacity = '1';
    //         element.classList.add('mostrarArriba');
    //     }

    //     if(scrollTopPagina < element.offsetTop-500)
    //     {
    //         element.classList.remove('mostrarArriba');

    //     }
    // })
})



const animadosDos = document.querySelectorAll('.animado-2')
addEventListener('scroll',()=>{
    const ArrayAnimadoDos = Array.from(animadosDos);
    let scrollTopPagina = document.documentElement.scrollTop;
    
    animadosDos.forEach( element =>{
        if(scrollTopPagina > element.offsetTop -500){
            element.classList.add('mostrar-lado');
        }
        if(scrollTopPagina < element.offsetTop-500)
        {
            
            element.classList.remove('mostrar-lado');

        }
        
    })

    console.log(screen.orientation);
})







