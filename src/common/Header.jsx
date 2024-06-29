import { Link, Navigate, useNavigate } from "react-router-dom";
import brand from './../assets/images/brand.png'
import "./Header.css"
import { useState } from "react";
import SearchIcon from '@mui/icons-material/Search';
import { BsCartCheckFill } from "react-icons/bs";



export default function Header({cartData}) {

  const [inputValue, setInputValue] = useState("");
  const navigate =  useNavigate();

  function handleSubmit(e){

    e.preventDefault();  
    navigate(`/search/${inputValue}`);
    setInputValue("");

  }

  const cartAddedItems = cartData.length ;

  return (
    <>  

      <header className="sticky-top">
        <div className="bg-dark-subtle d-flex justify-content-between align-items-center text-white p-2  ">

              <Link to="./" className="brand">
                {" "}
                <img src={brand} alt="" width={70} />
              </Link>

              <form className="search-bar" onSubmit={handleSubmit} >

                <span className="icon"><SearchIcon/></span>

                <input className="px-2 py-1 rounded border border-dark-subtle fs-5 text-center" value={inputValue} onChange={(e)=> setInputValue(e.target.value)  } type="search" name ="searchValue" placeholder="Search" 
                   />

                   
              </form>

              <div className="cart">

              <Link to={"./cart"} >

              <button type="button" className="btn btn-primary position-relative">
                <BsCartCheckFill style={{fontSize : "1.5rem"}}/>
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                 {cartAddedItems}
                  <span className="visually-hidden">unread messages</span>
                </span>
              </button>
              
              
              </Link>
              
              </div>
              
        </div>

       
      </header>
      
    
    </>
  );
}
