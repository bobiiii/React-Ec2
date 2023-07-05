/* eslint-disable react/prop-types */
import {useState} from 'react'
import ReactPaginate from 'react-paginate';
import { slide1 } from '../../utils/data';


const items = slide1
      function Items({ currentItems }) {
        return (
          <>
            {currentItems &&
              currentItems.map((itemm, i) => {
                return(<div key={i}>
                  <div className="card w-100  " style={{height: "16rem"}}>
          <img src={itemm.img} className="card-img-top w-50 mx-auto pt-3" alt="..."/>
          <div className="card-body d-flex flex-column justify-content-center  pb-0   " style={{height:"16rem"}}>
            <h5 className="card-title fs-cs-1 flex-grow-1 mb-auto ">{itemm.title}</h5>
            <div className="fs-cs-1 ">
              <span className="text-danger">{itemm.oldPrice} </span> <span>{itemm.newPrice}</span>
            </div>
          </div>
        </div>
                
                </div>)
              })}
          </>
        );
      }

function Pagination({ itemsPerPage }) {
    const [itemOffset, setItemOffset] = useState(0);
    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    const currentItems = items.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(items.length / itemsPerPage);
    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % items.length;
        console.log(
          `User requested page number ${event.selected}, which is offset ${newOffset}`
        );
        setItemOffset(newOffset);
      };
    
  return (<>
    <Items currentItems={currentItems} />
<ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
      />
      </>
  )
}

export default Pagination