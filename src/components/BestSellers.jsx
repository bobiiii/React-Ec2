
// import CardBox from './CardBox'
import Carouselcards from './Carouselcards'

function BestSellers() {
    return (
        <>
          <div className='container-fluid  d-flex justify-content-between align-items-center'>
            
             <h3 className='my-auto py-2 flex-shrink-0 '>Best Sellers</h3>
             <div className=' flex-grow-1   border border-danger'>
             <input className='w-100' placeholder='India' type="text"  />
             </div>
              <button className='btn btn-success flex-shrink-0'>View All</button>
            
          </div>



            <div className='speacilsSection d-flex align-items-center justify-content-between px-4 py-2 mt-3  '>
            <div>
            <h5 className='fs-cs-4 d-inline'> Best Sellers </h5>
              
            </div>
              <div> <button type="button" className="btn btn-success">View All</button> 
              </div>
          </div>
            <Carouselcards/>

        </>
    )
}

export default BestSellers