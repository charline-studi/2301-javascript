console.log('V1 : Mon dico anglais')

/*

MON PROGRAMME : 

> Je veux pouvoir donner la définition d'un mot à mes utilisateurs

- 1. Récupérer le mot saisi par l'utilisateur
- 2. Envoyer le mot à l'API ( https://dictionaryapi.dev/ )
- 3. Récupérer le JSON (la donnée) en lien avec mon mot
- 4. Afficher les informations de mon mot sur ma page (HTML)
- 5. Ajouter un lecteur pour écouter la prononciation du mot

*/


/* ÉTAPE 1 : Récupérer mon mot */
const watchSubmit = () => {
    const form = document.querySelector("#form")
    form.addEventListener("submit", (event) => {
        event.preventDefault()
        const data = new FormData(form)
        const wordToSearch = data.get("search")
        apiCall(wordToSearch)
    })
}


/* ÉTAPE 2 : Envoyer mon mot à l'API */
const apiCall = (word) => {
    console.log("WORD TO SEARCH", word)
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
        .then((response) => response.json())
        .then((data) => {
            /* ÉTAPE 3 : RÉCUPÉRER LA DONNÉE */
            const wordInformations = data[0]
            console.log("Mot", wordInformations.word)
        })
}






// LANCEMENT DU PROGRAMME
watchSubmit()