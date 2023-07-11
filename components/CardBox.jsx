// import React from 'react'
import Image from "next/image"
import { slide1 } from "../utils/data"

function CardBox() {
  return (
        <>
          <div  className="carousel carousel-dark slide mx-2" data-bs-interval="false" data-bs-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="card-wrapper  overflow-scroll  card-wrapper-cs   container-fluid d-flex  ">
                  {slide1.map((item, index) => {
                    return (<>
                      <div className="card  mx-2 pt-2 card-cont" key={index} >
                        <Image src={item.img} className="align-self-center " style={{height: "8rem"}} alt="..." />
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
            </div>
          </div>
          
    
        </>
      )
    }
    
    export default CardBox