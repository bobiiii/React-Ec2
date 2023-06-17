
import userLogo from "../images/userlogo.png"
import Orders from "../images/dashboard/vector2.png"
import SaleOffer from "../images/dashboard/vector3.png"
import MyLIst from "../images/dashboard/vector4.png"
import Affiliate from "../images/dashboard/vector5.png"
import Address from "../images/dashboard/vector6.png"
// import SaleOffer from "../images/dashboard/vector6.png"
// import Carouselcards from "./Carouselcards"
// import share from "../images/share.png"

function Dashboard() {
    return (
        <>
        
            <section className='d-grid container-fluid dashboardsection '>
               <div className="row">
                <div className='col-lg-2 col-md-3 col-sm-12   sidebarsection '>
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
                <div className="d-sm-none d-md-block col-lg-10 col-md-9 mt-3   dashboard-main "> 
                <div className="mt-2 d-flex justify-content-between">
                    <div className="d-flex align-items-center">
                        <img src={userLogo} className="" style={{width: "5rem",height: "4rem"}} />
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

                <div className="d-grid mt-3 ">
                    <div className="row">
                        <div className="col-lg-4 col-md-6  my-2  d-flex align-items-center p-2 border rounded-3">
                            <img src={Orders} alt="orders" className="w-25 h-50 px-2"/>
                            <div className="ms-1">
                                <h5 className="mb-0 " >Orders</h5>
                                <span className="m-0 p-0">Track your order progress, request returns,
reorder, or write reviews.
                                </span>
                                </div>    
                            </div>
                            <div className="col-lg-4 col-md-6  my-2  d-flex align-items-center p-2 border rounded-3">
                            <img src={SaleOffer} alt="orders" className="w-25 h-50 px-2"/>
                            <div className="ms-1">
                                <h5 className="mb-0 " >Sales & Offers</h5>
                                <span className="m-0 p-0">Shop all of our promotional offers.
                                </span>
                                </div>    
                            </div>
                            <div className="col-lg-4 col-md-6  my-2  d-flex align-items-center p-2 border rounded-3">
                            <img src={MyLIst} alt="orders" className="w-25 h-50 px-2"/>
                            <div className="ms-1">
                                <h5 className="mb-0 " >My lists</h5>
                                <span className="m-0 p-0">Add your favorite items to keep track of
availability and purchase later!
                                </span>
                                </div>    
                            </div>
                            <div className="col-lg-4 col-md-6  my-2  d-flex align-items-center p-2 border rounded-3">
                            <img src={Affiliate} alt="orders" className="w-25 h-50 px-2"/>
                            <div className="ms-1">
                                <h5 className="mb-0 " >Affiliate Program</h5>
                                <span className="m-0 p-0">Become an iHerb affiliate and earn when you
share!
                                </span>
                                </div>    
                            </div>
                            <div className="col-lg-4 col-md-6  my-2  d-flex align-items-center p-2 border rounded-3">
                            <img src={Address} alt="orders" className="w-25 h-50 px-2"/>
                            <div className="ms-1">
                                <h5 className="mb-0 " >Address Book</h5>
                                <span className="m-0 p-0">Manage your delivery address(es) in one
convenient place.
                                </span>
                                </div>    
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