import React from 'react'
import CustomerReviewMiniCard from './CustomerReviewMiniCard'
import styles from '../styles/ProductDetailsStyle/Product-detail-customer-review.module.scss'
import { Rating } from '@mui/material'
import Img1 from '../images/incentive-banner.svg'
import styled from '@emotion/styled'
import LinearProgress, {
  linearProgressClasses,
} from '@mui/material/LinearProgress'
import CustomerReviewBigCard from './CustomerReviewBigCard'
import { KeyboardArrowRight } from '@mui/icons-material'
import CustomerReviewImgGlobal from './CustomerReviewImgGlobal'

const CustomerReviews = () => {
  const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 10,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor: '#E0E0E0',
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5,
      backgroundColor: '#54A300',
    },
  }))
  return (
    <div>
      <div className={styles.customerReviewH1}>Customer reviews</div>
      <div className="d-flex">
        <div>
          <div className="d-flex align-items-center">
            <div className={`${styles.RatingTxt1}`}>4.8</div>
            <div className="ms-2">
              <div>
                <Rating value={5} size="medium" />
              </div>
              <div className={`${styles.subTxt1}`}>
                Based on 244,797 Ratings
              </div>
            </div>
          </div>

          <div style={{ width: '100%', marginTop: '30px' }}>
            <div className=" w-100 position-relative" style={{ width: '100%' }}>
              <div
                style={{ position: 'absolute', left: '0%', top: '-5px' }}
                className={`${styles.subTxt1}`}
              >
                5 Stars
              </div>
              <div style={{ marginLeft: '50px', marginRight: '60px' }}>
                <BorderLinearProgress variant="determinate" value={100} />
              </div>
              <div
                style={{ position: 'absolute', right: '0%', top: '-5px' }}
                className={`${styles.subTxt1}`}
              >
                204,974
              </div>
            </div>
            <div
              className=" w-100 position-relative mt-3"
              style={{ width: '100%' }}
            >
              <div
                style={{ position: 'absolute', left: '0%', top: '-5px' }}
                className={`${styles.subTxt1}`}
              >
                4 Stars
              </div>
              <div style={{ marginLeft: '50px', marginRight: '60px' }}>
                <BorderLinearProgress variant="determinate" value={80} />
              </div>
              <div
                style={{ position: 'absolute', right: '0%', top: '-5px' }}
                className={`${styles.subTxt1}`}
              >
                204,974
              </div>
            </div>
            <div
              className=" w-100 position-relative mt-3"
              style={{ width: '100%' }}
            >
              <div
                style={{ position: 'absolute', left: '0%', top: '-5px' }}
                className={`${styles.subTxt1}`}
              >
                3 Stars
              </div>
              <div style={{ marginLeft: '50px', marginRight: '60px' }}>
                <BorderLinearProgress variant="determinate" value={50} />
              </div>
              <div
                style={{ position: 'absolute', right: '0%', top: '-5px' }}
                className={`${styles.subTxt1}`}
              >
                204,974
              </div>
            </div>
            <div
              className=" w-100 position-relative mt-3"
              style={{ width: '100%' }}
            >
              <div
                style={{ position: 'absolute', left: '0%', top: '-5px' }}
                className={`${styles.subTxt1}`}
              >
                2 Stars
              </div>
              <div style={{ marginLeft: '50px', marginRight: '60px' }}>
                <BorderLinearProgress variant="determinate" value={30} />
              </div>
              <div
                style={{ position: 'absolute', right: '0%', top: '-5px' }}
                className={`${styles.subTxt1}`}
              >
                204,974
              </div>
            </div>
            <div
              className=" w-100 position-relative mt-3"
              style={{ width: '100%' }}
            >
              <div
                style={{ position: 'absolute', left: '0%', top: '-5px' }}
                className={`${styles.subTxt1}`}
              >
                1 Stars
              </div>
              <div style={{ marginLeft: '50px', marginRight: '60px' }}>
                <BorderLinearProgress variant="determinate" value={5} />
              </div>
              <div
                style={{ position: 'absolute', right: '0%', top: '-5px' }}
                className={`${styles.subTxt1}`}
              >
                204,974
              </div>
            </div>
          </div>
          <div className="mt-3">
            <img src={Img1} alt="" width="340px" height="auto" />
          </div>

          <div>
            <button className={`btn ${styles.writeReviewBtn}`}>
              Write a Review
            </button>
          </div>
        </div>

        <div>
          <div className="d-flex">
            <div className="ms-4">
              <div style={{ marginBottom: '20px' }} className={styles.cardH2}>
                Most helpful positive review
              </div>
              <CustomerReviewMiniCard />
            </div>
            <div className="ms-4">
              <div style={{ marginBottom: '20px' }} className={styles.cardH2}>
                Most helpful positive review
              </div>
              <CustomerReviewMiniCard />
            </div>
          </div>
          <div className="ms-4">
            {' '}
            <div className="mt-4">
              <CustomerReviewImgGlobal />
            </div>
            <div>
              <CustomerReviewBigCard />

              <div>
                {' '}
                <div className={` mt-3 ${styles.seeMoreLine}`}>
                  See all 356 questions and answers
                  <KeyboardArrowRight
                    style={{
                      fontSize: '24px',
                      marginLeft: '5px',
                      color: '#126CC5',
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CustomerReviews
