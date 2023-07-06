import React, { useState } from 'react'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft'
import styles from '../../styles/ProductDetailsStyle/product-details.module.scss'
import ComboImg1 from '../../images/218.jpg.svg'
import ComboImg2 from '../../images/164.jpg.svg'
import { Rating } from '@mui/material'
import Img3 from '../../images/commentimg.svg'
import Img4 from '../../images/overflow-hidden.svg'
const ProductReviewImagesCarousel = () => {
  const cardData1 = [
    {
      img: ComboImg1,
      desc:
        'California Gold Nutrition, Gold C, USP Grade Vitamin C, 1,000 mg, 240 Veggie',
      ratingNo: '292688',
      rating: 5,
      price: '351.79',
      salePrice: '₹502.56',
    },
    {
      img: ComboImg2,
      desc:
        'California Gold Nutrition, Gold C, USP Grade Vitamin C, 1,000 mg, 240 Veggie',
      ratingNo: '292688',
      rating: 5,
      price: '351.79',
      salePrice: '₹502.56',
    },
    {
      img: ComboImg1,
      desc:
        'California Gold Nutrition, Gold C, USP Grade Vitamin C, 1,000 mg, 240 Veggie',
      ratingNo: '292688',
      rating: 5,
      price: '351.79',
      salePrice: '₹502.56',
    },
    {
      img: ComboImg2,
      desc:
        'California Gold Nutrition, Gold C, USP Grade Vitamin C, 1,000 mg, 240 Veggie',
      ratingNo: '292688',
      rating: 5,
      price: '351.79',
      salePrice: '₹502.56',
    },
    {
      img: ComboImg1,
      desc:
        'California Gold Nutrition, Gold C, USP Grade Vitamin C, 1,000 mg, 240 Veggie',
      ratingNo: '292688',
      rating: 5,
      price: '351.79',
      salePrice: '₹502.56',
    },
  ]

  const [currentSlide, setCurrentSlide] = useState(0)
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    laptop: {
      breakpoint: { max: 1024, min: 768 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 769, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
  }

  const ButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
    // const {
    //   carouselState: { currentSlide },
    // } = rest
    return (
      <div className="carousel-button-group ">
        {/* <div> */}{' '}
        <button
          style={{
            position: 'absolute',
            zIndex: 1,
            top: '35%',
            right: '0%',
            background: '#fff',
            border: '1px solid #E0E0E0',
            borderRadius: '50%',
            height: '32px',
            width: '32px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onClick={() => {
            next()
            setCurrentSlide(currentSlide == 0 ? 1 : currentSlide + 1)
          }}
        >
          <KeyboardArrowRightIcon style={{ color: 'black' }} />
        </button>
        <button
          style={{
            position: 'absolute',
            color: 'red',
            zIndex: 1,
            top: '35%',
            background: '#fff',
            border: '1px solid #E0E0E0',
            borderRadius: '50%',
            height: '32px',
            width: '32px',
            // display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            left: '1%',
            display: currentSlide === 0 ? 'none' : 'flex',
          }}
          className={currentSlide === 0 ? 'disable' : ''}
          onClick={() => {
            previous()
            setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : currentSlide)
          }}
        >
          <KeyboardArrowLeftIcon style={{ color: 'black' }} />
        </button>
      </div>
    )
  }

  return (
    <div style={{ width: '100%' }}>
      <Carousel
        swipeable={false}
        draggable={false}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        autoPlaySpeed={1000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={['tablet', 'mobile']}
        showDots={false}
        itemClass="carousel-item-padding-10-px"
        arrows={false}
        customButtonGroup={<ButtonGroup />}
        width={'100%'}
      >
        <div style={{ width: '130px', height: '130px' }}>
          <img src={Img3} alt="" width="100%" height="100%" />
        </div>
        <div style={{ width: '130px', height: '130px' }}>
          <img src={Img4} alt="" width="100%" height="100%" />
        </div>
        <div style={{ width: '130px', height: '130px' }}>
          <img src={Img3} alt="" width="100%" height="100%" />
        </div>
        <div style={{ width: '130px', height: '130px' }}>
          <img src={Img4} alt="" width="100%" height="100%" />
        </div>
        <div style={{ width: '130px', height: '130px' }}>
          <img src={Img3} alt="" width="100%" height="100%" />
        </div>
        <div style={{ width: '130px', height: '130px' }}>
          <img src={Img4} alt="" width="100%" height="100%" />
        </div>
        <div style={{ width: '130px', height: '130px' }}>
          <img src={Img3} alt="" width="100%" height="100%" />
        </div>
        <div style={{ width: '130px', height: '130px' }}>
          <img src={Img4} alt="" width="100%" height="100%" />
        </div>
      </Carousel>
    </div>
  )
}

export default ProductReviewImagesCarousel
