import { data } from "../assets/Data"


export default function Filter({setProductData}) {

  // console.log('Filter Component Rednered');

    function categoryFilter(name){

      const check = data.filter((item, index)=> item.category === name );
    // console.log(check);
      setProductData(check);

    }
    function priceFilter(price){

      const check = data.filter((item, index)=> item.price >= price );
    // console.log(check);
      setProductData(check);

    }


  return <>


<nav className="navbar navbar-expand-md bg-body-tertiary mb-3">
  <div className="container-fluid">

    <h5> <small className="fs-6 fw-lighter align-bottom">  Filter By {"->"} </small> </h5>
        
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      
      <ul className="navbar-nav d-flex justify-content-between w-100 ms-2">

        <li className="nav-item">
          <button className="nav-link" onClick={()=> categoryFilter('mobiles')}  >Mobiles</button>
        </li>
        <li className="nav-item">
          <button className="nav-link" onClick={()=> categoryFilter('laptops')}  >Laptops</button>
        </li>
        <li className="nav-item">
          <button className="nav-link" onClick={()=> categoryFilter('tablets')}  >Tablets</button>
        </li>
        <li className="nav-item">
          <button className="nav-link" onClick={()=> setProductData(data)}  >No Filter</button>
        </li>


        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Price Range
          </a>

          <ul className="dropdown-menu ">
          <li><button className="dropdown-item" onClick={()=> priceFilter('29999')}> {">="} 29999</button></li>
          <li><button className="dropdown-item" onClick={()=> priceFilter('49999')}> {">="} 49999</button></li>
          <li><button className="dropdown-item" onClick={()=> priceFilter('69999')}> {">="} 69999</button></li>
          <li><button className="dropdown-item"onClick={()=> priceFilter('89999')}> {">="} 89999</button></li>
          </ul>
        </li>
        
      </ul>
    </div>
  </div>
</nav>

  
  
  
  
  
  
  
  
  </> }



{/* //         <div classNameName="nav-bar-wrapper bg-secondary d-flex justify-content-between align-items-center text-white p-2 fw-semibold ">

//             <div> Filter By {"->"}</div>
//             <div classNameName="items" onClick={()=> categoryFilter('mobiles')} >Mobiles</div>
//             <div classNameName="items" onClick={()=> categoryFilter('mobiles')}>Laptops</div>
//             <div classNameName="items" onClick={()=> categoryFilter('mobiles')}>Tablets</div>
//             <div classNameName="items" onClick={()=> categoryFilter('mobiles')}>No Filter</div>

//             <div classNameName="dropdown">
//             <a classNameName="btn btn-secondary dropdown-toggle fw-semibold" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
//             Price Category
//             </a>

//             <ul classNameName="dropdown-menu">
//             <li><a classNameName="dropdown-item" href="#"> {">="} 29999</a></li>
//             <li><a classNameName="dropdown-item" href="#"> {">="} 49999</a></li>
//             <li><a classNameName="dropdown-item" href="#"> {">="} 69999</a></li>
//             <li><a classNameName="dropdown-item" href="#"> {">="} 89999</a></li>

//             </ul>
//         </div>

// </div>
  
  
  
//   </>


  // ) */ }

