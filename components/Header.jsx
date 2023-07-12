import logoImage from '../images/logo.jpg'
import cart from '../images/cart.png'
// import dollar from "../images/dollar-sign.png"
import vectorShare from '../images/shareVector.svg'
import vectorDollar from '../images/dollarVector.svg'
import Image from 'next/image'

function Header() {
  return (
    <>
      <nav className="navbar-dektop navbar  navbar-expand-lg navbar-dark  navbackground">
        <div className="container-fluid">
          <Image src={logoImage} alt="" />
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
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-3  navbar-main">
              <li className="nav-item dropdown">
                <a
                  className="nav-link active dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Shop
                </a>
                <div
                  className="dropdown-menu dropDownMenu"
                  aria-labelledby="navbarDropdown"
                >
                  <div className="mega-menu">
                    <div className="row mega-row">
                      <div className="col">
                        <h3>Supplements</h3>
                        <ul>
                          <li>
                            <a href="#">5-HTP</a>
                          </li>
                          <li>
                            <a href="#">Algae</a>
                          </li>
                          <li>
                            <a href="#">Amino Acids</a>
                          </li>
                          <li>
                            <a href="#">Antioxidants</a>
                          </li>
                          <li>
                            <a href="#">Ashwagandha</a>
                          </li>
                          <li>
                            <a href="#">Astaxanthin</a>
                          </li>
                          <li>
                            <a href="#">Bee Propolis</a>
                          </li>
                          <li>
                            <a href="#">Beta Gulcan</a>
                          </li>
                          <li>
                            <a href="#">Biotin</a>
                          </li>
                          <li>
                            <a href="#">Bone & joint</a>
                          </li>
                          <li>
                            <a href="#">Calcium</a>
                          </li>
                          <li>
                            <a href="#">Collage</a>
                          </li>
                          <li>
                            <a href="#">CoQ10</a>
                          </li>
                          <li>
                            <a href="#">Green & Superfoods</a>
                          </li>
                          <li>
                            <a href="#">Plant Based Protien</a>
                          </li>
                          <li>
                            <a href="#">Milk Thistle (Silymarin)</a>
                          </li>
                          <li>
                            <a href="#">Red Yeast Rice</a>
                          </li>
                          <li>
                            <a href="#">Enzymes</a>
                          </li>
                          <li>
                            <a href="#">Fiber</a>
                          </li>
                          <li>
                            <a href="#">Fish Oil</a>
                          </li>
                          <li>
                            <a href="#">Flax Seed</a>
                          </li>
                          <li>
                            <a href="#">Garlic</a>
                          </li>
                          <li>
                            <a href="#">Ginseng</a>
                          </li>
                        </ul>
                      </div>
                      <div className="col">
                        {/* <h3>Category 2</h3> */}
                        <ul>
                          <li>
                            <a href="#">Antioxidants</a>
                          </li>
                          <li>
                            <a href="#">Ashwagandha</a>
                          </li>
                          <li>
                            <a href="#">Astaxanthin</a>
                          </li>
                          <li>
                            <a href="#">Bee Propolis</a>
                          </li>
                          <li>
                            <a href="#">Beta Gulcan</a>
                          </li>
                          <li>
                            <a href="#">Biotin</a>
                          </li>
                          <li>
                            <a href="#">Bone & joint</a>
                          </li>
                          <li>
                            <a href="#">Calcium</a>
                          </li>
                          <li>
                            <a href="#">Collage</a>
                          </li>
                          <li>
                            <a href="#">CoQ10</a>
                          </li>
                          <li>
                            <a href="#">Green & Superfoods</a>
                          </li>
                          <li>
                            <a href="#">Plant Based Protien</a>
                          </li>
                          <li>
                            <a href="#">Milk Thistle (Silymarin)</a>
                          </li>
                          <li>
                            <a href="#">Red Yeast Rice</a>
                          </li>
                          <li>
                            <a href="#">Enzymes</a>
                          </li>
                          <li>
                            <a href="#">Fiber</a>
                          </li>
                          <li>
                            <a href="#">Fish Oil</a>
                          </li>
                          <li>
                            <a href="#">Flax Seed</a>
                          </li>
                          <li>
                            <a href="#">Garlic</a>
                          </li>
                          <li>
                            <a href="#">Ginseng</a>
                          </li>

                          <li>
                            <a href="#">Astaxanthin</a>
                          </li>
                          <li>
                            <a href="#">Bee Propolis</a>
                          </li>
                          <li>
                            <a href="#">Beta Gulcan</a>
                          </li>
                          <li>
                            <a href="#">Astaxanthin</a>
                          </li>
                        </ul>
                      </div>
                      <div className="col">
                        <ul>
                          <li>
                            <a href="#">5-HTP</a>
                          </li>
                          <li>
                            <a href="#">Algae</a>
                          </li>
                          <li>
                            <a href="#">Amino Acids</a>
                          </li>
                          <li>
                            <a href="#">Antioxidants</a>
                          </li>
                          <li>
                            <a href="#">Ashwagandha</a>
                          </li>
                          <li>
                            <a href="#">Astaxanthin</a>
                          </li>
                          <li>
                            <a href="#">Bee Propolis</a>
                          </li>
                          <li>
                            <a href="#">Beta Gulcan</a>
                          </li>
                          <li>
                            <a href="#">Biotin</a>
                          </li>
                          <li>
                            <a href="#">Bone & joint</a>
                          </li>
                          <li>
                            <a href="#">Calcium</a>
                          </li>
                          <li>
                            <a href="#">Collage</a>
                          </li>
                          <li>
                            <a href="#">CoQ10</a>
                          </li>
                          <li>
                            <a href="#">Green & Superfoods</a>
                          </li>
                          <h3 className="heading-mt">Sports</h3>
                          {/* <li>
                            <a href="#">Plant Based Protien</a>
                          </li> */}
                          <li>
                            <a href="#">Milk Thistle (Silymarin)</a>
                          </li>

                          <li>
                            <a href="#">Red Yeast Rice</a>
                          </li>
                          <li>
                            <a href="#">Enzymes</a>
                          </li>
                          <li>
                            <a href="#">Fiber</a>
                          </li>

                          <li>
                            <a href="#">Fish Oil</a>
                          </li>
                          <li>
                            <a href="#">Flax Seed</a>
                          </li>
                          <li>
                            <a href="#">Garlic</a>
                          </li>
                          <li>
                            <a href="#">Ginseng</a>
                          </li>
                        </ul>
                      </div>
                      <div className="col">
                        <ul>
                          <h3>Bath</h3>
                          <li>
                            <a href="#">Aromatherapy</a>
                          </li>
                          <li>
                            <a href="#">Bath & Shower</a>
                          </li>
                          <li>
                            <a href="#">Body & Massage Oils</a>
                          </li>
                          <li>
                            <a href="#">Face Masks & Hand Sanitizers</a>
                          </li>
                          <li>
                            <a href="#">Hair Care</a>
                          </li>
                          <li>
                            <a href="#">Lip Care</a>
                          </li>
                          <li>
                            <a href="#">Lotion</a>
                          </li>
                          <li>
                            <a href="#">Medicine Cabinet</a>
                          </li>
                          <li>
                            <a href="#">Men's Grooming</a>
                          </li>
                          <li>
                            <a href="#">Oral Care</a>
                          </li>

                          <h3 className="heading-mt">Beauty</h3>
                          <li>
                            <a href="#">Cleanse, Tone & Scrub</a>
                          </li>
                          <li>
                            <a href="#">Face Masks & Peels</a>
                          </li>
                          <li>
                            <a href="#">Gift Sets</a>
                          </li>
                          <li>
                            <a href="#">Moisturizers & Creams</a>
                          </li>
                          <li>
                            <a href="#">K-Beauty</a>
                          </li>
                          <li>
                            <a href="#">Lip Care</a>
                          </li>
                          <li>
                            <a href="#">Lotion</a>
                          </li>
                          <li>
                            <a href="#">Makeup</a>
                          </li>
                          <li>
                            <a href="#">Makeup Brushes & Tools</a>
                          </li>
                          {/* <li>
                            <a href="#">Treatments & Serums</a>
                          </li> */}
                        </ul>
                      </div>
                      <div className="col">
                        <ul>
                          <h3>Grocery</h3>
                          <li>
                            <a href="#">Baking & Flour</a>
                          </li>
                          <li>
                            <a href="#">Butters & Spreads</a>
                          </li>
                          <li>
                            <a href="#">Coconut Oil</a>
                          </li>
                          <li>
                            <a href="#">Honey & Sweetners</a>
                          </li>
                          <li>
                            <a href="#">Nuts & Seeds</a>
                          </li>
                          <li>
                            <a href="#">Spices</a>
                          </li>
                          <li>
                            <a href="#">Tea</a>
                          </li>
                          <h3 className="heading-mt">Healthy Home</h3>
                          <h3 className="heading-mt">Baby</h3>
                          <li>
                            <a href="#">Medicine Cabinet</a>
                          </li>
                          <li>
                            <a href="#">Men's Grooming</a>
                          </li>
                          <li>
                            <a href="#">Oral Care</a>
                          </li>

                          <li>
                            <a href="#">Cleanse, Tone & Scrub</a>
                          </li>
                          <h3 className="heading-mt">Pets</h3>
                          <li>
                            <a href="#">Face Masks & Peels</a>
                          </li>
                          <li>
                            <a href="#">Gift Sets</a>
                          </li>
                          <li>
                            <a href="#">Moisturizers & Creams</a>
                          </li>
                          <li>
                            <a href="#">K-Beauty</a>
                          </li>
                          <li>
                            <a href="#">Lip Care</a>
                          </li>
                          <li>
                            <a href="#">Lotion</a>
                          </li>
                          <li>
                            <a href="#">Makeup</a>
                          </li>
                          {/* <li>
                            <a href="#">Makeup Brushes & Tools</a>
                          </li> */}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </li>

              <li className="nav-item dropdown">
                <a
                  className="nav-link active dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Brands
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
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
              <li className="nav-item dropdown">
                <a
                  className="nav-link active dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  HelpWith
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
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
              <div className="  navsectionmain ms-4">
                <div className=" nav-item navsection  ">
                  <p>
                    <a href="" className="text-decoration-none text-success">
                      New
                    </a>
                  </p>
                  |
                  <p>
                    {' '}
                    <a href="" className="text-decoration-none text-success">
                      speacials
                    </a>
                  </p>
                  |
                  <p>
                    {' '}
                    <a href="" className="text-decoration-none text-success">
                      Try
                    </a>
                  </p>
                  |
                  <p>
                    {' '}
                    <a href="" className="text-decoration-none text-success">
                      Best
                    </a>
                  </p>
                  <p>
                    <a href="" className="text-decoration-none text-success">
                      Sellers
                    </a>
                  </p>
                </div>
              </div>
            </ul>

            <form className="d-flex me-2">
              <input
                className="form-control me-3"
                type="search"
                placeholder="Search iHerb Products"
                aria-label="Search"
              />
              <button className="btn btn-outline-light btnspace " type="submit">
                Sign in
              </button>
            </form>
            <div className="bstimg">
              <Image src={cart} alt="" />
            </div>
          </div>
        </div>
      </nav>

      {/*  Mobile Screen */}
      <div
        className="navbar-mobile container-fluid "
        style={{ background: '#458500' }}
      >
        <div className="d-flex flex-grow-0 justify-content-center align-items-center">
          <div className="flex-grow-1 py-2 navbar-search">
            <i className="fa fa-search"></i>
            <input
              type="text"
              className="form-control ps-4"
              placeholder="Search WallHerb"
            />
          </div>
          <div className="navbar-icons  ">
            <Image src={vectorDollar} alt="Share Icon" />
          </div>
          <div className="navbar-icons  ">
            <Image src={vectorShare} alt="Share Icon" />
          </div>
        </div>
      </div>

      {/*  Mobile Screen */}
    </>
  )
}

export default Header
