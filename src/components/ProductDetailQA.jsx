import React from 'react'
import styles from '../styles/ProductDetailsStyle/product-detail-QA.module.scss'
import P_Detail_QA_Card from './P_Detail_QA_Card'
import TuneIcon from '@mui/icons-material/Tune'

const ProductDetailQA = () => {
  return (
    <div>
      <div className="mx-4">
        <div className={styles.QAH1}>Questions and Answers</div>
        <div className="d-md-flex mt-2">
          <div className={styles.QASubtitle}>
            Answers posted solely reflect the views and opinions expressed by
            the contributors and not those of iHerb. iHerb does not verify or e
          </div>
          <span className={styles.QAShowmore}> Show more</span>
        </div>
        <div className="d-flex mt-3">
          <div className={`input-group ${styles.searchBar}`}>
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

          <div
            className={styles.selectFlex}
            style={{ width: '20%', marginLeft: '10px' }}
          >
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
          <div
            className={styles.selectFlex}
            style={{ width: '20%', marginLeft: '10px' }}
          >
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
          <button
            className={`btn ${styles.btnFilter} `}
            style={{ marginLeft: '10px', width: '50px' }}
            variant="outlined"
          >
            <TuneIcon />
          </button>
        </div>
      </div>

      <div className=" mx-1 mt-3">
        <P_Detail_QA_Card />
      </div>
    </div>
  )
}

export default ProductDetailQA
