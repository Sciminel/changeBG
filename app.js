const bouton = document.querySelector('.btn');
const body = document.querySelector("body");
const valeur = document.querySelector('.valeur')

bouton.style.color = 'red'


bouton.addEventListener('click', (e) => {
    e.preventDefault();

    let tabValue = ["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"]
    let couleurs = "#";

    for(let i = 0; i < 6; i++){
        couleurs += tabValue[(Math.trunc(Math.random(0,1) *10 +6))]
    }

    body.style.background = couleurs;
    valeur.innerText = `Valeur en hexadécimal : ${couleurs}`

})