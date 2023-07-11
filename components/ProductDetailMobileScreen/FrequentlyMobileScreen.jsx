import React from 'react'
import styles2 from './product-detail-mobile.module.scss'
import ProductImage from '../../images/ProductDetail/164.png'
import styles from '../../styles/ProductDetailsStyle/product-details.module.scss'
import Button from '@mui/material/Button'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Fade from '@mui/material/Fade'
import {
  ArrowDownwardOutlined,
  KeyboardArrowDown,
  KeyboardArrowRight,
} from '@mui/icons-material'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import ComboImg1 from '../../images/218.jpg.svg'
import { Rating, IconButton } from '@mui/material'
import Image from 'next/image'

const FrequentlyMobileScreen = () => {
  return (
    <div>
      <div className="mx-2 mt-4">
        <div className="d-md-flex align-items-center">
          <div className={`${styles.comboOfferH1}`}>
            Frequently purchased together
          </div>
          <div className={styles.dividerfrequentlyPurchasedH1}></div>
        </div>

        <div class=" mt-4 row justify-content-center">
          <div class="col-lg-6 col-md-12 col-sm-12">
            <div className="d-flex align-items-center justify-content-center">
              <div style={{ width: '96px', height: '96px' }}>
                <Image src={ComboImg1} alt="" width="100%" height="auto" />
              </div>

              <div className={styles.frequencyPlus}>
                <i
                  className="bi bi-plus"
                  style={{ color: 'gray', fontSize: '24px' }}
                ></i>
              </div>
              <div style={{ width: '96px', height: '96px' }}>
                <Image src={ComboImg1} alt="" width="100%" height="auto" />
              </div>

              <div className={styles.frequencyPlus}>
                <i
                  className="bi bi-plus"
                  style={{ color: 'gray', fontSize: '24px' }}
                ></i>
              </div>
              <div style={{ width: '96px', height: '96px' }}>
                <Image src={ComboImg1} alt="" width="100%" height="auto" />
              </div>
            </div>
          </div>
        </div>

        <div className="d-flex justify-content-between ">
          <div className={`${styles.comboOfferH1}`}>3 Product(s) Selected</div>
          <div className={`${styles.comboOfferH1}`}>₹1278.70</div>
        </div>

        <div className="d-flex justify-content-center">
          <button
            type="button"
            class={`btn btn-warning text-decoration-none text-white   ${styles2.addToCartBtn}`}
          >
            Add (3) to Cart
          </button>
        </div>
      </div>
    </div>
  )
}

export default FrequentlyMobileScreen
