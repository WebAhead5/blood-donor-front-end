import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router } from "react-router-dom";
import { RecoilRoot } from 'recoil'
require('dotenv').config();

const AppIndex = () => {

    
  return (
    <React.StrictMode>
      <RecoilRoot>       
          <Router>       
              <App />          
          </Router>      
      </RecoilRoot>
    </React.StrictMode>
  );
};

ReactDOM.render(<AppIndex />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register()
