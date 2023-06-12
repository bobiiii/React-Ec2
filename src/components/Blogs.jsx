
import logoImage from "../images/logo.jpg"
import Blog from "../images/blogsec.png"
import blogpro from "../images/blogspro.png"
import user1 from "../images/user1.png"

function Blogs() {
    return (
        <>

            <section className='container-fluid'>
                <nav className="navbar navbar-expand-lg navbar-light NAVBAR2">
                    <div className="container-fluid">
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <a className="navbar-brand" href="#"><img src={logoImage} alt="" /></a>
                        <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                            <form className="d-flex">
                                <input className="form-control me-2 custom-input" type="search" placeholder="Search" aria-label="Search" />
                                <button className="btn btn custom-button" type="submit" style={{ backgroundColor: '#458500', color: "#FFFFFF" }}>Search</button>
                            </form>
                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ul-item-style">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="#">WELLNESS</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="#">FITNESS</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="#">NUTRATION</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="#">BEAUTY</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <br />

                <div className='blog-hero-section container-fluid'>
                    <div>
                        <p>WHATS NEW </p>
                        <h3>The Best Natural Remedies for
                            Managing Allergies and Asthma</h3>
                        <p> <span className='text-success'>May 2024</span> | 218 Views </p>
                        <p>Suffer from seasonal allergies? A naturopathic doctor
                            summarizes the most effective natural remedies and
                            lifestyle approaches for relieving allergy symptoms.</p>
                        <button className='btn btn' style={{ backgroundColor: '#458500', color: "#FFFFFF" }}> Read More </button>
                    </div>
                    <div className='blog-sec-img'>
                        <img src={Blog} alt="" />
                    </div>
                </div>

                <div className='get-offer mt-5 container-fluid'>
                    <div className=''>
                        <p className='abc'> Popular Articles
                            Get 20% Off your first order with NEW20 X </p>
                    </div>
                </div>
                <hr />
                <div className='container-fluid blog-products-section'>
                    <div className="card" style={{ width: '20rem', background: "#F5F5F5" }}>
                        <img src={blogpro} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <p style={{
                                fontFamily: 'Lato',
                                fontStyle: 'normal',
                                fontWeight: 700,
                                fontSize: '14px',
                                lineHeight: '15px',
                            }}>Supplements</p>
                            <h5 className="card-title">7 Evidence-Based Ways Liquid
                                Chlorophyll Can Benefit Health </h5>
                            <p>Oct 2021
                                526,015 Views</p>
                            <p className="card-text">Discover the health benefits of liquid chlorophyll. From improved
                                skin and immunity to decreased body odor, chlorophyll has many
                                ways to improve your overall health.</p>
                        </div>
                    </div>
                    <div className="card" style={{ width: '20rem', background: "#F5F5F5" }}>
                        <img src={blogpro} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <p style={{
                                fontFamily: 'Lato',
                                fontStyle: 'normal',
                                fontWeight: 700,
                                fontSize: '14px',
                                lineHeight: '15px',
                            }}>Supplements</p>
                            <h5 className="card-title">7 Evidence-Based Ways Liquid
                                Chlorophyll Can Benefit Health </h5>
                            <p>Oct 2021
                                526,015 Views</p>
                            <p className="card-text">Discover the health benefits of liquid chlorophyll. From improved
                                skin and immunity to decreased body odor, chlorophyll has many
                                ways to improve your overall health.</p>
                        </div>
                    </div>
                    <div className="card" style={{ width: '20rem', background: "#F5F5F5" }}>
                        <img src={blogpro} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <p style={{
                                fontFamily: 'Lato',
                                fontStyle: 'normal',
                                fontWeight: 700,
                                fontSize: '14px',
                                lineHeight: '15px',
                            }}>Supplements</p>
                            <h5 className="card-title">7 Evidence-Based Ways Liquid
                                Chlorophyll Can Benefit Health </h5>
                            <p>Oct 2021
                                526,015 Views</p>
                            <p className="card-text">Discover the health benefits of liquid chlorophyll. From improved
                                skin and immunity to decreased body odor, chlorophyll has many
                                ways to improve your overall health.</p>
                        </div>
                    </div>

                </div>

                <div className='blog-user-section container-fluid mt-5'>
                    <div>
                        <h6 style={{ color: "#2C7500" }}>Wellness Experts</h6>
                    </div>
                    <hr />
                    <div className='blog-user-section-cards'>

                        <div className="card p-3 py-4 border-0">
                            <div className="text-center">
                                <img src={user1} width="100" className="rounded-circle" />
                            </div>
                            <div className="text-center mt-3">
                                <p className=''>Dr. Michael Murray, N.D.</p>
                            </div>
                        </div>


                        <div className="card p-3 py-4 border-0">
                            <div className="text-center">
                                <img src={user1} width="100" className="rounded-circle" />
                            </div>
                            <div className="text-center mt-3">
                                <p className=''>Dr. Michael Murray, N.D.</p>
                            </div>
                        </div>
                        <div className="card p-3 py-4 border-0">
                            <div className="text-center">
                                <img src={user1} width="100" className="rounded-circle" />
                            </div>
                            <div className="text-center mt-3">
                                <p className=''>Dr. Michael Murray, N.D.</p>
                            </div>
                        </div>
                        <div className="card p-3 py-4 border-0">
                            <div className="text-center">
                                <img src={user1} width="100" className="rounded-circle" />
                            </div>
                            <div className="text-center mt-3">
                                <p className=''>Dr. Michael Murray, N.D.</p>
                            </div>
                        </div>
                        <div className="card p-3 py-4 border-0">
                            <div className="text-center">
                                <img src={user1} width="100" className="rounded-circle" />
                            </div>
                            <div className="text-center mt-3">
                                <p className=''>Dr. Michael Murray, N.D.</p>
                            </div>
                        </div>
                        <div className="card p-3 py-4 border-0">
                            <div className="text-center">
                                <img src={user1} width="100" className="rounded-circle" />
                            </div>
                            <div className="text-center mt-3">
                                <p className=''>Dr. Michael Murray, N.D.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='text-center'>
                    <button className='btn btn' style={{ backgroundColor: '#458500', color: "#FFFFFF" }}> View All  </button>
                </div>

                <div className='Explore-section-cards  mt-5 container-fluid'>
                    <div className="card" style={{ width: '18rem', background: "#F5F5F5" }}>
                        <img src={blogpro} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <p style={{
                                fontFamily: 'Lato',
                                fontStyle: 'normal',
                                fontWeight: 700,
                                fontSize: '14px',
                                lineHeight: '15px',
                            }}>Supplements</p>
                            <h5 className="card-title">7 Evidence-Based Ways Liquid
                                Chlorophyll Can Benefit Health </h5>
                            <p>Oct 2021
                                526,015 Views</p>
                            <p className="card-text">Discover the health benefits of liquid chlorophyll. From improved
                                skin and immunity to decreased body odor, chlorophyll has many
                                ways to improve your overall health.</p>
                        </div>
                    </div>
                    <div className="card" style={{ width: '18rem', background: "#F5F5F5" }}>
                        <img src={blogpro} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <p style={{
                                fontFamily: 'Lato',
                                fontStyle: 'normal',
                                fontWeight: 700,
                                fontSize: '14px',
                                lineHeight: '15px',
                            }}>Supplements</p>
                            <h5 className="card-title">7 Evidence-Based Ways Liquid
                                Chlorophyll Can Benefit Health </h5>
                            <p>Oct 2021
                                526,015 Views</p>
                            <p className="card-text">Discover the health benefits of liquid chlorophyll. From improved
                                skin and immunity to decreased body odor, chlorophyll has many
                                ways to improve your overall health.</p>
                        </div>
                    </div>
                    <div className="card" style={{ width: '18rem', background: "#F5F5F5" }}>
                        <img src={blogpro} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <p style={{
                                fontFamily: 'Lato',
                                fontStyle: 'normal',
                                fontWeight: 700,
                                fontSize: '14px',
                                lineHeight: '15px',
                            }}>Supplements</p>
                            <h5 className="card-title">7 Evidence-Based Ways Liquid
                                Chlorophyll Can Benefit Health </h5>
                            <p>Oct 2021
                                526,015 Views</p>
                            <p className="card-text">Discover the health benefits of liquid chlorophyll. From improved
                                skin and immunity to decreased body odor, chlorophyll has many
                                ways to improve your overall health.</p>
                        </div>
                    </div>
                    <div className="card" style={{ width: '18rem', background: "#F5F5F5" }}>
                        <img src={blogpro} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <p style={{
                                fontFamily: 'Lato',
                                fontStyle: 'normal',
                                fontWeight: 700,
                                fontSize: '14px',
                                lineHeight: '15px',
                            }}>Supplements</p>
                            <h5 className="card-title">7 Evidence-Based Ways Liquid
                                Chlorophyll Can Benefit Health </h5>
                            <p>Oct 2021
                                526,015 Views</p>
                            <p className="card-text">Discover the health benefits of liquid chlorophyll. From improved
                                skin and immunity to decreased body odor, chlorophyll has many
                                ways to improve your overall health.</p>
                        </div>
                    </div>

                </div>
                <div className='text-center mt-3'>
                    <button className='btn btn' style={{ backgroundColor: '#458500', color: "#FFFFFF" }}> View All  </button>
                </div>

                <div className='blog-para container-fluid mt-5 ms-5'>
                    <h4 style={{
                        fontfamily: 'Lato',
                        fontstyle: 'normal',
                        fontweight: '700',
                        fontsize: "18px",
                        lineheight: "20px"
                    }}>DISCLAIMER </h4>
                    <p>This blog has not been approved by your local health department and is not intended to provide diagnosis, treatment, or medical advice. The content provided on this blog is for informational purposes only. Please consult with a physician or other
healthcare professional regarding any medical or health-related diagnosis or treatment options. Information on this blog should not be considered as a substitute for advice from a healthcare professional. The claims made about specific products
throughout this blog are not approved to diagnose, treat, cure, or prevent disease.</p>
                </div>


            </section>
            
        </>
    )
}

export default Blogs