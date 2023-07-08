// import React from 'react'
import Slider from 'react-slick'
import { slide1 } from '../utils/data'
function Carouselcards() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    swipeToSlide: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          swipeToSlide: true,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  }
  return (
    <div>
      <Slider {...settings}>
        {slide1.map((item, index) => {
          return (
            <div key={index}>
              <div className="card w-100  " style={{ height: '16rem' }}>
                <div className=" mx-auto pt-3" style={{ width: '50%' }}>
                  <img
                    src={item.img}
                    className="card-img-top  mx-auto pt-3"
                    alt="..."
                    width="100%"
                    height="auto"
                  />
                </div>
                <div
                  className="card-body d-flex flex-column justify-content-center  pb-0   "
                  style={{ height: '16rem' }}
                >
                  <h5 className="card-title fs-cs-1 flex-grow-1 mb-auto ">
                    {item.title}
                  </h5>
                  <div>
                    <i className="bi bi-star"></i>
                    <i className="bi bi-star"></i>
                    <i className="bi bi-star"></i>
                    <i className="bi bi-star"></i>
                  </div>
                  <div className="fs-cs-1 ">
                    <span className="text-danger">{item.oldPrice} </span>{' '}
                    <span>{item.newPrice}</span>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </Slider>
    </div>
  )
}

export default Carouselcards
