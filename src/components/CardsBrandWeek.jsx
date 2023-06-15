import { slide2 } from '../utils/data'

function CardsBrandWeek() {
  return (<div className='conatiner  w-100 px-3 py-2 '>
    <div className='d-flex  mx-auto overflow-scroll '>
      {slide2.map((item, index) => {
        return (
        <div key={index} className='mx-2' >
          <img src={item.img} alt='brand images'/>

        </div>)
      })}

    </div>
  </div>
  )
}

export default CardsBrandWeek