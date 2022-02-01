
//Agregar clase active a los elementos del menu principal en scroll
const mainMenuOptions = document.querySelector('#menu-principal_ul');
arrayOptions = Array.from(mainMenuOptions.children);
const mainSections = document.querySelector('.scrollspy-example');
const arraySections = Array.from(mainSections.children);

// mainMenuOptions.addEventListener('click',(e)=>{
//     e.preventDefault();
//     let event = e

//     arrayOptions.forEach(element=>{
//         // if(element.firstElementChild.classList.contains('active')){
//         //     element.firstElementChild.classList.remove('active');

//         // }
//         if(element !==event){
//             element.firstElementChild.classList.remove('active');

//         }
//     })

//     if(event.target && event.target.tagName==='A'){
//         event.target.classList.add('active');
//     }

    
    
// })

//Efecto suave hacia arriba y efecto suave hacia la derecha de los elementos al hacer scroll
//Opciones del observador
options = {
    root:null,
    //rootMargin y threshold nos ayudan a indicar cuando quiero que se dispare el callback
    // rootMargin: '-35% 0%',  
    rootMargin: '-50% 0%',  


    //threshold = Se lanza el callback cuando el elemento se alcanza a ver al 25% y cuando se está ocultando y queda 25% en este ejemplo
    // threshold: 0.3
}
//Callback del observador
const animadoDerecha = (entryes) => {
     entryes.forEach((entry,i) => {
        if (entry.isIntersecting) {
            // console.log(entry)
            entry.target.classList.add('mostrar-lado');

            // console.log(`parte intersectada ${entry.target.classList[0]}`);

            for(let i=0; i<arrayOptions.length;i++){
                // console.log(arrayOptions[i].firstElementChild.href);
                // if(entry.target.classList[0] == arrayOptions[i].firstElementChild.textContent.toLowerCase()){
                if(entry.target.classList[0] == arrayOptions[i].firstElementChild.name){

                    arrayOptions[i].firstElementChild.classList.add('active');
                }else{
                    arrayOptions[i].firstElementChild.classList.remove('active');

                }
            }
            
        }
       
        
    })
    
}
//Efecto suave hacia la derecha de los elementos al hacer scroll
const itemsAnimadosDerecha = document.querySelectorAll('.animado-2')
//Se crea el observador para los elementos que se animan hacia arriba
const observerAnimadoDerecha = new IntersectionObserver(animadoDerecha,options);

itemsAnimadosDerecha.forEach(element => {
    observerAnimadoDerecha.observe(element);
})









