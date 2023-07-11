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
import ProductMainImgCarousel from './ProductMainImgCarousel'
import HerbsChips from '../HerbsChips'
import Image from 'next/image'

const ProductDetailMobileScreen = () => {
  const cardData1 = [
    {
      img: ComboImg1,
      desc:
        'California Gold Nutrition, Gold C, USP Grade Vitamin C, 1,000 mg, 240 Veggie',
      ratingNo: '292688',
      rating: 5,
      price: '351.79',
      salePrice: '₹502.56',
    },
    {
      img: ComboImg1,
      desc:
        'California Gold Nutrition, Gold C, USP Grade Vitamin C, 1,000 mg, 240 Veggie',
      ratingNo: '292688',
      rating: 5,
      price: '351.79',
      salePrice: '₹502.56',
      plusSign: true,
    },
  ]
  const [anchorEl, setAnchorEl] = React.useState(null)
  const open = Boolean(anchorEl)
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }
  return (
    <div>
      <div className="row ">
        <div className="col-lg-3 col-md-12 col-sm-12 ">
          <div className="d-flex flex-wrap align-items-baseline mt-2">
            <div
              style={{
                clipPath:
                  'polygon(0 0, 100% 0, 88% 36%, 100% 70%, 100% 100%, 0 100%, 0% 70%, 0% 30%)',
                backgroundColor: '#8BC9E4',
                width: '90px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                // marginLeft: '10px',
                height: '17px',
              }}
            >
              <span
                style={{
                  color: '#000000',
                  fontSize: '12px',
                  fontWeight: '700',
                }}
              >
                iHerb Brand
              </span>
            </div>
            <div
              style={{
                clipPath:
                  'polygon(0 0, 100% 0, 88% 36%, 100% 70%, 100% 100%, 0 100%, 0% 70%, 0% 30%)',
                backgroundColor: '#E25903',
                width: '90px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginLeft: '10px',
                height: '17px',
              }}
            >
              <span
                style={{
                  color: '#ffffff',
                  fontSize: '12px',
                  fontWeight: '700',
                }}
              >
                best Seller
              </span>
            </div>

            <span style={{ marginLeft: '10px' }}>
              {' '}
              <Image
                src="./assets/icons/flag.png.svg"
                alt=""
                height="18px"
                width="50px"
              />
            </span>
          </div>

          <h3 className="fs-cs-1 mt-3" style={{ color: '#458500' }}>
            California Gold Nutrition
          </h3>
          <h1 className="fs-cs-2 mt-3">
            California Gold Nutrition, Gold C, USP Grade Vitamin C, 1,000 mg, 60
            Veggie Capsules
          </h1>

          <div className="d-flex align-items-center">
            <div className="mt-1">
              <Rating value={5} size={'small'} />
            </div>
            <div className="mb-1">
              <span className={styles2.greenminiTitle}> 35421</span>
            </div>

            <div className="miniVerticalDivider"></div>
            <div>
              <Image
                src="./assets/icons/chatIcon.svg"
                alt=""
                width="24px"
                height="24px"
              />
            </div>
            <div className="mb-1">
              <span
                style={{ textDecoration: 'underline', marginLeft: '4px' }}
                className={styles2.greenminiTitle}
              >
                576 & 11638
              </span>
            </div>
          </div>

          {/* <Image src={ProductImage} className="w-100 py-2" alt="a" /> */}
          <ProductMainImgCarousel />
        </div>
        <div className="col-lg-6">
          <div className="d-flex justify-content-between">
            <div>
              <div className={styles2.graySubtitle}>47% Off</div>
              <div className={styles2.priceH3}>₹586.32</div>
              <div className={styles2.graySubtitle2}>₹11.73/Serving</div>
              <div className={styles2.subtitle2}>Best By: Jan 2024</div>
            </div>
            <div>
              <IconButton>
                <div className={styles2.shareBigBtn}>
                  <i
                    class="bi bi-share"
                    style={{ fontSize: '20px', color: '#D47500' }}
                  ></i>
                </div>
              </IconButton>
            </div>
          </div>
          <div className="package-count mt-2">
            <h3 className={styles2.availableOpt}>Available Options</h3>
            <h3 className="fs-cs-1">Package Quantity: 60 Count</h3>
            <div className="d-flex">
              <button
                className={`bg-transparent ${styles2.selectPackageBtn} px-3 py-2 rounded-3  `}
              >
                <h3 className="d-block fs-cs-1">100 Count</h3>
                <h3 className="fs-cs-2 "> ₹417.96 &nbsp;</h3>
              </button>
              <button
                className={`bg-transparent ${styles2.selectPackageBtn} mx-2 px-3 py-2 rounded-3  `}
              >
                <h3 className="d-block fs-cs-1">100 Count</h3>
                <h3 className="fs-cs-2  "> ₹417.96 &nbsp;</h3>
              </button>
            </div>
          </div>
          {/* <div className="border-top my-3"></div> */}
        </div>
        <div className="col-lg-3 col-md-12 col-sm-12 my-3">
          {/* column */}
          <div className={styles.addToCart_productDetails}>
            <div className="d-flex justify-content-between align-items-center">
              <div className="fs-cs-1">Our Price</div>
              <div className="d-flex align-items-center">
                <span className={styles2.priceH4}>₹221.96</span>
                <span className={styles2.subtitle3}>₹3.70/Serving</span>
              </div>
            </div>

            <div
              className={`d-flex justify-content-end align-items-center my-2`}
            >
              {' '}
              <div className={`${styles.mainMinusPlusDiv}`}>
                <button
                  type="button"
                  className={`btn btn-link text-decoration-none ${styles.minusPlusBtn}`}
                >
                  <i
                    class="bi bi-dash"
                    style={{ fontSize: '24px', color: '#666666' }}
                  ></i>
                </button>
                <span className={styles.digit1}>1</span>
                <button
                  type="button"
                  className={`btn btn-link text-decoration-none ${styles.minusPlusBtn}`}
                >
                  <i
                    class="bi bi-plus"
                    style={{ fontSize: '24px', color: '#666666' }}
                  ></i>
                </button>
              </div>
            </div>

            <div className="d-flex justify-content-center">
              <button
                type="button"
                class={`btn btn-warning text-decoration-none text-white   ${styles.addToCartBtn}`}
              >
                Add to Cart
              </button>
            </div>
          </div>

          <div className="my-3">
            <React.Fragment>
              <Button
                // id="fade-button"
                variant="outlined"
                class={styles2.addToListBtn}
              >
                <div>
                  <FavoriteBorderIcon />
                </div>
                <div className="ms-2">Add to lists</div>
              </Button>
            </React.Fragment>
          </div>

          <div className="">
            <h6 className={styles2.productRankH6}>Product rank:</h6>
            <div>
              <div className={styles2.productRankLi2}>
                <span>#1 in </span>
                <span>Vitamin C</span>
              </div>
              <div className={styles2.productRankLi2}>
                <span>#1 in </span>
                <span>Ascorbic Acid</span>
              </div>
              <div className={styles2.productRankLi2}>
                <span>#1 in </span>
                <span>Vitamins</span>
              </div>
              <div className={styles2.productRankLi2}>
                <span>#3 in </span>
                <span>Supplements</span>
              </div>
            </div>
          </div>

          <div>
            <div className="mt-4 mb-4">
              <span className={`d-flex  ${styles.comboOfferH1}`}>
                Combo offer:{' '}
                {/* <span className={styles.savePrice}> Save ₹251.28</span> */}
              </span>
            </div>
            {/* <div className={styles.dividerFull}></div> */}

            <div className="d-flex  mt-3">
              {cardData1.map((item) => {
                return (
                  <>
                    {item.plusSign && (
                      <div className="mt-4">
                        <i
                          className="bi bi-plus"
                          style={{
                            color: 'gray',
                            fontSize: '24px',
                            marginLeft: '-10px',
                            marginRight: '20px',
                            marginTop: '20px',
                          }}
                        ></i>
                      </div>
                    )}
                    <div className="">
                      <div style={{ width: '96px', height: '96px' }}>
                        <Image src={item.img} alt="" width="100%" height="auto" />
                      </div>

                      <div className={styles2.descDiv}>
                        <h6 className={styles2.customerAlsoViewedH5}>
                          {item.desc}
                        </h6>
                      </div>
                      <div className={` align-items-center`}>
                        <div>
                          <Rating
                            size={'small'}
                            name="read-only"
                            value={item.rating}
                            readOnly
                          />
                        </div>
                        <div className={styles2.ratingNo}>{item.ratingNo}</div>
                      </div>

                      <div className="d-flex ">
                        {' '}
                        <h4
                          className={styles.ComboWithPriceH1}
                          style={{
                            display: 'flex',
                            justifyContent: 'start',
                            marginRight: '5px',
                            color: true ? '#191919' : '#000000',
                          }}
                        >
                          ₹{item.price}
                        </h4>
                      </div>
                    </div>
                  </>
                )
              })}
            </div>

            <div className={styles.dividerFull}></div>

            <div className={styles2.saveBox}>
              <div className={styles2.redSave}>Save₹251.28</div>
              <div className={styles2.buyH3}>when you buy these together</div>
              <div className={styles2.combobuyH3}>Combo Price: ₹2,010.23</div>
            </div>

            <div className="d-flex justify-content-center">
              <button
                type="button"
                class={`btn btn-warning text-decoration-none text-white   ${styles2.addToCartBtn}`}
              >
                Add both to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetailMobileScreen
