import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./carousel.css";
import { Carousel } from "react-responsive-carousel";

function MyCarousel() {
  return (
    <div className="relative" id="my-carousel">
      <Carousel
        showThumbs={false}
        autoPlay={true}
        infiniteLoop={true}
        showStatus={false}
      >
        <img src="https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />

        <img src="https://images.pexels.com/photos/1667071/pexels-photo-1667071.jpeg?auto=compress&cs=tinysrgb&w=600" />

        <img src="https://images.pexels.com/photos/6690884/pexels-photo-6690884.jpeg?auto=compress&cs=tinysrgb&w=600" />
      </Carousel>
    </div>
  );
}

export default MyCarousel;
