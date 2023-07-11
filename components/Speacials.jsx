// import bottle from "../images/32.png"
import Carouselcards from "./Carouselcards"
// import {slide1} from "../utils/data"


function Speacials() {
  return (
    <>
    <div className='speacilsSection d-flex align-items-center justify-content-between px-4 py-0 mt-2  '>
            <div>
            <h5 className='fs-cs-4 '> Specials </h5>
            </div>
              <div> <button type="button" className="btn btn-success">View All</button> 
              </div>
          </div>
      
      <Carouselcards/>
 </>
  )
}

export default Speacials