import React from 'react'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined'
import ManageSearchOutlinedIcon from '@mui/icons-material/ManageSearchOutlined'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined'

const HerbsSubscribeBox = () => {
  return (
    <div>
      <div className="subscribe-header-bar">
        <div>
          <HomeOutlinedIcon
            style={{ width: '24px', height: '24px', color: '#999999' }}
          />
        </div>
        <div>
          <ManageSearchOutlinedIcon
            style={{ width: '24px', height: '24px', color: '#999999' }}
          />
        </div>
        <div>
          <ShoppingCartOutlinedIcon
            style={{ width: '24px', height: '24px', color: '#999999' }}
          />
        </div>
        <div>
          <PersonOutlineOutlinedIcon
            style={{ width: '24px', height: '24px', color: '#999999' }}
          />
        </div>
      </div>
      <div className="subscribe-green-box">
        <div className=" srch-btn">
          <input
            class="form-control search-inp-subscribe"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <a
            href=""
            className="btn btn search-btn-subscribe"
            style={{ background: '#458500', color: 'white' }}
          >
            {' '}
            Subscribe
          </a>
        </div>
        <div className="subscribe-para-div">
          <p className="subscribe-para">
            Your email will only be used for iHerb communications. You can
            unsubscribe at any time. For more information, see our Privacy
            Policy.
          </p>
        </div>
      </div>
    </div>
  )
}

export default HerbsSubscribeBox
