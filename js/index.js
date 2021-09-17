const menuPrincipal = document.querySelector('#menu-principal_ul');
const optionsMainList = Array.from(menuPrincipal.children);

//Pintar los botones del menu principal al hacer click
menuPrincipal.addEventListener('click', (e) => {
    // console.log(e.target);
    if (e.target && e.target.tagName === 'A') {
        let elemento = e.target;

        optionsMainList.forEach(element => {
            element.children[0].classList.remove('active')
        });

        elemento.classList.add('active');

    }
    // optionsMainList.forEach(element => {
    //     element.children[0].classList.remove('active')
    // });
    // elemento.classList.add('active');


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

//Efecto suave hacia arriba de los elementos 
const elementosAnimados = document.querySelectorAll('.animado');
addEventListener('scroll', () => {
    scrollTopPagina = document.documentElement.scrollTop;

    // console.log(scrollTopPagina);
    // console.log(typeof elementosAnimados);

    arrayAnimados = Array.from(elementosAnimados);

    elementosAnimados.forEach((element) => {
        // console.log(element);

        if (scrollTopPagina > element.offsetTop - 300) {
            element.style.opacity = '1';
            element.classList.add('mostrarArriba');
        }
    })
})






