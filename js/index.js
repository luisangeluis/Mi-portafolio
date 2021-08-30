const menuPrincipal = document.querySelector('#menu-principal_ul');
const optionsMainList = Array.from(menuPrincipal.children);

menuPrincipal.addEventListener('click', (e) => {
    let elemento = e.target;

    // optionsMainList.forEach(option => {
    //     // console.log(option.children[0].classList.remove('active'));
    //     // if (option.children[0].classList.contains('active')) {
    //     //     option.children[0].classList.remove('active')
    //     // }

    // })

    optionsMainList.map(option => {
        if (option.children[0].classList.contains('active')) {
            option.children[0].classList.remove('active')
        }
    })

    elemento.classList.add('active');

})