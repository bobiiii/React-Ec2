import React from 'react'

function Secsidebar() {
  return (
    <>
      <div className='col-sm-12 col-md-3 col-lg-2   secure-sidebarsection '>
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
    </>
  )
}

export default Secsidebar