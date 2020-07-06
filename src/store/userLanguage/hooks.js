import { useRecoilState } from "recoil";
import { userLanguageState } from './atoms';

export const useSetUserLanguage = () => {
    const [  , setUserLanguage ] = useRecoilState(userLanguageState)
    return (data) => {
        setUserLanguage(data)
    }
}