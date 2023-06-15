import React from 'react'

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
                                <i class="bi bi-pencil" ></i>
                            </div>
                            <div>
                                <a href="" className='fs-cs-1 text-decoration-none'> Personalize your
                                    public profile</a>
                            </div>

                        </div>
                        <div style={{ width: "10%" }} className='community-icon-card'>
                            <div className='pan'>
                                <i class="bi bi-star " ></i>
                            </div>
                            <div>
                                <a href="" className='fs-cs-1 text-decoration-none'> Rate & review past
                                    purchases</a>
                            </div>

                        </div>
                        <div style={{ width: "10%" }} className='community-icon-card'>
                            <div className='pan'>
                                <i class="bi bi-share" ></i>
                            </div>
                            <div>
                                <a href="" className='fs-cs-1 text-decoration-none'> Share your favorite
                                    products</a>
                            </div>

                        </div>


                    </div>


                </div>
 <hr />

            </section>
        </>
    )
}

export default Community