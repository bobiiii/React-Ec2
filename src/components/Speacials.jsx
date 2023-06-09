import React from 'react'

function Speacials() {
  return (
   <>
   
    <br />
    <div className='speacilsSection'>
        <br />
        <div className='speacilsSectionWrap container-fluid '>
            <div className='SpecialsTextstyle'> Specials </div>
            <div> <button type="button" className="btn btn-success">View All</button> </div>
        </div>


            <div className='cardscontainer container-fluid'>
                   <div className='cardsbody'>
  <div class="cardsbody">
    <div class="row ">
      <div class="col-md-12 col-lg-4 mb-4 mb-lg-0 ">
        <div class="card cardsbody ">
          <img src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/4.webp"
            class="card-img-top" alt="Laptop" />
          <div class="card-body">
            <div class="d-flex justify-content-between">
              <p class="small">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, consectetur.</p>
            </div>

            <div class="d-flex justify-content-between mb-3">
              <h5 class="mb-0">HP Notebook</h5>
              <h5 class="text-dark mb-0">$999</h5>
            </div>

            <div class="d-flex justify-content-between mb-2">
              <p class="text-muted mb-0">Available: <span class="fw-bold">6</span></p>
              <div class="ms-auto text-warning">
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>


                   </div>
            </div>

    </div>

    

   
   </>
  )
}

export default Speacials