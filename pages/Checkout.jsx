
import shpcart from "../images/shpngcart.png"
import Carouselcards from '../components/Carouselcards'


function Checkout() {
    return (
        <>

            <section>
                <div className='checkousection container-fluid '>
                    <div className='mt-2 Shopping-Cart-for-mobile-none'>
                        <h6 className='headingcart '> Shopping Cart </h6>
                    </div>
                    <div className='cartlogocnt '>
                        <div className='crtlogo'>
                            <img src={shpcart} alt="" />
                        </div>
                        <div>
                            <p className='shpgtext'>Your shopping cart is empty</p>
                        </div>
                        <div>
                            <a href="" className='Start-Shopping Start-Shopping-btn-for-mobile '>Start Shopping </a>
                        </div>
                    </div>
                </div>



{/* For Mobile */}
 <div className="container-fluid check-mobile-section-text">
                <div className="check-mobile-section container-fluid mb-2">
                    <p className="mt-2">Per India Customs, all customers ordering
                        internationally are required to complete KYC
                        documents for customs clearance. The shipping
                        information must be an exact match to the
                        consignee’s name and residential address on the
                        KYC documents. If the carrier does not receive
                        KYC documents within 7 days, your order will be
                        returned.
                        Know Your Customer (KYC) FAQ</p>
                </div>
                </div>

                {/* For Mobile */}


                <div className='speacilsSection container-fluid'>
                    <br />
                    <div className='speacilsSectionWrap container-fluid '>
                        <div className='SpecialsTextstyle'> Recommended for you </div>
                    </div>
                </div>


                <Carouselcards></Carouselcards>
            </section>

        </>
    )
}

export default Checkout