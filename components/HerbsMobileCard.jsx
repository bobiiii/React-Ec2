import { IconButton } from '@mui/material'
import Image from 'next/image'
import React from 'react'

const HerbsMobileCard = ({ item }) => {
  return (
    <div>
      <div className="d-flex align-items-center mobile-card">
        <div>
          <Image
            src={item.img}
            class="card-img-top"
            alt="..."
            width="100px"
            height="120px"
          />
        </div>

        <div>
          <div>
            <p
              class="card-text card-mobile-text"
              style={{
                fontSize: '14px',
                fontWeight: '400',
              }}
            >
              {item.title}
            </p>
          </div>
          <div className="d-flex justify-content-between">
            <div>
              <div className="d-flex">
                <div style={{ color: '#FAC627' }}>
                  <i className="bi bi-star"></i>
                  <i className="bi bi-star"></i>
                  <i className="bi bi-star"></i>
                  <i className="bi bi-star"></i>
                </div>
                <div>
                  <span className="fs-cs-1" style={{ color: '#666666' }}>
                    {' '}
                    &nbsp; {item.ratingNo}
                  </span>
                </div>
              </div>
              <h6 className=" fs-cs-2">₹{item.price}</h6>
            </div>
            <div>
              <IconButton>
                <Image
                  src="./assets/icons/AddtoCart.svg"
                  alt=""
                  width="32px"
                  height="32px"
                />
              </IconButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HerbsMobileCard
