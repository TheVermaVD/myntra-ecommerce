import React, { Fragment } from 'react'
import {Link} from 'react-router-dom'

export default function Cart({cartData, setCartData}) {
  

  console.log(cartData);


  return ( <>

  <div className="container my-4 " style= {{maxWidth: "54%"}}>


    {cartData.length==0 ?   
    
    
    (<div className="text-center">

      <h1>Your Cart is Empty</h1> 
      <Link to="/" className='btn btn-warning'>Please Continue Shopping...</Link>

    </div> )
    
   
       :  cartData.map((item, index)=>{


    return <Fragment key={item.id}>
         
        <div  className="card mb-3 my-4" style= {{maxWidth: "700px"}}>
          <div className="row g-0">
            <div className="col-md-4">
              <img src={item.img} className="img-fluid rounded-start" alt="..." />
            </div>
            <div className="col-md-8">
              <div className="card-body text-center">
                <h5 className="card-title">{item.title}</h5>
                <p className="card-text">{item.description}</p>
                <button className="btn btn-primary me-3">{item.price} ₹</button>
                <button className="btn btn-warning">Buy Now</button>
              
              </div>
            </div>
          </div>
        </div>


    </Fragment>

    })

  }

  {cartData.length != 0 &&   <div className="container text-center">
    <button className='btn btn-warning mx-3'>Checkout</button>
    <button className='btn btn-danger' onClick={()=>setCartData("") }>Clear Cart</button>
    </div>   }

   


  </div>



  
  
  </>
  
  )
}
