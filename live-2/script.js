// Fonction "incluse" en JS => native
// alert = nom de ma fonction ( camelCase )
// () = appeler une fonction "lancer / éxécuter"
// "...." = String, chaine de caractères
alert("Fichier lié")
// alert(1234)

// Fonction pour se débugger
// console = objet JS natif
// log = fonction lié à cet objet
// const console = {
//     log: 'Ma fonction de log'
// }
console.log("Mon fichier est lié")
console.warn("Je suis un avertissement")
console.error("Je suis une erreur")

// Écrire une fonction méthode ES5
function addition() {
    // code qui appartient à ma fonction "addition"
}
addition()

// Écrire une fonction méthode ES6 alias "fat-arrow" = la grosse flèche "=>"
const soustraction = () => {
    // code qui appartient à ma fonction "soustraction"
}
soustraction()

// Dire bonjour
const sayHello = (name, familyName) => {
    // name existe uniquement ici entre mes "{}""
    console.log("Bonjour " + name + " " + familyName)
    console.log("Bonjour", name, familyName)
    console.log(`Bonjour ${name} ${familyName}`) // Interpolation de variables
}
const firstName = "Charlïne"
const lastName = "Laporte"
sayHello(firstName, lastName)