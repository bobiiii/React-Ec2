// import bottle from "../images/32.png"
import Carouselcards from "./Carouselcards"
import {slide1} from "../utils/data"



function Speacials() {
  return (
    <>
      <div className='speacilsSection container-fluid'>
        <br />
        <div className='speacilsSectionWrap container-fluid '>
          <div className='SpecialsTextstyle'> Specials </div>
          <div> <button type="button" className="btn btn-success">View All</button> </div>
        </div>
      </div>


      <div id="carouselExampleControlsSS" className="carousel carousel-dark slide" data-bs-interval="false" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="card-wrapper container-fluid d-flex  ">
              {slide1.map((item, index) => {
                return (<>
                  <div className="card py-2 " key={index} >
                    <img src={item.img} className=" align-self-center w-75 h-50" alt="..." />
                    <div className="card-body d-flex flex-column justify-content-between">
                      <h5 className="card-title fs-cs-3 ">{item.title}</h5>
                      <div className="d-flex">
                        <div>
                        <i className="bi bi-star"></i>
                        <i className="bi bi-star"></i>
                        <i className="bi bi-star"></i>
                        <i className="bi bi-star"></i></div>
                        <div><span> &nbsp; {item.rating}</span></div>
                      </div>
                      <div className="d-flex">
                        <h6 className="text-danger fs-cs-2">{item.oldPrice}</h6>
                        <h6 className="fs-cs-2">{item.newPrice}</h6>
                      </div>

                    </div>
                  </div>

                </>)
              })}



              {/* <div className="card  " >
  <img src={bottle} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    
  </div>
</div>
<div className="card" >
  <img src={bottle} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    
  </div>
        </div>
        <div className="card" >
  <img src={bottle} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    
  </div>
</div>
<div className="card" >
  <img src={bottle} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    
  </div>
</div>
<div className="card" >
  <img src={bottle} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    
  </div>
</div>
<div className="card" >
  <img src={bottle} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    
  </div>
</div> */}
            </div>
          </div>
          <div className="carousel-item">
            <div className="card-wrapper container-fluid d-flex   ">
              {slide1.map((item, index) => {
                return (<>
                  <div className="card " key={index} >
                    <img src={item.img} className="card-img-top w-100 h-50" alt="..." />
                    <div className="card-body">
                      <h5 className="card-title">{item.title}</h5>
                      <div className="d-flex">
                        <h6 className=" px-2 text-danger fs-5">{item.oldPrice}</h6>
                        <h6 className="fs-5">{item.newPrice}</h6>
                      </div>

                    </div>
                  </div>

                </>)
              })}
            </div>
          </div>
          <div className="carousel-item">
            <div className="card-wrapper container-fluid d-flex  ">
              {slide1.map((item, index) => {
                return (<>
                  <div className="card " key={index} >
                    <img src={item.img} className="card-img-top w-100 h-50" alt="..." />
                    <div className="card-body">
                      <h5 className="card-title">{item.title}</h5>
                      <div className="d-flex">
                        <h6 className=" px-2 text-danger fs-cs-1">{item.oldPrice}</h6>
                        <h6 className="fs-5">{item.newPrice}</h6>
                      </div>

                    </div>
                  </div>

                </>)
              })}
            </div>
          </div>
          <button className="carousel-control-prev " type="button" data-bs-target="#carouselExampleControlsSS" data-bs-slide="prev">
            <span className="carousel-control-prev-icon  " aria-hidden="true"></span>
            <span className="visually-hidden ">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControlsSS" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <Carouselcards></Carouselcards>

      <br />

    </>
  )
}

export default Speacials