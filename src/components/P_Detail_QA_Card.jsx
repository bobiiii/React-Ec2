import React from 'react'
import styles from '../styles/ProductDetailsStyle/product-detail-QA.module.scss'
import Img1 from '../images/span.flex-row-center-center.svg'
import {
  ArrowDownwardOutlined,
  KeyboardArrowDown,
  KeyboardArrowRight,
} from '@mui/icons-material'

const P_Detail_QA_Card = () => {
  return (
    <div className={styles.CardBox}>
      <div className="d-md-flex justify-content-between align-items-center">
        <div className={styles.cardH1}>
          Can i take more than 1 capsule a day?
        </div>

        <div>
          <div className={styles.buttonFlex}>
            <div className="d-flex">
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
                <span className={styles.shareTxt}>Share</span>
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

            <div>
              {' '}
              <button
                className={`btn ${styles.btnAnswer} `}
                style={{ marginLeft: '10px' }}
                variant="outlined"
              >
                Answer
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className={`mt-2 ${styles.grayBox}`}>
        <div className="d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center">
            <div>
              <img
                src={Img1}
                alt=""
                width="32px"
                height="32px"
                borderRadius="50%"
              />
            </div>
            <div className={styles.customerTitle}>iHerb Customer</div>
          </div>
          <div className={styles.customerTitleDate}>Sep 22, 2021</div>
        </div>

        <div className="d-flex flex-wrap  mt-2 mb-2">
          <div className="d-flex align-items-center ">
            <div className={styles.grayMiniTxt}>
              <i className="bi bi-check-circle me-1"></i>
              Verified Purchase
            </div>

            <div className={styles.miniVerticalDivider}></div>
          </div>
          <div className="d-flex align-items-center">
            <div className={styles.grayMiniTxt}>
              <i className="bi bi-star me-1"></i>
              Best answer
            </div>

            <div className={styles.miniVerticalDivider}></div>
          </div>
          <div className="d-flex align-items-center">
            <div className={styles.grayMiniTxt}>
              <i className="bi bi-award me-1"></i>
              Rewarded Answer
              <i className="bi bi-info-circle ms-2"></i>
            </div>
          </div>
        </div>

        <div className={` ${styles.messageDesc}`}>Yes, you can. 🌾🍊</div>

        <div className="d-flex justify-content-between  mb-2">
          <span className={styles.disclaimerMessage}>
            <span className={styles.disclaimer}>Disclaimer:</span>
            Not medical or professional advice.
          </span>
          <div>
            <i className="bi bi-info-circle ms-1"></i>
          </div>
        </div>

        <div className="d-flex justify-content-between align-items-center">
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
              <span className={styles.shareTxt}>Share</span>
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

      <div className={` mt-3 ${styles.seeMoreLine}`}>
        See more answers (154)
        <KeyboardArrowRight
          style={{
            fontSize: '24px',
            marginLeft: '5px',
            color: '#126CC5',
          }}
        />
      </div>
    </div>
  )
}

export default P_Detail_QA_Card
