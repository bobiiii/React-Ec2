
import logoImage from "../images/logo.jpg"
import cart from "../images/cart.png"
// import dollar from "../images/dollar-sign.png"
import vectorShare from "../images/shareVector.svg"
import vectorDollar from "../images/dollarVector.svg"

function Header() {
  return (
    <>

      <nav className="navbar-dektop navbar  navbar-expand-lg navbar-dark  navbackground">
        <div className="container-fluid">
          <img src={logoImage} alt="" />
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-3 ">

              <li className="nav-item dropdown ">
                <a className="nav-link active dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Shop
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a className="dropdown-item" href="#">Action</a></li>
                  <li><a className="dropdown-item" href="#">Another action</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link active dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Brands
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a className="dropdown-item" href="#">Action</a></li>
                  <li><a className="dropdown-item" href="#">Another action</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link active dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  HelpWith
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a className="dropdown-item" href="#">Action</a></li>
                  <li><a className="dropdown-item" href="#">Another action</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li>
              <div className='  navsectionmain ms-4'>
                <div className=" nav-item navsection  ">
                  <p><a href="" className='text-decoration-none text-success'>New</a></p>
                  |
                  <p> <a href="" className='text-decoration-none text-success'>speacials</a></p>
                  |
                  <p> <a href="" className='text-decoration-none text-success'>Try</a></p>
                  |
                  <p> <a href="" className='text-decoration-none text-success'>Best</a></p>
                  <p><a href="" className='text-decoration-none text-success' >Sellers</a></p>
                </div>

              </div>

            </ul>

            <form className="d-flex me-2">
              <input className="form-control me-3" type="search" placeholder="Search iHerb Products" aria-label="Search" />
              <button className="btn btn-outline-light btnspace " type="submit">Sign in</button>
            </form>
            <div className="bstimg">
              <img src={cart} alt="" />
            </div>
          </div>
        </div>
      </nav>


      {/*  Mobile Screen */}
      <div className='navbar-mobile container-fluid ' style={{ background: "#458500" }}>
        <div className='d-flex flex-grow-0 justify-content-center align-items-center'>
          <div className='flex-grow-1 py-2 navbar-search'>
            <i className="fa fa-search"></i>
            <input type="text" className="form-control ps-4" placeholder="Search WallHerb" />
          </div>
          <div className='navbar-icons  '><img src={vectorDollar} alt="Share Icon" />
          </div>
          <div className='navbar-icons  '><img src={vectorShare} alt="Share Icon" />
          </div>


        </div>
      </div>

      {/*  Mobile Screen */}



    </>
  )
}

export default Header