// import React from 'react'
import facebook from "../images/facebook-logo.png.png"
import twitter from "../images/twitter-logo.png.png"
import youtube from "../images/youtube-logo.png.png"
import pin from "../images/pinterest-logo.png.png"
import insta from "../images/instagram-logo.png.png"
import playstore from "../images/appstore.png"  
import google from "../images/google.png" 
function Footercenter() {
  return (
    <>
      <div className='footercenter container-fluid ' >

        <div className='ftritems'>
          <h6 className='textoffer '> Be the first to get promo offers straight to your inbox </h6>
          <br />
          <form className="d-flex">
            <input className="form-control me-2" type="search" placeholder="Enter Email Address" aria-label="Search" />
            <button className="btn btn" type="submit" style={{background:"#458500",color:"white"}}>Signup</button>
          </form>
          <br />
          
          <p className='fotrpra'>Your email address will be used to send you Health Newsletters and emails about iHerb’s products, services, sales,
            and special offers.You can unsubscribe at any time by clicking on the unsubscribe link in each email. For more
            information on our use of your personal information and your rights, see our Privacy Policy.</p>

          <p className='fotrpra2'>This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.</p>


<div className="mobile-installiicon-section">
          <div className="social-buttons ">
  <a href="#" className="social-button github">
    <img src={facebook} alt="" />
      </a>
      <a href="#" className="social-button github">
    <img src={twitter} alt="" />
      </a>
      <a href="#" className="social-button github">
    <img src={youtube} alt="" />
      </a>
      <a href="#" className="social-button github">
    <img src={pin} alt="" />
      </a>
      <a href="#" className="social-button github">
    <img src={insta} alt="" />
      </a>
 <div className='mt-4 ms-2 mobile-g-none'>

      <p className='number'> 4.9</p>
      <p>Google</p>
      <p> Customer Reviews</p>
 </div>
</div>
</div>
        </div>
      </div>
      <hr />

  <div className="Get-the-wallHerb-App-Today-for-mobile container-fluid mb-4">
     
     <h5 style={{color:"#458500"}}>Get the wallHerb App Today</h5>
     <p>Download our mobile app and shop on the
go!</p>

<div className="d-flex justify-content-between w-75">
   <div><img src={playstore} alt="" /></div>
   <div><img src={google} alt="" /></div>
</div>

  </div>


    </>
  )
}

export default Footercenter