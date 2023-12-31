import React from 'react'
import Qr from "../images/qr-code.png"
import playstore from "../images/appstore.png"  
import Footercenter from './Footercenter'
import Footerend from './Footerend'
import google from "../images/google.png" 
import ftrimg from "../images/ftrimg.svg"
function Footer() {
  return (
    <>
      
      <section className=' ftrsection ' >
        
      
        <div className="   this-footer-none-for-mobile " style={{    background: "#FAFAFA"}}>
        
          <footer
            className="text-center text-lg-start text-gray ftrtext  "
            style={{ backgroundColor: '#F5F5F5', marginTop: "1em" }}
          >
            <section className="">
            <div className='footerimage' style={{ width: "100%",height:"100%" }}>
        <img src={ftrimg} alt="" style={{ width: "100%",height:"100%" }} />
      </div>  
              <div className="container text-center text-md-start mt-5 ">
                <div className="row mt-3 ">

                  <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4 mt-5">

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

                  <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4 mt-5">

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

                  <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4 text-dark mt-5">

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
                  <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4 mt-5">

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

                  <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4 mb-5 mobile-qr-none">

                    <h6 className="text-uppercase fw-bold text-dark">MOBILE APPS</h6>
                    <hr
                      className="mb-4 mt-0 d-inline-block mx-auto"
                      style={{ width: '60px', backgroundColor: '#7c4dff', height: '2px' }}
                    />
                    
                    <div className='ms-3 qrimg'>
                      <img src={Qr} alt="" />
                      <div>
                      <img src={google} alt="" className='ms-4' style={{
                        width: '90px',
                        height: '26.8px',
                        left: '10px',
                        top: '0px'
                      }} />
                      
                      <img src={playstore} alt="" className='ms-4 mt-3' style={{
                        width: '90px',
                        height: '26.8px',
                        left: '10px',
                        top: '0px'
                      }} />
                      </div>
                      
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </footer>
        </div>

 
        {/* <div className="accordion w-100" id="basicAccordion">
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingOne">
      <button className="accordion-button collapsed" type="button" data-mdb-toggle="collapse"
        data-mdb-target="#basicAccordionCollapseOne" aria-expanded="false" aria-controls="collapseOne">
        Question #1
      </button>
    </h2>
    <div id="basicAccordionCollapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne"
      data-mdb-parent="#basicAccordion" >
      <div className="accordion-body">
        <strong>This is the first item's accordion body.</strong> It is shown by default,
        until the collapse plugin adds the appropriate classes that we use to style each
        element. These classes control the overall appearance, as well as the showing and
        hiding via CSS transitions. You can modify any of this with custom CSS or overriding
        our default variables. It's also worth noting that just about any HTML can go within
        the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingTwo">
      <button className="accordion-button collapsed" type="button" data-mdb-toggle="collapse"
        data-mdb-target="#basicAccordionCollapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Question #2
      </button>
    </h2>
    <div id="basicAccordionCollapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo"
      data-mdb-parent="#basicAccordion" >
      <div className="accordion-body">
        <strong>This is the second item's accordion body.</strong> It is hidden by default,
        until the collapse plugin adds the appropriate classes that we use to style each
        element. These classes control the overall appearance, as well as the showing and
        hiding via CSS transitions. You can modify any of this with custom CSS or overriding
        our default variables. It's also worth noting that just about any HTML can go within
        the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingThree">
      <button className="accordion-button collapsed" type="button" data-mdb-toggle="collapse"
        data-mdb-target="#basicAccordionCollapseThree" aria-expanded="false" aria-controls="collapseThree">
        Question #3
      </button>
    </h2>
    <div id="basicAccordionCollapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree"
      data-mdb-parent="#basicAccordion" >
      <div className="accordion-body">
        <strong>This is the third item's accordion body.</strong> It is hidden by default,
        until the collapse plugin adds the appropriate classes that we use to style each
        element. These classes control the overall appearance, as well as the showing and
        hiding via CSS transitions. You can modify any of this with custom CSS or overriding
        our default variables. It's also worth noting that just about any HTML can go within
        the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
</div> */}


<div className="accordion w-100 for-desktop-screen-this-ftr-none" id="basicAccordion" >
<div className="accordion-item">
  <h2 className="accordion-header" id="headingOne">
    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
      data-bs-target="#basicAccordionCollapseOne" aria-expanded="false" aria-controls="collapseOne"
      style={{backgroundColor:"#F5F5F5", outline: 'none', boxShadow: 'none', color: 'inherit'}}>
      <h5 className='footer-for-mobile-text-size' >About</h5>
    </button>
  </h2>
  <div id="basicAccordionCollapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne"
    data-bs-parent="#basicAccordion">
    <div className="accordion-body" style={{backgroundColor:"#F5F5F5"}}>
      <a href="" className='text-decoration-none text-dark'>heello</a>
    </div>
  </div>
</div>

<div className="accordion-item">
  <h2 className="accordion-header" id="headingTwo">
    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
      data-bs-target="#basicAccordionCollapseTwo" aria-expanded="false" aria-controls="collapseTwo"
      style={{backgroundColor:"#F5F5F5", outline: 'none', boxShadow: 'none', color: 'inherit'}}>
      <h5 className='footer-for-mobile-text-size'>Company</h5>
    </button>
  </h2>
  <div id="basicAccordionCollapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo"
    data-bs-parent="#basicAccordion">
    <div className="accordion-body" style={{backgroundColor:"#F5F5F5"}}>
      <a href="" className='text-decoration-none text-dark'>heello</a>
    </div>
  </div>
</div>

<div className="accordion-item">
  <h2 className="accordion-header" id="headingThree">
    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
      data-bs-target="#basicAccordionCollapseThree" aria-expanded="false" aria-controls="collapseThree"
      style={{backgroundColor:"#F5F5F5", outline: 'none', boxShadow: 'none', color: 'inherit'}}>
      <h5 className='footer-for-mobile-text-size'>Resources</h5>
    </button>
  </h2>
  <div id="basicAccordionCollapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree"
    data-bs-parent="#basicAccordion" style={{backgroundColor:"#F5F5F5"}}>
    <div className="accordion-body">
      <a href="" className='text-decoration-none text-dark'>heello</a>
    </div>
  </div>
</div>


<div className="accordion-item">
  <h2 className="accordion-header" id="headingFour">
    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
      data-bs-target="#basicAccordionCollapseFour" aria-expanded="false" aria-controls="basicAccordionCollapseFour"
      style={{backgroundColor:"#F5F5F5", outline: 'none', boxShadow: 'none', color: 'inherit'}}>
      <h5 className='footer-for-mobile-text-size'>Customer Service</h5>
    </button>
  </h2>
  <div id="basicAccordionCollapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour"
    data-bs-parent="#basicAccordion">
    <div className="accordion-body" style={{backgroundColor:"#F5F5F5"}}>
      <a href="" className='text-decoration-none text-dark'>World</a>
    </div>
  </div>
</div>


</div>



        <hr/>
      
        <Footercenter/>
        <Footerend/>
      </section>


 







      
      
      


    </>
  )
}

export default Footer