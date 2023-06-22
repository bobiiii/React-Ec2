// import React from 'react'
import { slide1 } from "../utils/data"
import wallHerb from "../images/walHerb.png"
import rewind from "../images/reqind.png"
import pause from "../images/pause.png"
import LiveQMark from "../images/LiveQMark.png"
import Live from "../images/Live.png"
function CardBoxLive() {
  return (
        < div className="live-box d-flex flex-column align-items-center m-2">
        <div className="d-flex justify-content-between w-100 pt-2 px-3 ">
            <div className="ps-2">
              <img className="mx-1" src={wallHerb} alt="wallHerb"/>
              <img className="mx-1" src={Live} alt="wallHerb"/>
              <img src={LiveQMark} alt="wallHerb"/>
            </div>
            <div className="">
            <img className=" mx-1 " src={pause} alt="wallHerb"/>
            <img src={rewind} alt="wallHerb"/>
            </div>
        </div>
          <div  className="carousel live-box carousel-dark slide" data-bs-interval="false" data-bs-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="card-wrapper card-wrapper-cs  container-fluid d-flex   ">
                  {slide1.map((item, index) => {
                    return (<div key={index} className="w-100 mt-2 live-cards   ">
                      <div className="card d-flex justify-content-center  mx-3 card-cont" key={index} >
                        <img src={item.img} className="align-self-center h-50 pt-1" alt="..." />
                        <div className="card-body px-2 py-1    ">
                          <h5 className="card-title fs-cs-1  ">{item.title}</h5>
                          <div className="d-flex ">
                            <div>
                            <i className="bi bi-star"></i>
                            <i className="bi bi-star"></i>
                            <i className="bi bi-star"></i>
                            <i className="bi bi-star"></i></div>
                            <div><span> &nbsp; {item.rating}</span></div>
                          </div>
                          <div className="d-flex ">
                            
                            
                            <h6 className="fs-cs-2 py-1 mb-0 justify-content-center ">{item.newPrice}</h6>
                          </div>
    
                        </div>
                      </div>
                      <h6 className="text-center "> Country</h6>
    
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