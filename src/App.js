import './App.css';
import Cart from './components/Cart';
import Error404 from './components/Error404';
import Header from './common/Header.jsx';
import {Routes, Route, BrowserRouter} from "react-router-dom";
import ProductDetails from './components/ProductDetails';

import SearchPage from './components/SearchPage.jsx';

import { data as imported_Data} from './assets/Data.jsx';
import { Fragment, useState } from "react";
import Product from './components/Product.jsx';
import Filter from './components/Filter.jsx';
import Footer from './common/Footer.jsx';


function App() {

  const [data, setData] = useState(imported_Data);
  
  const [cartData, setCartData] = useState([]); //To pull the data from Child Component to Parent Component, We defined the state variable at Parent Component and we passed State VAriable and Its Setter Function to Child Component to use at there. [Now we need this cartData at the Cart Component, so we pass it to there - ]

  console.log(cartData);


  return ( <>

    <BrowserRouter>
    
      <Header cartData ={cartData}/>

      <Routes>

        <Route path='/' element = {

                  <Fragment>

                    <Filter setProductData = {setData}/> 
                    <Product productData={data} cartData={cartData} setCartData ={setCartData} /> 

                  
                  </Fragment>
                } />


        <Route path='/cart' element={ <Cart cartData={cartData} setCartData={setCartData}  /> }  />
        <Route path='/productdetails/:productId' element={<ProductDetails cartData={cartData} setCartData ={setCartData}  />}  />
        <Route path='/search/:items' element={<SearchPage cartData={cartData} setCartData ={setCartData}   />}  />

        <Route path='*' element={<Error404/>}  />


      </Routes>

      <Footer />


    </BrowserRouter>
    
    
    </>
  );
}

export default App;
