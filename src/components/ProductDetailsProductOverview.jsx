import React from 'react'
import styles from '../styles/ProductDetailsStyle/product-detail-product-overview.module.scss'

const ProductDetailsProductOverview = () => {
  return (
    <div className="mx-3">
      <div className={styles.mainBox}>
        <div className={styles.QAH1}>Product overview</div>
      </div>

      <div class="container">
        <div class="row justify-content-start">
          <div class="col-8">
            <div className="pe-2 pt-2">
              <div className={styles.descH1}>Description</div>
              <div className={styles.descLi}>
                <ul>
                  <li>
                    <div>
                      <i>California Gold Nutrition</i>{' '}
                      <span className={styles.boldFont1}>Gold C™, 1000 mg</span>
                    </div>
                  </li>
                  <li>
                    <div>Featuring USP-Grade Vitamin C</div>
                  </li>
                  <li>
                    <div>Helps Support Immune Health and Overall Wellness*</div>
                  </li>
                  <li>
                    <div>Suitable for Vegetarians</div>
                  </li>
                  <li>
                    <div>Formulated without Gluten, GMOs, or Soy</div>
                  </li>
                  <li>
                    <div>
                      Produced in a 3rd Party Audited cGMP Registered
                      (Certified) Facility
                    </div>
                  </li>
                  <li>
                    <div>100% Gold Guarantee</div>
                  </li>
                </ul>
              </div>

              <div className={`mt-2 ${styles.para1}`}>
                Vitamin C is a well-known essential vitamin that you must get
                from your daily diet, as your body is unable to produce it.{' '}
                <i>California Gold Nutrition</i>
                <span className={styles.boldFont1}>Gold C™ </span> contains a
                powerful dose of this vitamin, helping to ensure you get your
                recommended daily amount in one easy step.
              </div>

              <div className={`mt-2 ${styles.para1}`}>
                <div>
                  <i>Benefits of Gold C™ Vitamin C</i>
                </div>
                Our<span className={styles.boldFont1}>Gold C™ </span> is
                formulated with high quality vitamin C that is triple quality
                tested to ensure that it meets or exceeds strict quality
                standards. Taking a daily vitamin C supplement, like
                <span className={styles.boldFont1}>Gold C™ </span>, may provide
                numerous health benefits, as this nutrient is known for its
                antioxidant properties. It has even been shown to help
                regenerate other antioxidants within the body.* In addition,
                vitamin C plays an important role in immune function, which may
                help to further promote overall wellness.*
              </div>

              <div className={`mt-2 ${styles.para1}`}>
                <i>California Gold Nutrition</i>
                <span className={styles.boldFont1}>Gold C™ </span> features USP
                Grade vitamin C (as ascorbic acid) in veggie capsules. This
                supplement is suitable for vegetarians and formulated without
                gluten, GMOs, or soy.
              </div>

              <div>
                <div className={`mt-5 mb-2 ${styles.title2}`}>iHerb Blog:</div>

                <div className={styles.blueFont1}>
                  <div>9 Health Benefits of Vitamin C</div>
                  <div className="mt-1">
                    What is Ascorbic Acid (Vitamin C)? Benefits, Supplements,
                    and More
                  </div>
                  <div className="mt-1">
                    Buffered vs Unbuffered Vitamin C: What Are the Benefits?
                  </div>
                </div>

                <div className={`mt-5 mb-2 ${styles.title2}`}>
                  Third-Party Tested
                </div>

                <div className={`mt-2 ${styles.para1}`}>
                  Our products undergo quality testing where they are evaluated
                  by an independent ISO-certified lab using scientifically-
                  validated test methods to ensure authenticity, purity, and
                  potency of ingredients. For added transparency, we make the
                  results available to you in our iTested Verified Reports so
                  you can see for yourself.
                </div>

                <div
                  style={{ fontWeight: '700' }}
                  className={`mt-2 ${styles.para1}`}
                >
                  Check out the{' '}
                  <span className={styles.blueFont1}>iTested Report</span> for
                  this product to see the analysis.
                </div>
              </div>

              <div>
                <div className={`mt-5 mb-2 ${styles.title2}`}>
                  Suggested use
                </div>
                <div className={`mt-2 ${styles.para1}`}>
                  Take 1 capsule daily, with or without food. Best when taken as
                  directed by a qualified healthcare professional.
                </div>
              </div>

              <div>
                <div className={`mt-5 mb-2 ${styles.title2}`}>
                  Other ingredients
                </div>

                <div>
                  <div
                    style={{ fontWeight: '700' }}
                    className={`mt-2  ${styles.para1}`}
                  >
                    Main Ingredients
                  </div>
                  <div className={`mt-2  ${styles.para1}`}>
                    {' '}
                    Vitamin C (as ascorbic acid).
                  </div>
                </div>
                <div>
                  <div
                    style={{ fontWeight: '700' }}
                    className={`mt-2  ${styles.para1}`}
                  >
                    Other Ingredients
                  </div>
                  <div className={`mt-2 mb-3  ${styles.para1}`}>
                    {' '}
                    Hydroxypropyl Methylcellulose (Veggie Capsule) and Magnesium
                    Stearate.
                  </div>
                </div>

                <div className={`mt-2 ${styles.para1}`}>
                  This product is not manufactured with milk, eggs, fish,
                  crustacean shellfish, tree nuts, peanuts, wheat, soy or
                  gluten. Produced in a third-party, audited and registered cGMP
                  compliant facility that may process other products that
                  contain these allergens or ingredients.
                </div>
              </div>

              <div>
                <div className={`mt-5 mb-2 ${styles.title2}`}>Warnings</div>
                <div className={`mt-2 ${styles.para1}`}>
                  <div>
                    Keep out of the reach of children. Consult with a licensed
                    physician, pharmacist, naturopath or other qualified
                    healthcare professional prior to taking dietary supplements.
                  </div>
                  <div className="mt-2">
                    Sealed for your protection. Do not use if seal is missing or
                    broken. Best stored at controlled room temperature 20°C to
                    25°C (68°F to 77°F). Improper storage conditions, such as
                    extended exposure to direct sunlight, high heat & humidity
                    can cause product degradation over time.
                  </div>
                  <div className="mt-2">
                    Aroma, color, consistency and taste may vary. Color shift is
                    normal and cannot be avoided.
                  </div>
                </div>
              </div>

              <div>
                <div className={`mt-5 mb-2 ${styles.title2}`}>Disclaimer</div>
                <div className={`mt-2 ${styles.para1}`}>
                  While iHerb strives to ensure the accuracy of its product
                  images and information, some manufacturing changes to
                  packaging and/or ingredients may be pending update on our
                  site. Although items may occasionally ship with alternate
                  packaging, freshness is always guaranteed. We recommend that
                  you read labels, warnings and directions of all products
                  before use and not rely solely on the information provided by
                  iHerb.
                </div>
              </div>
              <div className={`mt-4 ${styles.blueFont1}`}>
                Visit manufacturer's website
              </div>
            </div>
          </div>
          <div class="col-4 mt-2">
            <div className={styles.table2H1}>Supplement Facts</div>
            <div className={styles.table2H2}>
              Serving Size:{' '}
              <span style={{ fontWeight: '400', marginLeft: '3px' }}>
                1 Capsule
              </span>
            </div>
            <div className={styles.table2H1}>
              Servings Per Container:{' '}
              <span style={{ fontWeight: '400', marginLeft: '3px' }}> 60</span>
            </div>
            <div className={styles.table2H3}>
              <div className="d-flex align-items-baseline">
                <div>
                  <div>Amount</div>
                  <div>Per</div>
                  <div>Serving</div>
                </div>
                <div className="ms-3 ">
                  <div>%Daily</div>
                  <div>Value</div>
                </div>
              </div>
            </div>
            <div
              style={{ fontWeight: '400' }}
              className={`d-flex justify-content-between ${styles.table2H1}`}
            >
              <div>Vitamin C (as Ascorbic Acid)</div>
              <div className="d-flex">
                <div>1,000 mg</div>
                <div className=" ms-2">1,111%</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetailsProductOverview
