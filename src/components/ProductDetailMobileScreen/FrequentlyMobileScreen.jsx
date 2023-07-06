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

const FrequentlyMobileScreen = () => {
  return (
    <div>
      <div className="mx-4 mt-4">
        <div className="d-md-flex align-items-center">
          <div className={`${styles.comboOfferH1}`}>
            Frequently purchased together
          </div>
          <div className={styles.dividerfrequentlyPurchasedH1}></div>
        </div>

        <div class="container mt-4">
          <div class="row justify-content-center">
            <div class="col-lg-6 col-md-12 col-sm-12">
              <div className="d-flex align-items-center justify-content-center">
                <div>
                  <div style={{ width: '96px', height: '96px' }}>
                    <img src={ComboImg1} alt="" width="100%" height="auto" />
                  </div>

                  <div className={`d-md-flex  align-items-center`}>
                    <div>
                      <Rating
                        size={'small'}
                        name="read-only"
                        value={5}
                        readOnly
                      />
                    </div>
                    <div className={styles.ratingNo}>244799</div>
                  </div>
                </div>

                <div className={styles.frequencyPlus}>
                  <i
                    className="bi bi-plus"
                    style={{ color: 'gray', fontSize: '24px' }}
                  ></i>
                </div>
                <div>
                  <div style={{ width: '96px', height: '96px' }}>
                    <img src={ComboImg1} alt="" width="100%" height="auto" />
                  </div>

                  <div className={`d-md-flex  align-items-center`}>
                    <div>
                      <Rating size={'small'} value={5} readOnly />
                    </div>
                    <div className={styles.ratingNo}>244799</div>
                  </div>
                </div>

                <div className={styles.frequencyPlus}>
                  <i
                    className="bi bi-plus"
                    style={{ color: 'gray', fontSize: '24px' }}
                  ></i>
                </div>
                <div>
                  <div style={{ width: '96px', height: '96px' }}>
                    <img src={ComboImg1} alt="" width="100%" height="auto" />
                  </div>

                  <div className={`d-md-flex align-items-center`}>
                    <div>
                      <Rating size={'small'} value={5} readOnly />
                    </div>
                    <div className={styles.ratingNo}>244799</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-6 col-md-12 col-sm-12 ">
              <div className={styles.freqCheckbox}>
                <div className={`form-check ${styles.CurrentItemCheckbox}`}>
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckChecked"
                    checked
                  />
                  <label
                    class="form-check-label d-md-flex justify-content-between"
                    for="flexCheckChecked"
                  >
                    <div className={styles.currentItemLi1}>
                      <span>Current item </span>
                      <span className={styles.currentItemPara2}>
                        {' '}
                        California Gold Nutrition, Gold C, USP Grade Vitamin C,
                        1,000 mg, 60 Veggie
                      </span>
                    </div>
                    <div className={styles.currentItemPrice}>
                      <span>₹221.96</span>
                    </div>
                  </label>
                </div>
                <div className={`form-check ${styles.CurrentItemCheckbox}`}>
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckChecked"
                    checked
                  />
                  <label
                    class="form-check-label d-flex justify-content-between"
                    for="flexCheckChecked"
                  >
                    <div className={styles.currentItemLi}>
                      <span className={styles.currentItemPara}>
                        {' '}
                        California Gold Nutrition, Vitamin D3, 125 mcg (5,000
                        IU), 90 Fish Gelatin Softgels
                      </span>
                    </div>
                    <div className={styles.currentItemPrice}>
                      <span>₹221.96</span>
                    </div>
                  </label>
                </div>
                <div className={`form-check ${styles.CurrentItemCheckbox}`}>
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckChecked"
                    checked
                  />
                  <label
                    class="form-check-label d-flex justify-content-between"
                    for="flexCheckChecked"
                  >
                    <div className={styles.currentItemLi}>
                      <span className={styles.currentItemPara}>
                        {' '}
                        California Gold Nutrition, Gold C, USP Grade Vitamin C,
                        1,000 mg, 60 Veggie
                      </span>
                    </div>
                    <div className={styles.currentItemPrice}>
                      <span>₹221.96</span>
                    </div>
                  </label>
                </div>

                <div className="d-flex flex-column mt-4 ">
                  <h4
                    className={styles.ComboWithPriceH1}
                    style={{ display: 'flex', justifyContent: 'start' }}
                  >
                    Only ₹557.00
                  </h4>

                  <div className="d-flex justify-content-start">
                    <button
                      type="button"
                      class={`btn btn-warning text-decoration-none text-white   ${styles.addSelectedToCartBtn}`}
                    >
                      Add selected to cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FrequentlyMobileScreen
