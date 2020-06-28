import React, { useRef, useEffect } from "react";
import "./homeMenu.css";
import { useHistory } from "react-router-dom";
import HomeMenuItem from "../homeMenuitem";


export const HomeMenu = ({ data }) => {
  const history = useHistory();
  const myScrollBar = useRef();

  useEffect(() => {
    const scrollWidth = 215 * data.length;
    myScrollBar.current.scrollLeft = (scrollWidth - window.innerWidth) / 2
  }, [])

  return (
    <div className="homemenu"  >

      <div className="homemenu-container" ref={myScrollBar} >

        {data.map(({src,title,redirectionLink}, index) =>
          <HomeMenuItem
            key={index}
            onClick={() => redirectionLink && history.push(redirectionLink)}
            icon={src}
            text={title}
          />


        )}
      </div>
    </div>


  );
};

export default HomeMenu;
