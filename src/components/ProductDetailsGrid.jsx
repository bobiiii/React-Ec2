import ProductImage from "../images/ProductDetail/164.png"

function ProductDetailsGrid() {
    return (
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
        </div>
    )
}

export default ProductDetailsGrid