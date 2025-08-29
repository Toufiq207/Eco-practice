import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import ReactPaginate from 'react-paginate';
import CardItem from './CardItem';

import Flex from './Flex';
import Data from '../data'
import axios from 'axios';


// Example items, to simulate fetching from another resources.
const items = [];

function Items({ currentItems }) {
  
  return (
    <>
    <Flex className='gap-x-[45px] flex-wrap'>
  {currentItems &&
        currentItems.map((item) => (
            <CardItem img={item.thumbnail} title={item.title} price={item.price}/>
        ))}

    </Flex>
    </>
  );
}

function Pagination({ itemsPerPage }) {
  let [alldata,SetAlldata]=useState([])
    useEffect(()=>{
async function alldata(){
let data=await axios.get("https://dummyjson.com/products")
SetAlldata(data.data.products);

}
alldata()
  },[])
  console.log(alldata);
  
  
  
 
  const [itemOffset, setItemOffset] = useState(0);


  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = alldata.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(alldata.length / itemsPerPage);

  
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % alldata.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return (
    <>
      <Items currentItems={currentItems} />
    <div className='mt-[75px] flex justify-between'>
        <ReactPaginate
        breakLabel="..."
        nextLabel=""
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel=""
        renderOnZeroPageCount={null}
        containerClassName='flex  '
        pageLinkClassName='bg-transparent border border-secondary py-2 px-4 hover:bg-secondary text-black hover:text-white mr-4'

      />
      <p>Products from {itemOffset+1} to {endOffset< alldata.length ? endOffset:alldata.length} of {alldata.length}</p>
    </div>
    </>
  );
}

export default Pagination