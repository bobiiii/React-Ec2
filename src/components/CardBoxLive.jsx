// import React from 'react'
import { slide1 } from "../utils/data"
function CardBoxLive() {
  return (
        < div className="live-box d-flex flex-column align-items-center ">
        <div className="pt-2"
        
        >
            <h4>walHerb</h4>
        </div>
          <div  className="carousel live-box carousel-dark slide" data-bs-interval="false" data-bs-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="card-wrapper  container-fluid d-flex  ">
                  {slide1.map((item, index) => {
                    return (<div key={index} className="mt-2 live-cards   ">
                      <div className="card h-75 w-75 pt-2 pb-3  mx-auto    card-cont" key={index} >
                        <img src={item.img} className="align-self-center h-75" alt="..." />
                        <div className="card-body  d-flex flex-column justify-content-between">
                          <h5 className="card-title fs-cs-1  ">{item.title}</h5>
                          <div className="d-flex">
                            <div>
                            <i className="bi bi-star"></i>
                            <i className="bi bi-star"></i>
                            <i className="bi bi-star"></i>
                            <i className="bi bi-star"></i></div>
                            <div><span> &nbsp; {item.rating}</span></div>
                          </div>
                          <div className="d-flex">
                            
                            
                            <h6 className="fs-cs-2 py-1 ">{item.newPrice}</h6>
                          </div>
    
                        </div>
                      </div>
                      <h6 className="text-center pt-2"> Country</h6>
    
                    </div>)
                  })}
    
    
    
                </div>
              </div>
            </div>
          </div>
          
    
        </div>
      )
    }
    
    export default CardBoxLive