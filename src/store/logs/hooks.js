import { useRecoilState } from "recoil";
import { logsState } from './atoms';


export const useSetLogsState = () => {
  const [items, setItems] = useRecoilState(logsState);
  return (data) => {
    setItems(data);
  };
};

export const useClearEmptyValuesLogsState = () => {
  const [items, setItems] = useRecoilState(logsState);
  return (data) => {
    setItems(clearEmptyItems(data));
  };
};

const clearEmptyItems = (arr) => {
  let result = []
  arr.forEach(element => {
    if (!element.date && !element.pulse && !element.pressure && !element.hemoglobin) {

    }else{
      result.push(element);
    }
  });
  return result;
}