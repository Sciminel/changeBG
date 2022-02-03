const bouton = document.querySelector('.btn');
const body = document.querySelector("body");
const valeur = document.querySelector('.valeur')

bouton.style.color = 'red'


bouton.addEventListener('click', (e) => {
    e.preventDefault();

    let strValue = "0123456789abcdef"
    let couleurs = "#";

    for(let i = 0; i < 6; i++){
        couleurs += strValue[(Math.trunc(Math.random(0,1) *strValue.length))]
    }

    body.style.background = couleurs;
    valeur.innerText = `Valeur en hexadécimal : ${couleurs}`

})