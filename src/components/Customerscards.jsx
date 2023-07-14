import React from 'react'
import CardBox from './CardBox'
import Carouselcards from './Carouselcards'

function Customerscards() {
  return (
    <>
    
       <div className='Customers-also-viewed-card-section mt-4 container-fluid'>
               
               <h6>Customers also viewed</h6>
               <hr />


               {/* <div className='Customers-also-viewed-cards-cont'> */}
                 {/* <CardBox></CardBox> */}
       

               {/* </div> */}
          <div>
            <Carouselcards />
          </div>

       </div>
     

    </>
  )
}

export default Customerscards