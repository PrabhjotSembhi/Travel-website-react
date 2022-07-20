import React, { useState } from "react";
import "./testimonials.css";
import { man } from "./imports";
import { Testimonial } from "../../components";

const TestimonialData = [


  {
    id: 1,
    img: man,
    name: "Sayem Ahmed",
    title: "Product designer",
    rating: (
      <svg
        width="93"
        height="16"
        viewBox="0 0 93 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8 0L10.022 5.21698L15.6085 5.52786L11.2716 9.06302L12.7023 14.4721L8 11.44L3.29772 14.4721L4.72837 9.06302L0.391548 5.52786L5.97802 5.21698L8 0Z"
          fill="#FAB33F"
        />
        <path
          d="M27.2002 0L29.2222 5.21698L34.8086 5.52786L30.4718 9.06302L31.9025 14.4721L27.2002 11.44L22.4979 14.4721L23.9286 9.06302L19.5917 5.52786L25.1782 5.21698L27.2002 0Z"
          fill="#FAB33F"
        />
        <path
          d="M46.4004 0L48.4224 5.21698L54.0088 5.52786L49.672 9.06302L51.1027 14.4721L46.4004 11.44L41.6981 14.4721L43.1288 9.06302L38.7919 5.52786L44.3784 5.21698L46.4004 0Z"
          fill="#FAB33F"
        />
        <path
          d="M65.5996 0L67.6216 5.21698L73.2081 5.52786L68.8712 9.06302L70.3019 14.4721L65.5996 11.44L60.8973 14.4721L62.328 9.06302L57.9912 5.52786L63.5776 5.21698L65.5996 0Z"
          fill="#FAB33F"
        />
        <path
          d="M84.7998 0L86.8218 5.21698L92.4083 5.52786L88.0714 9.06302L89.5021 14.4721L84.7998 11.44L80.0975 14.4721L81.5282 9.06302L77.1914 5.52786L82.7778 5.21698L84.7998 0Z"
          fill="#FAB33F"
        />
      </svg>
    ),
    review: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. soluta iste molestias.'
  },

  {
    id: 2,
    img: man,
    name: "Sayem Ahmed",
    title: "Product designer",
    rating: (
      <svg
        width="93"
        height="16"
        viewBox="0 0 93 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8 0L10.022 5.21698L15.6085 5.52786L11.2716 9.06302L12.7023 14.4721L8 11.44L3.29772 14.4721L4.72837 9.06302L0.391548 5.52786L5.97802 5.21698L8 0Z"
          fill="#FAB33F"
        />
        <path
          d="M27.2002 0L29.2222 5.21698L34.8086 5.52786L30.4718 9.06302L31.9025 14.4721L27.2002 11.44L22.4979 14.4721L23.9286 9.06302L19.5917 5.52786L25.1782 5.21698L27.2002 0Z"
          fill="#FAB33F"
        />
        <path
          d="M46.4004 0L48.4224 5.21698L54.0088 5.52786L49.672 9.06302L51.1027 14.4721L46.4004 11.44L41.6981 14.4721L43.1288 9.06302L38.7919 5.52786L44.3784 5.21698L46.4004 0Z"
          fill="#FAB33F"
        />
        <path
          d="M65.5996 0L67.6216 5.21698L73.2081 5.52786L68.8712 9.06302L70.3019 14.4721L65.5996 11.44L60.8973 14.4721L62.328 9.06302L57.9912 5.52786L63.5776 5.21698L65.5996 0Z"
          fill="#FAB33F"
        />
        <path
          d="M84.7998 0L86.8218 5.21698L92.4083 5.52786L88.0714 9.06302L89.5021 14.4721L84.7998 11.44L80.0975 14.4721L81.5282 9.06302L77.1914 5.52786L82.7778 5.21698L84.7998 0Z"
          fill="#FAB33F"
        />
      </svg>
    ),
    review: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. soluta iste molestias.'
  },


  {
    id: 3,
    img: man,
    name: "Sayem Ahmed",
    title: "Product designer",
    rating: (
      <svg
        width="93"
        height="16"
        viewBox="0 0 93 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8 0L10.022 5.21698L15.6085 5.52786L11.2716 9.06302L12.7023 14.4721L8 11.44L3.29772 14.4721L4.72837 9.06302L0.391548 5.52786L5.97802 5.21698L8 0Z"
          fill="#FAB33F"
        />
        <path
          d="M27.2002 0L29.2222 5.21698L34.8086 5.52786L30.4718 9.06302L31.9025 14.4721L27.2002 11.44L22.4979 14.4721L23.9286 9.06302L19.5917 5.52786L25.1782 5.21698L27.2002 0Z"
          fill="#FAB33F"
        />
        <path
          d="M46.4004 0L48.4224 5.21698L54.0088 5.52786L49.672 9.06302L51.1027 14.4721L46.4004 11.44L41.6981 14.4721L43.1288 9.06302L38.7919 5.52786L44.3784 5.21698L46.4004 0Z"
          fill="#FAB33F"
        />
        <path
          d="M65.5996 0L67.6216 5.21698L73.2081 5.52786L68.8712 9.06302L70.3019 14.4721L65.5996 11.44L60.8973 14.4721L62.328 9.06302L57.9912 5.52786L63.5776 5.21698L65.5996 0Z"
          fill="#FAB33F"
        />
        <path
          d="M84.7998 0L86.8218 5.21698L92.4083 5.52786L88.0714 9.06302L89.5021 14.4721L84.7998 11.44L80.0975 14.4721L81.5282 9.06302L77.1914 5.52786L82.7778 5.21698L84.7998 0Z"
          fill="#FAB33F"
        />
      </svg>
    ),
    review: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. soluta iste molestias.'
  },

  {
    id: 4,
    img: man,
    name: "Sayem Ahmed",
    title: "Product designer",
    rating: (
      <svg
        width="93"
        height="16"
        viewBox="0 0 93 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8 0L10.022 5.21698L15.6085 5.52786L11.2716 9.06302L12.7023 14.4721L8 11.44L3.29772 14.4721L4.72837 9.06302L0.391548 5.52786L5.97802 5.21698L8 0Z"
          fill="#FAB33F"
        />
        <path
          d="M27.2002 0L29.2222 5.21698L34.8086 5.52786L30.4718 9.06302L31.9025 14.4721L27.2002 11.44L22.4979 14.4721L23.9286 9.06302L19.5917 5.52786L25.1782 5.21698L27.2002 0Z"
          fill="#FAB33F"
        />
        <path
          d="M46.4004 0L48.4224 5.21698L54.0088 5.52786L49.672 9.06302L51.1027 14.4721L46.4004 11.44L41.6981 14.4721L43.1288 9.06302L38.7919 5.52786L44.3784 5.21698L46.4004 0Z"
          fill="#FAB33F"
        />
        <path
          d="M65.5996 0L67.6216 5.21698L73.2081 5.52786L68.8712 9.06302L70.3019 14.4721L65.5996 11.44L60.8973 14.4721L62.328 9.06302L57.9912 5.52786L63.5776 5.21698L65.5996 0Z"
          fill="#FAB33F"
        />
        <path
          d="M84.7998 0L86.8218 5.21698L92.4083 5.52786L88.0714 9.06302L89.5021 14.4721L84.7998 11.44L80.0975 14.4721L81.5282 9.06302L77.1914 5.52786L82.7778 5.21698L84.7998 0Z"
          fill="#FAB33F"
        />
      </svg>
    ),
    review: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. soluta iste molestias.'
  },


  {
    id: 5,
    img: man,
    name: "Sayem Ahmed",
    title: "Product designer",
    rating: (
      <svg
        width="93"
        height="16"
        viewBox="0 0 93 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8 0L10.022 5.21698L15.6085 5.52786L11.2716 9.06302L12.7023 14.4721L8 11.44L3.29772 14.4721L4.72837 9.06302L0.391548 5.52786L5.97802 5.21698L8 0Z"
          fill="#FAB33F"
        />
        <path
          d="M27.2002 0L29.2222 5.21698L34.8086 5.52786L30.4718 9.06302L31.9025 14.4721L27.2002 11.44L22.4979 14.4721L23.9286 9.06302L19.5917 5.52786L25.1782 5.21698L27.2002 0Z"
          fill="#FAB33F"
        />
        <path
          d="M46.4004 0L48.4224 5.21698L54.0088 5.52786L49.672 9.06302L51.1027 14.4721L46.4004 11.44L41.6981 14.4721L43.1288 9.06302L38.7919 5.52786L44.3784 5.21698L46.4004 0Z"
          fill="#FAB33F"
        />
        <path
          d="M65.5996 0L67.6216 5.21698L73.2081 5.52786L68.8712 9.06302L70.3019 14.4721L65.5996 11.44L60.8973 14.4721L62.328 9.06302L57.9912 5.52786L63.5776 5.21698L65.5996 0Z"
          fill="#FAB33F"
        />
        <path
          d="M84.7998 0L86.8218 5.21698L92.4083 5.52786L88.0714 9.06302L89.5021 14.4721L84.7998 11.44L80.0975 14.4721L81.5282 9.06302L77.1914 5.52786L82.7778 5.21698L84.7998 0Z"
          fill="#FAB33F"
        />
      </svg>
    ),
    review: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. soluta iste molestias.'
  },

  {
    id: 6,
    img: man,
    name: "Sayem Ahmed",
    title: "Product designer",
    rating: (
      <svg
        width="93"
        height="16"
        viewBox="0 0 93 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8 0L10.022 5.21698L15.6085 5.52786L11.2716 9.06302L12.7023 14.4721L8 11.44L3.29772 14.4721L4.72837 9.06302L0.391548 5.52786L5.97802 5.21698L8 0Z"
          fill="#FAB33F"
        />
        <path
          d="M27.2002 0L29.2222 5.21698L34.8086 5.52786L30.4718 9.06302L31.9025 14.4721L27.2002 11.44L22.4979 14.4721L23.9286 9.06302L19.5917 5.52786L25.1782 5.21698L27.2002 0Z"
          fill="#FAB33F"
        />
        <path
          d="M46.4004 0L48.4224 5.21698L54.0088 5.52786L49.672 9.06302L51.1027 14.4721L46.4004 11.44L41.6981 14.4721L43.1288 9.06302L38.7919 5.52786L44.3784 5.21698L46.4004 0Z"
          fill="#FAB33F"
        />
        <path
          d="M65.5996 0L67.6216 5.21698L73.2081 5.52786L68.8712 9.06302L70.3019 14.4721L65.5996 11.44L60.8973 14.4721L62.328 9.06302L57.9912 5.52786L63.5776 5.21698L65.5996 0Z"
          fill="#FAB33F"
        />
        <path
          d="M84.7998 0L86.8218 5.21698L92.4083 5.52786L88.0714 9.06302L89.5021 14.4721L84.7998 11.44L80.0975 14.4721L81.5282 9.06302L77.1914 5.52786L82.7778 5.21698L84.7998 0Z"
          fill="#FAB33F"
        />
      </svg>
    ),
    review: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. soluta iste molestias.'
  },

  {
    id: 7,
    img: man,
    name: "Sayem Ahmed",
    title: "Product designer",
    rating: (
      <svg
        width="93"
        height="16"
        viewBox="0 0 93 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8 0L10.022 5.21698L15.6085 5.52786L11.2716 9.06302L12.7023 14.4721L8 11.44L3.29772 14.4721L4.72837 9.06302L0.391548 5.52786L5.97802 5.21698L8 0Z"
          fill="#FAB33F"
        />
        <path
          d="M27.2002 0L29.2222 5.21698L34.8086 5.52786L30.4718 9.06302L31.9025 14.4721L27.2002 11.44L22.4979 14.4721L23.9286 9.06302L19.5917 5.52786L25.1782 5.21698L27.2002 0Z"
          fill="#FAB33F"
        />
        <path
          d="M46.4004 0L48.4224 5.21698L54.0088 5.52786L49.672 9.06302L51.1027 14.4721L46.4004 11.44L41.6981 14.4721L43.1288 9.06302L38.7919 5.52786L44.3784 5.21698L46.4004 0Z"
          fill="#FAB33F"
        />
        <path
          d="M65.5996 0L67.6216 5.21698L73.2081 5.52786L68.8712 9.06302L70.3019 14.4721L65.5996 11.44L60.8973 14.4721L62.328 9.06302L57.9912 5.52786L63.5776 5.21698L65.5996 0Z"
          fill="#FAB33F"
        />
        <path
          d="M84.7998 0L86.8218 5.21698L92.4083 5.52786L88.0714 9.06302L89.5021 14.4721L84.7998 11.44L80.0975 14.4721L81.5282 9.06302L77.1914 5.52786L82.7778 5.21698L84.7998 0Z"
          fill="#FAB33F"
        />
      </svg>
    ),
    review: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. soluta iste molestias.'
  },


  {
    id: 8,
    img: man,
    name: "Sayem Ahmed",
    title: "Product designer",
    rating: (
      <svg
        width="93"
        height="16"
        viewBox="0 0 93 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8 0L10.022 5.21698L15.6085 5.52786L11.2716 9.06302L12.7023 14.4721L8 11.44L3.29772 14.4721L4.72837 9.06302L0.391548 5.52786L5.97802 5.21698L8 0Z"
          fill="#FAB33F"
        />
        <path
          d="M27.2002 0L29.2222 5.21698L34.8086 5.52786L30.4718 9.06302L31.9025 14.4721L27.2002 11.44L22.4979 14.4721L23.9286 9.06302L19.5917 5.52786L25.1782 5.21698L27.2002 0Z"
          fill="#FAB33F"
        />
        <path
          d="M46.4004 0L48.4224 5.21698L54.0088 5.52786L49.672 9.06302L51.1027 14.4721L46.4004 11.44L41.6981 14.4721L43.1288 9.06302L38.7919 5.52786L44.3784 5.21698L46.4004 0Z"
          fill="#FAB33F"
        />
        <path
          d="M65.5996 0L67.6216 5.21698L73.2081 5.52786L68.8712 9.06302L70.3019 14.4721L65.5996 11.44L60.8973 14.4721L62.328 9.06302L57.9912 5.52786L63.5776 5.21698L65.5996 0Z"
          fill="#FAB33F"
        />
        <path
          d="M84.7998 0L86.8218 5.21698L92.4083 5.52786L88.0714 9.06302L89.5021 14.4721L84.7998 11.44L80.0975 14.4721L81.5282 9.06302L77.1914 5.52786L82.7778 5.21698L84.7998 0Z"
          fill="#FAB33F"
        />
      </svg>
    ),
    review: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. soluta iste molestias.'
  },
    {
    id: 9,
    img: man,
    name: "Sayem Ahmed",
    title: "Product designer",
    rating: (
      <svg
        width="93"
        height="16"
        viewBox="0 0 93 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8 0L10.022 5.21698L15.6085 5.52786L11.2716 9.06302L12.7023 14.4721L8 11.44L3.29772 14.4721L4.72837 9.06302L0.391548 5.52786L5.97802 5.21698L8 0Z"
          fill="#FAB33F"
        />
        <path
          d="M27.2002 0L29.2222 5.21698L34.8086 5.52786L30.4718 9.06302L31.9025 14.4721L27.2002 11.44L22.4979 14.4721L23.9286 9.06302L19.5917 5.52786L25.1782 5.21698L27.2002 0Z"
          fill="#FAB33F"
        />
        <path
          d="M46.4004 0L48.4224 5.21698L54.0088 5.52786L49.672 9.06302L51.1027 14.4721L46.4004 11.44L41.6981 14.4721L43.1288 9.06302L38.7919 5.52786L44.3784 5.21698L46.4004 0Z"
          fill="#FAB33F"
        />
        <path
          d="M65.5996 0L67.6216 5.21698L73.2081 5.52786L68.8712 9.06302L70.3019 14.4721L65.5996 11.44L60.8973 14.4721L62.328 9.06302L57.9912 5.52786L63.5776 5.21698L65.5996 0Z"
          fill="#FAB33F"
        />
        <path
          d="M84.7998 0L86.8218 5.21698L92.4083 5.52786L88.0714 9.06302L89.5021 14.4721L84.7998 11.44L80.0975 14.4721L81.5282 9.06302L77.1914 5.52786L82.7778 5.21698L84.7998 0Z"
          fill="#FAB33F"
        />
      </svg>
    ),
    review: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. soluta iste molestias.'
  },


];


let nextSlide, prevSlide;
let nextpressed;


const Testimonials = () => {
  
  const [testimonialsIndex, settestimonialsIndex] = useState(0);

  let nextStyle = {
    transform: `translateX(-${testimonialsIndex * 100}%)`,
  };

  let prevStyle = {
    transform: `translateX(-${testimonialsIndex * 100}%)`,
  };

  nextSlide = () => {
    nextpressed = true;
    if (testimonialsIndex < TestimonialData.length - 1) {
      settestimonialsIndex(testimonialsIndex + 1);
    } else if (testimonialsIndex === TestimonialData.length - 1) {
      settestimonialsIndex(0);
    }
  };

  prevSlide = () => {
    nextpressed = false;

    if (testimonialsIndex === 0) {
      settestimonialsIndex(TestimonialData.length - 1);

      console.log("main");
    } else if (testimonialsIndex > 0) {
      settestimonialsIndex(testimonialsIndex - 1);
      console.log("nhi main");
    }
  };



 
  return (
    <div className="testimonialContainer">
      <div className="wrapper">
        <div className="row1">
          <div className="headings">
            <p className="subtitle">TESTIMONIALS</p>
            <h2 className="title">What our client say</h2>
            <p className="subhead">
            Create a visual identity for your company, and an overall brand
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
          {TestimonialData.map((item) => (
            <div
              className="testmonialCard"
              key={item.id}
              style={nextpressed ? nextStyle : prevStyle}
            >
              <Testimonial
                Img={item.img}
                Name={item.name}
                Title={item.title}
                Rating={item.rating}
                Review={item.review}
              />
            </div>
          ))}
        </div>
    
      </div>
    </div>
  );
};

export default Testimonials;
