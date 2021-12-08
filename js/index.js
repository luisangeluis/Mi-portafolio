
//Agregar clase active a los elementos del menu principal en scroll
const mainMenuOptions = document.querySelector('#menu-principal_ul');
arrayOptions = Array.from(mainMenuOptions.children);
const mainSections = document.querySelector('.scrollspy-example');
const arraySections = Array.from(mainSections.children);

//Efecto suave hacia arriba y efecto suave hacia la derecha de los elementos al hacer scroll
//Opciones del observador
options = {
    //root:
    //rootMargin y threshold nos ayudan a indicar cuando quiero que se dispare el callback
    rootMargin: '25%'
    //threshold = Se lanza el callback cuando el elemento se alcanza a ver al 25% y cuando se está ocultando y queda 25% en este ejemplo
    // threshold: 0.70
}
//Callback del observador
const animadoDerecha = (entryes) => {
    entryes.forEach(entry => {
        if (entry.isIntersecting) {

            entry.target.classList.add('mostrar-lado');

            for(let i=0; i<arrayOptions.length;i++){
                if(entry.target.classList[0] == arrayOptions[i].firstElementChild.textContent.toLowerCase()){

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
const observerAnimadoDerecha = new IntersectionObserver(animadoDerecha, options);

itemsAnimadosDerecha.forEach(element => {
    observerAnimadoDerecha.observe(element);
})









