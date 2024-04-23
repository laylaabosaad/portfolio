import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function CarouselComponent() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        },
      },
    ],
  };
  return (
    <div className="slider">
      <Slider {...settings}>
        <div className="slider-blocks">
          <div className="bordimage">image</div>
          <div className="block-content">
            <h1 className="text-[30px]">Project Title</h1>
            <p>Descriptionb gsdkj jkgdakjgd jgsajd</p>
            <p>Descriptionb gsdkj jkgdakjgd jgsajd</p>
            <p>Descriptionb gsdkj jkgdakjgd jgsajd</p>
          </div>
        </div>
        <div className="slider-blocks">
          <div className="bordimage">image</div>
          <div className="block-content">
            <h1 className="text-[30px]">Project Title</h1>
            <p>Descriptionb gsdkj jkgdakjgd jgsajd</p>
            <p>Descriptionb gsdkj jkgdakjgd jgsajd</p>
            <p>Descriptionb gsdkj jkgdakjgd jgsajd</p>
          </div>
        </div>
        <div className="slider-blocks">
          <div className="bordimage">image</div>
          <div className="block-content">
            <h1 className="text-[30px]">Project Title</h1>
            <p>Descriptionb gsdkj jkgdakjgd jgsajd</p>
            <p>Descriptionb gsdkj jkgdakjgd jgsajd</p>
            <p>Descriptionb gsdkj jkgdakjgd jgsajd</p>
          </div>
        </div>
        <div className="slider-blocks">
          <div className="bordimage">image</div>
          <div className="block-content">
            <h1 className="text-[30px]">Project Title</h1>
            <p>Descriptionb gsdkj jkgdakjgd jgsajd</p>
            <p>Descriptionb gsdkj jkgdakjgd jgsajd</p>
            <p>Descriptionb gsdkj jkgdakjgd jgsajd</p>
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default CarouselComponent;
