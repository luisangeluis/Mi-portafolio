const menuPrincipal = document.querySelector('#menu-principal_ul');
const optionsMainList = Array.from(menuPrincipal.children);

//Pintar los botones del menu principal al hacer click
menuPrincipal.addEventListener('click', (e) => {
    // console.log(e.target);
    if (e.target && e.target.tagName === 'A') {
        let elemento = e.target;

        for (let i = 0; i < optionsMainList.length; i++) {
            if (optionsMainList[i].firstElementChild.classList.contains('active')) {
                optionsMainList[i].firstElementChild.classList.remove('active');
            }
        }

        elemento.classList.add('active');
    }
})

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
    // rootMargin: '25%'
    //threshold = Se lanza el callback cuando el elemento se alcanza a ver al 25% y cuando se está ocultando y queda 25% en este ejemplo
    threshold: 0.70
}
//Callback del observador
const animadoArriba = (entryes) => {

    for (let x = 0; x < entryes.length; x++) {
        if (entryes[x].isIntersecting) {

            //aqui se obtiene la clase de las secciones
            console.log(entryes[x].target.classList[0]);

            arrayOptions.forEach(element => {
                //se obtiene la clase de cada link
                console.log(element.firstElementChild.textContent.toLowerCase())

                if (entryes[x].target.classList[0] == element.firstElementChild.textContent.toLowerCase()) {
                    console.log('hola');
                    for (let i = 0; i < arrayOptions.length; i++) {
                        if(arrayOptions[i].firstElementChild.classList.contains('active'))
                            arrayOptions[i].firstElementChild.classList.remove('active');
                    }
                    element.firstElementChild.classList.add('active');
                }
            })


            console.log(entryes[x]);
            entryes[x].target.classList.add('mostrarArriba');
        }
        // console.log(entryes[x]);
    }

}

const animadoDerecha = (entryes) => {
    entryes.forEach(entry => {
        if (entry.isIntersecting) {

            entry.target.classList.add('mostrar-lado');
        }
    })
}
//Efecto suave hacia arriba de los elementos al hacer scroll
const elementosAnimadoArriba = document.querySelectorAll('.animado');
//Efecto suave hacia la derecha de los elementos al hacer scroll
const itemsAnimadosDerecha = document.querySelectorAll('.animado-2')
//Se crea el observador para los elementos que se animan hacia arriba
const observerAnimadoDerecha = new IntersectionObserver(animadoDerecha, options);
const observerAnimadoArriba = new IntersectionObserver(animadoArriba, options);

itemsAnimadosDerecha.forEach(element => {
    observerAnimadoDerecha.observe(element);
})

for (let i = 0; i < elementosAnimadoArriba.length; i++) {

    observerAnimadoArriba.observe(elementosAnimadoArriba[i]);

}








