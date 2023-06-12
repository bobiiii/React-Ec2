import React from 'react'
import userlogo from "../images/userlogo.png"
import share from "../images/share.png"

function Dashboard() {
    return (
        <>
            <section className='container-fluid dashboardsection'>
                <div className='sidebarsection'>
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
                <div className='container-fluid'>
                    <div className='mt-4 '>
                        <a href="" className='text-decoration-none text-secondary'>My Account </a>
                        <a href="" className='ms-1 text-decoration-none text-secondary'> Dashboard </a>
                    </div>
                    <div className='dashusercard mt-5 '>
                        <div className="container dashusercards">
                            <div className="row">
                                <div className="col">
                                    <div className="dashuser">
                                        <img src={userlogo} alt="" />
                                        <div className='ms-2 mt-2'>
                                            <p className='Hey'>Hey Adetosin2000@gmail... <div className='Customer-since'>Customer since May 23 2023</div> </p>
                                        </div>
                                    </div>
                                </div>
                            </div>


                        </div>
                        <div className='dashusercards2 '>
                            <p className='ms-2'>Rewards available <div className='dashprice '>$0.00</div> <div>Rewards Code:
                                KZH0402 <span className='dashcardshearbtn'>  </span> </div></p>
                            <div className='mt-5 me-1'>
                                <a href="" className='text-decoration-none '>View details</a>
                            </div>
                        </div>
                    </div>
                    
                    <div className=' container-fluid  salescard mt-5'>
                        <div className="cookie-card">
                            <span className="title">🍪 Orders</span>
                            <p className="description ms-4 mb-2">Track your order progress, request returns,
                                reorder, or write reviews.  </p>
                        </div>
                        <div className="cookie-card">
                            <span className="title">🍪 Orders</span>
                            <p className="description ms-4 mb-2">Track your order progress, request returns,
                                reorder, or write reviews.  </p>
                        </div>
                        <div className="cookie-card">
                            <span className="title">🍪 Orders</span>
                            <p className="description ms-4 mb-2">Track your order progress, request returns,
                                reorder, or write reviews.  </p>
                        </div>
                        <div className="cookie-card">
                            <span className="title">🍪 Orders</span>
                            <p className="description ms-4 mb-2">Track your order progress, request returns,
                                reorder, or write reviews.  </p>
                        </div>
                        
                    </div>


                </div>
            </section>
        </>
    )
}

export default Dashboard