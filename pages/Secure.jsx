/* eslint-disable react/no-unescaped-entities */

import Secsidebar from '../components/Secsidebar'
import blgmob1 from "../images/blgmob1.svg"
import sec1 from "../images/sec1.svg"
import sec2 from "../images/sec2.svg"
import sec3 from "../images/sec3.svg"
import secf from "../images/secf.svg"
import sect from "../images/sect.svg"
import secw from "../images/secw.svg"
import secb from "../images/secb.svg"
import seci from "../images/seci.svg"
import Securemobcards from '../components/Securemobcards'
import vec2 from '../images/secure/vec2.svg'
import vec3 from '../images/secure/vec3.svg'
import vec4 from '../images/secure/vec4.svg'
import vec5 from '../images/secure/vec5.svg'
import vec6 from '../images/secure/vec6.svg'
import vec7 from '../images/secure/vec7.svg'
import Product1 from '../images/secure/product1.png'
import Product2 from '../images/secure/product2.png'
import shareIcon from '../images/secure/shareIco.svg'
import Image from 'next/image'



function Secure() {
  return (
    <>
      <section className='containr-fluid secure-section-cont-for-desktop '>
        <div className='secure-section-cont'>


          {/* Side bar start*/}
          <div className='secure-section-cont-sidebar'>
            <Secsidebar></Secsidebar>
          </div>
          {/* Side bar end */}



          <div className='secure-section-cont-center mb-5'>

            <div className='mt-3'>
              <div className='d-flex justify-content-between g-1 '>
                <div> <p>Rewards Overview</p> </div>
                <div className='sec-Rewards-values-shown pt-1' ><p  > <Image src={blgmob1} alt="" />  Rewards values shown in US Dollars</p>
                </div>
              </div>


              <div className=' mt-3 px-2 pt-2 py-1' style={{ background: "#BBDEFB", width: "100%", height: "100%", borderRadius: "10px", border: "1px solid #126CC5" }}>
                <p ><Image src={blgmob1} alt="" />  LIMITED TIME App Offer: Refer anyone to shop the iHerb App from Apr 24 - May 31, 2023 to give them 15% off their first app order.</p>
              </div>




            </div>


            <div className='sec-Total-Available-Rewards-card-cont mt-3 pt-2 px-2 py-2 pe-2'>
              <div className='d-flex justify-content-between'>
                <div>
                  <h5>Total Available Rewards</h5>
                  <p>As of
                    5/24/23</p>
                </div>

                <div>
                  <h5>$0.00</h5>
                </div>
              </div>

              <div className=' sec-Total-Available-Rewards-card-childs'>




                <div className="card" style={{ width: "45%" }}>
                  <div className="card-body">
                    <div className='d-flex justify-content-between'>
                      <div>
                        <h6 className="card-text">Rewards Available for Purchase or Cashout  </h6>
                        <h5 className="card-title">$0.00</h5>
                      </div>
                      <div>
                        <Image src={blgmob1} alt="" />
                      </div>
                    </div>

                    <div className=' border border-2 mt-2' style={{ width: "100%", alignItems: "center", display: "flex", justifyContent: "center" }}>
                      <a href="#" className="btn btn  " style={{ width: "100%" }} >Shop now</a>
                    </div>
                  </div>
                </div>


                <div className="card" style={{ width: "45%" }}>
                  <div className="card-body">
                    <div className='d-flex justify-content-between'>
                      <div>
                        <h6 className="card-text">Rewards Available for Purchase or Cashout  </h6>
                        <h5 className="card-title">$0.00</h5>
                      </div>
                      <div>
                        <Image src={blgmob1} alt="" />
                      </div>
                    </div>

                    <div className=' border border-2 mt-2' style={{ width: "100%", alignItems: "center", display: "flex", justifyContent: "center" }}>
                      <a href="#" className="btn btn  " style={{ width: "100%" }} >Use Rewards To Shop</a>
                    </div>
                  </div>
                </div>




              </div>
            </div>



            <div className=' sec-Total-Available-Rewards-card-childs mt-4'>


              <div className="card" style={{ width: "45%", background: "#FFF9E7" }}>
                <div className="card-body">
                  <div className='d-flex justify-content-between'>
                    <div>
                      <h6 className="card-text">Pending Rewards  </h6>
                      <h5 className="card-title">$0.00</h5>
                      <p>As of
                        5/24/23</p>
                    </div>
                    <div>
                      <Image src={blgmob1} alt="" />
                    </div>
                  </div>


                </div>
              </div>


              <div className="card" style={{ width: "55%" }}>
                <div className="card-body">
                  <div className='d-flex justify-content-between'>
                    <div >
                      <h6 className="card-text">Pending Rewards  </h6>
                      <h5 className="card-title">$0.00</h5>
                      <p></p>
                    </div>
                    <div>
                      <p>Redeemed  $0.00</p>
                      <hr />
                      <p>Cashed Out $0.00  </p>
                    </div>
                  </div>

                </div>
              </div>

            </div>




            <div className='secure-section-third-card-cont mt-4 w-100'>


              {/* Easy Shares */}
              <div style={{ width: "45%" }} className=' secure-section-fourth-card-side-cont border  '>


                <div className='container-fluid w-100  '>
                  <div className='card  border-0'>
                    <div className='card-body px-0'>
                      <div className='card-title ps-1'>
                        <h6> Easy Shares from Around the Site</h6>
                      </div>

                      <div className=' d-flex align-items-center   ' >
                        <Image src={sec3} alt="" />

                        <p className='my-auto ps-1 '>Your Shopping Cart </p>
                        <p className='my-auto ms-1 text-warning' >Share</p>

                      </div>
                      <div className=' d-flex align-items-center  ' >
                        <Image src={vec2} alt="" />

                        <p className='my-auto ps-1'>Products from iHerb Brands </p>
                        <p className='my-auto ms-1 text-warning' >Share</p>

                      </div>
                      <div className=' d-flex align-items-center  ' >
                        <Image src={vec7} alt="" />

                        <p className='my-auto ps-1'>Your Orders </p>
                        <p className='my-auto ms-1 text-primary' >Select Orders to share</p>

                      </div>
                      <div className=' d-flex align-items-center  ' >
                        <Image src={vec4} alt="" />

                        <p className='my-auto ps-1'>Your Product Review </p>
                        <p className='my-auto ms-1 text-primary' >Select Review to share</p>

                      </div>
                      <div className=' d-flex align-items-center  ' >
                        <Image src={vec5} alt="" />

                        <p className='my-auto ps-1'>Share Products & Categories </p>


                      </div>
                      <div className=' d-flex align-items-center  ' >
                        <Image src={vec6} alt="" />

                        <p className='my-auto ps-1'>Share Your Search Results </p>


                      </div>
                      <div className=' d-flex align-items-center  ' >
                        <Image src={vec3} alt="" />

                        <p className='my-auto ps-1'>Your Lists </p>
                        <p className='my-auto ms-1 text-primary' >Select list to share</p>

                      </div>

                    </div>
                  </div>
                </div>



                <div>
                  {/* share rewards Link */}
                  <div className="card" style={{ width: "100%" }}>
                    <div className="card-body">
                      <div className='d-flex justify-content-between'>
                        <div>
                          <h6 className="card-text">Share Your Rewards Link</h6>
                          <p className='text-start'>You are now logged in and ready to share the below Rewards link
                            containing your Rewards code . Or just go to any iHerb webpages
                            and then click on</p>
                        </div>
                        <div>
                          <Image src={blgmob1} alt="" />
                        </div>
                      </div>

                      <div className=' mt-2' style={{ width: "100%", alignItems: "center", display: "flex", justifyContent: "center" }}>
                        <input className="form-control me-2" type="search" placeholder="https://www.iherb.com" aria-label="Search" />
                      </div>

                      <div className="mt-2">
                        <div className="form-check">
                          <input className="form-check-input" type="checkbox" value="" id="exampleCheckbox" />
                          <label className="form-check-label" htmlFor="exampleCheckbox">
                            Shorten URL
                          </label>
                        </div>
                      </div>


                      <div style={{ width: "100%" }} className='mt-2' >
                        <p>Share your link with family, friends & followers! </p>
                      </div>


                      <div className='d-flex'>
                        <a href=""><Image src={secf} alt="" /></a>
                        <a href=""><Image src={sect} alt="" /></a>
                        <a href=""><Image src={secw} alt="" /></a>
                        <a href=""><Image src={secb} alt="" /></a>
                        <a href=""><Image src={seci} alt="" /></a>

                      </div>




                    </div>
                  </div>
                </div>


              </div>



              {/* Recent Transactions */}
              <div style={{ width: "55%" }}>

                <div className="card" style={{ width: "100%", height: "100%" }}>
                  <div className="card-body">
                    <div className='d-flex justify-content-between'>
                      <div>
                        <h6 className="card-text">Recent Transactions</h6>
                      </div>
                      <div >
                        <Image src={blgmob1} alt="" />
                      </div>
                    </div>


                    <div className='mt-5 text-center'>
                      <Image src={sec1} alt="" />
                      <p>No transaction history</p>
                    </div>




                    <div className='mt-5 sec-how-image'>
                      <Image src={sec2} alt="" />
                    </div>



                  </div>
                </div>
              </div>




            </div>


            <div className='mt-4 px-3 py-2 pt-3 d-flex justify-content-between' style={{ background: "#FFF9E7", borderRadius: "10px", width: "100%" }}>
              <div>
                <h6>Sign up now to receive Rewards updates!</h6>
                <p>Stay up to date on our Rewards Program's latest offer, earning notifications and more.</p>
              </div>
              <div className='mt-4 '>
                <a href="" className='text-dark'>No thanks</a>
                <a href="" className='btn btn ms-2 ' style={{ background: "#FFFFFF", borderRadius: "10px" }}>Sign me up!</a>
              </div>
            </div>



            {/* Babar, please correct this section. */}
            <div className='mt-5 sec-Trends-report'>
              <div>
                <h6>Trends report</h6>
              </div>

              <div className='d-flex sec-Trends-report-btns'>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingNine">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                      data-bs-target="#basicAccordionCollapseNine" aria-expanded="false" aria-controls="collapseNine">
                      <h6 className='faq-section-one-for-mobile-text-size'>India Trend</h6>
                    </button>
                  </h2>
                  <div id="basicAccordionCollapseNine" className="accordion-collapse collapse" aria-labelledby="headingNine"
                    data-bs-parent="#basicAccordion">
                    <div className="accordion-body">
                      <a href="" className='text-decoration-none text-dark'>hello</a>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingTen">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                      data-bs-target="#basicAccordionCollapseTen" aria-expanded="false" aria-controls="collapseTen">
                      <h6 className='faq-section-one-for-mobile-text-size'>Last 3 Months</h6>
                    </button>
                  </h2>
                  <div id="basicAccordionCollapseTen" className="accordion-collapse collapse" aria-labelledby="headingTen"
                    data-bs-parent="#basicAccordion">
                    <div className="accordion-body">
                      <a href="" className='text-decoration-none text-dark'>hello</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>





            {/* India Trends cards */}
            <div className='container-fluid  p-0 '>
              <div className='container '>
                <h6 className='mt-3'>India Trend</h6>
                <p>Need suggestions on what to refer? Check below to see what others in India are referring!</p>
              </div>

              <div className='container-fluid  d-flex flex-sm-wrap flex-lg-nowrap justify-content-evenly  gap-2'>
                <div className='border border-2  p-2 '>
                  <h6>Top Referals</h6>
                  <div className='d-flex  mb-2'>
                    <div className='text-center' >
                      <Image src={Product1} className='img-fluid d-block  w-75 mx-auto' alt='product' />
                      <span className='green-text' >110 referals</span>
                    </div>
                    <div className='text-center'>
                      <Image src={Product2} className='img-fluid d-block w-75 mx-auto' alt='product' />
                      <span className='green-text' >110 referals</span>
                    </div>



                  </div>
                  <div className='d-flex '>
                    <div className='text-center' >
                      <Image src={Product1} className='img-fluid d-block  w-75 mx-auto' alt='product' />
                      <span className='green-text' >110 referals</span>
                    </div>
                    <div className='text-center'>
                      <Image src={Product2} className='img-fluid d-block w-75 mx-auto' alt='product' />
                      <span className='green-text' >110 referals</span>
                    </div>



                  </div>

                </div>
                <div className='border border-2   p-2 '>
                  <h6>Top Brands</h6>
                  <div className='d-flex  mb-2'>
                    <div className='text-center' >
                      <Image src={Product1} className='img-fluid d-block  w-75 mx-auto' alt='product' />
                      <span className='green-text' >110 referals</span>
                    </div>
                    <div className='text-center'>
                      <Image src={Product2} className='img-fluid d-block w-75 mx-auto' alt='product' />
                      <span className='green-text' >110 referals</span>
                    </div>



                  </div>
                  <div className='d-flex '>
                    <div className='text-center' >
                      <Image src={Product1} className='img-fluid d-block  w-75 mx-auto' alt='product' />
                      <span className='green-text' >110 referals</span>
                    </div>
                    <div className='text-center'>
                      <Image src={Product2} className='img-fluid d-block w-75 mx-auto' alt='product' />
                      <span className='green-text' >110 referals</span>
                    </div>



                  </div>

                </div>

                <div className='border border-2 p-2 '>
                  <h6>Popular categories</h6>
                  <div className=''>
                    <div className='d-flex align-items-center justify-content-between py-1'>
                      <button className='btn border  rounded-pill border-1 py-1 bg-transparent'>Supplements</button>
                      <div className='d-flex my-auto  align-items-center'>
                        <button className='my-auto mx-1 rounded-3 green-bg text-white   border-success mx-2 btn'>1</button>
                        <p className='my-auto green-text'>6715&nbsp;referals</p>
                        <Image src={shareIcon} alt='share' className='my-auto ms-1'/>
                      </div>
                    </div>
                    <div className='d-flex align-items-center  justify-content-between py-1'>
                      <button className='btn border  rounded-pill border-1 py-1 bg-transparent'>Supplements</button>
                      <div className='d-flex my-auto  align-items-center '>
                        <button className='my-auto mx-1 rounded-3 bg-transparent green-text  border-success mx-2 btn'>2</button>
                        <p className='my-auto green-text'>6715&nbsp;referals</p>
                        <Image src={shareIcon} alt='share' className='my-auto ms-1'/>
                      </div>
                    </div>
                    <div className='d-flex align-items-center justify-content-between py-1'>
                      <button className='btn border  rounded-pill border-1 py-1 bg-transparent text-nowrap '>Bath & Personal care</button>
                      <div className='d-flex my-auto  align-items-center '>
                        <button className='my-auto mx-1 rounded-3 bg-transparent green-text  border-success mx-2 btn' >3</button>
                        <p className='my-auto green-text'>6715&nbsp;referals</p>
                        <Image src={shareIcon} alt='share' className='my-auto ms-1'/>
                      </div>
                    </div>
                    <div className='d-flex align-items-center justify-content-between py-1'>
                      <button className='btn border  rounded-pill  py-1 bg-transparent '>Supplements</button>
                      <div className='d-flex my-auto  align-items-center'>
                        <button className='my-auto mx-1 rounded-3 bg-transparent green-text  border-success mx-2 btn'>1</button>
                        <p className='my-auto green-text'>6715&nbsp;referals</p>
                        <Image src={shareIcon} alt='share' className='my-auto ms-1'/>
                      </div>
                    </div>
                  </div>

                </div>




              </div>

            </div>



            {/* About iHerbs */}
            <div className='mt-5 '>

              <h6>About iHerb Rewards</h6>
              <hr />

              <div className='d-flex justify-content-between'>
                <div >
                  <p><a href="" style={{ color: "#458500" }}>How It Works</a></p>
                  <p><a href="" style={{ color: "#458500" }}>Tax Information</a></p>
                  <p><a href="" style={{ color: "#458500" }}>Terms & Conditions</a></p>
                </div>
                <div>

                </div>
                <h6> <span style={{ color: "#458500" }}>iHerb</span> | REWARDS </h6>
              </div>
            </div>






          </div>
        </div>
      </section>





      <section className='secure-section-for-mobile container-fluid'>

        <div className='mt-3'>

          <h6 className='text-start secure-font-setup-for-headings'>Rewards Overview</h6>

          <div className='d-flex justify-content-around mt-5'>
            <div><a href="" className='text-decoration-none text-secondary secure-font-setup-for-a-tags'>Dashboard</a></div>
            <div><a href="" className='text-decoration-none text-secondary secure-font-setup-for-a-tags'>Trends</a></div>
            <div><a href="" className='text-decoration-none text-secondary secure-font-setup-for-a-tags'>Share</a></div>
          </div>
          <hr />


        </div>


        <Securemobcards></Securemobcards>





        <div className='mt-5 '>

          <h6 className='secure-font-setup-for-another'>About iHerb Rewards</h6>
          <hr />

          <div className='d-flex justify-content-between'>
            <div >
              <p className='secure-font-setup-for-p'><a href="" style={{ color: "#458500" }}>How It Works</a></p>
              <p className='secure-font-setup-for-p'><a href="" style={{ color: "#458500" }}>Tax Information</a></p>
              <p className='secure-font-setup-for-p'><a href="" style={{ color: "#458500" }}>Terms & Conditions</a></p>
            </div>

          </div>
        </div>




      </section>



    </>
  )
}

export default Secure