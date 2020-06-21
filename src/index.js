import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router } from "react-router-dom";
import { IntlProvider } from "react-intl";
import languages from "./languages";

const AppIndex = () => {
  const [lang, setLang] = useState("en");
  useEffect(() => setLang(lang), [lang]);

  return (
    <React.StrictMode>
      <IntlProvider locale={lang} languages={languages[lang]}>
        <Router>
          <div
            style={{
              direction: lang === "ar" ? "rtl" : "ltr",
              fontFamily: "Helvetica",
            }}
          >
            <App setLang={setLang} lang={lang} />
          </div>
        </Router>
      </IntlProvider>
    </React.StrictMode>
  );
};

ReactDOM.render(<AppIndex />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
