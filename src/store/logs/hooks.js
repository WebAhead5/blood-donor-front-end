import { useRecoilState } from "recoil";
import { logsState } from './atoms';


export const useSetLogsState = () => {
  const [items, setItems] = useRecoilState(logsState);
  return (data) => {
    setItems(data);
  };
};