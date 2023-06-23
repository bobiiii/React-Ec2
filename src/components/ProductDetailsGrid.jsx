import ProductImage from "../images/ProductDetail/164.png"
import Customerscards from "./Customerscards"
import WallHerbLive from "./WallHerbLive"
import sale1 from "../images/sale1.png"
import sale2 from "../images/sale2.png"
import sale3 from "../images/sale3.png"
import sale4 from "../images/sale4.png"
import sale5 from "../images/sale5.png"
import sale6 from "../images/sale6.png"

function ProductDetailsGrid() {
    return (
        <>
        <div className="container-fluid">
            <div className="row ">
                <div className="col-lg-3 ">
                    <img src={ProductImage} className="w-100 py-2" alt="a" />
                    <div className="">
                        <img className="w-25" src={ProductImage} alt="a" />
                        <img className="w-25" src={ProductImage} alt="a" />
                        <img className="w-25" src={ProductImage} alt="a" />
                        <img className="w-25" src={ProductImage} alt="a" />
                        <img className="w-25" src={ProductImage} alt="a" />
                        <img className="w-25" src={ProductImage} alt="a" />
                    </div>
                </div>
                <div className="col-lg-6">
                    <div>
                        <span>Special</span>
                        <span>iHerb Brand</span>
                        <span>Tested</span>
                        <span>best Seller</span>

                    </div>
                    <h1 className="fs-cs-4">California Gold Nutrition, Gold C, USP Grade Vitamin C, 1,000 mg, 60
                        Veggie Capsules</h1>
                    <h3 className="fs-cs-1">BY California Gold Nutrition</h3>
                    <div className="d-flex">
                        <div>
                            <i className="bi bi-star"></i>
                            <i className="bi bi-star"></i>
                            <i className="bi bi-star"></i>
                            <i className="bi bi-star"></i></div>
                        <div><span> &nbsp; 35421</span></div>
                    </div>
                    <div className="my-2 border-top border-bottom">
                        <h4 className="text-success">In-Stock</h4>
                    </div>
                    <div className="potency">
                    <h3 className="fs-cs-3">Potency: 1000mg</h3>
                    <div className="d-flex">
                        <button className="bg-transparent px-3 py-2 rounded-3 border "> 500mg</button>
                        <button className="bg-transparent px-3 py-2 rounded-3 border "> 1000mg</button>
                        


                    </div>
                    </div>
                    <div className="package-count mt-2">
                    <h3 className="fs-cs-3">Package Quantity: 60 Count</h3>
                    <div className="d-flex">
                        <button className="bg-transparent  px-3 py-2 rounded-3 border "> 
                        <span className="d-block">Count 60</span>
                        <span className="text-danger  "> ₹417.96 &nbsp;</span>
                        ₹221.96
                        </button>
                        <button className="bg-transparent mx-2 px-3 py-2 rounded-3 border "> 
                        <span className="d-block">Count 60</span>
                        <span className="text-danger  "> ₹417.96 &nbsp;</span>
                        ₹221.96
                        </button>
                        
                        


                    </div>
                    </div>
                    <div className="product-info ">
                        <h5 className="fs-cs-2">Best By: December 2023</h5>
                        <h5 className="fs-cs-2">Date First Available: October 2014</h5>
                        <h5 className="fs-cs-2">Shipping Weight: 0.09kg</h5>
                        <h5 className="fs-cs-2">Product Code: BAC123 </h5>
                        <h5 className="fs-cs-2">UPC Code: 123s4sda</h5>
                        <h5 className="fs-cs-2">Package Quantity</h5>
                        <h5 className="fs-cs-2">Dimensions: 9.7 x 5.3x 5.3cm</h5>
                        <h5 className="fs-cs-3">Try Risk free for 90 days</h5>
                    </div>



                </div>
                <div className="col-lg-3">
                    Column
                </div>
            </div>




   
   <Customerscards></Customerscards>



        </div>



  <WallHerbLive></WallHerbLive>




  <div className='sale-last-section sale-last-section-for-mobile container-fluid ' style={{ background: " #F5F5F5" }}>

<div className="card mt-2  " style={{ width: "12rem", background: " #F5F5F5", border: "none" }}>
    <img src={sale1} className="card-img-top" alt="..." />
    <div className="card-body">
        <p className="card-text text-center" style={{ fontSize: "13px" }}>The Best Natural Remedies for</p>
    </div>
</div>
<div className="card mt-2 " style={{ width: "12rem", background: " #F5F5F5", border: "none" }}>
    <img src={sale2} className="card-img-top" alt="..." />
    <div className="card-body">
        <p className="card-text text-center" style={{ fontSize: "13px" }}>The Best Foods and Supplements for Natural </p>
    </div>
</div>
<div className="card mt-2" style={{ width: "12rem", background: " #F5F5F5", border: "none" }}>
    <img src={sale3} className="card-img-top" alt="..." />
    <div className="card-body">
        <p className="card-text text-center" style={{ fontSize: "13px" }}>Psychodermatology: Why
            Researchers Think the Mind-
        </p>
    </div>
</div>
<div className="card mt-2" style={{ width: "12rem", background: " #F5F5F5", border: "none" }}>
    <img src={sale4} className="card-img-top" alt="..." />
    <div className="card-body">
        <p className="card-text text-center" style={{ fontSize: "13px" }}>Stress-Related Hair Loss +
            Natural Solutions to Promote</p>
    </div>
</div>
<div className="card mt-2" style={{ width: "12rem", background: " #F5F5F5", border: "none" }}>
    <img src={sale5} className="card-img-top" alt="..." />
    <div className="card-body">
        <p className="card-text text-center" style={{ fontSize: "13px" }}>Dry brushing: What It Is +
            Unexpected Health </p>
    </div>
</div>
<div className="card mt-2 " style={{ width: "12rem", background: " #F5F5F5", border: "none" }}>
    <img src={sale6} className="card-img-top" alt="..." />
    <div className="card-body">
        <p className="card-text text-center" style={{ fontSize: "13px" }}>How Spices Combat
            Inflammation and </p>
    </div>
</div> 
                     

</div>


        </>
  
   



    )
}

export default ProductDetailsGrid