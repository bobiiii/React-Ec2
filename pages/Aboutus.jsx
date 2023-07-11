/* eslint-disable react/no-unescaped-entities */
// import React from 'react'
import about1 from "../images/about1.png"
import about2 from "../images/about2.png"
import about3 from "../images/about3.png"
import corlastimg from "../images/corlastimg.png"
import sale1 from "../images/sale1.png"
import sale2 from "../images/sale2.png"
import sale3 from "../images/sale3.png"
import sale4 from "../images/sale4.png"
import sale5 from "../images/sale5.png"
import sale6 from "../images/sale6.png"
// import ceo from "../images/ceo.png"
import wallherb1 from "../images/wallherb1.png"
import wallherb2 from "../images/wallherb2.png"
import wallherb3 from "../images/wallherb3.png"
import wallherb4 from "../images/wallherb4.png"
import wallherb5 from "../images/wallherb5.png"
import wallherb6 from "../images/wallherb6.png"
// import wallherb6 from "../images/wallherb6.png"
import androidLogo from "../images/about/Vector3.png"
import appleLogo from "../images/about/Vector2.png"
import googleLogo from "../images/about/Vector1.png"
import drImg from "../images/about/img4.png"
import Slider from 'react-slick'

function Aboutus() {
    
    const settings={
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
    }

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

            <section style={{ background: " #FFFFFF" }}>

                <div className='about-section-image'>
                    <img src={about1} alt="" />
                </div>


                <div className='text-center mt-5 iHerb-a-a-glance-for-mobile'>
                    <h3>iHerb at a glance</h3>
                </div>



                <div className='Leadership-member-section container-lg '>

                    <div className="card p-3 py-4 border-0" style={{ width: "20rem" }}>
                        <div className="text-center iHerb-at-a-glance-icon">
                            <img src={wallherb1} width="100" className="rounded-circle" />
                        </div>
                        <div className="text-center mt-3">
                            <h5>180+ countries</h5>
                            <p className='fs-cs-2 text-center'>We deliver health and wellness products to
                                people around the world with 16 languages,
                                over 80 currencies, and 40 payment options.</p>
                        </div>
                    </div>


                    <div className="card p-3 py-4 border-0" style={{ width: "20rem" }}>
                        <div className="text-center iHerb-at-a-glance-icon">
                            <img src={wallherb2} width="100" className="rounded-circle" />
                        </div>
                        <div className="text-center mt-3">
                            <h5>30K+ products</h5>
                            <p className='fs-cs-2 text-center'>We offer the same reputable brands found at
                                large national stores. All products are sold
                                and shipped by iHerb—not by  <a href="" className='text-decoration-none'>third-party
                                    sellers.</a> </p>
                        </div>
                    </div>


                    <div className="card p-3 py-4 border-0" style={{ width: "20rem" }}>
                        <div className="text-center iHerb-at-a-glance-icon">
                            <img src={wallherb3} width="100" className="rounded-circle" />
                        </div>
                        <div className="text-center mt-3">
                            <h5>33M+ authentic reviews</h5>
                            <p className='fs-cs-2 text-center'>Impartial authentic reviews by customers
                                who ordered the product. This way you can
                                make smarter purchases.</p>
                        </div>
                    </div>





                    <div className="card p-3 py-4 border-0" style={{ width: "20rem" }}>
                        <div className="text-center iHerb-at-a-glance-icon">
                            <img src={wallherb4} width="100" className="rounded-circle" />
                        </div>
                        <div className="text-center mt-3">
                            <h5>9.5M+ active customers</h5>
                            <p className='fs-cs-2 text-center'>Over 9.5 million customers keep coming back
                                for our deals, products, and  <a href="" className='text-decoration-none'>Rewards.</a></p>
                        </div>
                    </div>


                    <div className="card p-3 py-4 border-0" style={{ width: "20rem" }}>
                        <div className="text-center iHerb-at-a-glance-icon">
                            <img src={wallherb5} width="100" className="rounded-circle" />
                        </div>
                        <div className="text-center mt-3">
                            <h5>2,000+ team members</h5>
                            <p className='fs-cs-2 text-center'>We’re truly a global company with team
                                members around the world.</p>
                        </div>
                    </div>



                    <div className="card p-3 py-4 border-0" style={{ width: "20rem" }}>
                        <div className="text-center iHerb-at-a-glance-icon">
                            <img src={wallherb6} width="100" className="rounded-circle" />
                        </div>
                        <div className="text-center mt-3">
                            <h5>8 fulfillment centers</h5>
                            <p className='fs-cs-2 text-center'>Our fulfillment centers and inventory hubs
                                are climate-controlled and GMP- or ISO-
                                compliant to keep products safe and fresh.</p>
                        </div>
                    </div>
 </div>





                {/*  Affordable and has a great selection  panding  */}
                <div className='affordable-cs-main'>
                <div className=' container-fluid affordable-cs text-white'>
                 {/* for small device */}
                   <div className=" d-flex  d-md-none d-lg-none  container-fluid flex-column  justify-content-center  align-items-center">
                    <div className="d-flex align-items-center">
                    <img src={androidLogo} className='px-1' alt='img'/>
                        <div className="d-flex flex-column align-items-center ">
                            <span>4.8 <span>/ 5</span></span>
                            <span>351k reviews</span>
                        </div>
                    </div>
                    <div className="d-flex align-items-center">
                    <img src={googleLogo} className='' alt='img'/>
                    <div className="d-flex flex-column align-items-center">
                            <span>4.8 <span>/ 5</span></span>
                            <span>Over 999k reviews</span>
                        </div>
                    </div>
                    <div className="d-flex align-items-center ">
                    <img src={appleLogo} className='' alt='img'/>
                    <div className="d-flex flex-column align-items-center">
                            <span>4.5 <span>/ 5</span></span>
                            <span>969k reviews</span>
                        </div>
                    </div>
                    
                    <div className="d-flex align-items-center text-center">
                    <img src={drImg} className='' alt='img'/>
                            <div className='d-flex flex-column  '>
                                <span className=' '>Dr. Michael Murray recommends
shopping with iHerb</span>
                                <span className=''>Watch the video</span>
                            </div>
                    </div>
                   </div>
                   
                   
                   {/* for large and medium device */}
                    <div className='d-none d-md-flex   flex-wrap  justify-content-evenly align-items-center '>
                        <div className='d-flex   align-items-center '>
                            <img src={androidLogo} className='px-1' alt='img'/>
                            <div className='d-flex flex-column'>
                                <span className=' '>4.8 <span className='fs-cs-2'>/ 5</span></span>
                                <span className=''>351k ratings</span>
                            </div>
                        </div>
                        <div className='d-flex align-items-center '>
                            <img src={appleLogo} className='px-1' alt='img'/>
                            <div className='d-flex flex-column'>
                                <span className='fs-cs-4 fw-bold'>4.8 <span className='fs-cs-2'>/ 5</span></span>
                                <span className='fs-cs-1'>351k ratings</span>
                            </div>
                        </div>
                        <div className='d-flex align-items-center '>
                            <img src={googleLogo} className='px-1' alt='img'/>
                            <div className='d-flex flex-column'>
                                <span className='fs-cs-4 fw-bold'>4.8 <span className='fs-cs-2'>/ 5</span></span>
                                <span className='fs-cs-1'>351k ratings</span>
                            </div>
                        </div>
                        <div className='d-flex  align-items-center justify-content-end '>
                            <img src={drImg} className='px-1' alt='img'/>
                            <div className='d-flex flex-column  '>
                                <span className='fs-cs-1 lh-1 '>Dr. Michael Murray recommends
shopping with iHerb</span>
                                <span className='fs-cs-1'>Watch the video</span>
                            </div>
                        </div>
                        
                    </div>
                <div className='d-none d-lg-block mt-2 container  w-75 pt-3 d-sm-none  text-dark text-center   rounded-3 pt-2 border affordable-cs2'>
                
                    <Slider {...settings}  >
                <div className='d-flex flex-column align-items-center  '>
                    <h6>Japneese (Auto Translated)</h6>
                <h4 >Affordable and has a great selection</h4>
                <span >Show More</span>
                </div>
                <div className='d-flex flex-column align-items-center  '>
                    <h6>Japneese (Auto Translated)</h6>
                <h4 >Affordable and has a great selection</h4>
                
                </div>
                <div className='d-flex flex-column align-items-center  '>
                    <h6>Japneese (Auto Translated)</h6>
                <h4 >Affordable and has a great selection</h4>
                
                </div>
                <div className='d-flex flex-column align-items-center  '>
                    <h6>Japneese (Auto Translated)</h6>
                <h4 >Affordable and has a great selection</h4>
                
                </div>
                
                    </Slider>
                    <a className='text-center' href='/'>Read more reviews</a>
                

                </div>

                </div>
                </div>





                <div className='container-fluid  text-center mt-5 Top-10-reasons'>
                    <h3>Top 10 reasons to make iHerb your #1 choice for Natural Products!</h3>
                </div>

                <div className=' container-fluid about-top-ten-section text-center mt-5'>
                    <div className='about-top-ten-section-wrap'>

                        <div className='d-flex  about-top-ten-section-list'>
                            <div className='top-ten-numbers'>
                                <h3 style={{ fontFamily: 'Lato', color: '#2E7D32' }}>1.</h3>
                            </div>
                            <div className='about-top-ten-section-list-text'>
                                <h4>World's best value for over 30,000 brand name products, shipped to you directly </h4>
                                <div style={{ width: "100%" }}>
                                    <p>In business since 1996, iHerb ships out of multiple <a href="" className='text-decoration-none'>distribution centers</a> in the United States and Asia, and offers the same reputable national
                                        brands found at many other retailers. When comparison shopping, make sure to include shipping costs, and all the extra benefits you get from
                                        buying directly from us such as low pricing, fast shipping and guaranteed <a href="" className='text-decoration-none'>authentic products</a>. We're confident that you're getting the best
                                        overall value, especially on orders over $40. Rest assured that all products are stored and shipped exclusively by us.</p>
                                </div>
                            </div>
                        </div>


                        <div className='d-flex  about-top-ten-section-list'>
                            <div className='top-ten-numbers'>
                                <h3 style={{ fontFamily: 'Lato', color: '#2E7D32' }}>2.</h3>
                            </div>
                            <div className='about-top-ten-section-list-text'>
                                <h4>No membership or yearly subscription fees </h4>
                                <div style={{ width: "100%" }}>
                                    <p>Shop with confidence at iHerb, knowing that we always offer the best overall value in the world without any hidden membership or
                                        subscription fees.</p>
                                </div>
                            </div>
                        </div>


                        <div className='d-flex  about-top-ten-section-list'>
                            <div className='top-ten-numbers'>
                                <h3 style={{ fontFamily: 'Lato', color: '#2E7D32' }}>3.</h3>
                            </div>
                            <div className='about-top-ten-section-list-text'>
                                <h4>Authentic reviews from purchasing customers</h4>
                                <div style={{ width: "100%" }}>
                                    <p>We only allow reviews from customers who have ordered the specific product from iHerb. This assures honest and accurate reviews to help
                                        you make smarter buying choices.</p>
                                </div>
                            </div>
                        </div>





                        <div className='d-flex  about-top-ten-section-list'>
                            <div className='top-ten-numbers'>
                                <h3 style={{ fontFamily: 'Lato', color: '#2E7D32' }}>4.</h3>
                            </div>
                            <div className='about-top-ten-section-list-text'>
                                <h4>Assurance of freshness and quality</h4>
                                <div style={{ width: "100%" }}>
                                    <p>With an inventory turnover rate averaging 8.1 times per year, iHerb is able to offer you the FRESHEST products possible! You can even see
                                        the expiration or best-by dates on most products, like holding the actual product in a traditional store. Check out our iTested page for the next
                                        level of quality and transparency.</p>
                                </div>
                            </div>
                        </div>



                        <div className='d-flex  about-top-ten-section-list'>
                            <div className='top-ten-numbers'>
                                <h3 style={{ fontFamily: 'Lato', color: '#2E7D32' }}>5.</h3>
                            </div>
                            <div className='about-top-ten-section-list-text'>
                                <h4>Air-conditioned and super clean warehouses</h4>
                                <div style={{ width: "100%" }}>
                                    <p>iHerb’s <a href="" className='text-decoration-none'>distribution centers</a> are entirely climate-controlled, which protects the products from such conditions as humidity, heat, and cold. At
                                        iHerb, every product we sell is stored and shipped exclusively by us.</p>
                                </div>
                            </div>
                        </div>




                        <div className='d-flex  about-top-ten-section-list'>
                            <div className='top-ten-numbers'>
                                <h3 style={{ fontFamily: 'Lato', color: '#2E7D32' }}>6.</h3>
                            </div>
                            <div className='about-top-ten-section-list-text'>
                                <h4>Solid commitment to personal privacy</h4>
                                <div style={{ width: "100%" }}>
                                    <p>iHerb puts your privacy first. Since our founding in 1996, we have never sold or leased any customer information to third parties. Your
                                        personal information remains entirely confidential. What’s more, as of August 2018, iHerb is one of the few U.S. companies to be compliant
                                        with the European Union GDPR privacy laws.</p>
                                </div>
                            </div>
                        </div>



                        <div className='d-flex  about-top-ten-section-list'>
                            <div className='top-ten-numbers'>
                                <h3 style={{ fontFamily: 'Lato', color: '#2E7D32' }}>7.</h3>
                            </div>
                            <div className='about-top-ten-section-list-text'>
                                <h4>Fast, affordable shipping and Easy Return</h4>
                                <div style={{ width: "100%" }}>
                                    <p>Thanks to our growing number of warehouses and shipping partners around the world, we ship your orders fast and at competitive rates,
                                        offering free shipping to 35+ countries around the world. Our hassle-free return process allows you to submit your request within 60 days of
                                        purchase, or 90 days for iHerb Brands.</p>
                                </div>
                            </div>
                        </div>


                        <div className='d-flex  about-top-ten-section-list'>
                            <div className='top-ten-numbers'>
                                <h3 style={{ fontFamily: 'Lato', color: '#2E7D32' }}>8.</h3>
                            </div>
                            <div className='about-top-ten-section-list-text'>
                                <h4>24/7 customer service</h4>
                                <div style={{ width: "100%" }}>
                                    <p>We are reachable 24 hours per day, 7 days per week, by <a href="" className='text-decoration-none'>chat and contact</a> to answer questions and resolve issues with your order.</p>
                                </div>
                            </div>
                        </div>


                        <div className='d-flex  about-top-ten-section-list'>
                            <div className='top-ten-numbers'>
                                <h3 style={{ fontFamily: 'Lato', color: '#2E7D32' }}>9.</h3>
                            </div>
                            <div className='about-top-ten-section-list-text'>
                                <h4>Eco-friendly initiatives</h4>
                                <div style={{ width: "100%" }}>
                                    <p>When you shop with us, you're part of a <a href="" className='text-decoration-none'>global solution</a> for a healthier, more sustainable planet! lore</p>
                                </div>
                            </div>
                        </div>


                        <div className='d-flex  about-top-ten-section-list'>
                            <div className='top-ten-numbers'>
                                <h3 style={{ fontFamily: 'Lato', color: '#2E7D32' }}>10.</h3>
                            </div>
                            <div className='about-top-ten-section-list-text'>
                                <h4>Save even more, or get your order free!</h4>
                                <div style={{ width: "100%" }} className='mb-5'>

                                    <ul>
                                        <li>Review the products you purchase and get rewarded</li>
                                        <li>Tell others about iHerb and get rewarded</li>
                                    </ul>

                                    <a href="" className='text-decoration-none'>More about | iHerb Rewards</a>

                                </div>
                            </div>
                        </div>




                    </div>
                </div>


                <section style={{ background: "#FAFAFA" }} >

                    <div className='text-center container-fluid iHerb-is-run-sention'>
                        <div className='iHerb-is-run-sention-wrap mt-5'>
                            <h4>iHerb is run from 8 climate-controlled hubs &
                                fulfillment centers in the U.S. and Asia</h4>

                            <p className='mt-3'> All iHerb’s U.S. fulfillment centers are  <a href="" className='text-decoration-none'>GMP registered by NSF</a> . The majority of our orders going to
                                Japan, Hong Kong, and Singapore are processed from our South Korea and Hong Kong warehouses. All
                                products at these two warehouses are fulfilled directly from our main hub in California. </p>
                        </div>


                    </div>


                    <div className='iHerb-is-run-cards container-fluid mt-5 for-mob-is-none'>
                        <div className='iHerb-is-run-cards-wrap mb-5'>
















                            <div className="card  iHerb-is-run-cards-for-mobile" style={{ width: '18rem' }}>
                                <img src={about2} className="card-img-top" alt="..." />
                                <div className="card-body  Moreno ">
                                    <p className="card-text">Moreno Valley, CA</p>
                                    <h5 className="card-title">USA</h5>
                                </div>
                            </div>

                            <div className="card" style={{ width: '18rem' }}>
                                <img src={about2} className="card-img-top" alt="..." />
                                <div className="card-body  Moreno ">
                                    <p className="card-text">Moreno Valley, CA</p>
                                    <h5 className="card-title">USA</h5>
                                </div>
                            </div>

                            <div className="card" style={{ width: '18rem' }}>
                                <img src={about2} className="card-img-top" alt="..." />
                                <div className="card-body  Moreno ">
                                    <p className="card-text">Moreno Valley, CA</p>
                                    <h5 className="card-title">USA</h5>
                                </div>
                            </div>


                            <div className="card" style={{ width: '18rem' }}>
                                <img src={about2} className="card-img-top" alt="..." />
                                <div className="card-body  Moreno ">
                                    <p className="card-text">Moreno Valley, CA</p>
                                    <h5 className="card-title">USA</h5>
                                </div>
                            </div>


                            <div className="card" style={{ width: '18rem' }}>
                                <img src={about2} className="card-img-top" alt="..." />
                                <div className="card-body  Moreno ">
                                    <p className="card-text">Moreno Valley, CA</p>
                                    <h5 className="card-title">USA</h5>
                                </div>
                            </div>


                            <div className="card" style={{ width: '18rem' }}>
                                <img src={about2} className="card-img-top" alt="..." />
                                <div className="card-body  Moreno ">
                                    <p className="card-text">Moreno Valley, CA</p>
                                    <h5 className="card-title">USA</h5>
                                </div>
                            </div>

                            <div className="card" style={{ width: '18rem' }}>
                                <img src={about2} className="card-img-top" alt="..." />
                                <div className="card-body  Moreno ">
                                    <p className="card-text">Moreno Valley, CA</p>
                                    <h5 className="card-title">USA</h5>
                                </div>
                            </div>

                            <div className="card" style={{ width: '18rem' }}>
                                <img src={about2} className="card-img-top" alt="..." />
                                <div className="card-body  Moreno ">
                                    <p className="card-text">Moreno Valley, CA</p>
                                    <h5 className="card-title">USA</h5>
                                </div>
                            </div>




                        </div>
                    </div>



                    {/* For Moble */}

                    <div className='iHerb-is-run-cards container-fluid  mt-5  iHerb-is-run-cards-for-mobile-dis-on'>
                        <div className='iHerb-is-run-cards-wrap mb-5'>
                            <div className='d-flex iHerb-is-run-cards-for-mob' >
                                <div className='forrrrrimg'>
                                    <img src={about2} alt="" />
                                </div>
                                <div className='iHerb-is-run-cards-for-mob-text'>

                                    <p>Moreno Valley, CA </p>
                                    <h4>USA</h4>
                                </div>
                            </div>

                            <div className='d-flex iHerb-is-run-cards-for-mob' >
                                <div className='forrrrrimg'>
                                    <img src={about2} alt="" />
                                </div>
                                <div className='iHerb-is-run-cards-for-mob-text'>

                                    <p>Moreno Valley, CA </p>
                                    <h4>USA</h4>
                                </div>
                            </div>


                            <div className='d-flex iHerb-is-run-cards-for-mob' >
                                <div className='forrrrrimg'>
                                    <img src={about2} alt="" />
                                </div>
                                <div className='iHerb-is-run-cards-for-mob-text'>

                                    <p>Moreno Valley, CA </p>
                                    <h4>USA</h4>
                                </div>
                            </div>

                            <div className='d-flex iHerb-is-run-cards-for-mob' >
                                <div className='forrrrrimg'>
                                    <img src={about2} alt="" />
                                </div>
                                <div className='iHerb-is-run-cards-for-mob-text'>

                                    <p>Moreno Valley, CA </p>
                                    <h4>USA</h4>
                                </div>
                            </div>

                        </div>

                    </div>
                    {/* For Moble */}


                </section>




                <div className='iHerb-House-Brands-offer-section container-fluid mt-5'>
                    <div className='iHerb-House-Brands-offer-cards offer-the-best-value-is-mobile-noneeeee'>

                        <div className='iHerb-House-Brands-offer-cards-img'>
                            <img src={about3} alt="" />
                        </div >
                        <div className='iHerb-House-Brands-offer-cards-img'>
                            <img src={about3} alt="" />
                        </div>
                        <div className='iHerb-House-Brands-offer-cards-img'>
                            <img src={about3} alt="" />
                        </div>
                        <div className='iHerb-House-Brands-offer-cards-img'>
                            <img src={about3} alt="" />
                        </div>

                        <div className='iHerb-House-Brands-offer-cards-img'>
                            <img src={about3} alt="" />
                        </div>

                        <div className='iHerb-House-Brands-offer-cards-img'>
                            <img src={about3} alt="" />
                        </div>




                    </div>


                    {/* for mobile */}

                    <div className='iHerb-House-Brands-offer-section-for-mobile-on '>
                        <div className='iHerb-House-Brands-offer-section-text-size-for-mobile'>
                            <h4>iHerb House Brands offer the
                                best value</h4>
                        </div>

                        <div className='iHerb-House-Brands-offer-images-sections-cont mt-4'>
                            <div className='iHerb-House-Brands-offer-images-sections container-fluid d-flex mt-2'>
                                <div className='iHerb-House-Brands-offer-images-div'> <img src={about3} alt="" /> </div>
                                <div className='iHerb-House-Brands-offer-images-div'> <img src={about3} alt="" /> </div>
                                <div className='iHerb-House-Brands-offer-images-div'> <img src={about3} alt="" /> </div>


                            </div>


                            <div className='iHerb-House-Brands-offer-images-sections container-fluid d-flex mt-2'>
                                <div className='iHerb-House-Brands-offer-images-div'> <img src={about3} alt="" /> </div>
                                <div className='iHerb-House-Brands-offer-images-div'> <img src={about3} alt="" /> </div>
                                <div className='iHerb-House-Brands-offer-images-div'> <img src={about3} alt="" /> </div>


                            </div>


                            <div className='iHerb-House-Brands-offer-images-sections container-fluid d-flex mt-2'>
                                <div className='iHerb-House-Brands-offer-images-div'> <img src={about3} alt="" /> </div>
                                <div className='iHerb-House-Brands-offer-images-div'> <img src={about3} alt="" /> </div>
                                <div className='iHerb-House-Brands-offer-images-div'> <img src={about3} alt="" /> </div>


                            </div>

                        </div>
                    </div>


                    {/* for mobile */}



                    <div className='iHerb-House-Brands-offer-section-text'>

                        <div className='iHerb-House-Brands-offer-section-text-size'>


                            <div className='iHerb-House-Brands-offer-section-text-size-for-mobile offer-the-best-value-is-mobile-noneeeee
                            '>
                                <h4>iHerb House Brands offer the
                                    best value</h4>
                            </div>

                            <div className='mt-4 iHerb-House-Brands-offer-section-text-size-for-mobile'>
                                <h6>Made and sold by us</h6>
                                <p>Save money by shopping for iHerb house brand products made and
                                    sold directly by us - not third-party brands.</p>
                            </div>


                            <div className='iHerb-House-Brands-offer-section-text-size-for-mobile'>
                                <h6>Premium quality</h6>
                                <p>All  <a href="" className='text-decoration-none'>iHerb Brands</a> meet strict standards and Current Good
                                    Manufacturing Practices set by the FDA. We use only well-
                                    researched raw materials, unique ingredients, and trusted blends.</p>
                            </div>


                            <div className='iHerb-House-Brands-offer-section-text-size-for-mobile'>
                                <h6>90-day, money-back guarantee</h6>
                                <p>We're so confident in our iHerb Brands that we offer a full refund if
                                    you don’t love our products.</p>
                            </div>



                            <div className='iHerb-House-Brands-offer-section-text-size-for-mobile'>
                                <h6>Independently tested</h6>
                                <p>We've introduced the <a href="" className='text-decoration-none'>iTested program</a> to get our House Brand
                                    products tested by independent third-party labs for quality and
                                    assurance. This program is part of our commitment to deliver
                                    products that meet the highest standards.</p>
                            </div>

                            <div className='mb-5 iHerb-House-Brands-offer-section-text-size-for-mobile'>
                                <a href="" className='text-decoration-none '>Learn More</a>
                            </div>



                        </div>
                    </div>
                </div>




                <section style={{ background: "#F5F5F5" }}>
                    <br />
                    <div className='iHerb-Shared-Values-section container-lg mt-5' >
                        <h4>iHerb Shared Values</h4>

                        <img src={corlastimg} alt="" className="mt-4 mb-5" />
                    </div>

                    <div className='sale-last-section container-fluid mt-5 about-last-section-for-moile' style={{ background: " #F5F5F5" }}>
                        <br />
                        <div className="card " style={{ width: "12rem", background: " #F5F5F5", border: "none" }}>
                            <img src={sale1} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <p className="card-text text-center" style={{ fontSize: "13px" }}>The Best Natural Remedies for</p>
                            </div>
                        </div>
                        <div className="card " style={{ width: "12rem", background: " #F5F5F5", border: "none" }}>
                            <img src={sale2} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <p className="card-text text-center" style={{ fontSize: "13px" }}>The Best Foods and Supplements for Natural </p>
                            </div>
                        </div>
                        <div className="card " style={{ width: "12rem", background: " #F5F5F5", border: "none" }}>
                            <img src={sale3} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <p className="card-text text-center" style={{ fontSize: "13px" }}>Psychodermatology: Why
                                    Researchers Think the Mind-
                                </p>
                            </div>
                        </div>
                        <div className="card " style={{ width: "12rem", background: " #F5F5F5", border: "none" }}>
                            <img src={sale4} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <p className="card-text text-center" style={{ fontSize: "13px" }}>Stress-Related Hair Loss +
                                    Natural Solutions to Promote</p>
                            </div>
                        </div>
                        <div className="card " style={{ width: "12rem", background: " #F5F5F5", border: "none" }}>
                            <img src={sale5} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <p className="card-text text-center" style={{ fontSize: "13px" }}>Dry brushing: What It Is +
                                    Unexpected Health </p>
                            </div>
                        </div>
                        <div className="card " style={{ width: "12rem", background: " #F5F5F5", border: "none" }}>
                            <img src={sale6} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <p className="card-text text-center" style={{ fontSize: "13px" }}>How Spices Combat
                                    Inflammation and </p>
                            </div>
                        </div>


                    </div>

                </section>






            </section>



        </>
    )
}

export default Aboutus