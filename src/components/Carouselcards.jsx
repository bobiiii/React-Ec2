// import React from 'react'
import { slide1 } from "../utils/data"
function Carouselcards() {
  return (
        <>
          <div id="carouselExampleControlsSS" className="carousel carousel-dark slide" data-bs-interval="false" data-bs-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="card-wrapper card-wrapper-cs  container-fluid d-flex  ">
                  {slide1.map((item, index) => {
                    return (<>
                      <div className="card  pt- 2 card-cont" key={index} >
                        <img src={item.img} className="align-self-center h-50" alt="..." />
                        <div className="card-body d-flex flex-column justify-content-between">
                          <h5 className="card-title fs-cs-2 ">{item.title}</h5>
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
                            &nbsp; 
                            <h6 className="fs-cs-2">{item.newPrice}</h6>
                          </div>
    
                        </div>
                      </div>
    
                    </>)
                  })}
    
    
    
                </div>
              </div>
              <div className="carousel-item ">
                <div className="card-wrapper card-wrapper-cs  container-fluid d-flex  ">
                  {slide1.map((item, index) => {
                    return (<>
                      <div className="card pt-2 card-cont" key={index} >
                        <img src={item.img} className="align-self-center h-50" alt="..." />
                        <div className="card-body d-flex flex-column justify-content-between">
                          <h5 className="card-title fs-cs-2 ">{item.title}</h5>
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
                            &nbsp; 
                            <h6 className="fs-cs-2">{item.newPrice}</h6>
                          </div>
    
                        </div>
                      </div>
    
                    </>)
                  })}
    
    
    
                </div>
              </div>
              <div className="carousel-item ">
                <div className="card-wrapper card-wrapper-cs   container-fluid d-flex  ">
                  {slide1.map((item, index) => {
                    return (<>
                      <div className="card pt-2 card-cont" key={index} >
                        <img src={item.img} className="align-self-center h-50" alt="..." />
                        <div className="card-body d-flex flex-column justify-content-between">
                          <h5 className="card-title fs-cs-2 ">{item.title}</h5>
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
                            &nbsp; 
                            <h6 className="fs-cs-2">{item.newPrice}</h6>
                          </div>
    
                        </div>
                      </div>
    
                    </>)
                  })}
    
    
    
                </div>
              </div>
              
              <button className="carousel-control-prev  " type="button" data-bs-target="#carouselExampleControlsSS" data-bs-slide="prev">
                <span className="carousel-control-prev-icon arrow-carousel   " aria-hidden="true"></span>
                <span className="visually-hidden  ">Previous</span>
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