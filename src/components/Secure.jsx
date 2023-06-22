import React from 'react'
import Secsidebar from './Secsidebar'
import blgmob1 from "../images/blgmob1.svg"
function Secure() {
  return (
    <>
      <section className='containr-fluid'>
        <div className='secure-section-cont'>


          {/* Side bar start*/}
          <div className='secure-section-cont-sidebar'>
            <Secsidebar></Secsidebar>
          </div>
          {/* Side bar end */}



          <div className='secure-section-cont-center '>

            <div className='mt-3'>
              <div className='d-flex justify-content-between g-1'>
                <div> <p>Rewards Overview</p> </div>
                <div className='sec-Rewards-values-shown pt-1' ><p  > <img src={blgmob1} alt="" />  Rewards values shown in US Dollars</p>
                </div>
              </div>


              <div className=' mt-3 px-2 pt-2 py-1' style={{ background: "#BBDEFB", width: "100%", height: "100%", borderRadius: "10px" }}>
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

                <div class="card" style={{ width: "50%" }}>
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


                <div class="card" style={{ width: "50%" }}>
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




            <div className='secure-section-third-card-cont'>


              <div>
                 

  
              <div class="card" style={{ width: "50%" }}>
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



              <div class="card" style={{ width: "50%" }}>
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

              </div>
              <div>
              <div class="card" style={{ width: "50%" }}>
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
              </div>


            </div>









          </div>
        </div>
      </section>
    </>
  )
}

export default Secure