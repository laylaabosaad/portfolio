import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import cosmo from "../../images/cosmo.png"
import genomed from "../../images/genomed.png"
import terrebrune from "../../images/logo-terrbrune-whiteNEW.png"
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
        breakpoint: 940,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 620,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
          initialSlide: 2,
          dots: true,
          infinite: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          infinite: true,
        },
      },
    ],
  };
  return (
    <div className="slider">
      <Slider {...settings}>
        <div className="slider-blocks p-[5%]">
          <div className="bordimage flex justify-center items-center bg-[#e6e5e6]">
            <img src={cosmo} alt="cosmo-logo" className="h-[50%]"></img>
          </div>
          <div className="block-content">
            <h1 className="text-[30px] font-[400] leading-[1] pt-[2%]">
              COSMO
            </h1>
            <h2 className="font-[100] pb-[2%]">
              ReactJS || Laravel || phpMyAdmin
            </h2>
            <p>
              An e-commerce website is currently under development,
              incorporating online payment functionality, a dynamic currency
              converter, and language translation capabilities.
            </p>
            <p className="py-[2%]">
              Additionally, a comprehensive dashboard is being developed to
              offer complete administrative control, alongside integrated email
              functionality for efficient customer communication.
            </p>
          </div>
        </div>
        <div className="slider-blocks p-[5%]">
          <div className="bordimage flex justify-center items-center bg-[#e6e5e6]">
            <img src={genomed} alt="genomed-logo" className="h-[50%]"></img>
          </div>
          <div className="block-content">
            <h1 className="text-[30px] font-[400] leading-[1] pt-[2%]">
              GENO-MED
            </h1>
            <h2 className="font-[100] pb-[2%]">ReactJS</h2>
            <p>
              A comprehensive portfolio has been created to showcase the
              extensive range of tests offered by Geno-Med, providing detailed
              insights into each available diagnostic procedure.
            </p>
            <p className="py-[2%]">
              Furthermore, the portfolio presents a diverse selection of
              cutting-edge devices available for purchase, catering to a wide
              spectrum of needs and requirements across various medical fields.
            </p>
          </div>
        </div>
        <div className="slider-blocks p-[5%]">
          <div className="bordimage flex justify-center items-center bg-[#e6e5e6]">
            <img
              src={terrebrune}
              alt="terrebrune-logo"
              className="h-[50%]"
            ></img>
          </div>
          <div className="block-content">
            <h1 className="text-[30px] font-[400] leading-[1] pt-[2%]">
              TERREBRUNE
            </h1>
            <h2 className="font-[100] pb-[2%]">
              HTML || CSS || JAVASCRIPT || PHP
            </h2>
            <p>
              A carefully crafted portfolio has been designed to showcase the
              fantastic features of Terrebrune Hotel. It highlights the range of
              services provided, from relaxing spa treatments to modern
              conference rooms, delightful dining choices, and cozy
              accommodations.
            </p>
            <p className="py-[2%]">
              This showcase aims to capture the essence of Terrebrune's
              hospitality and warmly invites guests to experience luxury and
              comfort firsthand.
            </p>
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default CarouselComponent;
