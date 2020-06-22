import React from "react";
import "./homeMenu.css";
import { useHistory } from "react-router-dom";
import HomeMenuItem from "../homeMenuitem";


export const HomeMenu = ({data }) => {
  const history = useHistory();

  return (
        <div  className="homemenu" >

          <div className="homemenu-container" >

            {data.map((element,index)=>
                    <HomeMenuItem
                        key={index}
                        onClick={() => history.push(element.redirectionLink)}
                        icon={element.src}
                        text={element.title}
                    />


            )}
          </div>
        </div>


  );
};

export default HomeMenu;
