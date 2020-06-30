import { useRecoilState } from "recoil";
import { textDirection } from './atoms';

export const useSetTextDirection = () => {
    const [  , setDirection ] = useRecoilState(textDirection)
    return (data) => {
        setDirection(data)
    }
}