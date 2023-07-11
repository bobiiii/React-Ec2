import React from 'react'
import pd1 from "../images/pd1.svg"
import pd2 from "../images/pd2.svg"
import pd3 from "../images/pd3.svg"
import pd4 from "../images/pd4.svg"
import pd5 from "../images/pd5.svg"
function Productsimgs() {
  return (
    <>
      <div className='align-item-center container-lg mt-5'>
        {/* image one */}
        <div>
          <img src={pd1} alt="" style={{ width: "100%" }} />
          <div className='text-center text-light pt-3 py-2' style={{ width: "100%", background: "#AD8E34" }} >
            <p>Our products are independently tested at ISO-certified labs for authenticity, purity, and potency</p>
          </div>
        </div>

        {/* image Two */}
        <div>
          <img src={pd2} alt="" style={{ width: "100%" }} />
        </div>

        {/* image three */}
        <div>
          <img src={pd3} alt="" style={{ width: "100%" }} />
        </div>
      </div>


      <div className='quality-and-safely-section '>
        <div>
          <img src={pd4} alt="" style={{ width: "100%" }} />
        </div>


        <div style={{width : "50%"}} className='mt-5'>
          <h5 style={{color:"#A6791A"}}>Quality and Safety Come First</h5>
          <p>Quality and Safety Come First
            With California Gold Nutrition, you'll find an assortment of highly-effective forms of vitamins,
            minerals, supplements, superfoods, and proteins that are non GMO, gluten free, soy free, and
            formulated without artificial colors, sweeteners, or flavors.</p>
          <p>We stay focused on premium quality ingredients going in, so you can focus on your daily nutritional
            support without the worry.</p>
          <p>Our products are manufactured from state-of-the-art facilities that meet FDA’s current Good
            Manufacturing Practices, and independently verified at ISO certified labs to ensure purity, potency,
            and authenticity, because we believe quality and safety come first for your health.</p>
        </div>
      </div>


      <div className='mt-5 text-center container-lg'>
             <img src={pd5} alt="" style={{width : "100%"}}/>
      </div>


    </>
  )
}

export default Productsimgs