import React from "react";
import "./Testimonial.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Zoom from "react-reveal/Zoom";

const Testimonial = () => {
  const data = [
    {
      name: "Robert Geanne S. Ricarte",
      position: "Change Manager at DXC Technology",
      des: "Jon has shown himself to be an honest, hard-working, and personable individual. I am confident that he would be a valuable asset to any organization",
      img: "https://images.pexels.com/photos/2962144/pexels-photo-2962144.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      name: "Mark Joseph Galleto",
      position: "Academic Law Librarian",
      des: "Jon has shown himself to be an honest, hard-working, and personable individual. I am confident that he would be a valuable asset to any organization",
      img: "https://images.pexels.com/photos/4498876/pexels-photo-4498876.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      name: "Sharon Paunan",
      position: "Community Manager at Refocus",
      des: "Jon has shown himself to be an honest, hard-working, and personable individual. I am confident that he would be a valuable asset to any organization",
      img: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      name: "Ghio Soliven",
      position: "Community Manager at Refocus",
      des: "Jon has shown himself to be an honest, hard-working, and personable individual. I am confident that he would be a valuable asset to any organization",
      img: "https://images.pexels.com/photos/2589409/pexels-photo-2589409.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      name: "Robert Geanne S. Ricarte",
      position: "Change Manager at DXC Technology",
      des: "Jon has shown himself to be an honest, hard-working, and personable individual. I am confident that he would be a valuable asset to any organization",
      img: "https://images.pexels.com/photos/2962144/pexels-photo-2962144.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      name: "Mark Joseph Galleto",
      position: "Academic Law Librarian",
      des: "Jon has shown himself to be an honest, hard-working, and personable individual. I am confident that he would be a valuable asset to any organization",
      img: "https://images.pexels.com/photos/4498876/pexels-photo-4498876.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      name: "Sharon Paunan",
      position: "Community Manager at Refocus",
      des: "Jon has shown himself to be an honest, hard-working, and personable individual. I am confident that he would be a valuable asset to any organization",
      img: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      name: "Ghio Soliven",
      position: "Community Manager at Refocus",
      des: "Jon has shown himself to be an honest, hard-working, and personable individual. I am confident that he would be a valuable asset to any organization",
      img: "https://images.pexels.com/photos/2589409/pexels-photo-2589409.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      name: "Robert Geanne S. Ricarte",
      position: "Change Manager at DXC Technology",
      des: "Jon has shown himself to be an honest, hard-working, and personable individual. I am confident that he would be a valuable asset to any organization",
      img: "https://images.pexels.com/photos/2962144/pexels-photo-2962144.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      name: "Mark Joseph Galleto",
      position: "Academic Law Librarian",
      des: "Jon has shown himself to be an honest, hard-working, and personable individual. I am confident that he would be a valuable asset to any organization",
      img: "https://images.pexels.com/photos/4498876/pexels-photo-4498876.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      name: "Sharon Paunan",
      position: "Community Manager at Refocus",
      des: "Jon has shown himself to be an honest, hard-working, and personable individual. I am confident that he would be a valuable asset to any organization",
      img: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      name: "Ghio Soliven",
      position: "Community Manager at Refocus",
      des: "Jon has shown himself to be an honest, hard-working, and personable individual. I am confident that he would be a valuable asset to any organization",
      img: "https://images.pexels.com/photos/2589409/pexels-photo-2589409.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
  ];

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    initialSlide: 0,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const colors = [
    "#F1C40F",
    "#4B088A",
    "#8181F7",
    "#FE2EF7",
    "#585858",
    "#800000",
    "#0088FE",
    "#00C49F",
    "#FFBB28",
    "#FF8042",
    "#001CCE",
    "#00C79F",
    "#FFBB24",
    "#FF1042",
    "#FF1042",
  ];

  return (
    <div className="container testimonial-section" id="reference">
      <div className="section-title">
        <h5>References</h5>
        <span className="line"> </span>
      </div>

      <div className="reference-slider">
        <Slider {...settings}>
          {data.map((item, index) => (
            <Zoom key={index}>
              <div className="content-slider-main">
                <div
                  className="content-slider"
                  key={index}
                  style={{ backgroundColor: colors[index] }}
                >
                  <img
                    src={item.img}
                    alt="reference img"
                    className="center-image"
                  />
                  <p>{item.des}</p>
                  <p>{item.name}</p>
                  <p>{item.position}</p>
                </div>
              </div>
            </Zoom>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonial;
