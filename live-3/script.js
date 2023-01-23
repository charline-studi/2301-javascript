// Condition
// PSEUDO CODE : Si.... Ou Si.... Sinon...
// CODE : if ... else if ... else 
const age = prompt("Quel âge avez-vous ?")

// Si age n'est pas un nombre
if ( isNaN(age) ) {
    console.log('Age donné n\'est pas un nombre')
}
else if ( age < 21 && age > 18 ) {
    console.log('Est mineur pour les USA et est majeur pour les Européens')
}
else if ( age < 18 ) {
    console.log('Est mineur pour tout le monde')
}
else {
    console.log('Est majeur')
}

// Ternaire
const isDarkModeOn = true
const backgroundColor = isDarkModeOn ? "black" : "white"
console.log('backgroundcolor', backgroundColor)
