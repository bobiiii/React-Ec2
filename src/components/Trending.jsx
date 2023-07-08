// import CardBox from './CardBox'
import Carouselcards from './Carouselcards'

function Trending() {
  return (
    <>
      <div className="speacilsSection d-flex align-items-baseline px-4 py-2 mt-3">
        <div className="treandingdiv">
          <h5 className="fs-cs-4"> Trending Now </h5>
          <input
            className="ms-4 trdinput"
            placeholder="India"
            type="text"
            style={{ paddingLeft: '5px' }}
          />
        </div>
      </div>
      <Carouselcards />
    </>
  )
}

export default Trending
