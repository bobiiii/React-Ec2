import Slider from "react-slick";
// import {useState} from 'react'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

function CardsCarouselYearly() {
    // const [sliderRef, setSliderRef] = useState(null)

    const settings = {
      dots: true,
      infinite: true,
      autoplay: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };

  return (
    <div className="container-fluid  w-75  mx-auto year-card    " >
     
        
    <Slider {...settings}  className="d-flex " >
      <div className="text-center year-line year-box">
        <h3 className="fs-cs-5 ">2009</h3>
        <p className="mx-2" >Launched popular iHerb Rewards
 referral program </p>
 <p className="mx-2" >Added expiration dates on product
pages for increased transparency</p>
      </div>
      <div className="text-center year-line year-box">
      <h3 className="fs-cs-5">2010</h3>
      <p className="mx-2" >Launched iHerb House Brands, owned
by iHerb</p>
      <p className="mx-2" >Sold first House Brands product
Functional Beverage Mix – Immune
Punch, Midori Greens, Eureka! Berry,
Madre C</p>
      </div>
      <div className="text-center year-line year-box">
      <h3 className="fs-cs-5">2011</h3>
      <p className="mx-2" >Expanded footprint to a 360,000 sq. ft.
FC in Moreno Valley, CA </p>
      </div>
      <div className="text-center year-line year-box">
      <h3 className="fs-cs-5">2012</h3>
      <p className="mx-2" >Lorem ipsum dolor sit amet, consectetur adipisicing elit. sit amet, consectetur adipisicing elit </p>
      </div>
      <div className="text-center year-line year-box">
      <h3 className="fs-cs-5">2012</h3>
      <p className="mx-2" >Lorem ipsum dolor sit amet, consectetur adipisicing elit. sit amet, consectetur adipisicing elit </p>
      </div>
      <div className="text-center year-line year-box">
      <h3 className="fs-cs-5">2012</h3>
      <p className="mx-2" >Lorem ipsum dolor sit amet, consectetur adipisicing elit. sit amet, consectetur adipisicing elit </p>
      </div>
      <div className="text-center year-line year-box">
      <h3 className="fs-cs-5">2012</h3>
      <p className="mx-2" >Lorem ipsum dolor sit amet, consectetur adipisicing elit. sit amet, consectetur adipisicing elit </p>
      </div>
    </Slider>
    
  </div>
)
}


export default CardsCarouselYearly