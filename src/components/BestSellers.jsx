
import Carouselcards from './Carouselcards'

function BestSellers() {
    return (
        <>
            <div className='speacilsSection d-flex align-items-center justify-content-between px-4 py-2 mt-3  '>
            <div>
            <h5 className='fs-cs-4 d-inline'> Best Sellers </h5>
              <input className='ms-2 trdinput' placeholder='India' type="text" style={{ paddingLeft: '5px' }} />
            </div>
              <div> <button type="button" className="btn btn-success">View All</button> 
              </div>
          </div>
            <Carouselcards />

        </>
    )
}

export default BestSellers