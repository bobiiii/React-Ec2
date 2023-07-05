import React from 'react'
import ProductImage from '../images/ProductDetail/164.png'
import Customerscards from './Customerscards'
import WallHerbLive from './WallHerbLive'
import sale1 from '../images/sale1.png'
import sale2 from '../images/sale2.png'
import sale3 from '../images/sale3.png'
import sale4 from '../images/sale4.png'
import sale5 from '../images/sale5.png'
import sale6 from '../images/sale6.png'
import Productsimgs from '../components/Productsimgs'
import styles from '../styles/ProductDetailsStyle/product-detail-QA.module.scss'
import Button from '@mui/material/Button'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Fade from '@mui/material/Fade'
import { ArrowDownwardOutlined, KeyboardArrowDown } from '@mui/icons-material'
import ComboImg1 from '../images/218.jpg.svg'
import ComboImg2 from '../images/164.jpg.svg'
import { Rating } from '@mui/material'
import P_Detail_QA_Card from './P_Detail_QA_Card'

const ProductDetailQA = () => {
  return (
    <div>
      <div className={styles.QAH1}>Questions and Answers</div>
      <div className="d-flex mt-2">
        <div className={styles.QASubtitle}>
          Answers posted solely reflect the views and opinions expressed by the
          contributors and not those of iHerb. iHerb does not verify or e
        </div>
        <span className={styles.QAShowmore}> Show more</span>
      </div>
      <div className="d-flex mt-3">
        <div class="input-group" style={{ width: '50%' }}>
          <input
            type="text"
            class="form-control border-end-0"
            placeholder="Search"
            aria-label="from"
            aria-describedby="from"
          />
          <span class="input-group-text bg-transparent">
            <i class="bi bi-search"></i>
          </span>
        </div>

        <div className="" style={{ width: '20%', marginLeft: '10px' }}>
          <select
            class="form-select form-floating"
            aria-label="Default select example"
            style={{ height: '48px' }}
          >
            <option selected>All</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>
        <div style={{ width: '20%', marginLeft: '10px' }}>
          <select
            class="form-select form-floating"
            aria-label="Default select example"
            style={{ height: '48px' }}
          >
            <option selected>Most Relevant</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>

        <button
          className={`btn ${styles.btnQuestion} `}
          style={{ marginLeft: '10px' }}
          variant="outlined"
        >
          Ask a question
        </button>
      </div>

      <div className="mt-3">
        <P_Detail_QA_Card />
      </div>
    </div>
  )
}

export default ProductDetailQA
