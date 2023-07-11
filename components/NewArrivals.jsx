// import CardBox from "./CardBox"
import { useMediaQuery } from '@mui/material'
import Carouselcards from './Carouselcards'
import { KeyboardArrowRight } from '@mui/icons-material'
function NewArrivals() {
  const matches = useMediaQuery('(max-width:500px)')
  return (
    <>
      <div className="speacilsSection d-flex align-items-center justify-content-between px-4 py-2 mt-3  ">
        <div>
          <h5 className={matches ? 'fs-cs-6' : 'fs-cs-4'}>New Arrivals</h5>
        </div>
        <div className="show-button-mobile">
          {' '}
          <button type="button" className="btn btn-success my-2">
            View All
          </button>
        </div>

        <div className="show-icon-mobile">
          <KeyboardArrowRight />
        </div>
      </div>

      <Carouselcards />
    </>
  )
}

export default NewArrivals
