import { useRecoilState } from "recoil";
import { logsState } from './atoms';
// import { useSetRecoilState } from "recoil";


export const useSetLogsState = () => {
  const [, setItems] = useRecoilState(logsState);
  return (data) => {
    setItems(data);
  };
};

export const useClearEmptyValuesLogsState = () => {
  const [, setItems] = useRecoilState(logsState);
  return (data) => {
    setItems(clearEmptyItems(data));
  };
};

export const useAddLogItemToLogsState = () => {
  const [items, setItems] = useRecoilState(logsState);

  return (item) => {
    
    if (!item.id) {
      let id = parseInt(items[items.length - 1].id, 10) + 1;
      let newItem = { ...item, "id": id.toString() };
      let temp = items.concat(newItem);
      setItems(temp);
    }else{
      let temp = updateItem(items,item);
      setItems(temp);
    }
  };
}

export const useSetLogState = () => {
  const [log, setLog] = useRecoilState(logsState);
    return (array) => {
      setLog(array)
    }
}

const updateItem = (items,item) => {
    let updatedItems = [];
    items.forEach((element) => {
        if(element.id === item.id){
          updatedItems.push(item);
        }else{
          updatedItems.push(element);
        }
    })

    return updatedItems;
}

const clearEmptyItems = (arr) => {
  let result = []
  arr.forEach(element => {
    if (!element.date && !element.pulse && !element.pressure && !element.hemoglobin) {

    } else {
      result.push(element);
    }
  });
  return result;
}