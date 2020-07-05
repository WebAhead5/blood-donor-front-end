const getLocaleLang = () =>  navigator.languages? navigator.languages[0] : navigator.language? navigator.language : 'he';


export default getLocaleLang;