import Slider from "react-slick";
import { slide1 } from "../utils/data"

import profilePic from "../images/dashboard/profilePic.svg"
import shareIco from "../images/dashboard/shareIco.svg"
import Orders from "../images/dashboard/Vec1.png"
import SaleOffer from "../images/dashboard/Vec3.png"
import MyLIst from "../images/dashboard/Vec4.png"
import Affiliate from "../images/dashboard/Vec5.png"
import Address from "../images/dashboard/Vec6.png"
import home from "../images/home.svg"
import srch from "../images/srch.svg"
import bas from "../images/bas.svg"
import pr from "../images/pr.svg"
import blgspace from "../images/blgspace.png"
import mbdash1 from "../images/mbdash1.svg"
import mbdash2 from "../images/mbdash2.svg"
import mbdash3 from "../images/mbdash3.svg"
import mbdash4 from "../images/mbdash4.svg"
import mbdash5 from "../images/mbdash5.svg"
import mbdash6 from "../images/mbdash6.svg"
import mbdash7 from "../images/mbdash7.svg"
import Image from "next/image";
// import SaleOffer from "../images/dashboard/vector6.png"
// import Carouselcards from "./Carouselcards"
// import share from "../images/share.png"

function Dashboard() {
    const settings = {
    
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        swipeToSlide: true,
        arrows: true,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 6,
              swipeToSlide: true,
              infinite: true,
              
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1
            }
          }
        ]
      };
    return (
        <>

            <section className='d-grid container-fluid dashboardsection  '>
                <div className="row  vw-100" >
                    <div className=' d-none d-sm-block col-sm-3 col-md-2   sidebarsection '>
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
                    
                    <div className="d-none d-sm-block  col-sm-9 col-md-10  mt-3   ">
                        {/* user details */}

                        <div className=" my-3 d-flex  justify-content-between align-items-center" style={{ height: "15vh" }}>
                            <div className="d-flex align-items-center">
                                <Image src={profilePic} className="" style={{ width: "5rem", height: "4rem" }} />
                                <div className="d-flex flex-column">
                                    <h5 className="fs-cs-3 mb-0">Hey babar@gmail.com</h5>
                                    <span>Customer since 2015</span>
                                </div>
                            </div>
                            <div className="dashboard-reward ps-2 d-flex flex-column w-25  border ">
                                <span className="fw-bold">Rewards Available</span>
                                <span className="fw-bold">$0.00</span>
                                <span>Rewards Code: KhI7758</span>
                            </div>
                        </div>

                        {/* Skills box */}
                        <div className="d-grid container-fluid  my-3 " >
                            <div className="row g-2 justify-content-center ">

                                <div className="col-lg-4  gap-2  col-md-5  border  rounded-2 d-flex align-items-center lh-1 py-2 ">
                                    <Image src={Orders} alt="orders" className=" h-50 mx-1" />
                                    <div className="ms-1">
                                        <h5 className="mb-0 fs-cs-2" >Orders</h5>
                                        <span className="m-0 p-0 ">Track your order progress, request returns,
                                            reorder, or write reviews.
                                        </span>
                                    </div>

                                </div>
                                <div className="col-lg-4 col-md-5 border  rounded-2 d-flex align-items-center lh-1 py-2">
                                    <Image src={SaleOffer} alt="orders" className="h-50 mx-1" />
                                    <div className="ms-1">
                                        <h5 className="mb-0 fs-cs-2" >Sales & Offers</h5>
                                        <span className="m-0 p-0">Shop all of our promotional offers.
                                        </span>
                                    </div>


                                </div>
                                <div className="col-lg-4 col-md-5 border  rounded-2 d-flex align-items-center lh-1 py-2">
                                    <Image src={MyLIst} alt="orders" className="h-50 mx-1" />
                                    <div className="ms-1">
                                        <h5 className="mb-0 fs-cs-2" >My lists</h5>
                                        <span className="m-0 p-0">Add your favorite items to keep track of
                                            availability and purchase later!
                                        </span>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4 border  rounded-2 d-flex align-items-center lh-1 py-2">

                                    <Image src={Affiliate} alt="orders" className="h-50 mx-1" />
                                    <div className="ms-1">
                                        <h5 className="mb-0 fs-cs-2" >Affiliate Program</h5>
                                        <span className="m-0 p-0">Become an iHerb affiliate and earn when you
                                            share!
                                        </span>
                                    </div>

                                </div>
                                <div className="col-lg-4 col-md-4 border  rounded-2 d-flex align-items-center lh-1 py-2">
                                    <Image src={Address} alt="orders" className="h-50 mx-1" />
                                    <div className="ms-1">
                                        <h5 className="mb-0 fs-cs-2" >Address Book</h5>
                                        <span className="m-0 p-0">Manage your delivery address(es) in one
                                            convenient place.
                                        </span>
                                    </div>

                                </div>
                            </div>

                        </div>

                        {/* Recommeded  for you*/}
                        <div className="container p-2 mt-2 ms-2  "  >
                            <h3 className="fs-cs-3 ">Recommended For You</h3>

                            {/* carousel controls */}
                            <Slider {...settings}  className="w-75 mx-auto " >
     
     {slide1.map((item, index)=>{
       return(<div key={index} className="px-2  ">
     
         <div className="card w-100   " >
 <Image src={item.img} className="card-img-top pb-1 w-75 mx-auto pt-3" alt="..."/>
 
</div>
       
       </div>)
     })}
     </Slider>   
                            
                            
     
        






                        </div>
                  








                    </div>
                </div>
            </section>




            {/* For Mobile */}

            <section className=" d-block d-sm-none">
                
                
                
                {/* Dashboard Account Detail */}
                <div className="d-flex align-items-center p-2 pb-0 mt-2">
                                <Image src={profilePic} className="" style={{ width: "5rem", height: "4rem" }} />
                                <div className="d-flex flex-column">
                                    <h5 className="fs-cs-3 mb-0">Hey</h5>
                                    <div className="d-flex">
                                        
                                    <span>Rewards Code: </span>
                                    <span className="fw-bold">&nbsp; KZH0402</span>
                                    <Image src={shareIco} className="ms-1" alt="share"/> 
                                    </div>
                                </div>
                            </div>

                
                
                
                
                
                {/* Quick Links Heading */}
                <div className="py-2"> 
                <h5 className=" container ms-2 my-2" style={{
                    fontFamily: 'Lato',
                    fontStyle: 'normal',
                    fontWeight: 700,
                    fontSize: '16px',
                    
                }}>Quick Links</h5>
                </div>

                <div className='faq-section '>
                    <div className="accordion w-100" id="basicAccordion">


                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingSeventeen">
                                <button
                                    className="accordion-button collapsed"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#basicAccordionCollapseSeventeen"
                                    aria-expanded="false"
                                    aria-controls="collapseSeventeen"
                                >
                                    <div className="d-flex align-items-center">
                                        <Image
                                            src={mbdash1}
                                            alt="Image"
                                            className="mr-2"
                                            style={{ maxHeight: '20px', width: 'auto' }}
                                        />
                                        <div>
                                            <h6
                                                className="faq-section-one-for-mobile-text-size ms-2"
                                                style={{ marginBottom: '0', marginTop: '0' }}
                                            >
                                                Orders
                                            </h6>
                                        </div>
                                    </div>
                                </button>
                            </h2>
                            <div
                                id="basicAccordionCollapseSeventeen"
                                className="accordion-collapse collapse"
                                aria-labelledby="headingSeventeen"
                                data-bs-parent="#basicAccordion"
                            >
                                <div className="accordion-body">
                                    <a href="" className="text-decoration-none text-dark">
                                        hello
                                    </a>
                                </div>
                            </div>
                        </div>




                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingEighteen">
                                <button
                                    className="accordion-button collapsed"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#basicAccordionCollapseEighteen"
                                    aria-expanded="false"
                                    aria-controls="collapseEighteen"
                                >
                                    <div className="d-flex align-items-center">
                                        <Image
                                            src={mbdash2}
                                            alt="Image"
                                            className="mr-2"
                                            style={{ maxHeight: '20px', width: 'auto' }}
                                        />
                                        <div>
                                            <h6
                                                className="faq-section-one-for-mobile-text-size ms-2"
                                                style={{ marginBottom: '0', marginTop: '0' }}
                                            >
                                                My Lists
                                            </h6>
                                        </div>
                                    </div>
                                </button>
                            </h2>
                            <div
                                id="basicAccordionCollapseEighteen"
                                className="accordion-collapse collapse"
                                aria-labelledby="headingEighteen"
                                data-bs-parent="#basicAccordion"
                            >
                                <div className="accordion-body">
                                    <a href="" className="text-decoration-none text-dark">
                                        hello
                                    </a>
                                </div>
                            </div>
                        </div>




                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingNineteen">
                                <button
                                    className="accordion-button collapsed"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#basicAccordionCollapseNineteen"
                                    aria-expanded="false"
                                    aria-controls="collapseNineteen"
                                >
                                    <div className="d-flex align-items-center">
                                        <Image
                                            src={mbdash3}
                                            alt="Image"
                                            className="mr-2"
                                            style={{ maxHeight: '20px', width: 'auto' }}
                                        />
                                        <div>
                                            <h6
                                                className="faq-section-one-for-mobile-text-size ms-2"
                                                style={{ marginBottom: '0', marginTop: '0' }}
                                            >
                                                Messages
                                            </h6>
                                        </div>
                                    </div>
                                </button>
                            </h2>
                            <div
                                id="basicAccordionCollapseNineteen"
                                className="accordion-collapse collapse"
                                aria-labelledby="headingNineteen"
                                data-bs-parent="#basicAccordion"
                            >
                                <div className="accordion-body">
                                    <a href="" className="text-decoration-none text-dark">
                                        hello
                                    </a>
                                </div>
                            </div>
                        </div>





                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingTwenty">
                                <button
                                    className="accordion-button collapsed"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#basicAccordionCollapseTwenty"
                                    aria-expanded="false"
                                    aria-controls="collapseTwenty"
                                >
                                    <div className="d-flex align-items-center">
                                        <Image
                                            src={mbdash4}
                                            alt="Image"
                                            className="mr-2"
                                            style={{ maxHeight: '20px', width: 'auto' }}
                                        />
                                        <div>
                                            <h6
                                                className="faq-section-one-for-mobile-text-size ms-2"
                                                style={{ marginBottom: '0', marginTop: '0' }}
                                            >
                                                Customer Service
                                            </h6>
                                        </div>
                                    </div>
                                </button>
                            </h2>
                            <div
                                id="basicAccordionCollapseTwenty"
                                className="accordion-collapse collapse"
                                aria-labelledby="headingTwenty"
                                data-bs-parent="#basicAccordion"
                            >
                                <div className="accordion-body">
                                    <a href="" className="text-decoration-none text-dark">
                                        hello
                                    </a>
                                </div>
                            </div>
                        </div>





                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingTwentyOne">
                                <button
                                    className="accordion-button collapsed"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#basicAccordionCollapseTwentyOne"
                                    aria-expanded="false"
                                    aria-controls="collapseTwentyOne"
                                >
                                    <div className="d-flex align-items-center">
                                        <Image
                                            src={mbdash5}
                                            alt="Image"
                                            className="mr-2"
                                            style={{ maxHeight: '20px', width: 'auto' }}
                                        />
                                        <div>
                                            <h6
                                                className="faq-section-one-for-mobile-text-size ms-2"
                                                style={{ marginBottom: '0', marginTop: '0' }}
                                            >
                                                Language/Currency
                                            </h6>
                                        </div>
                                    </div>
                                </button>
                            </h2>
                            <div
                                id="basicAccordionCollapseTwentyOne"
                                className="accordion-collapse collapse"
                                aria-labelledby="headingTwentyOne"
                                data-bs-parent="#basicAccordion"
                            >
                                <div className="accordion-body">
                                    <a href="" className="text-decoration-none text-dark">
                                        hello
                                    </a>
                                </div>
                            </div>
                        </div>





                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingTwentyTwo">
                                <button
                                    className="accordion-button collapsed"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#basicAccordionCollapseTwentyTwo"
                                    aria-expanded="false"
                                    aria-controls="collapseTwentyTwo"
                                >
                                    <div className="d-flex align-items-center">
                                        <Image
                                            src={mbdash6}
                                            alt="Image"
                                            className="mr-2"
                                            style={{ maxHeight: '20px', width: 'auto' }}
                                        />
                                        <div>
                                            <h6
                                                className="faq-section-one-for-mobile-text-size ms-2"
                                                style={{ marginBottom: '0', marginTop: '0' }}
                                            >
                                                Change Password
                                            </h6>
                                        </div>
                                    </div>
                                </button>
                            </h2>
                            <div
                                id="basicAccordionCollapseTwentyTwo"
                                className="accordion-collapse collapse"
                                aria-labelledby="headingTwentyTwo"
                                data-bs-parent="#basicAccordion"
                            >
                                <div className="accordion-body">
                                    <a href="" className="text-decoration-none text-dark">
                                        hello
                                    </a>
                                </div>
                            </div>
                        </div>






                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingTwentyThree">
                                <button
                                    className="accordion-button collapsed"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#basicAccordionCollapseTwentyThree"
                                    aria-expanded="false"
                                    aria-controls="collapseTwentyThree"
                                >
                                    <div className="d-flex align-items-center">
                                        <Image
                                            src={mbdash7}
                                            alt="Image"
                                            className="mr-2"
                                            style={{ maxHeight: '20px', width: 'auto' }}
                                        />
                                        <div>
                                            <h6
                                                className="faq-section-one-for-mobile-text-size ms-2"
                                                style={{ marginBottom: '0', marginTop: '0' }}
                                            >
                                                Communication Preferences
                                            </h6>
                                        </div>
                                    </div>
                                </button>
                            </h2>
                            <div
                                id="basicAccordionCollapseTwentyThree"
                                className="accordion-collapse collapse"
                                aria-labelledby="headingTwentyThree"
                                data-bs-parent="#basicAccordion"
                            >
                                <div className="accordion-body">
                                    <a href="" className="text-decoration-none text-dark">
                                        hello
                                    </a>
                                </div>
                            </div>
                        </div>





                        <div style={{ width: "100%" }}>
                            <Image src={blgspace} alt="" />
                        </div>



                        <h5 className=" container mt-4 ms-2" style={{
                            fontFamily: 'Lato',
                            fontStyle: 'normal',
                            fontWeight: 700,
                            fontSize: '16px',
                            lineHeight: '24px',
                        }}>My Account</h5>



                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingTwentyFour">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#basicAccordionCollapseTwentyFour" aria-expanded="false" aria-controls="collapseTwentyFour">
                                    <h6 className='faq-section-one-for-mobile-text-size'>Profile</h6>
                                </button>
                            </h2>
                            <div id="basicAccordionCollapseTwentyFour" className="accordion-collapse collapse" aria-labelledby="headingTwentyFour"
                                data-bs-parent="#basicAccordion">
                                <div className="accordion-body">
                                    <a href="" className='text-decoration-none text-dark'>hello</a>
                                </div>
                            </div>
                        </div>


                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingTwentyFive">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#basicAccordionCollapseTwentyFive" aria-expanded="false" aria-controls="collapseTwentyFive">
                                    <h6 className='faq-section-one-for-mobile-text-size'>My Reviews</h6>
                                </button>
                            </h2>
                            <div id="basicAccordionCollapseTwentyFive" className="accordion-collapse collapse" aria-labelledby="headingTwentyFive"
                                data-bs-parent="#basicAccordion">
                                <div className="accordion-body">
                                    <a href="" className='text-decoration-none text-dark'>heello</a>
                                </div>
                            </div>
                        </div>


                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingTwentySix">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#basicAccordionCollapseTwentySix" aria-expanded="false" aria-controls="basicAccordionCollapseTwentySix">
                                    <h6 className='faq-section-one-for-mobile-text-size'>My Page</h6>
                                </button>
                            </h2>
                            <div id="basicAccordionCollapseTwentySix" className="accordion-collapse collapse" aria-labelledby="headingTwentySix"
                                data-bs-parent="#basicAccordion">
                                <div className="accordion-body">
                                    <a href="" className='text-decoration-none text-dark'>heello</a>
                                </div>
                            </div>
                        </div>



                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingTwentySeven">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#basicAccordionCollapseTwentySeven" aria-expanded="false" aria-controls="collapseTwentySeven">
                                    <h6 className='faq-section-one-for-mobile-text-size'>My Rewards</h6>
                                </button>
                            </h2>
                            <div id="basicAccordionCollapseTwentySeven" className="accordion-collapse collapse" aria-labelledby="headingTwentySeven"
                                data-bs-parent="#basicAccordion">
                                <div className="accordion-body">
                                    <a href="" className='text-decoration-none text-dark'>Super Rewards</a>
                                </div>
                            </div>
                        </div>



                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingTwentyEight">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#basicAccordionCollapseTwentyEight" aria-expanded="false" aria-controls="collapseTwentyEight">
                                    <h6 className='faq-section-one-for-mobile-text-size'>Store Credits</h6>
                                </button>
                            </h2>
                            <div id="basicAccordionCollapseTwentyEight" className="accordion-collapse collapse" aria-labelledby="headingTwentyEight"
                                data-bs-parent="#basicAccordion">
                                <div className="accordion-body">
                                    <a href="" className='text-decoration-none text-dark'>heello</a>
                                </div>
                            </div>
                        </div>



                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingTwentyNine">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#basicAccordionCollapseTwentyNine" aria-expanded="false" aria-controls="collapseTwentyNine">
                                    <h6 className='faq-section-one-for-mobile-text-size'>Super Rewards</h6>
                                </button>
                            </h2>
                            <div id="basicAccordionCollapseTwentyNine" className="accordion-collapse collapse" aria-labelledby="headingTwentyNine"
                                data-bs-parent="#basicAccordion">
                                <div className="accordion-body">
                                    <a href="" className='text-decoration-none text-dark'>heello</a>
                                </div>
                            </div>
                        </div>


                        <div style={{ width: "100%" }}>
                            <Image src={blgspace} alt="" />
                        </div>


                        <h5 className=" container ms-2 mt-4" style={{
                            fontFamily: 'Lato',
                            fontStyle: 'normal',
                            fontWeight: 700,
                            fontSize: '16px',
                            lineHeight: '24px',
                        }}>Information</h5>


                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingThirty">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#basicAccordionCollapseThirty" aria-expanded="false" aria-controls="collapseThirty">
                                    <h6 className='faq-section-one-for-mobile-text-size'>About iHerb</h6>
                                </button>
                            </h2>
                            <div id="basicAccordionCollapseThirty" className="accordion-collapse collapse" aria-labelledby="headingThirty"
                                data-bs-parent="#basicAccordion">
                                <div className="accordion-body">
                                    <a href="" className='text-decoration-none text-dark'>hello</a>
                                </div>
                            </div>
                        </div>


                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingThirtyTwo">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#basicAccordionCollapseThirtyTwo" aria-expanded="false" aria-controls="collapseThirtyTwo">
                                    <h6 className='faq-section-one-for-mobile-text-size'>Rewards Program</h6>
                                </button>
                            </h2>
                            <div id="basicAccordionCollapseThirtyTwo" className="accordion-collapse collapse" aria-labelledby="headingThirtyTwo"
                                data-bs-parent="#basicAccordion">
                                <div className="accordion-body">
                                    <a href="" className='text-decoration-none text-dark'>heello</a>
                                </div>
                            </div>
                        </div>


                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingThirtyThree">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#basicAccordionCollapseThirtyThree" aria-expanded="false" aria-controls="basicAccordionCollapseThirtyThree">
                                    <h6 className='faq-section-one-for-mobile-text-size'>Shipping</h6>
                                </button>
                            </h2>
                            <div id="basicAccordionCollapseThirtyThree" className="accordion-collapse collapse" aria-labelledby="headingThirtyThree"
                                data-bs-parent="#basicAccordion">
                                <div className="accordion-body">
                                    <a href="" className='text-decoration-none text-dark'>heello</a>
                                </div>
                            </div>
                        </div>



                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingThirtyFour">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#basicAccordionCollapseThirtyFour" aria-expanded="false" aria-controls="collapseThirtyFour">
                                    <h6 className='faq-section-one-for-mobile-text-size'>Press Releases</h6>
                                </button>
                            </h2>
                            <div id="basicAccordionCollapseThirtyFour" className="accordion-collapse collapse" aria-labelledby="headingThirtyFour"
                                data-bs-parent="#basicAccordion">
                                <div className="accordion-body">
                                    <a href="" className='text-decoration-none text-dark'>heello</a>
                                </div>
                            </div>
                        </div>



                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingThirtyFive">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#basicAccordionCollapseThirtyFive" aria-expanded="false" aria-controls="collapseThirtyFive">
                                    <h6 className='faq-section-one-for-mobile-text-size'>Privacy Policy</h6>
                                </button>
                            </h2>
                            <div id="basicAccordionCollapseThirtyFive" className="accordion-collapse collapse" aria-labelledby="headingThirtyFive"
                                data-bs-parent="#basicAccordion">
                                <div className="accordion-body">
                                    <a href="" className='text-decoration-none text-dark'>heello</a>
                                </div>
                            </div>
                        </div>



                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingThirtySix">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#basicAccordionCollapseThirtySix" aria-expanded="false" aria-controls="collapseThirtySix">
                                    <h6 className='faq-section-one-for-mobile-text-size'>Disclaimer</h6>
                                </button>
                            </h2>
                            <div id="basicAccordionCollapseThirtySix" className="accordion-collapse collapse" aria-labelledby="headingThirtySix"
                                data-bs-parent="#basicAccordion">
                                <div className="accordion-body">
                                    <a href="" className='text-decoration-none text-dark'>heello</a>
                                </div>
                            </div>
                        </div>




                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingThirtySeven">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#basicAccordionCollapseThirtySeven" aria-expanded="false" aria-controls="collapseThirtySeven">
                                    <h6 className='faq-section-one-for-mobile-text-size'>Terms and Conditions</h6>
                                </button>
                            </h2>
                            <div id="basicAccordionCollapseThirtySeven" className="accordion-collapse collapse" aria-labelledby="headingThirtySeven"
                                data-bs-parent="#basicAccordion">
                                <div className="accordion-body">
                                    <a href="" className='text-decoration-none text-dark'>heello</a>
                                </div>
                            </div>
                        </div>


                        <div style={{ width: "100%" }}>
                            <Image src={blgspace} alt="" />
                        </div>



                        <h5 className=" container ms-2 mt-4" style={{
                            fontFamily: 'Lato',
                            fontStyle: 'normal',
                            fontWeight: 700,
                            fontSize: '16px',
                            lineHeight: '24px',
                        }}>Settings</h5>




                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingThirtyEight">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#basicAccordionCollapseThirtyEight" aria-expanded="false" aria-controls="collapseThirtyEight">
                                    <h6 className='faq-section-one-for-mobile-text-size'>2-Step Verification</h6>
                                </button>
                            </h2>
                            <div id="basicAccordionCollapseThirtyEight" className="accordion-collapse collapse" aria-labelledby="headingThirtyEight"
                                data-bs-parent="#basicAccordion">
                                <div className="accordion-body">
                                    <a href="" className='text-decoration-none text-dark'>hello</a>
                                </div>
                            </div>
                        </div>




                    </div>

                </div>















                <div className="dash-signout-btn-for-mobile  ">
                    <div className="mt-3 mb-3 mx-auto border border-1 border-secondary" style={{ width: "80%", background: "#FFFFFF", textAlign: "center", borderRadius: "10px" }}>
                        <a href="" className="btn btn  " style={{
                            fontFamily: 'Lato',
                            fontStyle: 'normal',
                            fontWeight: 700,
                            fontSize: '16px',
                        }}  > Sign out </a>
                    </div>
                </div>


                <div className="dash-last-icon-for-mobile mt-3 mb-3 d-flex justify-content-evenly ">
                    <div><a href=""><Image src={home} alt="" /></a></div>
                    <div><a href=""><Image src={srch} alt="" /></a></div>
                    <div><a href=""><Image src={bas} alt="" /></a></div>
                    <div><a href=""><Image src={pr} alt="" /></a></div>
                </div>

            </section>


            {/* For Mobile */}



        </>
    )
}

export default Dashboard