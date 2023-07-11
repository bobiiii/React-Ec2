import React from 'react'
import spices1 from "../images/spices1.png"
import spice2 from "../images/spice2.png"
import WallHerbLive from "../components/WallHerbLive"
import sale1 from "../images/sale1.png"
import sale2 from "../images/sale2.png"
import sale3 from "../images/sale3.png"
import sale4 from "../images/sale4.png"
import sale5 from "../images/sale5.png"
import sale6 from "../images/sale6.png"
import Herblinks from '../components/Herblinks'

function HerbsandSpice() {
    return (
        <>

            <div className='mainhero'>
                <div className='hero '>
                    <div className='ms-5 '>
                        <h4> 20% off Immunne Support! </h4>
                    </div>
                    <div>
                        <button type="button" className="btn shopbtn mb-2">Shop Now</button>
                    </div>
                </div>
                <div className='cruveclr'>
                </div>

                <div className='hero2'>
                    <div className='ms-5'>
                        <h4> Up to 30% off Herbs & Splices! </h4>
                    </div>
                    <div>
                        <button type="button" className="btn shopbtn mb-2">Shop Now</button>
                    </div>
                </div>
            </div>


            <section className='container-fluid'>

                <div className='categories-top-bar'>

                    <div className='categories-dropdown'>

                        <ul className='navbar-nav  mb-2 mb-lg-0 '>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle text-dark" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Categories
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a className="dropdown-item" href="#">Action</a></li>
                                    <li><a className="dropdown-item" href="#">Another action</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li>
                        </ul>

                        <ul className='navbar-nav  mb-2 mb-lg-0'>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle text-dark" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Grocery
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a className="dropdown-item" href="#">Action</a></li>
                                    <li><a className="dropdown-item" href="#">Another action</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li>
                        </ul>
                        <a href="" className='text-decoration-none text-dark mt-2'> Herbs & Spices </a>
                    </div>

                    <div className='Herbs-Spices-heading '>
                        <h4>Herbs & Spices</h4>
                        <p className='mt-1'>484 Results (showing 1 - 48)</p>
                    </div>


                </div>

                <div className='spices1-banner-image'>
                    <img src={spices1} alt="" />
                </div>


                
                 <Herblinks></Herblinks>
                

                <div className='herbs-section-main-spacing'>


                    <div className='sidebarsection'>
                        <div className="sidebar mt-3 ">
                            <ul className="nav flex-column ">
                                <li className="nav-item  ">
                                    <a className="nav-link text-dark" href="/">
                                        <div className='d-flex'>
                                            <input className="form-control me-2 form-check-input" type="search" placeholder="Search by Category" aria-label="Search" />
                                            <h5>iHerb brand</h5>
                                        </div>
                                    </a>
                                </li>

                            </ul>
                        </div>
                        <div className="sidebar mt-3 ">
                            <h5 className="sidebar-heading ms-3">Categories</h5>
                            <hr className='line ms-3' />
                            <input className="form-control me-2" type="search" placeholder="Search by Category" aria-label="Search" />
                            <ul className="nav flex-column ">
                                <li className="nav-item ">
                                    <a className="nav-link text-dark" href="/">Orders</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-dark" href="/about">Messages</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-dark" href="/services">Account Infomations</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-dark" href="/portfolio">Address Book</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-dark" href="/contact">Payment Method</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-dark" href="/login">My Lists</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link " href="/login">show more</a>
                                </li>
                            </ul>
                        </div>
                        <div className="sidebar mt-3 ">
                            <h5 className="sidebar-heading ms-3">Brands</h5>
                            <hr className='line ms-3' />
                            <input className="form-control me-2" type="search" placeholder="Search by Category" aria-label="Search" />
                            <ul className="nav flex-column ">
                                <li className="nav-item ">
                                    <a className="nav-link text-dark" href="/">Orders</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-dark" href="/about">Messages</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-dark" href="/services">Account Infomations</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-dark" href="/portfolio">Address Book</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-dark" href="/contact">Payment Method</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-dark" href="/login">My Lists</a>
                                </li>
                            </ul>
                        </div>
                        <div className="sidebar mt-3 ">
                            <h5 className="sidebar-heading ms-3">Ratings</h5>
                            <hr className='line ms-3' />
                            <ul className="nav flex-column ">
                                <li className="nav-item ">
                                    <a className="nav-link text-dark" href="/" > <input type="text"
                                        className="form-check-input" />   <li className='fa fa-star ' style={{ color: "#FAC627" }}></li>

                                        <li className='fa fa-star ' style={{ color: "#FAC627" }}></li>
                                        <li className='fa fa-star ' style={{ color: "#FAC627" }}></li>
                                        <li className='fa fa-star ' style={{ color: "#FAC627" }}></li>
                                        <li className='fa fa-star ' style={{ color: "#FAC627" }}></li>
                                    </a>

                                </li>
                                <li className="nav-item ">
                                    <a className="nav-link text-dark" href="/" > <input type="text"
                                        className="form-check-input" />   <li className='fa fa-star ' style={{ color: "#FAC627" }}></li>

                                        <li className='fa fa-star ' style={{ color: "#FAC627" }}></li>
                                        <li className='fa fa-star ' style={{ color: "#FAC627" }}></li>
                                        <li className='fa fa-star ' style={{ color: "#FAC627" }}></li>
                                        <li className='fa fa-star ' style={{ color: "#FAC627" }}></li>
                                    </a>

                                </li>
                            </ul>
                        </div>
                        <div className="sidebar mt-3 ">
                            <h5 className="sidebar-heading ms-3">Price</h5>
                            <div className='d-flex'>
                                <input className="form-control me-2" type="search" placeholder="Min " aria-label="Search" />

                                <h5>to</h5>

                                <input className="form-control ms-2" type="search" placeholder="Max" aria-label="Search" />
                            </div>
                            <hr className='line ms-3' />
                            <ul className="nav flex-column ">
                                <li className="nav-item ">
                                    <a className="nav-link text-dark d-flex" href="/">
                                        <input type="text" className="form-check-input" />
                                        <h5 className='ms-2'>₹0 - ₹500
                                            (153)</h5>
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div className="sidebar mt-3 ">

                            <hr className='line ms-3' />
                            <ul className="nav flex-column ">
                                <li className="nav-item ">
                                    <a className="nav-link text-dark d-flex" href="/">
                                        <h5>Special Offers</h5>
                                        <li className='fa fa-plus ms-4 mt-1'></li>
                                    </a>
                                </li>
                            </ul>
                        </div>


                    </div>

                    <div className='center-section'>

                        <nav className="navbar navbar-expand-lg navbar-light bg-light ">
                            <div className="container-fluid">
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                        <li className="nav-item">
                                            <a className="nav-link active" aria-current="page" href="#">
                                                <input className="form-control me-2" type="search" placeholder="Search within" aria-label="Search" />
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link d-flex mt-1" href="#">

                                                <input type="text" className='form-check-input' />
                                                <p className='ms-2'>Hide out of stock</p>

                                            </a>
                                        </li>
                                    </ul>
                                    <form className="d-flex">
                                        <input className="form-control me-2" type="search" placeholder="Best sellers" aria-label="Search" />
                                        <input className="form-control me-2" type="search" placeholder="48" aria-label="Search" />
                                    </form>
                                </div>
                            </div>
                        </nav>


                        <div className='herb-section-first-cards mt-5 mb-5'>

                            <div class="card herb-cards-image-sec" style={{ width: '16rem' }}>
                                <img src={spice2} class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <p class="card-text">Simply Organic, Garlic Powder, 3.64 oz
                                        (103 g)</p>
                                    <div className="d-flex">
                                        <div style={{ color: "#FAC627" }}>
                                            <i className="bi bi-star" ></i>
                                            <i className="bi bi-star"></i>
                                            <i className="bi bi-star"></i>
                                            <i className="bi bi-star"></i></div>
                                        <div><span> &nbsp; 520</span></div>
                                    </div>
                                    <h6 className=" fs-cs-2">₹744.03</h6>
                                    <h6 className="fs-cs-2" style={{ color: "#F38A00" }}>Save 20% in Cart</h6>
                                </div>
                            </div>

                            <div class="card herb-cards-image-sec" style={{ width: '16rem' }}>
                                <img src={spice2} class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <p class="card-text">Simply Organic, Garlic Powder, 3.64 oz
                                        (103 g)</p>
                                    <div className="d-flex">
                                        <div style={{ color: "#FAC627" }}>
                                            <i className="bi bi-star" ></i>
                                            <i className="bi bi-star"></i>
                                            <i className="bi bi-star"></i>
                                            <i className="bi bi-star"></i></div>
                                        <div><span> &nbsp; 520</span></div>
                                    </div>
                                    <h6 className=" fs-cs-2">₹744.03</h6>
                                    <h6 className="fs-cs-2" style={{ color: "#F38A00" }}>Save 20% in Cart</h6>
                                </div>
                            </div>


                            <div class="card herb-cards-image-sec" style={{ width: '16rem' }}>
                                <img src={spice2} class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <p class="card-text">Simply Organic, Garlic Powder, 3.64 oz
                                        (103 g)</p>
                                    <div className="d-flex">
                                        <div style={{ color: "#FAC627" }}>
                                            <i className="bi bi-star" ></i>
                                            <i className="bi bi-star"></i>
                                            <i className="bi bi-star"></i>
                                            <i className="bi bi-star"></i></div>
                                        <div><span> &nbsp; 520</span></div>
                                    </div>
                                    <h6 className=" fs-cs-2">₹744.03</h6>
                                    <h6 className="fs-cs-2" style={{ color: "#F38A00" }}>Save 20% in Cart</h6>
                                </div>
                            </div>


                            <div class="card herb-cards-image-sec" style={{ width: '16rem' }}>
                                <img src={spice2} class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <p class="card-text">Simply Organic, Garlic Powder, 3.64 oz
                                        (103 g)</p>
                                    <div className="d-flex">
                                        <div style={{ color: "#FAC627" }}>
                                            <i className="bi bi-star" ></i>
                                            <i className="bi bi-star"></i>
                                            <i className="bi bi-star"></i>
                                            <i className="bi bi-star"></i></div>
                                        <div><span> &nbsp; 520</span></div>
                                    </div>
                                    <h6 className=" fs-cs-2">₹744.03</h6>
                                    <h6 className="fs-cs-2" style={{ color: "#F38A00" }}>Save 20% in Cart</h6>
                                </div>
                            </div>











                        </div>



                        <div className='Get-the-latest-deals-section'>

                            <div className='Get-the-latest-deals-section-text mt-5 mb-5'>
                                <div>
                                <h4>Get the latest deals</h4>
                                </div>
                                <div className=' srch-btn'>
                                <input class="form-control " type="search" placeholder="Search" aria-label="Search" />
                                <a href="" className='btn btn' style={{background:"#458500",color:"white"}}> Subscribe</a>
                                </div>
                                <div>
                                <p>Your email will only be used for iHerb communications. You can
                                    unsubscribe at any time. For more information, see our Privacy
                                    Policy.</p>
                                    </div>
                            </div>


                        </div>



                    </div>

                </div>



            </section>
<WallHerbLive></WallHerbLive>
            

<div className='sale-last-section  mt-5' style={{ background: " #F5F5F5" }}>
                        <br />
                        <div className="card " style={{ width: "12rem", background: " #F5F5F5", border: "none" }}>
                            <img src={sale1} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <p className="card-text text-center" style={{ fontSize: "13px" }}>The Best Natural Remedies for</p>
                            </div>
                        </div>
                        <div className="card " style={{ width: "12rem", background: " #F5F5F5", border: "none" }}>
                            <img src={sale2} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <p className="card-text text-center" style={{ fontSize: "13px" }}>The Best Foods and Supplements for Natural </p>
                            </div>
                        </div>
                        <div className="card " style={{ width: "12rem", background: " #F5F5F5", border: "none" }}>
                            <img src={sale3} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <p className="card-text text-center" style={{ fontSize: "13px" }}>Psychodermatology: Why
                                    Researchers Think the Mind-
                                </p>
                            </div>
                        </div>
                        <div className="card " style={{ width: "12rem", background: " #F5F5F5", border: "none" }}>
                            <img src={sale4} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <p className="card-text text-center" style={{ fontSize: "13px" }}>Stress-Related Hair Loss +
                                    Natural Solutions to Promote</p>
                            </div>
                        </div>
                        <div className="card " style={{ width: "12rem", background: " #F5F5F5", border: "none" }}>
                            <img src={sale5} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <p className="card-text text-center" style={{ fontSize: "13px" }}>Dry brushing: What It Is +
                                    Unexpected Health </p>
                            </div>
                        </div>
                        <div className="card " style={{ width: "12rem", background: " #F5F5F5", border: "none" }}>
                            <img src={sale6} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <p className="card-text text-center" style={{ fontSize: "13px" }}>How Spices Combat
                                    Inflammation and </p>
                            </div>
                        </div> 
                                             

                    </div>


        </>
    )
}

export default HerbsandSpice