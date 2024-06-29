import { Link, useParams } from "react-router-dom";
import {data} from '../assets/Data' ;
import React, { useEffect, useState } from "react";
import Product from "./Product";
import { ToastContainer, toast } from 'react-toastify';


export default function ProductDetails( {cartData, setCartData}) {


    const paramObject = useParams();
    // console.log(paramObject.productId);

    const [currentItem, setCurrentItem] = useState({});
    const [currentCategory, setCurrentCategory] = useState([]);



    //Now, Filtering current ID data from the whole Data available, inside useEffect() -

    useEffect(()=>{

      const currItem = data.filter((item)=>{

        return item.id === +paramObject.productId ;
  
      });

      // console.log(currItem[0]); //as we have only 1 object inside the array so, we need not to use map method to list just one object of an array, we just get directly by its indexing i.e [0]
      setCurrentItem(currItem[0]);

      // Now, Filtering Whole Our Original available data on the basis current item's category means if our current Item has mobile category then It will filter whole data based on mobile category -
      

      const CurrCategory = data.filter( item => {

        return item.category === currentItem.category ;
      })

      // console.log(CurrCategory);
      setCurrentCategory(CurrCategory);     


    }, [paramObject.productId, currentItem.category]); //[paramObject.productId] jab jab productId change ho tab tab ye useEffect run kar jaye.


    function cartFunc(id, title, price, img, discription ){

      setCartData([...cartData, {id : id, title : title, price : price, img : img, discription : discription}]) ;
  
      toast.success("Item added to cart");
  
  
    }




  return (

        <div className="container">
          <div className="row mb-4">

            {/* <div className="col-lg-10 pt-2 mx-auto"> */}
            <div className="col">

              
        <ToastContainer autoClose={1500} pauseOnHover={false} position="top-center" />

                {data.length>0 && 


                <div className="d-lg-flex justify-content-center align-items-center text-center m-4 pe-3 gap-3">
                  <img src={currentItem.imgSrc} alt="..." width={400} className="img-fluid"/>
                  <div>
                    <h1>{currentItem.title}</h1>
                    <p>{currentItem.description}</p>
                    <a href="#"className="btn btn-primary mx-3">{currentItem.price} ₹</a>
                    <button className="btn btn-warning" onClick={()=> cartFunc(currentItem.id, currentItem.title, currentItem.price, currentItem.imgSrc, currentItem.discription) }>Add To Cart</button>
                  </div>
                </div>

                
                }

            </div>
          </div> 

          
          {data.length>0 && <>
          <h3 className="text-center display-6">The Related Products (Recommended) </h3>  
          {/*Here, We are using same component with passing a different data to render - known as reusual Component in react.  */}
          <Product productData={currentCategory} cartData={cartData} setCartData={setCartData}  /> </> }




        </div>


  )
}
