/* eslint-disable no-irregular-whitespace */
/* eslint-disable react/no-unescaped-entities */

import CardsCarouselYearly from "./CardsCarouselYearly"
import logoImage from "../images/logo.jpg"
import corimg from "../images/corimg.png"
import cor2 from "../images/cor2.png"
import wallherb1 from "../images/wallherb1.png"
import wallherb2 from "../images/wallherb2.png"
import wallherb3 from "../images/wallherb3.png"
import wallherb4 from "../images/wallherb4.png"
import wallherb5 from "../images/wallherb5.png"
// import wallherb6 from "../images/wallherb6.png"
import ceo from "../images/ceo.png"
import cheif from "../images/cheif.png"
// import global from "../images/global.png"
import cul from "../images/cul.png"
import corlastimg from "../images/corlastimg.png"
import facebook from "../images/facebook-logo.png.png"
import twitter from "../images/twitter-logo.png.png"
import youtube from "../images/youtube-logo.png.png"
import pin from "../images/pinterest-logo.png.png"
import insta from "../images/instagram-logo.png.png"
import WorldIco from "../images/Shape1.png"
import cornav from "../images/cornav.png"


function Corporate() {
  return (
    <>
      <section>
        <nav className="navbar navbar-expand-lg navbar-dark corporate-navbar-background">
          <div className="container-lg">
            <a className="navbar-brand mb-2" href="#"><img src={logoImage} alt="" /></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto nvl">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">About Us</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">iHerb at a Glance</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">Leadership</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">Press Releases</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">Global Responsibility</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">Careers</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">Shop iHerb</a>
                </li>

              </ul>
            </div>
          </div>
        </nav>




        {/* for mobile */}
        <div className="nvbar-cor-for-mob container-fluid  ">
          <div className="d-flex nvbar-cor-for-mob-two-div">
            <div><h5 className="text-light"> walHerb</h5></div>
            <div><img src={cornav} alt="" /></div>
          </div>

          <div>
            <h1 className="nvbar-cor-for-mob-last-link">a</h1>
          </div>
        </div>


        {/* for mobile */}






        <div className='corporate-hero-image'>
          <img src={corimg} alt="" />
        </div>

        <div className='container-lg cor-our-mission  cor-our-mission-for-desktop '>
          <div className='cor-our-mission-wrap' >
            <h4>Our Mission</h4>
            <p className='text-center'>iHerb is on a mission to make health and wellness accessible to all.</p>
            <p className='text-center'>Since our founding in 1996, we have been dedicated to offering Earth’s best-curated selection of health and wellness products, at the best possible value,
              delivered with the most convenient experience. We believe that health and wellness should be a universal right made possible through compassion and our
              collective action. This belief will continue to guide us as we endeavor to make our mission a reality.</p>
          </div>
        </div>




        {/* for mobile */}

        <div className=' cor-our-mission cor-our-mission-for-mobiles'>
          <div className='cor-our-mission-wrap' >
            <h4>Our Mission</h4>
            <p className='text-center'>iHerb is on a mission to make health and wellness accessible to all.</p>
            <p className='text-center'>Since our founding in 1996, we have been dedicated to offering Earth’s best-curated selection of health and wellness products, at the best possible value,
              delivered with the most convenient experience. We believe that health and wellness should be a universal right made possible through compassion and our
              collective action. This belief will continue to guide us as we endeavor to make our mission a reality.</p>
          </div>
        </div>


        {/* for mobile */}






        <div className='container-lg mt-5 corporate-about'>
          <h4>About Us</h4>
          <p>We’re the world’s largest eCommerce platform dedicated to vitamins, minerals, and
            supplements, and other health and wellness products. </p>
          <p>For more than 26 years, we’ve been making it simple for customers all over the
            world to purchase the highest quality health and wellness products. From
            supplements to skincare to grocery items, we ship over
            30,000 products, from over 1,200 brands to more than 180+ countries, and we’re
            proud to provide the very best value.</p>
          <div className="corporate-about-a-tag">
            <a href="" className='btn btn-outline-success'>Learn More</a>
          </div>
        </div>

        <div className='cor-box-image-section container-lg mt-5  '>
          <img src={cor2} alt="" />
          <div className='mt-5 years-of-bringing-for-desk'>
            <p>26 years of bringing health and wellness products to the world</p>
          </div>

          {/* For Mobile */}
          <div className='mt-5 years-of-bringing-for-mob'>
            <h4>26 years of bringing health and wellness products to the world</h4>
          </div>
          {/* For Mobile */}


        </div>

        {/*  16 Years Cards */}

        <CardsCarouselYearly />


        {/*  16 Years Cards */}






        <section className='Wallherb-at-a-Glance-background'>
          <br />
          <div className='mt-5 text-center at-a-Glance-for-mobile-text-size'>
            <h3>Wallherb at a Glance</h3>
          </div>

          <div className='Leadership-member-section container-lg' >

            <div className="card p-3 py-4 border-0" style={{ width: "20rem", background: '#F6F6F6' }}>
              <div className="text-center iHerb-at-a-glance-icon">
                <img src={wallherb1} width="100" className="rounded-circle" />
              </div>
              <div className="text-center mt-3 We-deliver-around-for-mobile">
                <h5>180+ countries</h5>
                <p className='fs-cs-2 '>We deliver around the world
                  with 16 languages, over 80
                  currencies, and over 30
                  payment options to support
                  our mission of making
                  health and wellness
                  accessible to all.</p>
              </div>
            </div>


            <div className="card p-3 py-4 border-0" style={{ width: "20rem", background: '#F6F6F6' }}>
              <div className="text-center iHerb-at-a-glance-icon">
                <img src={wallherb2} width="100" className="rounded-circle" />
              </div>
              <div className="text-center mt-3 We-deliver-around-for-mobile">
                <h5>30K+ products</h5>
                <p className='fs-cs-2 '>We offer the same reputable brands found at
                  large national stores. All products are sold
                  and shipped by iHerb—not by  <a href="" className='text-decoration-none'>third-party
                    sellers.</a> </p>
              </div>
            </div>


            <div className="card p-3 py-4 border-0" style={{ width: "20rem", background: '#F6F6F6' }}>
              <div className="text-center iHerb-at-a-glance-icon">
                <img src={wallherb3} width="100" className="rounded-circle" />
              </div>
              <div className="text-center mt-3 We-deliver-around-for-mobile">
                <h5>Authentic
                  reviews</h5>
                <p className='fs-cs-2 '>Our 33M+ product reviews
                  are written by real
                  customers who purchased
                  the products directly from
                  iHerb.</p>
              </div>
            </div>





            <div className="card p-3 py-4 border-0" style={{ width: "20rem", background: '#F6F6F6' }}>
              <div className="text-center iHerb-at-a-glance-icon">
                <img src={wallherb4} width="100" className="rounded-circle" />
              </div>
              <div className="text-center mt-3 We-deliver-around-for-mobile">
                <h5>9.5M+ active customers</h5>
                <p className='fs-cs-2 '>We have cultivated
                  customer trust and loyalty
                  through the quality and
                  authenticity of our products
                  and the great brands,
                  convenience, and value we
                  offer.</p>
              </div>
            </div>


            <div className="card p-3 py-4 border-0" style={{ width: "20rem", background: '#F6F6F6' }}>
              <div className="text-center iHerb-at-a-glance-icon">
                <img src={wallherb5} width="100" className="rounded-circle" />
              </div>
              <div className="text-center mt-3 We-deliver-around-for-mobile">
                <h5>8 fulfillment
                  centers</h5>
                <p className='fs-cs-2 '>All of our 8 fulfillment
                  centers and inventory hubs
                  are climate-controlled and
                  GMP- or ISO-compliant
                  ensuring the highest quality
                  and freshest products.</p>
              </div>
            </div>



            <div className="card p-3 py-4 border-0" style={{ width: "20rem", background: '#F6F6F6' }}>
              <div className="text-center iHerb-at-a-glance-icon">
                <img src={wallherb5} width="100" className="rounded-circle" />
              </div>
              <div className="text-center mt-3 We-deliver-around-for-mobile">
                <h5>2,000+ team
                  members</h5>
                <p className='fs-cs-2 '>We’re truly a global
                  company with team
                  members all around the
                  world.</p>
              </div>
            </div>





          </div>

        </section>



        <div className='Leadership-sction mt-5 container-lg'>
          <div className='text-center'>
            <h4> Leadership </h4>
          </div>

          <div className='Leadership-member-section container-lg'>

            <div className="card p-3 py-4 border-0" style={{ width: "18rem" }}>
              <div className="text-center leadership-user">
                <img src={ceo} width="100" className="rounded-circle" />
              </div>
              <div className="text-center mt-3">
                <p ><span style={{ color: "#458500" }}>Emun Zabihi</span> <br />
                  CEO</p>
              </div>
            </div>
            <div className="card p-3 py-4 border-0" style={{ width: "18rem" }}>
              <div className="text-center leadership-user">
                <img src={ceo} width="100" className="rounded-circle" />
              </div>
              <div className="text-center mt-3">
                <p ><span style={{ color: "#458500" }}>Emun Zabihi </span> <br />
                  CEO</p>
              </div>
            </div>
            <div className="card p-3 py-4 border-0" style={{ width: "18rem" }}>
              <div className="text-center leadership-user">
                <img src={ceo} width="100" className="rounded-circle" />
              </div>
              <div className="text-center mt-3">
                <p ><span style={{ color: "#458500" }}>Emun Zabihi</span> <br />
                  CEO</p>
              </div>
            </div>
            <div className="card p-3 py-4 border-0" style={{ width: "18rem" }}>
              <div className="text-center leadership-user">
                <img src={ceo} width="100" className="rounded-circle" />
              </div>
              <div className="text-center mt-3">
                <p ><span style={{ color: "#458500" }}>Emun Zabihi</span> <br />
                  CEO</p>
              </div>
            </div>
            <div className="card p-3 py-4 border-0" style={{ width: "18rem" }}>
              <div className="text-center leadership-user">
                <img src={ceo} width="100" className="rounded-circle" />
              </div>
              <div className="text-center mt-3">
                <p ><span style={{ color: "#458500" }}>Emun Zabihi</span> <br />
                  CEO</p>
              </div>
            </div>

          </div>



        </div>


        <section className='Press-Releases-main-section mt-5 '>
          <br />
          <h5 className='text-center Press-Releases-text-size-for-mob'>Press Releases</h5>
          <div className='Press-Releases-section  container-fluid mt-5'>

            <div className='Chief-Operating-Officer'>
              <p>May 03, 2023</p>
              <h5>iHerb Names Miriee Chang as Chief Operating
                Officer</h5>
              <img src={cheif} alt="" />
              <h5 className='mt-3'>Newly established role will further streamline operations and enhance
                operational effectiveness</h5>
              <p>(Irvine, California) May 2, 2023 - iHerb Holdings, LLC, announced that Miriee Chang
                has been named its Chief Operating Officer (COO). Mrs. Chang brings significant
                leadership experience to the position having previously held the role of Executive Vice
                President (EVP) of Business Development & Global Logistics at iHerb. </p>
              <p>Mrs. Chang's appointment is part of iHerb's larger effort to enhance its operational
                structure and further align resources in order to best support its global growth
                opportunities. Miriee brings substantial experience in global logistics, international
                markets and operational oversight from over 15 years managing global operations. In
                this new role, she will help iHerb continue to develop innovative solutions and drive
                forward the company’s mission of making health and wellness accessible to all. </p>
              <p>“I am pleased to announce Miriee Chang has been promoted to iHerb’s Chief Operating
                Officer (COO). Miriee’s determination and reliability have helped us grow iHerb and
                execute on our mission of making health and wellness products available to people all
                over the world,” announced CEO, Emun Zabihi. “Given Miriee’s vast experience and
                powerful combination of strategic vision and operational acumen, she is well equipped
                to lead positive change across the organization for continued success moving
                forward.” </p>
              <p>As COO, Miriee will oversee iHerb’s Operations Team and 3PL partners across 8
                fulfillment centers and inventory hubs in the US and overseas. She will also oversee
                the Inventory Management Team, ensuring iHerb has the right products, in the right
                place at the right quantities to enable the company to continue to delight its customers
                in over 185 countries.</p>
              <p>“I am honored to be named Chief Operating Officer of iHerb. It is clear that the
                opportunities ahead of us have never been more compelling, and I am excited to
                continue to help lead iHerb forward and execute on our many strategic initiatives,” said
                Chang. “I am thrilled to take on this new expanded role as we align our teams to
                enhance our efforts to increase inventory and order accuracy, and expand our global
                operations and logistics network to get closer to our customers to drive even better
                service and deliver profitable growth.”</p>
              <h5>About Miriee Chang</h5>
              <p>Miriee Chang has been appointed Chief Operating Officer as of April 2023. She is an
                accomplished professional with over 24 years of experience in key leadership positions.
                With iHerb, she has held roles such as Executive Vice President, Business
                Development & Global Logistics, Chief Operating Officer of iHerb Logistics, and Senior
                Vice President of iHerb Logistics Vice President Global Logistics. Prior to joining iHerb,
                Mrs. Chang served as Worldwide Account Manager at FedEx Express. She has a BS
                from California State University, Los Angeles. </p>
              <h5>About iHerb</h5>
              <p>Trusted by over 10M customers annually in over 180 countries, iHerb empowers people
                to enhance their health, happiness and well-being. As a multi-billion dollar eCommerce
                platform, we are on a mission to offer our customers earth’s best selection of health
                and wellness products at the best possible value, delivered with the most convenient
                experience. We believe health and wellness should not be a privilege but a universal
                right made possible through compassion and our collective action – and everyone, no
                matter who they are or where they are, should have easy access to products that will
                help them live their healthiest, best life. <a href=""> https://www.iherb.com/</a> </p>
              <a href="" className='btn btn-outline-success mb-4'>Read more</a>
            </div>


            <div className='Chief-Operating-Officer-cards-section  Chief-Operating-Officer-cards-section-for-mobil-block-sec'>

              <div className="card border-0" style={{ width: "100%" }}>




                <div className="row g-0 d-flex">
                  <div className="col-md-4 cheif-cards">
                    <img src={cheif} className="img-fluid rounded-start mt-3" alt="Image" />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <p className='fs-cs-1'>May 03, 2023</p>
                      <p className="card-text fs-cs-1 " style={{ color: "#222222" }}>iHerb Names Miriee Chang as Chief Operating
                        Officer</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card border-0" style={{ width: "100%" }}>
                <div className="row g-0 d-flex">
                  <div className="col-md-4 cheif-cards">
                    <img src={cheif} className="img-fluid rounded-start mt-3" alt="Image" />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <p className='fs-cs-1'>May 03, 2023</p>
                      <p className="card-text fs-cs-1 " style={{ color: "#222222" }}>iHerb Names Miriee Chang as Chief Operating
                        Officer</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card border-0" style={{ width: "100%" }}>
                <div className="row g-0 d-flex">
                  <div className="col-md-4 cheif-cards">
                    <img src={cheif} className="img-fluid rounded-start mt-3" alt="Image" />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <p className='fs-cs-1'>May 03, 2023</p>
                      <p className="card-text fs-cs-1 " style={{ color: "#222222" }}>iHerb Names Miriee Chang as Chief Operating
                        Officer</p>
                    </div>
                  </div>
                </div>
              </div>


              <a href="" className='btn btn-outline-success fs-cs-1   ' style={{ width: "100&" }}> View all press releases </a>
            </div>








            {/* for mobile */}

            <div className="Chief-Operating-Officer-cards-section  Chief-Operating-Officer-cards-section-for-mob mt-5" >

              <div className="Chief-Operating-Officer-cards-for-mob mt-5  " >
                <div className="Chief-cards-images">
                  <img src={cheif} alt="" />
                  <div>
                    <p className="Chief-Operating-cards-text-mob">May 03, 2023</p>
                    <h5 className="Chief-Operating-cards-text-mob-h5">wallHerb Names Miriee Chang as Chief Operating Officer </h5>
                  </div>
                </div>
              </div>
              <hr />


              <div className="Chief-Operating-Officer-cards-for-mob  " >
                <div className="Chief-cards-images">
                  <img src={cheif} alt="" />
                  <div>
                    <p className="Chief-Operating-cards-text-mob">May 03, 2023</p>
                    <h5 className="Chief-Operating-cards-text-mob-h5">wallHerb Names Miriee Chang as Chief Operating Officer </h5>
                  </div>
                </div>
              </div>
              <hr />

              <a href="" className='btn btn-success fs-cs-1 ' style={{ width: "50%", background: "white", color: "#458500" }}> View all press releases </a>

            </div>

            {/* for mobile */}


          </div>
        </section>


        {/* Global Responsibility */}

        <div className="container-fluid py-3 Global-rs-bg mt-5   ">
          <div className="d-flex   flex-column flex-md-row py-2 ">
            <div className="p-2  align-self-center ">

              <span className=""><img className="pe-2" style={{ height: "2rem" }} src={WorldIco} /></span>
              <h3 className="d-inline fs-cs-3  ">
                Global Responsibility</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. In pariatur consequatur illo corrupti alias ipsa consequuntur
                nisi, rerum architecto neque expedita laudantium
                reprehenderit quidem </p>
            </div>
            <div className="px-2 py-1 mb-1 mb-sm-0 w-100 text-center  rounded-3  lh-sm mx-1  Global-rs-img text-light d-flex flex-column justify-content-between ">
              <h4 className="fs-cs-3 py-3">Sustainability</h4>
              <p>
                Through a number of ongoing eco-
                friendly initiatives, we are committed
                to the reduction of our carbon
                footprint. In our workplaces, products,
                and shipping, we strive to integrate
                the best sustainable practices, while
                maintaining the highest quality of
                standards for our customers.
              </p>
              <button className=" mx-auto w-auto px-2 py-1 bg-transparent border-1 text-light border-light">Read more</button>
            </div>
            <div className="px-2 py-1 w-100 text-center  rounded-3 mx-1  Global-rs-img text-light d-flex flex-column justify-content-between ">
              <h4 className="fs-cs-3 py-3">Philanthropy</h4>
              <p className="">We are currently involved in various
                educational projects in Cambodia,
                including the building and running of
                two new schools, as well as the
                promotion of childrens education
                through the Cambodian Childrens
                Fund and New Hope Cambodia.</p>
              <button className="mx-auto px-2 py-1 w-auto bg-transparent border-1 text-light border-light">Learn more</button>
            </div>

          </div>


        </div>





        <div className='Culture-section container-lg mt-5'>
          <div className='Culture-section-img'>
            <img src={cul} alt="" />
          </div>
          <div className='Culture-section-texts mt-5'>
            <h5>Culture</h5>
            <p>At iHerb, our culture is based on shared values that unite our organization
              worldwide. These values speak to who we are, the culture we’re building,
              and how every single team member contributes to our larger company
              mission. Because we believe that everyone’s voice is powerful and
              essential, we strongly emphasize personal growth and development,
              collaboration, engagement, and teamwork.</p>
            <a href="#" className='btn btn-outline-success'>View iHerb Careers</a>
          </div>
        </div>



        <div className='iHerb-Shared-Values-section container-lg mt-5'>
          <h4>iHerb Shared Values</h4>

          <img src={corlastimg} alt="" className="mt-5" />
        </div>

        <div className='corporate-footer mt-5' style={{ background: "#222222" }}>

          <section className='container-lg '>

            <div className="container text-center text-md-start mt-5 ">
              <div className="row mt-3 ">



                <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4 cor-ftr-for-desk">

                  <h6 className="text-uppercase fw-bold text-light fs-cs-1 mt-5">iHerb | CORPORATE</h6>


                </div>

                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4 cor-ftr-for-desk">

                  <h6 className="text-uppercase fw-bold text-light fs-cs-1 mt-5">About Us</h6>

                  <p>
                    <a href="#!" className=" text-light text-decoration-none fs-cs-1">press</a>
                  </p>

                </div>

                <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4 text-dark cor-ftr-for-desk">

                  <h6 className="text-uppercase fw-bold text-light text-decoration-none fs-cs-1 mt-5">Global Responsibility</h6>

                  <p >
                    <a href="#!" className="text-secondary text-decoration-none text-light ">Careers</a>
                  </p>
                </div>
                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4 cor-ftr-for-desk">

                  <a href="" className='btn btn-outline-light fs-cs-1 mt-5'>Shop iHerb.com</a>



                </div>


                {/* for mobile */}

                <div className="text-light cor-ftr-for-mob">

                  <div className="cor-ftr-for-mob-text-for-mob"> <h3>walHerb | CORPORATE</h3>  </div>
                  <div className="cor-ftr-for-mob-text-for-mob"><h4>About Us</h4></div>
                  <div className="cor-ftr-for-mob-text-for-mob"><h4>Press</h4></div>
                  <div className="cor-ftr-for-mob-text-for-mob"><h4>Global Responsibility</h4></div>
                  <div className="cor-ftr-for-mob-text-for-mob"><h4>Careers</h4></div>

                  <div >
                    <a href="" className='btn btn-outline-light fs-cs-1 '>Shop iHerb.com</a>
                  </div>


                </div>


                {/* for mobile */}



                <div className="social-buttons social-buttons-cor-footer-for-mob " style={{ background: "#222222" }}>
                  <a href="#" className="social-button github ">
                    <img src={facebook} alt="" />
                  </a>
                  <a href="#" className="social-button github" >
                    <img src={twitter} alt="" />
                  </a>
                  <a href="#" className="social-button github" >
                    <img src={youtube} alt="" />
                  </a>
                  <a href="#" className="social-button github" >
                    <img src={pin} alt="" />
                  </a>
                  <a href="#" className="social-button github" >
                    <img src={insta} alt="" />
                  </a>
                </div>


                <div className='corporate-footer-last-links mt-2 fs-cs-2 container-lg mb-5'>
                  <a href=""> Privacy Policy</a>
                  <a href=""> | Supply Chains Act </a>
                  <a href=""> | Terms of Use </a>
                  <a href=""> | Accessibility </a>
                  <a href=""> | California: Privacy </a>
                  <a href=""> | Do Not Sell My Personal Information </a>

                </div>

              </div>
            </div>
          </section>
        </div>
      </section>
    </>
  )
}

export default Corporate