import { useRecoilState } from "recoil";
import { personalSettings } from './atoms';

export const useSetPersonalSettings = () => {
    const [  , setPersonalSettings ] = useRecoilState(personalSettings)
    return (data) => {
        setPersonalSettings(data)
    }
}