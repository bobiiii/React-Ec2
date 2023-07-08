import SpecialOffer from './SpecialOffer'
import ProductDetailsGrid from './ProductDetailsGrid'
import { useMediaQuery } from '@mui/material'

function ProductDetail() {
  const matches = useMediaQuery('(min-width:1450px)')
  return (
    <div className={matches && 'container'}>
      <div className="mainhero">
        <div className="hero ">
          <div className="ms-5 ">
            <h4> 20% off Immunne Support! </h4>
          </div>
          <div>
            <button type="button" className="btn shopbtn mb-2">
              Shop Now
            </button>
          </div>
        </div>
        <div className="cruveclr"></div>

        <div className="hero2">
          <div className="ms-5">
            <h4> Up to 30% off Herbs & Splices! </h4>
          </div>
          <div>
            <button type="button" className="btn shopbtn mb-2">
              Shop Now
            </button>
          </div>
        </div>
      </div>

      <div className="container-fluid mt-4">
        <div className="Brands-A-Z-cont">
          <a href="" className="text-decoration-none text-secondary">
            Brands A-Z{' '}
          </a>
          <a href="" className="text-decoration-none text-secondary">
            California Gold Nutrition
          </a>
        </div>

        <div className="Brands-A-Z-cont">
          <a href="" className="text-decoration-none text-secondary">
            Categories
          </a>
          <a href="" className="text-decoration-none text-secondary">
            Supplements
          </a>
          <a href="" className="text-decoration-none text-secondary">
            Vitamins
          </a>
          <a href="" className="text-decoration-none text-secondary">
            Vitamin C
          </a>
          <a href="" className="text-decoration-none text-secondary">
            Ascorbic Acid
          </a>
        </div>
        <div className="Brands-A-Z-cont">
          <a href="" className="text-decoration-none text-secondary">
            Categories
          </a>
          <a href="" className="text-decoration-none text-secondary">
            Health Topics
          </a>
          <a href="" className="text-decoration-none text-secondary">
            Common Cold & Flu
          </a>
        </div>
      </div>

      <SpecialOffer />
      <ProductDetailsGrid />
    </div>
  )
}

export default ProductDetail
