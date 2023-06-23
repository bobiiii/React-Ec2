import React from 'react'
import Secsidebar from './Secsidebar'
import blgmob1 from "../images/blgmob1.svg"
import sec1 from "../images/sec1.svg"
import sec2 from "../images/sec2.svg"
import sec3 from "../images/sec3.svg"
import sec4 from "../images/sec4.svg"
import sec5 from "../images/sec5.svg"
import sec6 from "../images/sec6.svg"
import sec7 from "../images/sec7.svg"
import sec8 from "../images/sec8.svg"
import sec9 from "../images/sec9.svg"
import secf from "../images/secf.svg"
import sect from "../images/sect.svg"
import secw from "../images/secw.svg"
import secb from "../images/secb.svg"
import seci from "../images/seci.svg"
import Securelastcards from './Securelastcards'
import Securemobcards from './Securemobcards'


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
                <div className='sec-Rewards-values-shown pt-1' ><p  > <img src={blgmob1} alt="" />  Rewards values shown in US Dollars</p>
                </div>
              </div>


              <div className=' mt-3 px-2 pt-2 py-1' style={{ background: "#BBDEFB", width: "100%", height: "100%", borderRadius: "10px",border:"1px solid #126CC5" }}>
                <p ><img src={blgmob1} alt="" />  LIMITED TIME App Offer: Refer anyone to shop the iHerb App from Apr 24 - May 31, 2023 to give them 15% off their first app order.</p>
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




                <div class="card" style={{ width: "45%" }}>
                  <div class="card-body">
                    <div className='d-flex justify-content-between'>
                      <div>
                        <h6 class="card-text">Rewards Available for Purchase or Cashout  </h6>
                        <h5 class="card-title">$0.00</h5>
                      </div>
                      <div>
                        <img src={blgmob1} alt="" />
                      </div>
                    </div>

                    <div className=' border border-2 mt-2' style={{ width: "100%", alignItems: "center", display: "flex", justifyContent: "center" }}>
                      <a href="#" class="btn btn  " style={{ width: "100%" }} >Shop now</a>
                    </div>
                  </div>
                </div>


                <div class="card" style={{ width: "45%" }}>
                  <div class="card-body">
                    <div className='d-flex justify-content-between'>
                      <div>
                        <h6 class="card-text">Rewards Available for Purchase or Cashout  </h6>
                        <h5 class="card-title">$0.00</h5>
                      </div>
                      <div>
                        <img src={blgmob1} alt="" />
                      </div>
                    </div>

                    <div className=' border border-2 mt-2' style={{ width: "100%", alignItems: "center", display: "flex", justifyContent: "center" }}>
                      <a href="#" class="btn btn  " style={{ width: "100%" }} >Use Rewards To Shop</a>
                    </div>
                  </div>
                </div>




              </div>
            </div>



            <div className=' sec-Total-Available-Rewards-card-childs mt-4'>


              <div class="card" style={{ width: "40%", background: "#FFF9E7" }}>
                <div class="card-body">
                  <div className='d-flex justify-content-between'>
                    <div>
                      <h6 class="card-text">Pending Rewards  </h6>
                      <h5 class="card-title">$0.00</h5>
                      <p>As of
                        5/24/23</p>
                    </div>
                    <div>
                      <img src={blgmob1} alt="" />
                    </div>
                  </div>


                </div>
              </div>


              <div class="card" style={{ width: "60%" }}>
                <div class="card-body">
                  <div className='d-flex justify-content-between'>
                    <div >
                      <h6 class="card-text">Pending Rewards  </h6>
                      <h5 class="card-title">$0.00</h5>
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




            <div className='secure-section-third-card-cont mt-4'>


              <div style={{ width: "50%" }} className='secure-section-fourth-card-side-cont'>
                <div>
                  <div class="card" style={{ width: "100%" }}>
                    <div class="card-body">
                      <div className='d-flex justify-content-between'>
                        <div>
                          <h6 class="card-tittle">Easy Shares from Around the Site</h6>
                          <div className='sec-Your-Shopping-Cart-lines  '>
                            <div style={{ height: "100%", alignItems: "center" }}><img src={sec3} alt="" /></div>
                            <div style={{ height: "100%", alignItems: "center" }}><p >Your Shopping Cart</p></div>
                            <div style={{ height: "100%", alignItems: "center" }}><p>Share</p> </div>



                          </div>
                        </div>

                      </div>

                    </div>
                  </div>
                </div>


                <div>
                  <div class="card" style={{ width: "100%" }}>
                    <div class="card-body">
                      <div className='d-flex justify-content-between'>
                        <div>
                          <h6 class="card-text">Share Your Rewards Link</h6>
                          <p className='text-start'>You are now logged in and ready to share the below Rewards link
                            containing your Rewards code . Or just go to any iHerb webpages
                            and then click on</p>
                        </div>
                        <div>
                          <img src={blgmob1} alt="" />
                        </div>
                      </div>

                      <div className=' mt-2' style={{ width: "100%", alignItems: "center", display: "flex", justifyContent: "center" }}>
                        <input class="form-control me-2" type="search" placeholder="https://www.iherb.com" aria-label="Search" />
                      </div>

                      <div class="mt-2">
                        <div class="form-check">
                          <input class="form-check-input" type="checkbox" value="" id="exampleCheckbox" />
                          <label class="form-check-label" for="exampleCheckbox">
                            Shorten URL
                          </label>
                        </div>
                      </div>


                      <div style={{ width: "100%" }} className='mt-2' >
                        <p>Share your link with family, friends & followers! </p>
                      </div>


                      <div className='d-flex'>
                        <a href=""><img src={secf} alt="" /></a>
                        <a href=""><img src={sect} alt="" /></a>
                        <a href=""><img src={secw} alt="" /></a>
                        <a href=""><img src={secb} alt="" /></a>
                        <a href=""><img src={seci} alt="" /></a>

                      </div>




                    </div>
                  </div>
                </div>


              </div>

              <div style={{ width: "100%" }}>

                <div class="card" style={{ width: "100%", height: "100%" }}>
                  <div class="card-body">
                    <div className='d-flex justify-content-between'>
                      <div>
                        <h6 class="card-text">Recent Transactions</h6>
                      </div>
                      <div >
                        <img src={blgmob1} alt="" />
                      </div>
                    </div>


                    <div className='mt-5 text-center'>
                      <img src={sec1} alt="" />
                      <p>No transaction history</p>
                    </div>




                    <div className='mt-5 sec-how-image'>
                      <img src={sec2} alt="" />
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

            {/* Babar, please correct this section. */}


            <h6 className='mt-3'>India Trend</h6>
            <p>Need suggestions on what to refer? Check below to see what others in India are referring!</p>


{/* babar please make it again*/}
   {/* <Securelastcards></Securelastcards> */}
         {/* babar please make it again*/}



   <div className='mt-5 '>
       
       <h6>About iHerb Rewards</h6>
       <hr />
 
 <div className='d-flex justify-content-between'>
   <div >
    <p><a href="" style={{color:"#458500"}}>How It Works</a></p>
    <p><a href="" style={{color:"#458500"}}>Tax Information</a></p>
    <p><a href="" style={{color:"#458500"}}>Terms & Conditions</a></p>
   </div>
   <div>
      
   </div>
    <h6> <span style={{color:"#458500"}}>iHerb</span> | REWARDS </h6>
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
    <p className='secure-font-setup-for-p'><a href="" style={{color:"#458500"}}>How It Works</a></p>
    <p className='secure-font-setup-for-p'><a href="" style={{color:"#458500"}}>Tax Information</a></p>
    <p className='secure-font-setup-for-p'><a href="" style={{color:"#458500"}}>Terms & Conditions</a></p>
   </div>

   </div>
   </div>




    </section>
  


    </>
  )
}

export default Secure