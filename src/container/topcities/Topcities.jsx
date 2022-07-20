import React, { useState } from "react";
import "./topcities.css";
import { Topcity } from "../../components";
import { city } from "./imports";

const topcitiesdata = [
  {
    id: 1,
    img: city,
    country: "Japan",
    city: "Tokyo",
    stat: "10 Popular places",
  },

  {
    id: 2,
    img: city,

    country: "Japan",
    city: "Tokyo",
    stat: "10 Popular places",
  },
  {
    id: 3,
    img: city,

    country: "Japan",
    city: "Tokyo",
    stat: "10 Popular places",
  },
  {
    id: 4,
    img: city,

    country: "United States",
    city: "Silicon Valley",
    stat: "10 Popular places",
  },
  {
    id: 5,
    img: city,

    country: "Italy",
    city: "Rome",
    stat: "10 Popular places",
  },
  {
    id: 6,
    img: city,

    country: "India",
    city: "Ludhiana",
    stat: "10 Popular places",
  },
  {
    id: 7,
    img: city,

    country: "UAE",
    city: "Dubai",
    stat: "10 Popular places",
  },
];

let nextSlide, prevSlide;
let nextpressed;

const Topcities = () => {
  const [cityIndex, setCityIndex] = useState(0);

  let nextStyle = {
    transform: `translateX(-${cityIndex * 100}%)`,
  };

  let prevStyle = {
    transform: `translateX(-${cityIndex * 100}%)`,
  };

  nextSlide = () => {
    nextpressed = true;
    if (cityIndex < topcitiesdata.length - 1) {
      setCityIndex(cityIndex + 1);
    } else if (cityIndex === topcitiesdata.length - 1) {
      setCityIndex(0);
    }
  };

  prevSlide = () => {
    nextpressed = false;

    if (cityIndex === 0) {
      setCityIndex(topcitiesdata.length - 1);

      console.log("main");
    } else if (cityIndex > 0) {
      setCityIndex(cityIndex - 1);
      console.log("nhi main");
    }
  };

  return (
    <div className="topcitiesContainer">
      <div className="wrapper">
        <div className="row1">
          <div className="headings">
            <p className="subtitle">TOP CITIES</p>
            <h2 className="title">Our popular cities</h2>
            <p className="subhead">
              We’re a team of humans with the strategy, tools, and solutions and
              digital products.
            </p>
          </div>

          <div className="controls">
            <div onClick={prevSlide} className="control">
              <svg
                width="15"
                height="13"
                viewBox="0 0 15 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M5.24264 11.8033L0.46967 7.03031C0.176777 6.73741 0.176777 6.26254 0.46967 5.96965L5.24264 1.19668C5.53553 0.903784 6.01041 0.903784 6.3033 1.19668C6.59619 1.48957 6.59619 1.96444 6.3033 2.25734L2.81066 5.74998H14C14.4142 5.74998 14.75 6.08576 14.75 6.49998C14.75 6.91419 14.4142 7.24998 14 7.24998H2.81066L6.3033 10.7426C6.59619 11.0355 6.59619 11.5104 6.3033 11.8033C6.01041 12.0962 5.53553 12.0962 5.24264 11.8033Z"
                  fill="#152137"
                />
              </svg>
            </div>
            <div onClick={nextSlide} className="control">
              <svg
                width="15"
                height="13"
                viewBox="0 0 15 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M9.75736 11.8033L14.5303 7.03031C14.8232 6.73741 14.8232 6.26254 14.5303 5.96965L9.75736 1.19668C9.46447 0.903784 8.98959 0.903784 8.6967 1.19668C8.40381 1.48957 8.40381 1.96444 8.6967 2.25734L12.1893 5.74998H1C0.585786 5.74998 0.25 6.08576 0.25 6.49998C0.25 6.91419 0.585786 7.24998 1 7.24998H12.1893L8.6967 10.7426C8.40381 11.0355 8.40381 11.5104 8.6967 11.8033C8.98959 12.0962 9.46447 12.0962 9.75736 11.8033Z"
                  fill="#152137"
                />
              </svg>
            </div>
          </div>
        </div>

        <div className="slider">
          {topcitiesdata.map((item) => (
            <div
              className="topcitycard"
              key={item.id}
              style={nextpressed ? nextStyle : prevStyle}
            >
              <Topcity
                Img={item.img}
                Country={item.country}
                City={item.city}
                Stat={item.stat}
              />
            </div>
          ))}
        </div>
    
      </div>
    </div>
  );
};

export default Topcities;
