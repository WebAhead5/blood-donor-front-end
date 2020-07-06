import React, { useEffect, useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import NavBarItem from "../navBarItem";
import "./navBar.css";
import { FormattedMessage } from 'react-intl'
import { useRecoilValue } from 'recoil'
import { textDirection } from '../../../store/textDirection'
import { routes } from "../../../constants";



const navBarData = [
  {
    title: <FormattedMessage id="Home" />,
    redirectionLink: routes.home,
    iconSrc: "/img/icon-nav-home.svg",
  },
  {
    title: <FormattedMessage id="Goals" />,
    redirectionLink: routes.goals,
    iconSrc: "/img/icon-nav-flag.svg",
  },
  {
    title: <FormattedMessage id="Map" />,
    redirectionLink: routes.map,
    iconSrc: "/img/icon-nav-map.svg",
  },
  {
    title: <FormattedMessage id="Personal" />,
    redirectionLink: routes.personal,
    iconSrc: "/img/icon-nav-profile.svg",
  },
  {
    title: <FormattedMessage id="Settings" />,
    redirectionLink: routes.settings,
    iconSrc: "/img/icon-nav-settings.svg",
  },
];

function NavBar({
  data = navBarData,
  className,
  elementClassName,
}) {
  //reference the dom elements
  let container = useRef(null);
  let selectionHighlight = useRef(null);
  const [refresh, setRefresh] = useState(false)
  let history = useHistory();

  // text direction (rtl / ltr)
  const direction = useRecoilValue(textDirection)

  //set the dimensions + position of the highlighted item
  function setSelectedItemDimensions(index) {
    let domElement = container.current.children[index];
    selectionHighlight.current.style.height = `${domElement.offsetHeight}px`;
    selectionHighlight.current.style.width = `${domElement.offsetWidth}px`;
    if (direction === 'ltr') {
      selectionHighlight.current.style.left = `${index * domElement.clientWidth}px`;
    } else {
      selectionHighlight.current.style.right = `${index * domElement.clientWidth}px`;
    }
  }

  //get the url, match it with the routes of the nav bar items
  function setSelectedItemBasedOnUrl() {
    //update the selected item to match the initial route
    let filterRes = data.filter(element => window.location.pathname === element.redirectionLink);


    if (!filterRes.length)
      filterRes = data.filter(element => {
        if (element.redirectionLink === "/")
          return false;
        const regex = new RegExp(`^${element.redirectionLink}`, 'ig')
        return regex.test(window.location.pathname)
      })


    if (filterRes.length) {
      let index = navBarData.indexOf(filterRes[0]);
      setSelectedItemDimensions(index)
    }
  }

  useEffect(() => {
    setSelectedItemBasedOnUrl()

    let onResize = () => setSelectedItemBasedOnUrl();

    window.addEventListener("resize", onResize)
    return () => window.removeEventListener("resize", onResize)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [direction]);

  useEffect(() => {
    setSelectedItemBasedOnUrl()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [refresh])


  return (
    <header className="navBar">
      <nav className={`navBar_flexContainer ${className}`} ref={container} >
        {data.map((element, index) => (
          <NavBarItem
            key={index}
            src={element.iconSrc}
            title={element.title}
            className={`navBar_item ${elementClassName}`}
            onClick={(e) => {
              //store selected item index
              setRefresh(!refresh)
              //redirect the user to the given route
              history.push(element.redirectionLink);
            }}
          />
        ))}
        <div ref={selectionHighlight} className="navBar_selectedItem" />
      </nav>
    </header>
  );
}

export default NavBar;
