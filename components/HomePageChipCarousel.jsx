import { Chip } from '@mui/material'
import React from 'react'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'

const HomePageChipCarousel = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 7,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 7,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 3,
    },
  }
  return (
    <div className="chip-homepage-main">
      <Carousel
        swipeable={true}
        draggable={true}
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
        itemClass="carousel-item-padding-5-px"
        arrows={false}
        width={'70%'}
      >
        <div>
          <Chip
            className="chip-homepage"
            label="Bath & Personal Care"
            variant="outlined"
            sx={{ border: '2px solid #458500', color: '#458500' }}
          />
        </div>
        <div>
          <Chip
            className="chip-homepage"
            label="Herbs & Homeopathy"
            variant="outlined"
          />
        </div>
        <div>
          <Chip
            className="chip-homepage"
            label="Supplements"
            variant="outlined"
          />
        </div>
        <div>
          <Chip className="chip-homepage" label="Beauty" variant="outlined" />
        </div>
        <div>
          <Chip className="chip-homepage" label="Sports" variant="outlined" />
        </div>
        <div>
          <Chip className="chip-homepage" label="Grocery" variant="outlined" />
        </div>
        <div>
          <Chip
            className="chip-homepage"
            label="Kids & Babies"
            variant="outlined"
          />
        </div>
        <div>
          <Chip className="chip-homepage" label="Pets" variant="outlined" />
        </div>
        <div>
          <Chip className="chip-homepage" label="Home" variant="outlined" />
        </div>
      </Carousel>
    </div>
  )
}

export default HomePageChipCarousel
