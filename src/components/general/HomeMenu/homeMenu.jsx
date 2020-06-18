import React from "react";
import "./homeMenu.css";
import { CarouselProvider, Slider, Slide } from "pure-react-carousel";
import { useHistory } from "react-router-dom";

function HomeMenuItem(props) {
  return (
    <div>
      <div className="homemenuitem-card">
        <img src={props.icon} alt="icon" />
        <p>{props.text}</p>
      </div>
    </div>
  );
}

export const HomeMenu = () => {
  const history = useHistory();

  return (
    <div>
      <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={125}
        totalSlides={2}
        dragEnabled={true}
        touchEnabled={true}
        visibleSlides={2}
        id="carousel"
      >
        <Slider>
          <div className="homemenu-container">
            <Slide>
              <HomeMenuItem
                onClick={() => history.push("/how-to-donate")}
                icon="/img/dollar-icon.svg"
                text="support us 
        financial"
              />
            </Slide>
            <Slide>
              <HomeMenuItem
                onClick={() => history.push("/how-to-donate")}
                icon="/img/icon3.svg"
                text="How To Donate
      Blood"
              />
            </Slide>
            <Slide>
              <HomeMenuItem
                onClick={() => history.push("/contribute")}
                icon="/img/icon2.svg"
                text="ways you could contribute "
              />
            </Slide>
          </div>
        </Slider>
      </CarouselProvider>
    </div>
  );
};

export default HomeMenu;
