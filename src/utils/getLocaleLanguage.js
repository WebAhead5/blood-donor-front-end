const firstTwoLettersRegex = /^../

const langOptions = ['ar', 'en', 'he']

const getLocaleLang = () => {
    const selectedLang = localStorage.getItem('userLang');

<<<<<<< HEAD
    if (selectedLang && langOptions.includes(selectedLang)) return selectedLang
    if (navigator.languages) {

        const osLang = navigator.languages[0].match(firstTwoLettersRegex)[0].toLowerCase()
        if (langOptions.includes(osLang))
            return osLang
    }
    if (navigator.language) {
        const osLang = navigator.language.match(firstTwoLettersRegex)[0].toLowerCase()
        if (langOptions.includes(osLang))
            return osLang
=======
    if(selectedLang && langOptions.includes(selectedLang)) return selectedLang
    if(navigator.languages){ 
        const osLang = navigator.languages[0].match(firstTwoLettersRegex)[0].toLowerCase()
        if(langOptions.includes(osLang))
        return osLang
    }
    if(navigator.language){ 
        const osLang = navigator.language.match(firstTwoLettersRegex)[0].toLowerCase()
        if(langOptions.includes(osLang))
        return osLang
>>>>>>> 9ef1571f469df43d66c1437da74c9b9fabe83196
    }
    return 'he'

}


export default getLocaleLang;
