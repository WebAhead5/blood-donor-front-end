import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router } from "react-router-dom";
import { IntlProvider } from "react-intl";
import languages from "./languages";
import { RecoilRoot } from 'recoil'
import getLocaleLang from './utils/getLocaleLanguage'
require('dotenv').config();

const AppIndex = () => {

  
  const [lang, setLang] = useState("en");
  const localeLanguage = getLocaleLang()

  useEffect(() => setLang(localeLanguage), [lang]);
  
  
  return (
    <React.StrictMode>
      <RecoilRoot>
        <IntlProvider locale={lang} messages={languages[lang]}>
          <Router>
            <div id="TextDirection"
              style={{
                direction: (lang === "ar" || lang === "he") ? "rtl" : "ltr",
                fontFamily: ['Alef', 'sans-serif'],
              }}
            >
              <App setLang={setLang} lang={lang} />
            </div>
          </Router>
        </IntlProvider>
      </RecoilRoot>
    </React.StrictMode>
  );
};

ReactDOM.render(<AppIndex />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register()
