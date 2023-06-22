/* eslint-disable react/no-unescaped-entities */
// import React from 'react'
import comone from "../images/comone.png"
import comtwo from "../images/comtwo.png"
import comthree from "../images/comthree.png"
import comfour from "../images/comfour.png"
import comfive from "../images/comfive.png"
import comsix from "../images/comsix.png"
import comseven from "../images/comseven.png"
import comeight from "../images/comeight.png"
import comnine from "../images/comnine.png"
import WallHerbLive from './WallHerbLive'


function Community() {
    return (
        <>
            <section style={{ background: "#FFFFFF" }}>
                <div className='mainhero'>
                    <div className='hero ' style={{ background: "#02AD5F", color: "white" }}>
                        <div className='ms-5 ' >
                            <h4> 20% off Immunne Support! </h4>
                        </div>
                        <div>
                            <button type="button" className="btn shopbtn mb-2">Shop Now</button>
                        </div>
                    </div>
                    <div className='cruveclr' style={{ background: 'linear-gradient(315deg, #026ACD 50%, #02AD5F 50%)' }}>
                    </div>

                    <div className='hero2' style={{ background: "#026ACD" }}>
                        <div className='ms-5'>
                            <h4> Up to 30% off Herbs & Splices! </h4>
                        </div>
                        <div>
                            <button type="button" className="btn shopbtn mb-2">Shop Now</button>
                        </div>
                    </div>
                </div>

                <div className='iHerb-Community-section container-fluid mt-5'>
                    <h1 style={{ color: "#FF8A00" }}>iHerb Community</h1>

                    <div className='community-icon-section mt-4'>

                        <div style={{ width: "10%" }} className='community-icon-card'>
                            <div className='pan'>
                                <i className="bi bi-pencil" ></i>
                            </div>
                            <div>
                                <a href="" className='fs-cs-1 text-decoration-none'> Personalize your
                                    public profile</a>
                            </div>

                        </div>
                        <div style={{ width: "10%" }} className='community-icon-card'>
                            <div className='pan'>
                                <i className="bi bi-star " ></i>
                            </div>
                            <div>
                                <a href="" className='fs-cs-1 text-decoration-none'> Rate & review past
                                    purchases</a>
                            </div>

                        </div>
                        <div style={{ width: "10%" }} className='community-icon-card'>
                            <div className='pan'>
                                <i className="bi bi-share" ></i>
                            </div>
                            <div>
                                <a href="" className='fs-cs-1 text-decoration-none'> Share your favorite
                                    products</a>
                            </div>

                        </div>


                    </div>


                </div>
                <hr />


                {/* Happy Customer Heading */}
                <div className='container  Latest-happy-customers '>
                    <img src={comone} alt="" style={{ width: "40px", height: "40px", textAlign: "center" }} />
                    <h4 className=' mt-2 fs-5'>Latest happy customers</h4>
                </div>


                <div className='Latest-happy-customers-card-cont   '>
                    <div className='Latest-happy-customers-card d-flex flex-nowrap flex-md-wrap flex-lg-wrap overflow-scroll justify-content-md-center  container-fluid'>
                        {/* first */}
                        <div className="  p-3 py-4 border-0 w-auto  ">
                            <div className="text-center leadership-user">
                                <img src={comtwo} width="100" className="rounded-circle" style={{ width: "116px", height: "116px" }} />
                            </div>
                            <div className="text-center mt-3 fs-4" >
                                <p className='fs-cs-1 ' > <span><a href="" className='text-decoration-none me-1'>iHerb Customer</a></span>
                                    wrote this
                                    review on May 25, 2023
                                </p>
                            </div>
                            <div style={{ width: "20rem" }} className='text-center '>
                                <h4 className='fs-cs-2'>"I was looking for a good Organic Raw Apple
                                    Cider Vinegar, and found this one! It is delicious
                                    and ad ..."
                                    <a href="" className='text-decoration-none'>See Full Review</a> </h4>
                            </div>
                        </div>


                        {/* first */}
                        <div className="  p-3 py-4 border-0 w-auto  ">
                            <div className="text-center leadership-user">
                                <img src={comtwo} width="100" className="rounded-circle" style={{ width: "116px", height: "116px" }} />
                            </div>
                            <div className="text-center mt-3 fs-4" >
                                <p className='fs-cs-1 ' > <span><a href="" className='text-decoration-none me-1'>iHerb Customer</a></span>
                                    wrote this
                                    review on May 25, 2023
                                </p>
                            </div>
                            <div style={{ width: "20rem" }} className='text-center '>
                                <h4 className='fs-cs-2'>"I was looking for a good Organic Raw Apple
                                    Cider Vinegar, and found this one! It is delicious
                                    and ad ..."
                                    <a href="" className='text-decoration-none'>See Full Review</a> </h4>
                            </div>
                        </div>


                        {/* first */}
                        <div className="  p-3 py-4 border-0 w-auto  ">
                            <div className="text-center leadership-user">
                                <img src={comtwo} width="100" className="rounded-circle" style={{ width: "116px", height: "116px" }} />
                            </div>
                            <div className="text-center mt-3 fs-4" >
                                <p className='fs-cs-1 ' > <span><a href="" className='text-decoration-none me-1'>iHerb Customer</a></span>
                                    wrote this
                                    review on May 25, 2023
                                </p>
                            </div>
                            <div style={{ width: "20rem" }} className='text-center '>
                                <h4 className='fs-cs-2'>"I was looking for a good Organic Raw Apple
                                    Cider Vinegar, and found this one! It is delicious
                                    and ad .."
                                    <a href="" className='text-decoration-none'>See Full Review</a> </h4>
                            </div>
                        </div>




                    </div>
                </div>




                {/* Dynamic Health LAb */}
                <div className='Latest-happy-customers-card-cont container-fluid mt-5'>
                    <div className='Latest-happy-customers-card container-fluid mb-5'>
                        <div className='Latest-happy-customers-card-2 d-flex'>
                            <div>
                                <img src={comthree} alt="" />
                            </div>
                            <div style={{ width: "18rem" }} className='mt-3'>
                                <a href="" className='text-decoration-none'>Dynamic Health Laboratories,
                                    Organic Raw Apple Cider Vinegar
                                    with Mother, 16 fl oz (473 ml) </a>
                            </div>
                        </div>
                        <div className='Latest-happy-customers-card-2 d-flex'>
                            <div>
                                <img src={comthree} alt="" />
                            </div>
                            <div style={{ width: "18rem" }} className='mt-3'>
                                <a href="" className='text-decoration-none'>Dynamic Health Laboratories,
                                    Organic Raw Apple Cider Vinegar
                                    with Mother, 16 fl oz (473 ml)</a>
                            </div>
                        </div>
                        <div className='Latest-happy-customers-card-2 d-flex'>
                            <div>
                                <img src={comthree} alt="" />
                            </div>
                            <div style={{ width: "18rem" }} className='mt-3'>
                                <a href="" className='text-decoration-none'>Dynamic Health Laboratories,
                                    Organic Raw Apple Cider Vinegar
                                    with Mother, 16 fl oz (473 ml)</a>
                            </div>
                        </div>

                    </div>
                </div>
                <hr />



                    {/* Featured Profiles  Heading*/}
                <div className='container  Latest-happy-customers  mt-5'>
                    <img src={comfour} alt="" style={{ width: "40px", height: "40px", textAlign: "center" }} />
                    <h4 className=' mt-2 fs-5'>Featured profiles</h4>
                </div>


                    {/* Featured Profiles */}
                <div className='  container-fluid d-flex flex-nowrap flex-md-wrap flex-lg-wrap overflow-scroll '>

                    <div className="container mt-4 mb-4 p-3 d-flex justify-content-center" style={{ width: "16rem", boxShadow: '10px 10px 10px rgba(0, 0, 0, 0.1)' }}>
                        <div className="card p-4 border-0">
                            <div className=" image d-flex flex-column justify-content-center align-items-center">
                                <button className="btn com-user-img">
                                    <img src={comfive} height="100" width="100" alt="Profile" />
                                </button>
                                <span className="name mt-3"><h4>iHerb Customer</h4></span>
                                <span className="join mt-3"> Active since: </span>
                                <span className="number ">Joined May, 2021</span>
                                <div className="px-2 rounded mt-4 date">
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="container mt-4 mb-4 p-3 d-flex justify-content-center" style={{ width: "16rem", boxShadow: '10px 10px 10px rgba(0, 0, 0, 0.1)' }}>
                        <div className="card p-4 border-0">
                            <div className=" image d-flex flex-column justify-content-center align-items-center">
                                <button className="btn com-user-img">
                                    <img src={comfive} height="100" width="100" alt="Profile" />
                                </button>
                                <span className="name mt-3"><h4>iHerb Customer</h4></span>
                                <span className="join mt-3"> Active since: </span>
                                <span className="number ">Joined May, 2021</span>
                                <div className="px-2 rounded mt-4 date">
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="container mt-4 mb-4 p-3 d-flex justify-content-center" style={{ width: "16rem", boxShadow: '10px 10px 10px rgba(0, 0, 0, 0.1)' }}>
                        <div className="card p-4 border-0">
                            <div className=" image d-flex flex-column justify-content-center align-items-center">
                                <button className="btn com-user-img">
                                    <img src={comfive} height="100" width="100" alt="Profile" />
                                </button>
                                <span className="name mt-3"><h4>iHerb Customer</h4></span>
                                <span className="join mt-3"> Active since: </span>
                                <span className="number ">Joined May, 2021</span>
                                <div className="px-2 rounded mt-4 date">
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="container mt-4 mb-4 p-3 d-flex justify-content-center" style={{ width: "16rem", boxShadow: '10px 10px 10px rgba(0, 0, 0, 0.1)' }}>
                        <div className="card p-4 border-0">
                            <div className=" image d-flex flex-column justify-content-center align-items-center">
                                <button className="btn com-user-img">
                                    <img src={comfive} height="100" width="100" alt="Profile" />
                                </button>
                                <span className="name mt-3"><h4>iHerb Customer</h4></span>
                                <span className="join mt-3"> Active since: </span>
                                <span className="number ">Joined May, 2021</span>
                                <div className="px-2 rounded mt-4 date">
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="container mt-4 mb-4 p-3 d-flex justify-content-center" style={{ width: "16rem", boxShadow: '10px 10px 10px rgba(0, 0, 0, 0.1)' }}>
                        <div className="card p-4 border-0">
                            <div className=" image d-flex flex-column justify-content-center align-items-center">
                                <button className="btn com-user-img">
                                    <img src={comfive} height="100" width="100" alt="Profile" />
                                </button>
                                <span className="name mt-3"><h4>iHerb Customer</h4></span>
                                <span className="join mt-3"> Active since: </span>
                                <span className="number ">Joined May, 2021</span>
                                <div className="px-2 rounded mt-4 date">
                                </div>
                            </div>
                        </div>
                    </div>









                </div>

                <hr className='mt-5' />

                    {/* Active profiles india */}
                <div className='container  Latest-happy-customers mt-5 '>
                    <img src={comsix} alt="" style={{ width: "40px", height: "40px", textAlign: "center" }} />
                    <h4 className=' mt-2 fs-5'>Most active profiles in
                        India</h4>
                </div>



                <div className='container-fluid Most-active-cards-cont mt-5 '>

                    <div className='Most-active-cards-cont-wrap'>

                        <div className='Most-active-cards '>
                            <div className='active-cards border-1  '>
                                <div className='ms-2'>
                                    <h4>1</h4>
                                </div>
                                <div>
                                    <img src={comseven} alt="" />
                                </div>
                                <div className='mt-2'>
                                    <h5 >iHerb Customer</h5>
                                    <p>Active since: <span style={{
                                        color: "#F98600"
                                    }} >Jul 12, 2013</span> </p>
                                </div>
                            </div>
                        </div>
                        <div className='Most-active-cards '>
                            <div className='active-cards border-1  '>
                                <div className='ms-2'>
                                    <h4>1</h4>
                                </div>
                                <div>
                                    <img src={comseven} alt="" />
                                </div>
                                <div className='mt-2'>
                                    <h5 >iHerb Customer</h5>
                                    <p>Active since: <span style={{
                                        color: "#F98600"
                                    }} >Jul 12, 2013</span> </p>
                                </div>
                            </div>
                        </div>


                        <div className='Most-active-cards '>
                            <div className='active-cards border-1  '>
                                <div className='ms-2'>
                                    <h4>1</h4>
                                </div>
                                <div>
                                    <img src={comseven} alt="" />
                                </div>
                                <div className='mt-2'>
                                    <h5 >iHerb Customer</h5>
                                    <p>Active since: <span style={{
                                        color: "#F98600"
                                    }} >Jul 12, 2013</span> </p>
                                </div>
                            </div>
                        </div>

                        <div className='Most-active-cards '>
                            <div className='active-cards border-1  '>
                                <div className='ms-2'>
                                    <h4>1</h4>
                                </div>
                                <div>
                                    <img src={comseven} alt="" />
                                </div>
                                <div className='mt-2'>
                                    <h5 >iHerb Customer</h5>
                                    <p>Active since: <span style={{
                                        color: "#F98600"
                                    }} >Jul 12, 2013</span> </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>


                <div className='text-center mt-5'>
                    <a href="" className='btn btn' style={{ background: " #FF8A00", color: "#ffff" }}> See More</a>
                </div>

                <hr className='mt-5' />


                <div className='container  Latest-happy-customers '>
                    <img src={comeight} alt="" style={{ width: "40px", height: "40px", textAlign: "center" }} />
                    <h4 className=' mt-2 fs-5'>Picture gallery</h4>

                </div>
                <div className='container mt-2'>
                    <p>Tag @iherb on Instagram and Share on iHerb BBS for the chance to appear here.</p>
                    <a href="" className='text-decoration-none'>Instagram

                        | iHerb BBS</a>
                </div>


             <div className='Picture-gallery-cont container mt-5'>
                    
                    <div className='Picture-gallery-img'>
                          <img src={comnine} alt="" />
                    </div>
                    <div className='Picture-gallery-img'>
                          <img src={comnine} alt="" />
                    </div>
                    <div className='Picture-gallery-img'>
                          <img src={comnine} alt="" />
                    </div>
                    <div className='Picture-gallery-img'>
                          <img src={comnine} alt="" />
                    </div>
                    <div className='Picture-gallery-img'>
                          <img src={comnine} alt="" />
                    </div>
                    <div className='Picture-gallery-img'>
                          <img src={comnine} alt="" />
                    </div>
                    <div className='Picture-gallery-img'>
                          <img src={comnine} alt="" />
                    </div>
                    <div className='Picture-gallery-img'>
                          <img src={comnine} alt="" />
                    </div>

             </div>

             <div className='text-center mt-5'>
                    <a href="" className='btn btn mb-5' style={{ background: " #FF8A00", color: "#ffff" }}> See More</a>
                </div>

                <WallHerbLive/>


                <div className='sale-last-section  mt-5' style={{ background: " #F5F5F5" }}>
                        <br />
                        <div className="card " style={{ width: "12rem", background: " #F5F5F5", border: "none" }}>
                           
                            <div className="card-body">
                                <p className="card-text text-center" style={{ fontSize: "13px" }}>The Best Natural Remedies for</p>
                            </div>
                        </div>
                        <div className="card " style={{ width: "12rem", background: " #F5F5F5", border: "none" }}>
                           
                            <div className="card-body">
                                <p className="card-text text-center" style={{ fontSize: "13px" }}>The Best Foods and Supplements for Natural </p>
                            </div>
                        </div>
                        <div className="card " style={{ width: "12rem", background: " #F5F5F5", border: "none" }}>
                            
                            <div className="card-body">
                                <p className="card-text text-center" style={{ fontSize: "13px" }}>Psychodermatology: Why
                                    Researchers Think the Mind-
                                </p>
                            </div>
                        </div>
                        <div className="card " style={{ width: "12rem", background: " #F5F5F5", border: "none" }}>
                            
                            <div className="card-body">
                                <p className="card-text text-center" style={{ fontSize: "13px" }}>Stress-Related Hair Loss +
                                    Natural Solutions to Promote</p>
                            </div>
                        </div>
                        <div className="card " style={{ width: "12rem", background: " #F5F5F5", border: "none" }}>
                            
                            <div className="card-body">
                                <p className="card-text text-center" style={{ fontSize: "13px" }}>Dry brushing: What It Is +
                                    Unexpected Health </p>
                            </div>
                        </div>
                        <div className="card " style={{ width: "12rem", background: " #F5F5F5", border: "none" }}>
                            
                            <div className="card-body">
                                <p className="card-text text-center" style={{ fontSize: "13px" }}>How Spices Combat
                                    Inflammation and </p>
                            </div>
                        </div> 
                                             

                    </div>



            </section>
        </>
    )
}

export default Community