import React from 'react'
import blgmob1 from "../images/blgmob1.svg"
import sec2 from "../images/sec2.svg"
import sec1 from "../images/sec1.svg"
function Securemobcards() {
    return (
        <>

            <div className='secure-section-for-mobile-cards-cont mt-4   '>

            <div className='sec-Rewards-values-shown w-100  pt-3 px-2 text-start' style={{border:"1px solid #CCCCCC"}} ><p className='secure-font-setup-for-p' > <img src={blgmob1} alt="" />  Rewards values shown in US Dollars</p>
                </div>



                <div className=' mt-3 px-2 pt-2 py-1 d-flex justify-content-around' style={{ background: "#BBDEFB", width: "100%", height: "100%", borderRadius: "10px",border:"1px solid #126CC5" }}>
                <div>
                <img src={blgmob1} alt="" />  
                </div>
                <div>
                <p className='secure-font-setup-for-p ms-2' >LIMITED TIME App Offer: Refer anyone to shop the iHerb App from Apr 24 - May 31, 2023 to give them 15% off their first app order.</p>
                </div>
              </div>


              <div className='sec-Total-Available-Rewards-card-cont mt-3 pt-2 px-2 py-2 pe-2'>
              <div className=''>
                <div>
                  <h5 className='secure-font-setup-for-headings'>Total Available Rewards</h5>
                  <h5 className='secure-font-setup-for-headings'>$0.00</h5> 
                  <p className='secure-font-setup-for-p'>As of
                    5/24/23</p>
                </div>
              </div>

              <div className=' sec-Total-Available-Rewards-card-childs '>




                <div class="card" style={{ width: "100%" }}>
                  <div class="card-body">
                    <div className='d-flex justify-content-between'>
                      <div>
                        <h6 class="card-text secure-font-setup-for-p-another">Rewards Available for Purchase or Cashout  </h6>
                        <h5 class="card-title secure-font-setup-for-headings">$0.00</h5>
                        <p className='secure-font-setup-for-p '>$100.00 left until cash-out</p>  
                      </div>
                      
                      <div>
                        <img src={blgmob1} alt="" />
                      </div>
                    </div>

                    <div className=' border border-2 mt-2' style={{ width: "100%", alignItems: "center", display: "flex", justifyContent: "center" }}>
                      <a href="#" class="btn btn  secure-font-setup-for-p" style={{ width: "100%" }} >Shop now</a>
                    </div>
                  </div>
                </div>


                <div class="card" style={{ width: "100%" }}>
                  <div class="card-body">
                    <div className='d-flex justify-content-between'>
                      <div>
                        <h6 class="card-text secure-font-setup-for-p-another">Rewards Available for Purchase or Cashout  </h6>
                        <h5 class="card-title secure-font-setup-for-headings">$0.00</h5>
                      </div>
                      <div>
                        <img src={blgmob1} alt="" />
                      </div>
                    </div>

                    <div className=' border border-2 mt-2' style={{ width: "100%", alignItems: "center", display: "flex", justifyContent: "center" }}>
                      <a href="#" class="btn btn  secure-font-setup-for-p " style={{ width: "100%" }} >Use Rewards To Shop</a>
                    </div>
                  </div>
                </div>




              </div>
            </div>




            <div class="card" style={{ width: "100%", background: "#FFF9E7" }}>
                <div class="card-body">
                  <div className='d-flex justify-content-between'>
                    <div>
                      <h6 class="card-text secure-font-setup-for-headings">Pending Rewards  </h6>
                      <h5 class="card-title secure-font-setup-for-headings">$0.00</h5>
                      <p className='secure-font-setup-for-p'>As of
                        5/24/23</p>
                    </div>
                    <div>
                      <img src={blgmob1} alt="" />
                    </div>
                  </div>


                </div>
              </div>
            



              <div class="card" style={{ width: "100%" }}>
                <div class="card-body">
                  <div className=''>
                    <div >
                      <h6 class="card-text secure-font-setup-for-headings">Lifetime Rewards  </h6>
                      <h5 class="card-title secure-font-setup-for-headings" style={{color:"#0D487C"}}>$0.00</h5>
                      <p className='secure-font-setup-for-p'>As of 5/28/23</p>
                      <p></p>
                    </div>
                     
                     <div className='d-flex justify-content-between'>
                        <p className='secure-font-setup-for-p'>Redeemed</p>
                        <p className='secure-font-setup-for-p'>$0.00</p>
                     </div>
                     <div className='d-flex justify-content-between'>
                        <p className='secure-font-setup-for-p'>Cashed Out</p>
                        <p className='secure-font-setup-for-p'>$0.00</p>
                     </div>

                  </div>

                </div>
              </div>


              <div class="card" style={{ width: "100%", height: "100%" }}>
                  <div class="card-body">
                    <div className='d-flex justify-content-between'>
                      <div>
                        <h6 class="card-text ">Recent Transactions</h6>
                      </div>
                      <div >
                        <img src={blgmob1} alt="" />
                      </div>
                    </div>


                    <div className='mt-5 text-center'>
                      <img src={sec1} alt="" />
                      <p className='secure-font-setup-for-p'>No transaction history</p>
                    </div>




                    <div className='mt-5 sec-how-image'>
                      <img src={sec2} alt="" />
                    </div>



                  </div>
                </div>
   

   


            </div>
        </>
    )
}

export default Securemobcards