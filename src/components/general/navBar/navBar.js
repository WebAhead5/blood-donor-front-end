import React, {Fragment, useEffect, useRef} from "react";
import {useHistory} from "react-router-dom";
import NavBarItem from "../navBarItem";
import "./navBar.css";


const navBarData=[
    {
        title:"home",
        redirectionLink:"/",
        iconSrc:"/img/icon-nav-home.svg"
    },{
        title:"Goal",
        redirectionLink:"/goals",
        iconSrc:"/img/icon-nav-flag.svg"
    },{
        title:"map",
        redirectionLink:"/map",
        iconSrc:"/img/icon-nav-map.svg"
    },{
        title:"personal",
        redirectionLink:"/personal",
        iconSrc:"/img/icon-nav-profile.svg"
    },{
        title:"settings",
        redirectionLink:"/settings",
        iconSrc:"/img/icon-nav-settings.svg"
    },
]



function NavBar({
                    children,
                    className,
                    elementClassName,
                    initialPosIndex = 0,
                }) {
    //reference the dom elements
    let container = useRef(null);
    let selectedItem = useRef(null);
    let history = useHistory()

    //add an onClick event that:
    // 1. sets the size of the "selected item div" to equal to the provided dom element
    // 2. set the position of the "selected item div" based on the div child index
    function setSelectedItemDimensions(index, domElement) {
        selectedItem.current.style.height = `${domElement.offsetHeight}px`;
        selectedItem.current.style.width = `${domElement.offsetWidth}px`;
        selectedItem.current.style.left = `${index * domElement.clientWidth}px`;
    }

    useEffect(() => {
        for (let index = 0; index < container.current.children.length; index++) {
            let childElement = container.current.children[index];

            //add on click event to every child of the nav bar that sets the visuals
            childElement.addEventListener("click", () =>
                setSelectedItemDimensions(index, childElement)
            );

            //set the visuals of the initial selected item
            if (initialPosIndex === index)
                setSelectedItemDimensions(index, childElement);
        }
    }, []);

    return (
        <header className="navBar">
            <nav className={`navBar_flexContainer ${className}`} ref={container}>
                {children ? (
                    children
                ) : (
                    navBarData.map(element=>
                        <NavBarItem
                            src={element.iconSrc}
                            title={element.title}
                            className={`navBar_item ${elementClassName}`}
                            onClick={() => history.push(element.redirectionLink)}
                        />
                    )

                )}
                <div ref={selectedItem} className="navBar_selectedItem"/>
            </nav>
        </header>
    );
}

export default NavBar;
