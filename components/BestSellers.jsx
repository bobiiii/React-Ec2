// import CardBox from './CardBox'
import { useMediaQuery } from '@mui/material'
import Carouselcards from './Carouselcards'
import { KeyboardArrowRight } from '@mui/icons-material'
import HomePageChipCarousel from './HomePageChipCarousel'

function BestSellers() {
  const matches = useMediaQuery('(max-width:500px)')
  return (
    <>
      <div className="speacilsSection d-flex align-items-center justify-content-between px-4 py-2 mt-3  ">
        <div className="d-flex  align-items-baseline">
          <div className="d-flex  align-items-baseline">
            <h5 className={`${matches ? 'fs-cs-6' : 'fs-cs-4'} d-inline`}>
              {' '}
              Best Sellers{' '}
            </h5>
            <div>
              <select
                class="form-select show-icon-mobile"
                aria-label="Default select example"
                style={{
                  width: '65px',
                  borderRadius: '10px',
                  border: '1px solid #CCCCCC',
                  marginLeft: '10px',
                }}
              >
                <option selected>IN</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
          </div>
          <div className="show-button-mobile">
            <input
              className="ms-4 trdinput"
              placeholder="India"
              type="text"
              style={{ paddingLeft: '5px' }}
            />
          </div>
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
      <div className="mx-3 my-2">
        <HomePageChipCarousel />
      </div>
      <Carouselcards />
    </>
  )
}

export default BestSellers
