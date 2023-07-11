import React from 'react'
import car1 from "../images/car1.png"
import car2 from "../images/car2.png"
import car3 from "../images/car3.png"
import Image from 'next/image'
import Link from 'next/link'

function Hero() {
  return (
    <>
      <div className='mainhero'>
        <div className='hero '>
          <div className='ms-5 '>
            <h4> 20% off Immunne Support! </h4>
          </div>
          <div>
            <button type="button" className="btn shopbtn mb-2">Shop Now</button>
          </div>
        </div>
        <div className='cruveclr'>
        </div>

        <div className='hero2'>
          <div className='ms-5'>
            <h4> Up to 30% off Herbs & Splices! </h4>
          </div>
          <div>
            <button type="button" className="btn shopbtn mb-2">Shop Now</button>
          </div>
        </div>
      </div>

      {/* Carousel */}
      <div className='custom'>
      <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <Image src={car1} className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
          <Image src={car2} className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
          <Image src={car3} className="d-block w-100" alt="..." />
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
      </div>
      <br />

      <div className='herocards'>
        <div className='herocards1'>
          <Link href="/" className='text-decoration-none text-dark'>
            <p> IMMUNE SUPPORTS <br />
              <span className='ms-3 '>  20% OFF </span>
            </p>
          </Link>
          
          <p> </p>
        </div>
        <div className='herocards1'>
          <Link href="/" className='text-decoration-none text-dark'>
            <p> BEAUTY,BATH, & SELF-CARE <br />
              <span className='ms-3'>  20% OFF </span>
            </p>
          </Link>
        </div>
        <div className='herocards1'>
          <Link href="/" className='text-decoration-none text-dark'>
            <p> HERBS & SPICES <br />
              <span className='ms-3'> UP TO 30% OFF </span>
            </p>
          </Link>
        </div>
        <div className='herocards1'>
            <Link href="/" className='text-decoration-none text-dark'>
              <p> PREBIOTICS <br />
                <span className='ms-3'> UP TO 50% OFF </span>
              </p>
            </Link>
        </div>
        <div className='herocards1  '>
          <div className='mt-3 '>
            <Link href="/" className='seeallcard' >SEE ALL <svg viewBox="0 0 13 10" height="10px" width="15px">
                <path d="M1,5 L11,5"></path>
                <polyline points="8 1 12 5 8 9"></polyline>
              </svg> 
            </Link>
          </div>

        </div>
      </div>

    </>
  )
}

export default Hero