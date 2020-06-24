import { atom } from "recoil";

export const logsState = atom({
  key: "logsState",
  default: [
    {
        id : "0",
        date: "2018-07-22",
        pulse: "74",
        pressure: "70/120",
        hemoglobin: "13.5"
    },
    {
        id : "1",
        date: "2018-07-22",
        pulse: "74",
        pressure: "70/120",
        hemoglobin: "13.5"
    }
  ],
});