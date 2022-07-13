import React, { useState } from "react";
import "./destinations.css";

import { place1 } from "./imports";

const DestinationsData = [
  {
    id: 1,
    img: place1,
    name: "Nanjing, China",
    about: "These exercises ran in parallel with a series of focus groups comprising of parents. These exercises ran in parallel with a series.",
  },
 
  {
    id: 2,
    img: place1,
    name: "Nanjing, China",
    about: "These exercises ran in parallel with a series of focus groups comprising of parents. These exercises ran in parallel with a series.",
  },
 
  {
    id: 3,
    img: place1,
    name: "Nanjing, China",
    about: "These exercises ran in parallel with a series of focus groups comprising of parents. These exercises ran in parallel with a series.",
  },
 
  {
    id: 4,
    img: place1,
    name: "Nanjing, China",
    about: "These exercises ran in parallel with a series of focus groups comprising of parents. These exercises ran in parallel with a series.",
  },
 
  {
    id: 5,
    img: place1,
    name: "Nanjing, China",
    about: "These exercises ran in parallel with a series of focus groups comprising of parents. These exercises ran in parallel with a series.",
  },
 
  {
    id: 6,
    img: place1,
    name: "Nanjing, China",
    about: "These exercises ran in parallel with a series of focus groups comprising of parents. These exercises ran in parallel with a series.",
  },
 
  {
    id: 7,
    img: place1,
    name: "Nanjing, China",
    about: "These exercises ran in parallel with a series of focus groups comprising of parents. These exercises ran in parallel with a series.",
  },
 
  {
    id: 8,
    img: place1,
    name: "Nanjing, China",
    about: "These exercises ran in parallel with a series of focus groups comprising of parents. These exercises ran in parallel with a series.",
  },
 
  {
    id: 9,
    img: place1,
    name: "Nanjing, China",
    about: "These exercises ran in parallel with a series of focus groups comprising of parents. These exercises ran in parallel with a series.",
  },
 
];

let ActiveIndex = 0;
let nextSlide,prevSlide;

let nextpressed;

const Destinations = () => {
  const [slideIndex, setSlideIndex] = useState(0);


  let nextStyle = {
      transform : `translateX(-${slideIndex * 100}%)`,
  };

  let prevStyle = {
    transform : `translateX(-${slideIndex * 100}%)`,
};

  

  nextSlide = () => {
    nextpressed = true;
    if (slideIndex < DestinationsData.length - 1) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === DestinationsData.length - 1) {
      setSlideIndex(0);
    }
    
  };

  prevSlide = () => {
    nextpressed = false;

    if (slideIndex === 0) {
      setSlideIndex(DestinationsData.length - 1);

      console.log("main");
    } else if (slideIndex > 0) {
      setSlideIndex(slideIndex - 1);
      console.log("nhi main");
    }
  };



  return (
    <div className="DestinationsContainer">
      <div className="wrapper">
        <div className="slideRow">
          {DestinationsData.map((item, index) => (
            <div style={nextpressed ? nextStyle: prevStyle}
              key={item.id}
              className={slideIndex === index ? "slide active-anim" : "slide"}
            >
              <div className="DestinationContainer">
                <div className="destinationImg">
                  <img src={item.img} alt="" />
                </div>

                {slideIndex === index && (
                  <div className="destinationDesc">
                    <div className="icondiv">
                    <svg  viewBox="0 0 28 23" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16.8125 19.8282C17.9591 21.6629 19.6505 22.5802 21.8865 22.5802C23.4345 22.5802 24.7245 22.0642 25.7565 21.0322C26.8458 19.9429 27.3905 18.6242 27.3905 17.0762C27.3905 15.4135 26.8458 14.0949 25.7565 13.1202C24.7245 12.0882 23.4345 11.5722 21.8865 11.5722C20.6825 11.5722 19.6218 11.9449 18.7045 12.6902C18.5325 12.1742 18.4465 11.5722 18.4465 10.8842C18.4465 9.22154 19.0771 7.58754 20.3385 5.9822C21.6571 4.37687 23.2051 3.20154 24.9825 2.4562L24.2085 0.908203C21.2271 2.28421 18.9911 4.11887 17.5005 6.4122C16.0671 8.70554 15.3505 11.2855 15.3505 14.1522C15.3505 16.3882 15.8378 18.2802 16.8125 19.8282Z" fill="black"/>
<path d="M2.19247 19.8282C3.33914 21.6629 5.03047 22.5802 7.26647 22.5802C8.81447 22.5802 10.1045 22.0642 11.1365 21.0322C12.2258 19.9429 12.7705 18.6242 12.7705 17.0762C12.7705 15.4135 12.2258 14.0949 11.1365 13.1202C10.1045 12.0882 8.81447 11.5722 7.26647 11.5722C6.06247 11.5722 5.0018 11.9449 4.08447 12.6902C3.91247 12.1742 3.82647 11.5722 3.82647 10.8842C3.82647 9.22154 4.45714 7.58754 5.71847 5.9822C7.03714 4.37687 8.58514 3.20154 10.3625 2.4562L9.58847 0.908203C6.60714 2.28421 4.37114 4.11887 2.88047 6.4122C1.44714 8.70554 0.730469 11.2855 0.730469 14.1522C0.730469 16.3882 1.2178 18.2802 2.19247 19.8282Z" fill="black"/>
</svg>

                    </div>
                    <h3 className="destinationName">{item.name}</h3>
                    <p className="desc">{item.about}</p>
                  </div>
                )}
              </div>

              {}
            </div>
          ))}
        </div>
        <button onClick={nextSlide} >Next</button>
        <button onClick={prevSlide} >Prev</button>

      </div>
    </div>
  );
};



export default Destinations;
