
import userLogo from "../images/userlogo.png"
import Orders from "../images/dashboard/Vec1.png"
import SaleOffer from "../images/dashboard/Vec3.png"
import MyLIst from "../images/dashboard/Vec4.png"
import Affiliate from "../images/dashboard/Vec5.png"
import Address from "../images/dashboard/Vec6.png"
import { slide1 } from "../utils/data"
// import SaleOffer from "../images/dashboard/vector6.png"
// import Carouselcards from "./Carouselcards"
// import share from "../images/share.png"

function Dashboard() {
    return (
        <>

            <section className='d-grid container-fluid dashboardsection '>
                <div className="row">
                    <div className='col-sm-12 col-md-3 col-lg-2   sidebarsection '>
                        <div className="sidebar mt-3 ">
                            <h5 className="sidebar-heading ms-3">My Account</h5>
                            <hr className='line ms-3' />
                            <h5 className="sidebar-heading ms-3" >Dashboard</h5>
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
                            <h5 className="sidebar-heading ms-3">Credits & Savings</h5>
                            <hr className='line ms-3' />
                            <ul className="nav flex-column ">
                                <li className="nav-item ">
                                    <a className="nav-link text-dark" href="/">My Rewards</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-dark" href="/about">Super Rewards</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-dark" href="/services">Store Credits</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-dark" href="/portfolio">Sales & Offers</a>
                                </li>
                            </ul>
                        </div>
                        <div className="sidebar mt-3 ">
                            <h5 className="sidebar-heading ms-3">My Activity</h5>
                            <hr className='line ms-3' />
                            <ul className="nav flex-column ">
                                <li className="nav-item ">
                                    <a className="nav-link text-dark" href="/">My Page</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-dark" href="/about">My Reviews</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-dark" href="/services">My Questions</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-dark" href="/portfolio">My Answers</a>
                                </li>
                            </ul>
                        </div>
                        <div className="sidebar mt-3 ">
                            <h5 className="sidebar-heading ms-3">Settings</h5>
                            <hr className='line ms-3' />
                            <ul className="nav flex-column ">
                                <li className="nav-item ">
                                    <a className="nav-link text-dark" href="/">Communications</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-dark" href="/about">2-Step Verification</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="d-none  d-md-block col-md-9 col-lg-10  col-md-9 col-lg-10   mt-3 dashboard-main ">
                       {/* user details */}
                       
                        <div className=" my-3 d-flex justify-content-between" style={{height: "15vh"}}>
                            <div className="d-flex align-items-center">
                                <img src={userLogo} className="" style={{ width: "5rem", height: "4rem" }} />
                                <div className="d-flex flex-column">
                                    <h5 className="fs-cs-3 mb-0">Hey babar@gmail.com</h5>
                                    <span>Customer since 2015</span>
                                </div>
                            </div>
                            <div className="dashboard-reward ps-2 d-flex flex-column w-50 border">
                                <span className="fw-bold">Rewards Available</span>
                                <span className="fw-bold">$0.00</span>
                                <span>Rewards Code: KhI7758</span>
                            </div>
                        </div>
                    
                            {/* Skills box */}
                        <div className="d-grid  container-fluid  my-3 "  style={{height: "30vh"}}>
                            <div className="row g-2 ">

                                <div className="col-lg-4  gap-2  col-md-5  border  rounded-2 d-flex align-items-center lh-1 py-2 ">
                                    <img src={Orders} alt="orders" className=" h-50 mx-1" />
                                    <div className="ms-1">
                                        <h5 className="mb-0 " >Orders</h5>
                                        <span className="m-0 p-0">Track your order progress, request returns,
                                            reorder, or write reviews.
                                        </span>
                                    </div>

                                </div>
                                <div className="col-lg-4 col-md-5 border  rounded-2 d-flex align-items-center lh-1 py-2">
                                    <img src={SaleOffer} alt="orders" className="h-50 mx-1" />
                                    <div className="ms-1">
                                        <h5 className="mb-0 " >Sales & Offers</h5>
                                        <span className="m-0 p-0">Shop all of our promotional offers.
                                        </span>
                                    </div>


                                </div>
                                <div className="col-lg-4 col-md-5 border  rounded-2 d-flex align-items-center lh-1 py-2">
                                    <img src={MyLIst} alt="orders" className="h-50 mx-1" />
                                    <div className="ms-1">
                                        <h5 className="mb-0 " >My lists</h5>
                                        <span className="m-0 p-0">Add your favorite items to keep track of
                                            availability and purchase later!
                                        </span>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4 border  rounded-2 d-flex align-items-center lh-1 py-2">

                                    <img src={Affiliate} alt="orders" className="h-50 mx-1" />
                                    <div className="ms-1">
                                        <h5 className="mb-0 " >Affiliate Program</h5>
                                        <span className="m-0 p-0">Become an iHerb affiliate and earn when you
                                            share!
                                        </span>
                                    </div>

                                </div>
                                <div className="col-lg-4 col-md-4 border  rounded-2 d-flex align-items-center lh-1 py-2">
                                    <img src={Address} alt="orders" className="h-50 mx-1" />
                                    <div className="ms-1">
                                        <h5 className="mb-0 " >Address Book</h5>
                                        <span className="m-0 p-0">Manage your delivery address(es) in one
                                            convenient place.
                                        </span>
                                    </div>

                                </div>
                            </div>

                        </div>

                        {/* Recommeded  for you*/}
                        <div className="p-2 mt-2 ms-2 "  >
                            <h3 className="fs-cs-3 ">Recommended For You</h3>
                        
                        

                        {/* carousel controls */}
                        <div id="carouselExampleControlsSS" className="carousel carousel-dark slide" data-bs-interval="false" data-bs-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="card-wrapper   container-fluid d-flex  ">
                  {slide1.map((item, index) => {
                    return (<>
                      <div className="card justify-content-center h-50 card-cont" key={index} >
                        <img src={item.img} className="align-self-center h-50" alt="..." />
                        
                      </div>
    
                    </>)
                  })}
    
    
    
                </div>
              </div>
              

              <div className="carousel-item ">
                <div className="card-wrapper   container-fluid d-flex  ">
                  {slide1.map((item, index) => {
                    return (<>
                      <div className="card justify-content-center h-50 card-cont" key={index} >
                        <img src={item.img} className="align-self-center h-50" alt="..." />
                        
                      </div>
    
                    </>)
                  })}
    
    
    
                </div>
              </div>
              

              <div className="carousel-item ">
                <div className="card-wrapper   container-fluid d-flex  ">
                  {slide1.map((item, index) => {
                    return (<>
                      <div className="card justify-content-center h-50 card-cont" key={index} >
                        <img src={item.img} className="align-self-center h-50" alt="..." />
                        
                      </div>
    
                    </>)
                  })}
    
    
    
                </div>
              </div>
              
              
              <button className="carousel-control-prev  " type="button" data-bs-target="#carouselExampleControlsSS" data-bs-slide="prev">
                <span className="carousel-control-prev-icon arrow-carousel   " aria-hidden="true"></span>
                <span className="visually-hidden  ">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControlsSS" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
          </div>







                        
                    </div>
                </div>
            </section>


        </>
    )
}

export default Dashboard