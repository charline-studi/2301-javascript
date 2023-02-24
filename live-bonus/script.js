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
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
        .then((response) => response.json()) // Javascript Object NotatiON
        .then((data) => {
            /* ÉTAPE 3 : RÉCUPÉRER LA DONNÉE */
            const informationsNeeded = extractData(data[0])
            renderToHTML(informationsNeeded)
        })
        .catch((error) => {
            alert('Le mot demandé n\'existe pas')
            console.error(error)
        })
}

const extractData = (data) => {
    // 1 - Mot 
    const word = data.word
    // 2 - Écriture phonétique
    const phonetic = findProp(data.phonetics, "text")
    // 3 - Prononciation (audio)
    const pronoun = findProp(data.phonetics, "audio")
    // 4 - Définition(s)
    const meanings = data.meanings

    return {
        word: word,
        phonetic: phonetic,
        pronoun: pronoun, 
        meanings: meanings
    }
}

const findProp = (array, name) => {
    // Elle parcours un tableau d'objets
    for (let i = 0; i < array.length; i++) {
        // Et cherche dans ce tableau, si l'objet en cours contient une certaines propriété
        const currentObject = array[i]
        const hasProp = currentObject.hasOwnProperty(name)
        // Alors elle renvoit cette propriété
        if (hasProp) return currentObject[name]
    }
}

/* ÉTAPE 4 : Afficher les informations de mon mot sur ma page */
const renderToHTML = () => {
    console.log('AJOUTER LES INFOS SUR MA PAGE HTML')
}



// LANCEMENT DU PROGRAMME
watchSubmit()