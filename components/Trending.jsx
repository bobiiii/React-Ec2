// import CardBox from './CardBox'
import { useMediaQuery } from '@mui/material'
import Carouselcards from './Carouselcards'

function Trending() {
  const matches = useMediaQuery('(max-width:500px)')
  return (
    <>
      <div className="speacilsSection d-flex align-items-baseline px-4 py-3 mt-3">
        <div className="treandingdiv ">
          <h5 className={matches ? 'fs-cs-6' : 'fs-cs-4'}> Trending Now </h5>
          <div className="show-button-mobile">
            <input
              className="ms-4 trdinput"
              placeholder="India"
              type="text"
              style={{ paddingLeft: '5px' }}
            />
          </div>
          <div className="show-icon-mobile">
            <i
              class="bi bi-question-circle"
              style={{
                color: '#666666',
                fontSize: '18px',
                marginLeft: '10px',
                marginRight: '15px',
              }}
            ></i>
          </div>
          <div className="show-icon-mobile">
            <select
              class="form-select"
              aria-label="Default select example"
              style={{
                width: '65px',
                borderRadius: '10px',
                border: '1px solid #CCCCCC',
              }}
            >
              <option selected>IN</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
        </div>
      </div>
      <Carouselcards />
    </>
  )
}

export default Trending
