
import logoImage from "../images/logo.jpg"
import corimg from "../images/corimg.png"
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
        <div className='corporate-hero-image'>
          <img src={corimg} alt="" />
        </div>

        <div className='container-lg cor-our-mission'>
          <div className='cor-our-mission-wrap' >
            <h4>Our Mission</h4>
            <p className='text-center'>iHerb is on a mission to make health and wellness accessible to all.</p>
            <p className='text-center'>Since our founding in 1996, we have been dedicated to offering Earth’s best-curated selection of health and wellness products, at the best possible value,
              delivered with the most convenient experience. We believe that health and wellness should be a universal right made possible through compassion and our
              collective action. This belief will continue to guide us as we endeavor to make our mission a reality.</p>
          </div>
        </div>


       <div className='container-lg mt-5'>
          hello
       </div>




      </section>
    </>
  )
}

export default Corporate