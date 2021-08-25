const menuPrincipal = document.querySelector('#menu-principal_ul');

console.log(menuPrincipal.Length)
console.log(menuPrincipal.children);

// menuPrincipal.children.forEach(element => {
//     console.log(element);
// });

const array = Array.from(menuPrincipal.children);

array.forEach(element => {
    console.log(element);
})