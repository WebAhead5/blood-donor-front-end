import { atom } from "recoil";

export const logsState = atom({
  key: "logsState",
  default: [
    {
        date: "12-3-2005",
        pulse: "74",
        pressure: "70/120",
        hemoglobin: "13.5"
    },
    {
        date: "12-3-2005",
        pulse: "74",
        pressure: "70/120",
        hemoglobin: "13.5"
    }
  ],
});