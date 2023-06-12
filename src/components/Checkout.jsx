import React from 'react'
import shpcart from "../images/shpngcart.png"
import Carouselcards from './Carouselcards'
import Header from "./Header"
import Footer from './Footer'
function Checkout() {
    return (
        <>
        <Header></Header>
            <section>
                <div className='checkousection container-fluid '>
                    <div className='mt-2 '>
                        <h6 className='headingcart'> Shopping Cart </h6>
                    </div>
                    <div className='cartlogocnt '>
                        <div className='crtlogo'>
                            <img src={shpcart} alt="" />
                        </div>
                        <div>
                            <p className='shpgtext'>Your shopping cart is empty</p>
                        </div>
                        <div>
                            <a href="" className='Start-Shopping '>Start Shopping </a>
                        </div>
                    </div>
                </div>

                <div className='speacilsSection container-fluid'>
        <br />
        <div className='speacilsSectionWrap container-fluid '>
          <div className='SpecialsTextstyle'> Recommended for you </div>
        </div>
      </div>


      <Carouselcards></Carouselcards>
            </section>
            <Footer></Footer>
        </>
    )
}

export default Checkout