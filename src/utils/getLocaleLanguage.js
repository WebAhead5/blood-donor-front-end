const getLocaleLang = () =>  navigator.languages? navigator.languages[0].split('-')[0] : navigator.language.split('-')[0]? navigator.language : 'he';


export default getLocaleLang;