import React from 'react'
import styles from '../styles/ProductDetailsStyle/product-detail-QA.module.scss'
import styles1 from '../styles/ProductDetailsStyle/product-detail-customer-review.module.scss'
import Img1 from '../images/span.flex-row-center-center.svg'
import {
  ArrowDownwardOutlined,
  KeyboardArrowDown,
  KeyboardArrowRight,
} from '@mui/icons-material'
import { Rating } from '@mui/material'
import Img3 from '../images/commentimg.svg'
import Img4 from '../images/overflow-hidden.svg'
import Image from 'next/image'

const CustomerReviewBigCard = () => {
  return (
    <div className={styles.CardBox}>
      <div>
        <div className="d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center">
            <div>
              <Image
                src={Img1}
                alt=""
                width="48px"
                height="48px"
                borderRadius="50%"
              />
            </div>
            <div>
              <div className={styles.customerTitle}>iHerb Customer</div>
              <div className="d-flex mt-1 mb-2">
                <div className={` ms-2 ${styles.grayMiniTxt}`}>
                  <i className="bi bi-star me-1"></i>1
                </div>
                <div className={`ms-2 ${styles.grayMiniTxt}`}>
                  <i className="bi bi-camera me-1"></i>1
                </div>
                <div className={`ms-2 ${styles.grayMiniTxt}`}>
                  <i className="bi bi-chat-square-text me-1"></i>4
                </div>
                <div className={`ms-2 ${styles.grayMiniTxt}`}>
                  <i className="bi bi-hand-thumbs-up me-1"></i>4
                </div>
              </div>
            </div>
          </div>
          <div className={styles.customerTitleDate}>Sep 22, 2021</div>
        </div>

        <div className=" d-flex mt-2  ms-2">
          <div>
            <Rating value={5} size="medium" />
          </div>
          <div
            style={{ marginTop: '2px', marginLeft: '5px' }}
            className={` ${styles1.subTxt2}`}
          >
            Прекрасно!
          </div>
        </div>

        <div className="d-flex mt-1 mb-2">
          <div className="d-flex align-items-center ">
            <div className={styles.grayMiniTxt}>
              <i className="bi bi-check-circle me-1"></i>
              Verified Purchase
            </div>

            <div className={styles.miniVerticalDivider}></div>
          </div>

          <div className="d-flex align-items-center">
            <div className={styles.grayMiniTxt}>
              <i className="bi bi-award me-1"></i>
              Rewarded Review
            </div>
          </div>
        </div>

        <div className={` mb-2 ${styles.messageDesc2}`}>
          Such a quality vitamin for a very cheap price, It tastes kinda sour
          after i drink it Well it's normal for a vitamin c as for the
          ingredients I don't really care if there's gluten or egg because I'm
          not a vegan. the mg is 1000 so I only drink one capsule a day as of my
          friend's recommendation (he's working at a pharmacy)
        </div>

        <div className="d-flex mb-2">
          <div className={styles.disclaimer}>Disclaimer:</div>
          <div className={styles.disclaimerMessage}>
            Not medical or professional advice.
            <i className="bi bi-info-circle ms-2"></i>
          </div>
        </div>

        <div className="d-flex">
          <div style={{ width: '105px', height: '105px' }}>
            <Image src={Img3} alt="" width="100%" height="100%" />
          </div>
          <div style={{ width: '105px', height: '105px', marginLeft: '10px' }}>
            <Image src={Img4} alt="" width="100%" height="100%" />
          </div>
        </div>

        <div className="d-flex justify-content-between align-items-center mt-2">
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

export default CustomerReviewBigCard
