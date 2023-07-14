import React from 'react'
import Img1 from "../images/164.png"

const RecentlyViewed = () => {
  return (
    <div className='p-3 mt-2'>
        <div className='fs-cs-2 mb-4 mt-3 ' style={{fontWeight :"600"}}>Recently viewed</div>
        {/* <div className='border-bottom mb-3'></div> */}

        <div className='d-flex flex-wrap  '>
            <div className=''><img src={Img1} alt="" width={63} height={73} style={{mixBlendMode: "multiply"}} /></div>
            <div className='ms-2'><img src={Img1} alt="" width={63} height={73} style={{mixBlendMode: "multiply"}}/></div>
        </div>
    </div>
  )
}

export default RecentlyViewed