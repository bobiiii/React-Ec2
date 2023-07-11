// import CardBox from "./CardBox"
import Carouselcards from './Carouselcards'
function NewArrivals() {
  return (
    <>
    <div className='speacilsSection d-flex align-items-center justify-content-between px-4 py-2 mt-3  '>
            <div>
            <h5 className='fs-cs-4 '>New Arrivals</h5>
              
            </div>
              <div> <button type="button" className="btn btn-success">View All</button> 
              </div>
          </div>
      
      <Carouselcards/>
 </>
  )
}

export default NewArrivals