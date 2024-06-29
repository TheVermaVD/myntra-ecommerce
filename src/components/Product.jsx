import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



export default function Product({productData, cartData, setCartData}) {


  // const [cartData, setCartData] = useState([]); //We defined this useState to Parent Component of 'Product Comp', So that all the sending data from here easily pulled at its Parent Component via form of state variable and its stter Function.
  

  function cartFunc(id, title, price, img, discription ){

    setCartData([...cartData, {id : id, title : title, price : price, img : img, discription : discription}]) ;

    toast.success("Item added to cart");


  }

  // console.log(cartData);


  return (
    <>



    <div className="container my- text-center">

        <div className="row ms-auto w-100">

        <ToastContainer autoClose={1500} pauseOnHover={false} position="top-center" />

            {productData.length > 0 && productData.map(item => {

                return ( <React.Fragment key={item.id}>

               
                  <div className="col-lg-4 col-md-6 my-3">

                    <div  className="card" style={{width : "18rem"}}>

                        <Link to={`/productdetails/${item.id}`}>
                      <img src={item.imgSrc} className="card-img-top" alt="..."/> </Link>
                      <div className="card-body">
                          <h5 className="card-title">{item.title}</h5>
                          <p className="card-text">{item.description}</p>
                          <button className="btn btn-primary me-3">{item.price} ₹</button>
                          <button className="btn btn-warning" onClick={()=> cartFunc(item.id, item.title, item.price, item.imgSrc, item.discription) }>Add To Cart</button>
                      </div>

                    </div> 

                </div>

                </React.Fragment> )




            })}

         
        </div>
    </div>
    

  
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    </>

    // { productData.length>0 && productData.map( item=>{

    //     return <>

    //     </>
    // })

    // }
  );
}
