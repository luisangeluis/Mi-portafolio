const menuPrincipal = document.querySelector('#menu-principal_ul');
const optionsMainList = Array.from(menuPrincipal.children);

menuPrincipal.addEventListener('click', (e) => {
    let elemento = e.target;
    
    optionsMainList.forEach(element => {
        element.children[0].classList.remove('active')
    });
    elemento.classList.add('active');
    

})

