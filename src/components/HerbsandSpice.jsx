import React from 'react'
import spices1 from '../images/spices1.png'
import spice2 from '../images/spice2.png'
import WallHerbLive from './WallHerbLive'
import sale1 from '../images/sale1.png'
import sale2 from '../images/sale2.png'
import sale3 from '../images/sale3.png'
import sale4 from '../images/sale4.png'
import sale5 from '../images/sale5.png'
import sale6 from '../images/sale6.png'
import Img1 from '../images/9.jpg.svg'
import Img2 from '../images/18.jpg.svg'
import Img3 from '../images/27.jpg.svg'
import Img4 from '../images/26.jpg.svg'
import Herblinks from './Herblinks'
import HerbPagination from './HerbPagination'
import HerbsMiniBannerCarousel from './HerbsMiniBannerCarousel'
import ErrorIcon from '@mui/icons-material/Error'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'

function HerbsandSpice() {
  const categoriesList = [
    {
      title: 'Salt',
      subTitle: '53',
      path: '',
    },
    {
      title: 'Spice Blends',
      subTitle: '105',
      path: '',
    },
    {
      title: 'Cinnamon Spices',
      subTitle: '22',
      path: '',
    },
    {
      title: 'Garlic Spices',
      subTitle: '21',
      path: '',
    },
    {
      title: 'Peppar',
      subTitle: '38',
      path: '',
    },
    {
      title: 'All Purpose Seasoning',
      subTitle: '31',
      path: '',
    },
    {
      title: 'Turmic Spices',
      subTitle: '18',
      path: '',
    },
    {
      title: 'Paprika',
      subTitle: '13',
      path: '',
    },
  ]
  const brandsList = [
    {
      title: 'Simply Organic',
      subTitle: '95',
      path: '',
    },
    {
      title: 'Frontier Co-op',
      subTitle: '114',
      path: '',
    },
    {
      title: 'California Gold Nutriti',
      subTitle: '33',
      path: '',
    },
    {
      title: 'The Spice Lab',
      subTitle: '73',
      path: '',
    },
    {
      title: 'Celtic Sea Salt',
      subTitle: '38',
      path: '',
    },
  ]
  const priceList = [
    {
      title: '₹0 - ₹500',
      subTitle: '153',
      path: '',
    },
    {
      title: '₹500 - ₹1,000',
      subTitle: '215',
      path: '',
    },
    {
      title: '₹1,000 - ₹2,000',
      subTitle: '96',
      path: '',
    },
    {
      title: '₹2,000 - ₹3,000',
      subTitle: '16',
      path: '',
    },
    {
      title: '3000+',
      subTitle: '4',
      path: '',
    },
  ]
  const accordionList = [
    {
      id: 1,
      title: 'Special Offers',
      path: '',
    },
    {
      id: 2,
      title: 'Weight',
      path: '',
    },
    {
      id: 3,
      title: 'Help With',
      path: '',
    },
    {
      id: 4,
      title: 'Gender',
      path: '',
    },
    {
      title: 'Life Stage',
      path: '',
    },
    {
      id: 5,
      title: 'Certification And Diet',
      path: '',
    },
    {
      id: 6,
      title: 'Form',
      path: '',
    },
    {
      id: 7,
      title: 'Package Quantity',
      path: '',
    },
    {
      id: 8,
      title: 'Formulation',
      path: '',
    },
    {
      id: 9,
      title: 'Color',
      path: '',
    },
    {
      id: 10,
      title: 'Flavor',
      path: '',
    },
  ]

  const cardsData = [
    {
      title: 'Simply Organic, Garlic Powder, 3.64 oz (103 g)',
      img: spice2,
      ratingNo: '520',
      cartPercentage: '20% ',
      price: '744.03',
    },
    {
      title: 'Simply Organic, All-Purpose Seasoning,2.08 oz (59 g)',
      img: Img1,
      ratingNo: '520',
      cartPercentage: '20% ',
      price: '566.94',
    },
    {
      title: 'Simply Organic, Garlic Powder, 3.64 oz (103 g)',
      img: Img2,
      ratingNo: '520',
      cartPercentage: '20% ',
      price: '744.03',
    },
    {
      title: 'Simply Organic, All-Purpose Seasoning,2.08 oz (59 g)',
      img: Img3,
      ratingNo: '520',
      cartPercentage: '20% ',
      price: '566.94',
    },
    {
      title: 'Simply Organic, Garlic Powder, 3.64 oz (103 g)',
      img: Img4,
      ratingNo: '520',
      cartPercentage: '20% ',
      price: '744.03',
    },
    {
      title: 'Simply Organic, All-Purpose Seasoning,2.08 oz (59 g)',
      img: Img3,
      ratingNo: '520',
      cartPercentage: '20% ',
      price: '566.94',
    },
    {
      title: 'Simply Organic, Garlic Powder, 3.64 oz (103 g)',
      img: spice2,
      ratingNo: '520',
      cartPercentage: '20% ',
      price: '744.03',
    },
    {
      title: 'Simply Organic, All-Purpose Seasoning,2.08 oz (59 g)',
      img: Img1,
      ratingNo: '520',
      cartPercentage: '20% ',
      price: '566.94',
    },
    {
      title: 'Simply Organic, Garlic Powder, 3.64 oz (103 g)',
      img: Img2,
      ratingNo: '520',
      cartPercentage: '20% ',
      price: '744.03',
    },
    {
      title: 'Simply Organic, All-Purpose Seasoning,2.08 oz (59 g)',
      img: Img3,
      ratingNo: '520',
      cartPercentage: '20% ',
      price: '566.94',
    },
    {
      title: 'Simply Organic, Garlic Powder, 3.64 oz (103 g)',
      img: Img4,
      ratingNo: '520',
      cartPercentage: '20% ',
      price: '744.03',
    },
    {
      title: 'Simply Organic, All-Purpose Seasoning,2.08 oz (59 g)',
      img: Img3,
      ratingNo: '520',
      cartPercentage: '20% ',
      price: '566.94',
    },
    {
      title: 'Simply Organic, Garlic Powder, 3.64 oz (103 g)',
      img: spice2,
      ratingNo: '520',
      cartPercentage: '20% ',
      price: '744.03',
    },
    {
      title: 'Simply Organic, All-Purpose Seasoning,2.08 oz (59 g)',
      img: Img1,
      ratingNo: '520',
      cartPercentage: '20% ',
      price: '566.94',
    },
    {
      title: 'Simply Organic, Garlic Powder, 3.64 oz (103 g)',
      img: Img2,
      ratingNo: '520',
      cartPercentage: '20% ',
      price: '744.03',
    },
    {
      title: 'Simply Organic, All-Purpose Seasoning,2.08 oz (59 g)',
      img: Img3,
      ratingNo: '520',
      cartPercentage: '20% ',
      price: '566.94',
    },
    {
      title: 'Simply Organic, Garlic Powder, 3.64 oz (103 g)',
      img: Img4,
      ratingNo: '520',
      cartPercentage: '20% ',
      price: '744.03',
    },
    {
      title: 'Simply Organic, All-Purpose Seasoning,2.08 oz (59 g)',
      img: Img3,
      ratingNo: '520',
      cartPercentage: '20% ',
      price: '566.94',
    },
    {
      title: 'Simply Organic, Garlic Powder, 3.64 oz (103 g)',
      img: spice2,
      ratingNo: '520',
      cartPercentage: '20% ',
      price: '744.03',
    },
    {
      title: 'Simply Organic, All-Purpose Seasoning,2.08 oz (59 g)',
      img: Img1,
      ratingNo: '520',
      cartPercentage: '20% ',
      price: '566.94',
    },
    {
      title: 'Simply Organic, Garlic Powder, 3.64 oz (103 g)',
      img: Img2,
      ratingNo: '520',
      cartPercentage: '20% ',
      price: '744.03',
    },
    {
      title: 'Simply Organic, All-Purpose Seasoning,2.08 oz (59 g)',
      img: Img3,
      ratingNo: '520',
      cartPercentage: '20% ',
      price: '566.94',
    },
    {
      title: 'Simply Organic, Garlic Powder, 3.64 oz (103 g)',
      img: Img4,
      ratingNo: '520',
      cartPercentage: '20% ',
      price: '744.03',
    },
    {
      title: 'Simply Organic, All-Purpose Seasoning,2.08 oz (59 g)',
      img: Img3,
      ratingNo: '520',
      cartPercentage: '20% ',
      price: '566.94',
    },
  ]
  return (
    <>
      <div className="container">
        <div className="mainhero">
          <div className="hero ">
            <div className="ms-5 ">
              <h4> 20% off Immunne Support! </h4>
            </div>
            <div>
              <button type="button" className="btn shopbtn mb-2">
                Shop Now
              </button>
            </div>
          </div>
          <div className="cruveclr"></div>

          <div className="hero2">
            <div className="ms-5">
              <h4> Up to 30% off Herbs & Splices! </h4>
            </div>
            <div>
              <button type="button" className="btn shopbtn mb-2">
                Shop Now
              </button>
            </div>
          </div>
        </div>

        <section className="container-fluid">
          <div className="categories-top-bar">
            <div className="categories-dropdown">
              <ul className="navbar-nav  mb-2 mb-lg-0 ">
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle text-dark"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Categories
                  </a>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <li>
                      <a className="dropdown-item" href="#">
                        Action
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Another action
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Something else here
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>

              <ul className="navbar-nav  mb-2 mb-lg-0">
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle text-dark"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Grocery
                  </a>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <li>
                      <a className="dropdown-item" href="#">
                        Action
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Another action
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Something else here
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
              <a href="" className="text-decoration-none text-dark mt-2">
                {' '}
                Herbs & Spices{' '}
              </a>
            </div>

            <div className="Herbs-Spices-heading ">
              <h4>Herbs & Spices</h4>
              <p className="mt-1">484 Results (showing 1 - 48)</p>
            </div>
          </div>

          <div className="spices1-banner-image">
            <img src={spices1} alt="" />
          </div>

          <Herblinks></Herblinks>

          <div className="Herb-carousel-mini-banner position-relative">
            <div
              width="10%"
              style={{
                position: 'absolute',
                top: '35%',
                left: '20px',
                zIndex: 1,
              }}
            >
              <div style={{ width: '10%', height: '26px' }}>
                <img src="./assets/icons/iHerb_BLOG_LOGO.svg" alt="" />
              </div>
            </div>
            <div width="90%" style={{ marginLeft: '13%' }}>
              <HerbsMiniBannerCarousel />
            </div>
          </div>

          <div className="herbs-section-main-spacing">
            <div className="sidebarsection">
              <div className="sidebar mt-3 ">
                <ul className="nav flex-column ">
                  <li className="nav-item  ">
                    <a className="nav-link text-dark" href="/">
                      <div className="d-flex">
                        {/* <input
                        className="form-control me-2 form-check-input"
                        type="search"
                        placeholder="Search by Category"
                        aria-label="Search"
                      /> */}

                        <div class="form-check d-flex align-items-center">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            value=""
                            id="defaultCheck1"
                          />
                          <label
                            class="form-check-label"
                            for="defaultCheck1"
                            style={{
                              border: 'none',
                              backgroundColor: '#8BC9E4',
                              padding: '2px 5px 2px 7px',
                              width: '90px',
                              marginLeft: '10px',

                              clipPath:
                                'polygon(0 0, 100% 0, 88% 36%, 100% 70%, 100% 100%, 0 100%, 0% 70%, 0% 30%)',
                            }}
                          >
                            <div
                              style={{
                                fontSize: '12px',
                                fontWeight: '700',
                                lineHeight: '23px',
                              }}
                            >
                              iHerb brand
                            </div>
                          </label>
                          <div>
                            <ErrorIcon
                              style={{ color: '#666666', marginLeft: '10px' }}
                            />
                          </div>
                          <div
                            style={{
                              color: '#666666',
                              fontSize: '14px',
                              fontWeight: '400',
                              marginLeft: '3px',
                            }}
                          >
                            (33)
                          </div>
                        </div>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="sidebar mt-3 ">
                <h5 className="sidebar-heading ms-3">Categories</h5>
                <hr className="line ms-3" />
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search by Category"
                  aria-label="Search"
                />
                <ul className="nav flex-column ">
                  {categoriesList.map((item) => {
                    return (
                      <>
                        <li className="nav-item ">
                          <a
                            className="nav-link text-dark d-flex"
                            href={item.path}
                          >
                            <div
                              style={{
                                fontSize: '14px',
                                fontWeight: '500',
                                color: '#000000',
                              }}
                            >
                              {item.title}
                            </div>
                            <div
                              style={{
                                marginLeft: '8px',
                                fontSize: '14px',
                                fontWeight: '500',
                                color: '#8C8C8C',
                              }}
                            >
                              ({item.subTitle})
                            </div>
                          </a>
                        </li>
                      </>
                    )
                  })}
                  <li className="nav-item ">
                    <button
                      type="button"
                      class="btn btn-link text-decoration-none d-flex align-items-center"
                      style={{
                        color: '#1976D2',
                        fontSize: '14px',
                        fontWeight: '500',
                      }}
                    >
                      <i class="bi bi-plus" style={{ fontSize: '20px' }}></i>{' '}
                      Show more
                    </button>
                  </li>
                </ul>
              </div>
              <div className="sidebar mt-3 ">
                <h5 className="sidebar-heading ms-3">Brands</h5>
                <hr className="line ms-3" />
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search by Category"
                  aria-label="Search"
                />
                <ul className="nav flex-column mt-2 ">
                  {brandsList.map((item) => {
                    return (
                      <>
                        <li className="nav-item ">
                          <div class="form-check d-flex">
                            <input
                              class="form-check-input"
                              type="checkbox"
                              value=""
                              id="flexCheckDefault"
                            />
                            <label
                              class="form-check-label d-flex"
                              for="flexCheckDefault"
                            >
                              <div
                                style={{
                                  fontSize: '14px',
                                  fontWeight: '500',
                                  color: '#000000',
                                  marginLeft: '10px',
                                  marginBottom: '10px',
                                }}
                              >
                                {' '}
                                {item.title}
                              </div>
                              <div
                                style={{
                                  marginLeft: '8px',
                                  fontSize: '14px',
                                  fontWeight: '500',
                                  color: '#8C8C8C',
                                }}
                              >
                                ({item.subTitle})
                              </div>
                            </label>
                          </div>
                        </li>
                      </>
                    )
                  })}
                  <li className="nav-item ">
                    <button
                      type="button"
                      class="btn btn-link text-decoration-none d-flex align-items-center"
                      style={{
                        color: '#1976D2',
                        fontSize: '14px',
                        fontWeight: '500',
                      }}
                    >
                      <i class="bi bi-plus" style={{ fontSize: '20px' }}></i>{' '}
                      Show more
                    </button>
                  </li>
                </ul>
              </div>
              <div className="sidebar mt-3 ">
                <h5 className="sidebar-heading ms-3">Ratings</h5>
                <hr className="line ms-3" />
                <ul className="nav flex-column ">
                  <li className="nav-item ">
                    <a className="nav-link text-dark" href="/">
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckDefault"
                        />
                        <label class="form-check-label" for="flexCheckDefault">
                          <li
                            className="fa fa-star "
                            style={{ color: '#FAC627' }}
                          ></li>
                          <li
                            className="fa fa-star "
                            style={{ color: '#FAC627' }}
                          ></li>
                          <li
                            className="fa fa-star "
                            style={{ color: '#FAC627' }}
                          ></li>
                          <li
                            className="fa fa-star "
                            style={{ color: '#FAC627' }}
                          ></li>
                          <li
                            className="fa fa-star "
                            style={{ color: '#FAC627' }}
                          ></li>
                        </label>
                      </div>{' '}
                    </a>
                  </li>
                  <li className="nav-item ">
                    <a className="nav-link text-dark" href="/">
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckDefault"
                        />
                        <label class="form-check-label" for="flexCheckDefault">
                          <li
                            className="fa fa-star "
                            style={{ color: '#FAC627' }}
                          ></li>
                          <li
                            className="fa fa-star "
                            style={{ color: '#FAC627' }}
                          ></li>
                          <li
                            className="fa fa-star "
                            style={{ color: '#FAC627' }}
                          ></li>
                          <li
                            className="fa fa-star "
                            style={{ color: '#FAC627' }}
                          ></li>
                          {/* <li
                          className="fa fa-star "
                          style={{ color: '#FAC627' }}
                        ></li> */}
                        </label>
                      </div>{' '}
                    </a>
                  </li>
                </ul>
              </div>
              <div className="sidebar mt-3 ">
                <h5 className="sidebar-heading ms-3">Price</h5>

                <div className="d-flex align-items-center">
                  <input
                    className="form-control me-2"
                    type="search"
                    placeholder="Min "
                    aria-label="Search"
                    style={{ width: '76px' }}
                  />

                  <h5>to</h5>

                  <input
                    className="form-control ms-2"
                    type="search"
                    placeholder="Max"
                    aria-label="Search"
                    style={{ width: '76px' }}
                  />

                  <div
                    style={{
                      backgroundColor: '#458500',
                      borderRadius: '2px',
                      width: '24px',
                      height: '26px',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      marginTop: '3px',
                      marginLeft: '10px',
                    }}
                  >
                    <KeyboardArrowRightIcon style={{ color: '#fff' }} />
                  </div>
                </div>
                <hr className="line ms-3" />
                <ul className="nav flex-column ">
                  {priceList.map((item) => {
                    return (
                      <>
                        <li className="nav-item ">
                          <a className="nav-link text-dark d-flex" href="/">
                            <div class="form-check d-flex align-items-baseline">
                              <input
                                class="form-check-input"
                                type="checkbox"
                                value=""
                                id="flexCheckDefault"
                              />
                              <label
                                class="form-check-label d-flex "
                                for="flexCheckDefault"
                              >
                                <div
                                  style={{
                                    fontSize: '14px',
                                    fontWeight: '500',
                                    color: '#000000',
                                    marginLeft: '8px',
                                    marginBottom: '10px',
                                  }}
                                >
                                  {' '}
                                  {item.title}
                                </div>
                                <div
                                  style={{
                                    marginLeft: '4px',
                                    fontSize: '14px',
                                    fontWeight: '500',
                                    color: '#8C8C8C',
                                  }}
                                >
                                  ({item.subTitle})
                                </div>
                              </label>
                            </div>
                          </a>
                        </li>
                      </>
                    )
                  })}
                </ul>
              </div>

              <div className="sidebar mt-3 ">
                <hr className="line ms-3" />
                <ul
                  className="nav flex-column accordion accordion-flush"
                  id="accordionFlushExample"
                >
                  {accordionList.map((item) => {
                    return (
                      <>
                        <li className="nav-item accordion-item">
                          <a
                            className="nav-link text-dark d-flex justify-content-between align-items-baseline accordion-header"
                            id="flush-headingOne"
                            // href={item.path}
                          >
                            <div
                              style={{
                                fontSize: '16px',
                                fontWeight: '600',
                                color: '#000000',
                                marginLeft: '8px',
                              }}
                              class="accordion-button collapsed"
                              // type="button"
                              data-bs-toggle="collapse"
                              data-bs-target={`#flush-${item.id}`}
                              aria-expanded="false"
                              aria-controls="flush-collapseOne"
                            >
                              {' '}
                              {item.title}
                            </div>
                            {/* <li
                            className="bi bi-plus"
                            style={{ fontWeight: '400', fontSize: '24px' }}
                          ></li> */}
                          </a>
                          <div
                            style={{ width: '200px' }}
                            id={`flush-${item.id}`}
                            class="accordion-collapse collapse"
                            aria-labelledby="flush-headingOne"
                            data-bs-parent="#accordionFlushExample"
                          >
                            <div class="accordion-body accordion-list">
                              <ul style={{ listStyle: 'none' }}>
                                <li>List Item 1 </li>
                                <div className="border-top my-1"></div>
                                <li>List Item 2 </li>
                                <div className="border-top my-1"></div>
                                <li>List Item 3 </li>
                                <div className="border-top my-1"></div>
                                <li>List Item 4</li>
                              </ul>
                            </div>
                          </div>
                        </li>
                      </>
                    )
                  })}
                </ul>
              </div>
            </div>

            <div className="center-section">
              <nav className="navbar navbar-expand-lg navbar-light bg-light ">
                <div className="container-fluid">
                  <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span className="navbar-toggler-icon"></span>
                  </button>
                  <div
                    className="collapse navbar-collapse"
                    id="navbarSupportedContent"
                  >
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                      <li className="nav-item">
                        <a
                          className="nav-link active"
                          aria-current="page"
                          href="#"
                        >
                          <input
                            className="form-control me-2"
                            type="search"
                            placeholder="Search within"
                            aria-label="Search"
                          />
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link d-flex mt-1" href="#">
                          <div class="form-check">
                            <input
                              class="form-check-input"
                              type="checkbox"
                              value=""
                              id="defaultCheck1"
                            />
                            <label class="form-check-label" for="defaultCheck1">
                              <p className="ms-0">Hide out of stock</p>
                            </label>
                          </div>
                        </a>
                      </li>
                    </ul>
                    <form className="d-flex">
                      <input
                        className="form-control me-2"
                        type="search"
                        placeholder="Best sellers"
                        aria-label="Search"
                      />
                      <input
                        className="form-control me-2"
                        type="search"
                        placeholder="48"
                        aria-label="Search"
                      />

                      <div
                        className=""
                        style={{
                          borderLeft: '2px solid #E0E0E0',
                          height: '32px',
                          marginTop: '7px',
                          marginLeft: '7px',
                        }}
                      ></div>
                      <div className="d-flex">
                        <button
                          type="button"
                          class="btn btn-link text-decoration-none"
                        >
                          <img
                            src="./assets/icons/detailFrame.svg"
                            alt=""
                            style={{ width: '32px', height: '32px' }}
                          />
                        </button>
                        <button
                          type="button"
                          class="btn btn-link text-decoration-none"
                        >
                          <img
                            src="./assets/icons/gridsvg.icon.svg"
                            alt=""
                            style={{ width: '32px', height: '32px' }}
                          />
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </nav>

              <div className="herb-section-first-cards mt-5 mb-5">
                {cardsData.slice(0, 4).map((item) => {
                  return (
                    <>
                      <div
                        class="card herb-cards-image-sec"
                        style={{ width: '16rem' }}
                      >
                        <img src={item.img} class="card-img-top" alt="..." />
                        <div class="card-body">
                          <p class="card-text">{item.title}</p>
                          <div className="d-flex">
                            <div style={{ color: '#FAC627' }}>
                              <i className="bi bi-star"></i>
                              <i className="bi bi-star"></i>
                              <i className="bi bi-star"></i>
                              <i className="bi bi-star"></i>
                            </div>
                            <div>
                              <span> &nbsp; {item.ratingNo}</span>
                            </div>
                          </div>
                          <h6 className=" fs-cs-2">₹{item.price}</h6>
                          <h6 className="fs-cs-2" style={{ color: '#F38A00' }}>
                            Save {item.cartPercentage} in Cart
                          </h6>
                        </div>
                      </div>
                    </>
                  )
                })}
              </div>

              <div className="Get-the-latest-deals-section">
                <div className="Get-the-latest-deals-section-text mt-5 mb-5">
                  <div>
                    <h4>Get the latest deals</h4>
                  </div>
                  <div className=" srch-btn">
                    <input
                      class="form-control "
                      type="search"
                      placeholder="Search"
                      aria-label="Search"
                    />
                    <a
                      href=""
                      className="btn btn"
                      style={{ background: '#458500', color: 'white' }}
                    >
                      {' '}
                      Subscribe
                    </a>
                  </div>
                  <div>
                    <p>
                      Your email will only be used for iHerb communications. You
                      can unsubscribe at any time. For more information, see our
                      Privacy Policy.
                    </p>
                  </div>
                </div>
              </div>

              <div className="herb-section-first-cards mt-5 mb-5">
                {cardsData.slice(4, -1).map((item) => {
                  return (
                    <>
                      <div
                        class="card herb-cards-image-sec"
                        style={{ width: '16rem' }}
                      >
                        <img src={item.img} class="card-img-top" alt="..." />
                        <div class="card-body">
                          <p class="card-text">{item.title}</p>
                          <div className="d-flex">
                            <div style={{ color: '#FAC627' }}>
                              <i className="bi bi-star"></i>
                              <i className="bi bi-star"></i>
                              <i className="bi bi-star"></i>
                              <i className="bi bi-star"></i>
                            </div>
                            <div>
                              <span> &nbsp; {item.ratingNo}</span>
                            </div>
                          </div>
                          <h6 className=" fs-cs-2">₹{item.price}</h6>
                          <h6 className="fs-cs-2" style={{ color: '#F38A00' }}>
                            Save {item.cartPercentage} in Cart
                          </h6>
                        </div>
                      </div>
                    </>
                  )
                })}
              </div>

              <div className="d-flex justify-content-center mt-4 mb-3 ">
                <HerbPagination />
              </div>
            </div>
          </div>
        </section>
        <WallHerbLive></WallHerbLive>

        <div
          className="sale-last-section  mt-5"
          style={{ background: ' #F5F5F5' }}
        >
          <br />
          <div
            className="card "
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
            className="card "
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
            className="card "
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
            className="card "
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
            className="card "
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
            className="card "
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
      </div>
    </>
  )
}

export default HerbsandSpice
