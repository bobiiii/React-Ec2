// import React from 'react'
import Slider from 'react-slick'
import { slide1 } from '../utils/data'
import { Rating, useMediaQuery } from '@mui/material'
import Image from 'next/image'

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
          slidesToShow: 3,
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
  const matches = useMediaQuery('(max-width:500px)')
  return (
    <div
      className="bg-color-div"
      style={{ width: '100%', overflowX: 'hidden' }}
    >
      <Slider {...settings}>
        {slide1.map((item, index) => {
          return (
            <div key={index} style={{ backgroundColor: 'white' }}>
              <div
                className="card w-100 card-hover card-style "
                style={{
                  // height: '18rem',
                  border: 'none',
                  backgroundColor: 'white',
                  paddingBottom: '20px',
                }}
              >
                <div
                  className={` ${matches ? 'mx-1 pt-0  ' : 'mx-auto pt-3'}`}
                  style={{ width: '50%' }}
                >
                  <Image
                    src={item.img}
                    className={`card-img-top card-image ${
                      matches
                        ? 'mx-4 pt-1 pb-1 d-flex  justify-content-center'
                        : 'mx-auto pt-3'
                    }`}
                    alt="..."
                    width="100%"
                    height="auto"
                  />
                </div>
                <div
                  className="card-body d-flex flex-column justify-content-center  pb-0   "
                  style={{ height: '16rem' }}
                >
                  <h5
                    className="card-title fs-cs-1 flex-grow-1 mb-auto card-style-title "
                    // style={{ maxWidth: '173px' }}
                  >
                    {item.title}
                  </h5>
                  <div className="d-flex align-items-center">
                    <Rating value={5} size="small" readOnly />
                    <span className="gray-rating">25780</span>
                  </div>
                  <div className="fs-cs-1 pb-3">
                    <span className="text-danger price-red">
                      {item.oldPrice}{' '}
                    </span>{' '}
                    <span className="price-gray">{item.newPrice}</span>
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
