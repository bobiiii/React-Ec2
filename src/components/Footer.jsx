import React from 'react'
import footer from "../images/footerline.png"
import Qr from "../images/qr-code.png"
function Footer() {
  return (
    <>
    
      <div classNameName='footerimage'>
        <img src={footer} alt="" />
      </div>
      <section className='container-fluid ftrsection '>
      <br />
      <div className="container my-5 ">
        <footer
          className="text-center text-lg-start text-gray ftrtext "
          style={{ backgroundColor: '#F5F5F5;',marginTop:"1em" }}
        >
          <section className="">
            <div className="container text-center text-md-start mt-5">
              <div className="row mt-3">

                <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">

                  <h6 className="text-uppercase fw-bold text-dark">ABOUT</h6>
                  <hr
                    className="mb-4 mt-0 d-inline-block mx-auto"
                    style={{ width: '60px', backgroundColor: '#7c4dff', height: '2px' }}
                  />
                 <p>
                    <a href="#!" className="text-secondary text-decoration-none">About Us</a>
                  </p>
                  <p>
                    <a href="#!" className="text-secondary text-decoration-none">Rewards Program</a>
                  </p>
                  <p>
                    <a href="#!" className="text-secondary text-decoration-none">Affiliate Program</a>
                  </p>
                  <p>
                    <a href="#!" className="text-secondary text-decoration-none">We Give Back</a>
                  </p>
                </div>

                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">

                  <h6 className="text-uppercase fw-bold text-dark">COMPANY</h6>
                  <hr
                    className="mb-4 mt-0 d-inline-block mx-auto"
                    style={{ width: '60px', backgroundColor: '#7c4dff', height: '2px' }}
                  />
                  <p>
                    <a href="#!" className="text-secondary text-decoration-none">Corporate</a>
                  </p>
                  <p>
                    <a href="#!" className="text-secondary text-decoration-none">Press</a>
                  </p>
                  <p>
                    <a href="#!" className="text-secondary text-decoration-none">Partner With iHerb</a>
                  </p>
                  <p>
                    <a href="#!" className="text-secondary text-decoration-none">Help</a>
                  </p>
                </div>

                <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4 text-dark">

                  <h6 className="text-uppercase fw-bold text-dark text-decoration-none">RESOURCES</h6>
                  <hr
                    className="mb-4 mt-0 d-inline-block mx-auto"
                    style={{ width: '60px', backgroundColor: '#7c4dff', height: '2px' }}
                  />
                  <p>
                    <a href="#!" className="text-secondary text-decoration-none">iHerb Blog</a>
                  </p>
                  <p>
                    <a href="#!" className="text-secondary text-decoration-none">iHerb Community</a>
                  </p>
                  <p>
                    <a href="#!" className="text-secondary text-decoration-none"><span className='text-danger'>New!</span> Influencers</a>
                  </p>
                  <p>
                    <a href="#!" className="text-secondary text-decoration-none"><span className='text-danger'>New!</span> Weliness Quiz</a>
                  </p>
                  <p>
                    <a href="#!" className="text-secondary text-decoration-none">Sales & Offers</a>
                  </p>
                </div>
                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">

                  <h6 className="text-uppercase fw-bold text-dark">CUSTOMER SERVECIES</h6>
                  <hr
                    className="mb-4 mt-0 d-inline-block mx-auto"
                    style={{ width: '60px', backgroundColor: '#7c4dff', height: '2px' }}
                  />
                  <div>
                  <p>
                    <a href="#!" className="text-secondary text-decoration-none">Contact Us</a>
                  </p>
                  <p>
                    <a href="#!" className="text-secondary text-decoration-none">Suggest a Product</a>
                  </p>
                  <p>
                    <a href="#!" className="text-secondary text-decoration-none">Order Status</a>
                  </p>
                  <p>
                    <a href="#!" className="text-secondary text-decoration-none">Shipping</a>
                  </p>
                  <p>
                    <a href="#!" className="text-secondary text-decoration-none">Communication Preferences</a>
                  </p>
                  </div>
                </div>

                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">

                  <h6 className="text-uppercase fw-bold text-dark">MOBILE APPS</h6>
                  <hr
                    className="mb-4 mt-0 d-inline-block mx-auto"
                    style={{ width: '60px', backgroundColor: '#7c4dff', height: '2px' }}
                  />
                  <div className='ms-3 qrimg'>
                     <img src={Qr} alt="" />
                     
                  </div>
                </div>

              </div>

            </div>
          </section>
        </footer>


      </div>
      </section>


    </>
  )
}

export default Footer