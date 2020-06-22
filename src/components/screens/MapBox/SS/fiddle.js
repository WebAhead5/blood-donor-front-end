import React, { useState, useEffect, useRef, createRef } from 'react';
import ReactMapboxGl, { Marker } from "react-mapbox-gl";
import './test-map.css';
import useWindowScroll from '../../hooks/useWindowScroll';

const MapBox = ReactMapboxGl({
  accessToken: process.env.GATSBY_MAPBOX_TOKEN,
  scrollZoom: false, // disable scroll zoom
});

const chapters = {
  'baker': {
    bearing: 27,
    center: [-0.15591514, 51.51830379],
    zoom: 15.5,
    pitch: 20
  },
  'aldgate': {
    duration: 6000,
    center: [-0.07571203, 51.51424049],
    bearing: 150,
    zoom: 15,
    pitch: 0
  },
  'london-bridge': {
    bearing: 90,
    center: [-0.08533793, 51.50438536],
    zoom: 13,
    speed: 0.6,
    pitch: 40
  },
  'woolwich': {
    bearing: 90,
    center: [0.05991101, 51.48752939],
    zoom: 12.3
  },
  'gloucester': {
    bearing: 45,
    center: [-0.18335806, 51.49439521],
    zoom: 15.3,
    pitch: 20,
    speed: 0.5
  },
  'caulfield-gardens': {
    bearing: 180,
    center: [-0.19684993, 51.5033856],
    zoom: 12.3
  },
  'telegraph': {
    bearing: 90,
    center: [-0.10669358, 51.51433123],
    zoom: 17.3,
    pitch: 40
  },
  'charing-cross': {
    bearing: 90,
    center: [-0.12416858, 51.50779757],
    zoom: 14.3,
    pitch: 20
  }
};

const mapStyle = "mapbox://styles/mapbox/light-v9";

const Section = React.forwardRef(({ title, center }, ref) => {
  return (
    <div className="section" ref={ref}>
      <h3>{title}</h3>
      <p>{center}</p>
    </div>
  );
});

function TestMap() {
  const scrollPosition = useWindowScroll();
  const [activeChapterName, setActiveChapterName] = useState(() => 'baker');
  const mapRef = useRef();

  // create refs for locations to get bounds
  const refs = useRef(Object.keys(chapters).reduce((acc, value) => {
    acc[value] = createRef();
    return acc;
  }, {}));

  useEffect(() => {
    function setActiveChapter(chapterName) {
      if (chapterName === activeChapterName) return;
      setTimeout(() => {
        mapRef.current.flyTo(chapters[chapterName]);
      }, 10)

      refs.current[chapterName].current.classList.add('active');
      refs.current[activeChapterName].current.classList.remove('active');
      
      setActiveChapterName(chapterName);
    }

    function isElementOnScreen(id) {
      var element = refs.current[id].current;
      var bounds = element.getBoundingClientRect();
      return bounds.top < window.innerHeight && bounds.bottom > 0;
    }

    const chapterNames = Object.keys(chapters);
    for (let i = 0, len = chapterNames.length; i < len; i++) {
      let chapterName = chapterNames[i];
      if (isElementOnScreen(chapterName)) {
        setActiveChapter(chapterName);
        break;
      }
    }
  }, [scrollPosition, activeChapterName]);

  function handleStyleLoad(map) {
    mapRef.current = map;
  }

  return (
    <div>
      <MapBox
        style={mapStyle}
        containerStyle={{
          height: '100vh',
          width: '100vw'
        }}
        center={[-0.15591514, 51.51830379]}
        className="test-map"
        onStyleLoad={handleStyleLoad}
      >
        {Object.keys(chapters).map((chapter, index) => (
          <Marker
            key={index}
            coordinates={chapters[chapter].center}
            anchor="bottom"
          >
            <div
              style={{
                width: '28px',
                height: '28px',
                backgroundColor: '#33f',
                borderRadius: '50%',
              }}
            />
          </Marker>
        ))}
      </MapBox>
      <div className="features">
        {Object.keys(chapters).map((chapter, index) => (
          <Section
            key={index}
            title={chapter}
            center={chapters[chapter].center}
            ref={refs.current[chapter]}
          />
        ))}
      </div>
    </div>
  );
}

export default TestMap;