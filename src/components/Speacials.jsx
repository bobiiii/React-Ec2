// import bottle from "../images/32.png"
import Carouselcards from "./Carouselcards"


function Speacials() {
  return (
    <>
      <div className='speacilsSection container-fluid'>
        <br />
        <div className='speacilsSectionWrap container-fluid '>
          <div className='SpecialsTextstyle'> Specials </div>
          <div> <button type="button" className="btn btn-success">View All</button> </div>
        </div>
      </div>


      <Carouselcards></Carouselcards>

      <br />

    </>
  )
}

export default Speacials