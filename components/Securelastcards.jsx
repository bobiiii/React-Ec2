import React from 'react'
import blgmob1 from "../images/blgmob1.svg"
import seclst from "../images/seclst.svg"
import Image from 'next/image'
function Securelastcards() {
    return (
        <>
            <div className='sec-last-cards-section'>
                <div class="card" style={{ width: "55%" }}>
                    <div class="card-body">
                        <div className=''>
                            <div>
                                <h6 class="card-text">Top referrals</h6>

                            </div>

                        </div>

                        <div className='sec-last-cards-iamges-cont mt-2 ' style={{width:"21rem"}}>
                            <div className='text-center' >
                                <Image src={seclst} alt="" />
                                <p>110
                                    Referrals</p>
                            </div>
                            <div className='text-center' >
                                <Image src={seclst} alt="" />
                                <p>110
                                    Referrals</p>
                            </div>
                            <div className='text-center' >
                                <Image src={seclst} alt="" />
                                <p>110
                                    Referrals</p>
                            </div>

                            <div className='text-center' >
                                <Image src={seclst} alt="" />
                                <p>110
                                    Referrals</p>
                            </div>
                        </div>


                    </div>
                </div>


                <div class="card" style={{ width: "18rem" }}>
                    <div class="card-body">
                        <div className='d-flex justify-content-between'>
                            <div>
                                <h6 class="card-text">Rewards Available for Purchase or Cashout  </h6>
                                <h5 class="card-title">$0.00</h5>
                            </div>
                            <div>
                                <Image src={blgmob1} alt="" />
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
                                <Image src={blgmob1} alt="" />
                            </div>
                        </div>

                        <div className=' border border-2 mt-2' style={{ width: "100%", alignItems: "center", display: "flex", justifyContent: "center" }}>
                            <a href="#" class="btn btn  " style={{ width: "100%" }} >Shop now</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Securelastcards