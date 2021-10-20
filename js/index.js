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
// arrayOptions = Array.from(mainMenuOptions.children);
arrayOptions = mainMenuOptions.children;


const mainSections = document.querySelector('.scrollspy-example');
const arraySections = Array.from(mainSections.children);

console.log(arraySections);
// console.log(arrayOptions);

// addEventListener('scroll',()=>{
//     // arrayOptions[1].lastElementChild.classList.add('active');
//     scrollTopPagina = document.documentElement.scrollTop;

//     for(let i=0; i<arraySections.length;i++){
//         let topSection = arraySections[i].offsetTop;
//         if(scrollTopPagina>topSection-300){
//             arrayOptions.forEach(element=>element.firstElementChild.classList.remove('active'))
//             arrayOptions[i].firstElementChild.classList.add('active');
//         }
//     }
// })


//Opciones del observador
options={
    //root:
    //rootMargin y threshold nos ayudan a indicar cuando quiero que se dispare el callback
    rootMargin: '0px'
    //threshold = Se lanza el callback cuando el elemento se alcanza a ver al 25% y cuando se está ocultando y queda 25% en este ejemplo
    // threshold:0.25
}
//Callback del observador
const animadoArriba =(entryes)=>{
    // entryes.forEach(entry=>{
    //     // entry.target.classList.remove('mostrarArriba');

    //     if(entry.isIntersecting){

    //         entry.target.classList.add('mostrarArriba')
    //     }  
    // })
    

    // for(let entry of entryes){
    //     console.log(entry);
    //     if(entry.isIntersecting){
    //         entry.target.classList.add('mostrarArriba');
    //     }
    // }
    for(let i =0; i<entryes.length;i++){
        if(entryes[i].isIntersecting){
            entryes[i].target.classList.add('mostrarArriba');
            // arrayOptions[i].children[0].classList.add('active');
            console.log(i)

        }
    }
    
}

const animadoDerecha = (entryes)=>{
    entryes.forEach(entry=>{
        if(entry.isIntersecting){
            
            entry.target.classList.add('mostrar-lado');
        }
    })
}
//Efecto suave hacia arriba de los elementos 
const elementosAnimadoArriba = document.querySelectorAll('.animado');
//Efecto suave hacia la derecha de los elementos 
const itemsAnimadosDerecha = document.querySelectorAll('.animado-2')
//Se crea el observador para los elementos que se animan hacia arriba
const observerAnimadoArriba = new IntersectionObserver(animadoArriba,options);
const observerAnimadoDerecha = new IntersectionObserver(animadoDerecha,options);

elementosAnimadoArriba.forEach(element=>{
    observerAnimadoArriba.observe(element);
})

itemsAnimadosDerecha.forEach(element=>{
    observerAnimadoDerecha.observe(element);
})









