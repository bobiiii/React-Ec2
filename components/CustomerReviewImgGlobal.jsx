import React from 'react'
import style1 from '../styles/ProductDetailsStyle/product-detail-customer-review.module.scss'
import styles from '../styles/ProductDetailsStyle/product-detail-QA.module.scss'
import Img3 from '../images/commentimg.svg'
import Img4 from '../images/overflow-hidden.svg'
import { KeyboardArrowRight } from '@mui/icons-material'
import ProductReviewImagesCarousel from './ProductDetailMobileScreen/ProductReviewImagesCarousel'
import useMediaQuery from '@mui/material/useMediaQuery'
import Image from 'next/image'

const CustomerReviewImgGlobal = () => {
  const matches = useMediaQuery('(max-width:600px)')
  return (
    <div>
      <div style={{ marginBottom: '20px' }} className={style1.cardH2}>
        Review images
      </div>

      {matches ? (
        <div>
          <ProductReviewImagesCarousel />
        </div>
      ) : (
        <div className="d-flex flex-wrap ">
          <div style={{ width: '105px', height: '105px' }}>
            <Image src={Img3} alt="" width="100%" height="100%" />
          </div>
          <div style={{ width: '105px', height: '105px', marginLeft: '1px' }}>
            <Image src={Img4} alt="" width="100%" height="100%" />
          </div>
          <div style={{ width: '105px', height: '105px', marginLeft: '1px' }}>
            <Image src={Img3} alt="" width="100%" height="100%" />
          </div>
          <div style={{ width: '105px', height: '105px', marginLeft: '1px' }}>
            <Image src={Img4} alt="" width="100%" height="100%" />
          </div>
          <div style={{ width: '105px', height: '105px' }}>
            <Image src={Img3} alt="" width="100%" height="100%" />
          </div>
          <div style={{ width: '105px', height: '105px', marginLeft: '1px' }}>
            <Image src={Img4} alt="" width="100%" height="100%" />
          </div>
          <div style={{ width: '105px', height: '105px', marginLeft: '1px' }}>
            <Image src={Img3} alt="" width="100%" height="100%" />
          </div>
          <div style={{ width: '105px', height: '105px', marginLeft: '1px' }}>
            <Image src={Img4} alt="" width="100%" height="100%" />
          </div>
        </div>
      )}

      <div className={` mt-3 ${styles.seeMoreLine}`}>
        View all 22,060 images
        <KeyboardArrowRight
          style={{
            fontSize: '24px',
            marginLeft: '5px',
            color: '#126CC5',
          }}
        />
      </div>

      <div
        style={{ marginBottom: '20px', marginTop: '30px' }}
        className={style1.cardH2}
      >
        Global reviews (244,800)
      </div>

      <div className="d-lg-flex d-md-flex mt-2">
        <div className={styles.QASubtitle}>
          Product reviews solely reflect the views and opinions expressed by the
          contributors and not thos
        </div>
        <span className={styles.QAShowmore}> Show more</span>
      </div>

      <div className="d-flex flex-wrap mt-3 mb-4">
        <button
          type="button"
          class={`btn btn-outline-dark ${style1.buttonChips}`}
        >
          low price (1,222)
        </button>
        <button
          type="button"
          class={`btn btn-outline-dark ${style1.buttonChips}`}
        >
          vitamin c supplement (843)
        </button>
        <button
          type="button"
          class={`btn btn-outline-dark ${style1.buttonChips}`}
        >
          good deal (663)
        </button>
        <button
          type="button"
          class={`btn btn-outline-dark ${style1.buttonChips}`}
        >
          california gold (509)
        </button>
        <button
          type="button"
          class={`btn btn-outline-dark ${style1.buttonChips}`}
        >
          trial price (239)
        </button>
        <button
          type="button"
          class={`btn btn-outline-dark ${style1.buttonChips}`}
        >
          ascorbic (191)
        </button>
        <button
          type="button"
          class={`btn btn-outline-dark ${style1.buttonChips}`}
        >
          colds (187)
        </button>
        <button
          type="button"
          class={`btn btn-outline-dark ${style1.buttonChips}`}
        >
          colds (180)
        </button>
      </div>
    </div>
  )
}

export default CustomerReviewImgGlobal
