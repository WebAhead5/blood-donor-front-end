import React, {Fragment, useEffect, useRef} from 'react';
import NavBarItem from "../navBarItem";
import "../navBar.css";

function NavBar({children, className, elementClassName, initialPosIndex = 0}) {

    //reference the dom elements
    let container = useRef(null);
    let selectedItem = useRef(null);

    //add an onClick event that:
    // 1. sets the size of the "selected item div" to equal to the provided dom element
    // 2. set the position of the "selected item div" based on the div child index
    function setSelectedItemDimensions(index, domElement) {

            console.log(index, domElement)
            selectedItem.current.style.height = `${domElement.offsetHeight}px`;
            selectedItem.current.style.width = `${domElement.offsetWidth}px`;
            selectedItem.current.style.left = `${(index) * domElement.clientWidth}px`;

    }

    useEffect(() => {

        for (let index = 0; index < container.current.children.length; index++)
        {
            let childElement = container.current.children[index]

            //add on click event to every child of the nav bar that sets the visuals
            childElement.addEventListener("click", () => setSelectedItemDimensions(index,childElement ))

            //set the visuals of the initial selected item
            if(initialPosIndex === index)
                setSelectedItemDimensions(index,childElement)
        }
    }, [])


    return <header className="navBar">
        <nav className={`navBar_flexContainer ${className}`} ref={container}>
            {
                children ? children :
                    <Fragment>
                        <NavBarItem src="/img/icon-nav-home.svg" title="home" className={`navBar_item ${elementClassName}`}/>
                        <NavBarItem src="/img/icon-nav-flag.svg" title="Goal" className={`navBar_item ${elementClassName}`}/>
                        <NavBarItem src="/img/icon-nav-map.svg" title="map" className={`navBar_item ${elementClassName}`}/>
                        <NavBarItem src="/img/icon-nav-profile.svg" title="profile" className={`navBar_item ${elementClassName}`}/>
                        <NavBarItem src="/img/icon-nav-settings.svg" title="settings" className={`navBar_item ${elementClassName}`}/>
                    </Fragment>
            }
            < div ref={selectedItem} className="navBar_selectedItem"/>
        </nav>
    </header>

}

export default NavBar;