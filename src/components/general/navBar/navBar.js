import React, { useEffect, useRef } from "react";
import { useHistory } from "react-router-dom";
import NavBarItem from "../navBarItem";
import "./navBar.css";
import { FormattedMessage } from 'react-intl'




const navBarData = [
  {
    title: <FormattedMessage id="Home" />,
    redirectionLink: "/",
    iconSrc: "/img/icon-nav-home.svg",
  },
  {
    title: <FormattedMessage id="Goals" />,
    redirectionLink: "/goals",
    iconSrc: "/img/icon-nav-flag.svg",
  },
  {
    title: <FormattedMessage id="Map" />,
    redirectionLink: "/map",
    iconSrc: "/img/icon-nav-map.svg",
  },
  {
    title: <FormattedMessage id="Personal" />,
    redirectionLink: "/personal",
    iconSrc: "/img/icon-nav-profile.svg",
  },
  {
    title: <FormattedMessage id="Settings" />,
    redirectionLink: "/settings",
    iconSrc: "/img/icon-nav-settings.svg",
  },
];

function NavBar({
  data = navBarData,
  className,
  elementClassName,
  initialPosIndex = 0,
}) {
  //reference the dom elements
  let container = useRef(null);
  let selectedItem = useRef(null);
  let history = useHistory();

  //add an onClick event that:
  // 1. sets the size of the "selected item div" to equal to the provided dom element
  // 2. set the position of the "selected item div" based on the div child index
  function setSelectedItemDimensions(index, domElement) {
    selectedItem.current.style.height = `${domElement.offsetHeight}px`;
    selectedItem.current.style.width = `${domElement.offsetWidth}px`;
    selectedItem.current.style.left = `${index * domElement.clientWidth}px`;
  }

  useEffect(() => {
    //update the selected item to match the initial route
    let filterRes = data.filter(
      (element) => window.location.pathname === element.redirectionLink
    );
    if (!filterRes.length)
      filterRes = data.filter(
        (element) =>
          element.redirectionLink !== "/" &&
          window.location.pathname.includes(element.redirectionLink)
      );

    if (filterRes.length) {
      let index = navBarData.indexOf(filterRes[0]);
      setSelectedItemDimensions(index, container.current.children[index]);
    }
  });

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
              //add on click event to every child of the nav bar that sets the visuals
              setSelectedItemDimensions(index, e.currentTarget);
              //redirect the user to the given route
              history.push(element.redirectionLink);
            }}
          />
        ))}
        <div ref={selectedItem} className="navBar_selectedItem" />
      </nav>
    </header>
  );
}

export default NavBar;
