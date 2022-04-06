//Agregar clase active a los elementos del menu principal en scroll
const mainMenuOptions = document.querySelector('#menu-principal_ul');
arrayOptions = Array.from(mainMenuOptions.children);


//CONFIGURACION DEL OBSERVER
//Opciones del observador
options = {
    root: null,
    //rootMargin y threshold nos ayudan a indicar cuando quiero que se dispare el callback
    // rootMargin: '-35% 0%',  
    rootMargin: '-50% 0%',


    //threshold = Se lanza el callback cuando el elemento se alcanza a ver al 25% y cuando se está ocultando y queda 25% en este ejemplo
    // threshold: 0.3
}

options2 = {
    // root: null,
    //rootMargin y threshold nos ayudan a indicar cuando quiero que se dispare el callback
    // rootMargin: '-35% 0%',  
    // rootMargin: '-50% 0%',


    //threshold = Se lanza el callback cuando el elemento se alcanza a ver al 25% y cuando se está ocultando y queda 25% en este ejemplo
    // threshold: 0.3
}

//CALLBACKS DEL OBSERVADOR

const callbackSections = entryes => {
    entryes.forEach(entry => {

        // console.log(element);
        if (entry.isIntersecting) {

            let nombreDelElemento = entry.target.id;
            // console.log(nombreDelElemento);

            // const option = arrayOptions.find(element => element.firstElementChild.name == nombreDelElemento);
            // console.log(option);

            arrayOptions.forEach(option => {
                // console.log(option.firstElementChild.name);
                if (option.firstElementChild.name == nombreDelElemento) {
                    option.firstElementChild.classList.add('active');

                } else {
                    option.firstElementChild.classList.remove('active');

                }
            })



        }
    })
}
const animadoDerecha = (entryes) => {

    entryes.forEach((entry) => {
        if (entry.isIntersecting) {
            // console.log(entry)
            entry.target.classList.add('mostrar-lado');

            // for (let i = 0; i < arrayOptions.length; i++) {

            //     if (entry.target.parentNode.classList[0] == arrayOptions[i].firstElementChild.name) {

            //         arrayOptions[i].firstElementChild.classList.add('active');
            //     } else {
            //         arrayOptions[i].firstElementChild.classList.remove('active');

            //     }
            // }
        } else {
            entry.target.classList.remove('mostrar-lado');

        }
    })

}

const animadoIzquierda = (entryes) => {
    // console.log(entryes);

    entryes.forEach(entry => {
        if (entry.isIntersecting) {
            // console.log('es observado');

            entry.target.classList.add('mostrar-izquierda');

        } else {
            // console.log('no es observado');
            entry.target.classList.remove('mostrar-izquierda');

        }
    });
}



//SELECCION DE ELEMENTOS A OBSERVAR
const mainSections = document.querySelector('.scrollspy-example');
const arraySections = Array.from(mainSections.children);

const itemsAnimadosDerecha = document.querySelectorAll('.animado-2')
const itemsAnimadosIzquierda = document.querySelectorAll('.animado-3');

//Se crea el observador para los elementos que se animan hacia arriba
const observerSections = new IntersectionObserver(callbackSections, options);
const observerAnimadoDerecha = new IntersectionObserver(animadoDerecha);
const observerAnimadoIzquierda = new IntersectionObserver(animadoIzquierda);
//Se empiezan a observar.

arraySections.forEach((element, i) => {
    observerSections.observe(element);
})

itemsAnimadosDerecha.forEach(element => {
    observerAnimadoDerecha.observe(element);
})

itemsAnimadosIzquierda.forEach(element => {
    observerAnimadoIzquierda.observe(element);
});

//EVENTO SCROLL

addEventListener('scroll', e => {
    // console.log(e);
    const navBarPrincipal = document.querySelector('.navbar-principal');
    const mainUlChildren = mainMenuOptions.querySelectorAll('.nav-item');

    if (e.isTrusted) {
        navBarPrincipal.classList.add('bg-transparent')
            // mainUlChildren.classList.add('text-dark');
        mainUlChildren.forEach(element => element.firstElementChild.classList.add('text-dark'))
    }
    setTimeout((e) => {
        navBarPrincipal.classList.remove('bg-transparent')
        mainUlChildren.forEach(element => element.firstElementChild.classList.remove('text-dark'))


    }, 1000);
})