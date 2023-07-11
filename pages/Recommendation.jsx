import React from 'react'
import rec from "../images/rec.png"
import quiz from "../images/quiz.png"
import tick from "../images/tick.png"
import WallHerbLive from '../components/WallHerbLive'
import sale1 from "../images/sale1.png"
import sale2 from "../images/sale2.png"
import sale3 from "../images/sale3.png"
import sale4 from "../images/sale4.png"
import sale5 from "../images/sale5.png"
import sale6 from "../images/sale6.png"
import vectorShare from "../images/shareVector.svg"
function Recommendation() {
  return (
    <>
      <div className='mainhero'>
        <div className='hero ' style={{ background: "#02AD5F", color: "white" }}>
          <div className='ms-5 ' >
            <h4> 20% off Immunne Support! </h4>
          </div>
          <div>
            <button type="button" className="btn shopbtn mb-2">Shop Now</button>
          </div>
        </div>
        <div className='cruveclr' style={{ background: 'linear-gradient(315deg, #026ACD 50%, #02AD5F 50%)' }}>
        </div>

        <div className='hero2' style={{ background: "#026ACD" }}>
          <div className='ms-5'>
            <h4> Up to 30% off Herbs & Splices! </h4>
          </div>
          <div>
            <button type="button" className="btn shopbtn mb-2">Shop Now</button>
          </div>
        </div>
      </div>
      <section style={{ background: "#EDF3E6" }}>

        <div className='container-fluid rec-section-img'>
          <img src={rec} alt="" />
        </div>




        <section >
          <div className='Get-personalized-section container-fluid '>
            <div className='mt-5'>
              <h3 className='secure-font-setup-for-headings'>Get personalized recommendations fast</h3>
              <p className='secure-font-setup-for-p'>pAnswer a few questions and we'll help you find the right vitamins and supplements for your
                wellness needs.</p>
              <a href="" className='btn btn mt-2 secure-font-setup-for-p' style={{ background: "#458500", color: "#FFFFFF" }}>Take the quiz</a>

              <p className='mt-2 secure-font-setup-for-p' >We never save or share your personal info.</p>
            </div>
          </div>

        </section>


        <div className='quiz-image-section container-fluid text-center'>
          <img src={quiz} alt="" />
        </div>

        <div className='our-recommendations-text text-center container-fluid mt-5'>
          <h4 className='secure-font-setup-for-headings'>How we select our recommendations</h4>
          <p className='secure-font-setup-for-p'>We feature a wide range of vitamins, supplements, herbs, superfoods, sports nutrition, and more to support a healthy lifestyle.</p>
        </div>

        <div className='our-recommendations-cards container-lg' >
          <div className="card p-3 py-4 border-0" style={{ width: "25%", background: "#EDF3E6" }}>
            <div className="text-center tick-img">
              <img src={tick} width="100" className="rounded-circle" />
            </div>
            <div className="text-center mt-3">
              <p className='secure-font-setup-for-p'>Meets strict standards and
                Current Good Manufacturing
                Practices set by the FDA  </p>
            </div>
          </div>
          <div className="card p-3 py-4 border-0" style={{ width: "25%", background: "#EDF3E6" }}>
            <div className="text-center tick-img">
              <img src={tick} width="100" className="rounded-circle" />
            </div>
            <div className="text-center mt-3">
              <p className='secure-font-setup-for-p'>Made with raw materials, unique
                ingredients, and trusted blends</p>
            </div>
          </div>
          <div className="card p-3 py-4 border-0" style={{ width: "25%", background: "#EDF3E6" }}>
            <div className="text-center tick-img">
              <img src={tick} width="100" className="rounded-circle" />
            </div>
            <div className="text-center mt-3">
              <p className='secure-font-setup-for-p'>Independently tested for quality
                through the <a href="" className='text-decoration-none'>iTested program </a></p>
            </div>
          </div>

          <div className="card p-3 py-4 border-0" style={{ width: "25%", background: "#EDF3E6" }}>
            <div className="text-center tick-img">
              <img src={tick} width="100" className="rounded-circle" />
            </div>
            <div className="text-center mt-3">
              <p className='secure-font-setup-for-p'>Includes 90-day, money-back
                guarantee</p>
            </div>
          </div>



        </div>

  
     <div className='Enjoy-the-quiz text-center container-fluid mt-5'>
      <div>
         <h4 className='green-text text-start secure-font-setup-for-headings'>Enjoy the quiz? Share and earn Rewards!</h4>
         <p className='secure-font-setup-for-p text-start'>Get 5% or 10% commission on any referral purchases from the quiz.</p>
      </div>

      <div>
          <a href="" className='btn btn secure-font-setup-for-p d-flex ' style={{background:"#FFFFFF"}}>Share <img src={vectorShare} className='ms-1' alt="" /> </a>
      </div>

     </div>


     <div className='rec-live-cards mt-5 '>
         <WallHerbLive></WallHerbLive>
     </div>

      <div className=' rec-last-cards container-fluid  mt-5  '>

                        <div className="card " style={{ width: "12rem", background: "  #EDF3E6", border: "none" }}>
                            <img src={sale1} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <p className="card-text text-center" style={{ fontSize: "13px" }}>The Best Natural Remedies for</p>
                            </div>
                        </div>
                        <div className="card " style={{ width: "12rem", background: "  #EDF3E6", border: "none" }}>
                            <img src={sale2} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <p className="card-text text-center" style={{ fontSize: "13px" }}>The Best Foods and Supplements for Natural </p>
                            </div>
                        </div>
                        <div className="card " style={{ width: "12rem", background: "  #EDF3E6", border: "none" }}>
                            <img src={sale3} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <p className="card-text text-center" style={{ fontSize: "13px" }}>Psychodermatology: Why
                                    Researchers Think the Mind-
                                </p>
                            </div>
                        </div>
                        <div className="card " style={{ width: "12rem", background: "  #EDF3E6", border: "none" }}>
                            <img src={sale4} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <p className="card-text text-center" style={{ fontSize: "13px" }}>Stress-Related Hair Loss +
                                    Natural Solutions to Promote</p>
                            </div>
                        </div>
                        <div className="card " style={{ width: "12rem", background: "  #EDF3E6", border: "none" }}>
                            <img src={sale5} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <p className="card-text text-center" style={{ fontSize: "13px" }}>Dry brushing: What It Is +
                                    Unexpected Health </p>
                            </div>
                        </div>
                        <div className="card " style={{ width: "12rem", background: "  #EDF3E6", border: "none" }}>
                            <img src={sale6} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <p className="card-text text-center" style={{ fontSize: "13px" }}>How Spices Combat
                                    Inflammation and </p>
                            </div>
                        </div>                      

                    </div>  
      

      </section>



    </>
  )
}

export default Recommendation