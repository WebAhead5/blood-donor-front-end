import { useRecoilState } from "recoil";
import { personalSettings } from './atoms';

export const useSetPersonalSettings = () => {
    const [, setPersonalSettings] = useRecoilState(personalSettings)
    return (data) => {
        setPersonalSettings(data)
    }
}

export const useIncreaseDonationCount = () => {
    const [items, setItems] = useRecoilState(personalSettings)
    return () => {
        let newItem = { ...items, "donationCount": items.donationCount + 1 };
        setItems(newItem)
    }
}
