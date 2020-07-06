import { useRecoilState } from "recoil";
import { userLanguageState } from './atoms';
import { textDirection } from '../textDirection'


export const useSetUserLanguage = () => {
    const [  , setUserLanguage ] = useRecoilState(userLanguageState)
    const [ , setTextDirection ] = useRecoilState(textDirection)
    return (data) => {
        setUserLanguage(data)
        setTextDirection((data === "ar" || data === "he") ? "rtl" : "ltr")
    }
}