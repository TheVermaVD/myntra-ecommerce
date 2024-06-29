import React, { useEffect, useState } from 'react'
import { createSearchParams, useParams } from 'react-router-dom'
import { data } from '../assets/Data';
import Product from './Product';

export default function SearchPage({cartData, setCartData}) {

  console.log("Search PAge Rendered");

  const paramObj = useParams();
  const [searchedItem, setSearchedItem ] = useState([]);

  const searchTerm = paramObj.items.toLowerCase(); //made all search term to lower case to search in the data bucket.



  useEffect(()=>{

      const searched = data.filter((item, index)=> item.title.toLowerCase().includes(searchTerm)  );

      // console.log(searched);
      setSearchedItem(searched);

        
  }, [searchTerm]);

  // console.log(searchedItem);

  return ( <>


      {searchedItem.length>0 ? <Product productData={searchedItem} cartData={cartData} setCartData={setCartData}  /> : <h3 className='text-center display-6 mt-5 pt-5'>No Item Found</h3> }
      

      </>
    
  )
}
