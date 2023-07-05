import React from 'react'
import styles from '../styles/ProductDetailsStyle/Product-detail-customer-review.module.scss'

import Img1 from '../images/span.flex-row-center-center.svg'

import {
  ArrowDownwardOutlined,
  KeyboardArrowDown,
  KeyboardArrowRight,
} from '@mui/icons-material'
import { Rating } from '@mui/material'

const CustomerReviewMiniCard = () => {
  return (
    <div className={styles.CardBox}>
      <div>
        <div className="d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center">
            <div>
              <img
                src={Img1}
                alt=""
                width="48px"
                height="48px"
                borderRadius="50%"
              />
            </div>
            <div className={styles.customerTitle}>iHerb Customer</div>
          </div>
          <div className={styles.customerTitleDate}>Sep 22, 2021</div>
        </div>

        <div className=" d-flex mt-2  ms-2">
          <div>
            <Rating value={5} size="medium" />
          </div>
          <div
            style={{ marginTop: '2px', marginLeft: '5px' }}
            className={` ${styles.subTxt2}`}
          >
            Прекрасно!
          </div>
        </div>

        <div className={` mt-2 mb-2 ${styles.messageDesc}`}>
          Excellent vitamin, very useful! I will order more! The packaging is
          good!
        </div>

        <div className={` mt-3 ${styles.seeMoreLine}`}>
          Show More
          <KeyboardArrowRight
            style={{
              fontSize: '24px',
              marginLeft: '5px',
              color: '#126CC5',
            }}
          />
        </div>

        <div className="d-flex mt-1 justify-content-between align-items-center">
          <div className="d-flex">
            {' '}
            <div className={styles.thumbs}>
              <i class="bi bi-hand-thumbs-up me-1"></i>
              19
            </div>
            <div className={` ms-3 ${styles.thumbs}`}>
              {' '}
              <i class="bi bi-hand-thumbs-down me-1"></i>3
            </div>
          </div>

          <div>
            <button
              className={`btn text-decoration-none ${styles.reportAbuse}`}
              variant="link"
            >
              Report Abuse
            </button>
            <button
              className={`btn text-decoration-none ${styles.btnShare}`}
              variant="link"
            >
              Share
              <i
                className="bi bi-share"
                style={{
                  width: '16px',
                  height: '18px',
                  marginLeft: '5px',
                  color: '#F38A00',
                }}
              ></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CustomerReviewMiniCard
