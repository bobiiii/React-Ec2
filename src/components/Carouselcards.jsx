import React from 'react'
import { slide1 } from "../utils/data"
function Carouselcards() {
  return (
    <>
      <div id="carouselExampleControlsSS" className="carousel carousel-dark slide" >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="card-wrapper container-fluid d-flex  ">
              {slide1.map((item, index) => {
                return (<>
                  <div className="card  py-2" key={index} >
                    <img src={item.img} className="card-img-top w-75 h-25  mx-auto" alt="..." />
                    <div className="card-body d-flex flex-column justify-content-end">
                      <h5 className="card-title fs-5">{item.title}</h5>
                      <div className="d-flex ">
                        <div>
                        <i className="bi bi-star"></i>
                        <i className="bi bi-star"></i>
                        <i className="bi bi-star"></i>
                        <i className="bi bi-star"></i></div>
                        <div><span> &nbsp; {item.rating}</span></div>
                      </div>
                      <div className="d-flex">
                        <h6 className="text-danger fs-5">{item.oldPrice}</h6>
                        <h6 className="fs-5">{item.newPrice}</h6>
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
                        <h6 className=" px-2 text-danger fs-5">{item.oldPrice}</h6>
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
    </>
  )
}

export default Carouselcards