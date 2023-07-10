import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader
import ProductImage from '../../images/ProductDetail/medicine1.svg'

const ProductMainImgCarousel = () => {
  return (
    <div>
      <Carousel showIndicators={true} showStatus={false} showThumbs={false}>
        <div>
          <img src={ProductImage} className="w-100 py-2" alt="a" />
        </div>
        <div>
          <img src={ProductImage} className="w-100 py-2" alt="a" />
        </div>
        <div>
          <img src={ProductImage} className="w-100 py-2" alt="a" />
        </div>
      </Carousel>
    </div>
  )
}

export default ProductMainImgCarousel
