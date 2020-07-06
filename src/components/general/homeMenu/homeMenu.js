import React, { useRef, useEffect } from "react";
import "./homeMenu.css";
import { useHistory } from "react-router-dom";
import HomeMenuItem from "../homeMenuitem";
import { useRecoilValue } from 'recoil'
import { userLanguageState } from '../../../store/userLanguage'



export const HomeMenu = ({ data }) => {
  const history = useHistory();
  const myScrollBar = useRef();
  const language = useRecoilValue(userLanguageState);

  useEffect(() => {
    const scrollWidth = 215 * data.length;
    myScrollBar.current.scrollLeft = (scrollWidth - window.innerWidth) / 2
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data])

  return (
    <div className="homemenu"  >

      <div className="homemenu-container" ref={myScrollBar} >

        {data.map(({ src, title, redirectionLink }, index) =>
          <HomeMenuItem
            key={index}
            onClick={() => window.open(redirectionLink)}
            icon={src}
            text={title[language]}
          />


        )}
      </div>
    </div>


  );
};

export default HomeMenu;
