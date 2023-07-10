import React from 'react'
import ProductImage from '../images/ProductDetail/medicine1.svg'
import Customerscards from './Customerscards'
import WallHerbLive from './WallHerbLive'
import sale1 from '../images/sale1.png'
import sale2 from '../images/sale2.png'
import sale3 from '../images/sale3.png'
import sale4 from '../images/sale4.png'
import sale5 from '../images/sale5.png'
import sale6 from '../images/sale6.png'
import Productsimgs from '../components/Productsimgs'
import styles from '../styles/ProductDetailsStyle/product-details.module.scss'
import Button from '@mui/material/Button'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Fade from '@mui/material/Fade'
import {
  ArrowDownwardOutlined,
  KeyboardArrowDown,
  KeyboardArrowRight,
} from '@mui/icons-material'
import ComboImg1 from '../images/218.jpg.svg'
import ComboImg2 from '../images/164.jpg.svg'
import { Rating, useMediaQuery } from '@mui/material'
import ProductDetailQA from './ProductDetailQA'
import CustomerReviews from './CustomerReviews'
import ProductDetailsProductOverview from './ProductDetailsProductOverview'
import ProductDetailMobileScreen from './ProductDetailMobileScreen/ProductDetailMobileScreen'
import FrequentlyMobileScreen from './ProductDetailMobileScreen/FrequentlyMobileScreen'
import ProductDetailCustomerCarousel from './ProductDetailMobileScreen/ProductDetailCustomerCarousel'

function ProductDetailsGrid() {
  const matches = useMediaQuery('(max-width:600px)')

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
      img: ComboImg2,
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
    },
    {
      img: ComboImg2,
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
    <>
      <div className="container-fluid">
        {matches ? (
          <ProductDetailMobileScreen />
        ) : (
          <div className="row ">
            <div className="col-lg-3 col-md-12 col-sm-12 ">
              <img src={ProductImage} className="w-100 py-2" alt="a" />
              <div className="">
                <img className="w-25" src={ProductImage} alt="a" />
                <img className="w-25" src={ProductImage} alt="a" />
                <img className="w-25" src={ProductImage} alt="a" />
                <img className="w-25" src={ProductImage} alt="a" />
                <img className="w-25" src={ProductImage} alt="a" />
                <img className="w-25" src={ProductImage} alt="a" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="d-flex align-items-baseline mt-2">
                <div
                  style={{
                    clipPath:
                      'polygon(0 0, 100% 0, 88% 36%, 100% 70%, 100% 100%, 0 100%, 0% 70%, 0% 30%)',
                    backgroundColor: '#BD3C37',
                    width: '70px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
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
                    Special
                  </span>
                </div>

                <div
                  style={{
                    clipPath:
                      'polygon(0 0, 100% 0, 88% 36%, 100% 70%, 100% 100%, 0 100%, 0% 70%, 0% 30%)',
                    backgroundColor: '#8BC9E4',
                    width: '100px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginLeft: '10px',
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
                  <img
                    src="./assets/icons/flag.png.svg"
                    alt=""
                    height="18px"
                    width="66px"
                  />
                </span>
              </div>
              <h1 className="fs-cs-4 mt-3">
                California Gold Nutrition, Gold C, USP Grade Vitamin C, 1,000
                mg, 60 Veggie Capsules
              </h1>
              <h3 className="fs-cs-1">BY California Gold Nutrition</h3>
              <div className="d-flex">
                <div>
                  <i className="bi bi-star"></i>
                  <i className="bi bi-star"></i>
                  <i className="bi bi-star"></i>
                  <i className="bi bi-star"></i>
                </div>
                <div>
                  <span> &nbsp; 35421</span>
                </div>
              </div>
              <div className="my-2 border-top border-bottom">
                <h4 className="text-success">In-Stock</h4>
              </div>
              <div className="potency">
                <h3 className="fs-cs-3">Potency: 1000mg</h3>
                <div className="d-flex">
                  <button className="bg-transparent px-3 py-2 rounded-3 border ">
                    {' '}
                    500mg
                  </button>
                  <button className="bg-transparent px-3 py-2 rounded-3 border ">
                    {' '}
                    1000mg
                  </button>
                </div>
              </div>
              <div className="package-count mt-2">
                <h3 className="fs-cs-3">Package Quantity: 60 Count</h3>
                <div className="d-flex">
                  <button className="bg-transparent  px-3 py-2 rounded-3 border ">
                    <span className="d-block">Count 60</span>
                    <span className="text-danger  "> ₹417.96 &nbsp;</span>
                    ₹221.96
                  </button>
                  <button className="bg-transparent mx-2 px-3 py-2 rounded-3 border ">
                    <span className="d-block">Count 60</span>
                    <span className="text-danger  "> ₹417.96 &nbsp;</span>
                    ₹221.96
                  </button>
                </div>
              </div>
              <div className="border-top my-3"></div>
              <div className="product-info mt-3">
                <h5 className="fs-cs-2">Best By: December 2023</h5>
                <h5 className="fs-cs-2">Date First Available: October 2014</h5>
                <h5 className="fs-cs-2">Shipping Weight: 0.09kg</h5>
                <h5 className="fs-cs-2">Product Code: BAC123 </h5>
                <h5 className="fs-cs-2">UPC Code: 123s4sda</h5>
                <h5 className="fs-cs-2">Package Quantity</h5>
                <h5 className="fs-cs-2">Dimensions: 9.7 x 5.3x 5.3cm</h5>
                <h5 className="fs-cs-3">Try Risk free for 90 days</h5>
              </div>

              <div className="border-top my-4"></div>

              <div className="">
                <h6 className={styles.productRankH5}>Product rank:</h6>
                <div>
                  <div className={styles.productRankLi}>
                    <span>#1 in </span>
                    <span>Vitamin C</span>
                  </div>
                  <div className={styles.productRankLi}>
                    <span>#1 in </span>
                    <span>Ascorbic Acid</span>
                  </div>
                  <div className={styles.productRankLi}>
                    <span>#1 in </span>
                    <span>Vitamins</span>
                  </div>
                  <div className={styles.productRankLi}>
                    <span>#3 in </span>
                    <span>Supplements</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-12 col-sm-12">
              {/* column */}
              <div className={styles.addToCart_productDetails}>
                <div className={`d-flex justify-content-end ${styles.price1}`}>
                  ₹418.80
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  <div className={styles.specialH6}>Special!:</div>
                  <div className="d-flex ">
                    <span className={styles.redH6}>₹221.96</span>
                    <span className={styles.grayH6}>₹3.70/Serving</span>
                  </div>
                </div>
                <div className="d-flex justify-content-between">
                  <div className={styles.saveH6}>You Save:</div>
                  <div>
                    <span className={styles.saveH6}>₹196.84 ( 47%)</span>
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
                    id="fade-button"
                    aria-controls={open ? 'fade-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
                    variant="outlined"
                    class={styles.addToListBtn}
                  >
                    Add to lists
                    <KeyboardArrowDown />
                  </Button>
                  <Menu
                    id="fade-menu"
                    MenuListProps={{
                      'aria-labelledby': 'fade-button',
                    }}
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    TransitionComponent={Fade}
                  >
                    <MenuItem onClick={handleClose}>Profile</MenuItem>
                    <MenuItem onClick={handleClose}>My account</MenuItem>
                    <MenuItem onClick={handleClose}>Logout</MenuItem>
                  </Menu>
                </React.Fragment>
              </div>

              <div className={styles.comboOffer_productDetails}>
                <div className={styles.comboOffer}>
                  <span className={styles.comboOfferH1}>
                    Combo offer:{' '}
                    <span className={styles.savePrice}> Save ₹251.28</span>
                  </span>
                </div>
                <div className={styles.dividerFull}></div>

                <div>
                  <div className="d-flex align-items-center justify-content-center">
                    <div>
                      <div style={{ width: '96px', height: '96px' }}>
                        <img
                          src={ComboImg1}
                          alt=""
                          width="100%"
                          height="auto"
                        />
                      </div>

                      <div className={`d-flex align-items-center`}>
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

                    <div>
                      <i
                        className="bi bi-plus"
                        style={{ color: 'gray', fontSize: '24px' }}
                      ></i>
                    </div>
                    <div>
                      <div style={{ width: '96px', height: '96px' }}>
                        <img
                          src={ComboImg1}
                          alt=""
                          width="100%"
                          height="auto"
                        />
                      </div>

                      <div className={`d-flex align-items-center`}>
                        <div>
                          <Rating size={'small'} value={5} readOnly />
                        </div>
                        <div className={styles.ratingNo}>244799</div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h6 className={styles.ComboWithH5}>Combo With:</h6>
                    <h6 className={styles.ComboWithH5Blue}>
                      California Gold Nutrition , Omega -3 Premium Fish Oil, 180
                      EPA / 120 DHA,100 Fish Gelatin Softgels
                    </h6>
                  </div>

                  <div className="d-flex flex-column justify-content-center">
                    <h4 className={styles.ComboWithPriceH1}>Only ₹557.00</h4>

                    <div className="d-flex justify-content-center">
                      <button
                        type="button"
                        class={`btn btn-warning text-decoration-none text-white   ${styles.addToCartBtn2}`}
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Frequently purchased together */}

      {matches ? (
        <>
          <FrequentlyMobileScreen />
        </>
      ) : (
        <div className="mx-4 mt-4">
          <div className="d-md-flex align-items-center">
            <div className={styles.frequentlyPurchasedH1}>
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
                          California Gold Nutrition, Gold C, USP Grade Vitamin
                          C, 1,000 mg, 60 Veggie
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
                          California Gold Nutrition, Gold C, USP Grade Vitamin
                          C, 1,000 mg, 60 Veggie
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
      )}

      {/* Customers also viewed */}

      <div>
        {matches ? (
          <div className="mx-2 mt-4">
            <div className={styles.customerAlsoViewed}>
              Customers also viewed
            </div>
            <div className="border-top mb-3">
              <div
                className={`d-flex  justify-content-center mt-4  ${styles.cusAlsoView}`}
              >
                <ProductDetailCustomerCarousel />
              </div>
            </div>
          </div>
        ) : (
          <div className="mx-4">
            <div className={styles.customerAlsoViewed}>
              Customers also viewed
            </div>
            <div className="border-top mb-3">
              <div
                className={`d-flex  justify-content-around mt-4  ${styles.cusAlsoView}`}
              >
                {cardData1.map((item) => {
                  return (
                    <>
                      <div className={styles.cusAlsoViewCad}>
                        <div style={{ width: '160px', height: '160px' }}>
                          <img
                            src={item.img}
                            alt=""
                            width="100%"
                            height="auto"
                          />
                        </div>

                        <div>
                          <h6 className={styles.customerAlsoViewedH5}>
                            {item.desc}
                          </h6>
                        </div>
                        <div className={`d-flex align-items-center`}>
                          <div>
                            <Rating
                              size={'small'}
                              name="read-only"
                              value={item.rating}
                              readOnly
                            />
                          </div>
                          <div className={styles.ratingNo}>{item.ratingNo}</div>
                        </div>

                        <div className="d-flex">
                          {' '}
                          <h4
                            className={styles.ComboWithPriceH1}
                            style={{
                              display: 'flex',
                              justifyContent: 'start',
                              marginRight: '5px',
                              color: matches ? '#BD3C37' : '#000000',
                            }}
                          >
                            ₹{item.price}
                          </h4>
                          <h4
                            className={styles.ComboWithPriceH1}
                            style={{
                              display: 'flex',
                              justifyContent: 'start',
                              color: '#747474',
                            }}
                          >
                            ₹{item.salePrice}
                          </h4>
                        </div>
                      </div>
                    </>
                  )
                })}
              </div>
            </div>
          </div>
        )}
      </div>

      <div>
        <ProductDetailsProductOverview />
      </div>

      <Productsimgs></Productsimgs>
      <div className=" mt-5">
        <ProductDetailQA />

        <div className={`  mt-3 ${styles.seeMoreLine}`}>
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

      <div className={styles.cusReview}>
        <CustomerReviews />
      </div>
      <Customerscards></Customerscards>

      <WallHerbLive></WallHerbLive>

      <div
        className="sale-last-section sale-last-section-for-mobile container-fluid "
        style={{ background: ' #F5F5F5' }}
      >
        <div
          className="card mt-2  "
          style={{ width: '12rem', background: ' #F5F5F5', border: 'none' }}
        >
          <img src={sale1} className="card-img-top" alt="..." />
          <div className="card-body">
            <p className="card-text text-center" style={{ fontSize: '13px' }}>
              The Best Natural Remedies for
            </p>
          </div>
        </div>
        <div
          className="card mt-2 "
          style={{ width: '12rem', background: ' #F5F5F5', border: 'none' }}
        >
          <img src={sale2} className="card-img-top" alt="..." />
          <div className="card-body">
            <p className="card-text text-center" style={{ fontSize: '13px' }}>
              The Best Foods and Supplements for Natural{' '}
            </p>
          </div>
        </div>
        <div
          className="card mt-2"
          style={{ width: '12rem', background: ' #F5F5F5', border: 'none' }}
        >
          <img src={sale3} className="card-img-top" alt="..." />
          <div className="card-body">
            <p className="card-text text-center" style={{ fontSize: '13px' }}>
              Psychodermatology: Why Researchers Think the Mind-
            </p>
          </div>
        </div>
        <div
          className="card mt-2"
          style={{ width: '12rem', background: ' #F5F5F5', border: 'none' }}
        >
          <img src={sale4} className="card-img-top" alt="..." />
          <div className="card-body">
            <p className="card-text text-center" style={{ fontSize: '13px' }}>
              Stress-Related Hair Loss + Natural Solutions to Promote
            </p>
          </div>
        </div>
        <div
          className="card mt-2"
          style={{ width: '12rem', background: ' #F5F5F5', border: 'none' }}
        >
          <img src={sale5} className="card-img-top" alt="..." />
          <div className="card-body">
            <p className="card-text text-center" style={{ fontSize: '13px' }}>
              Dry brushing: What It Is + Unexpected Health{' '}
            </p>
          </div>
        </div>
        <div
          className="card mt-2 "
          style={{ width: '12rem', background: ' #F5F5F5', border: 'none' }}
        >
          <img src={sale6} className="card-img-top" alt="..." />
          <div className="card-body">
            <p className="card-text text-center" style={{ fontSize: '13px' }}>
              How Spices Combat Inflammation and{' '}
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductDetailsGrid
