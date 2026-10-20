import Navbar from "../Comman/Navbar";
import Footer from "../Comman/Footer";
import Productcard from "../Comman/Product_card";
import axios from "axios";
import { useEffect, useState } from "react";

function Product() {

  const [products, setProducts]=useState([]);

  useEffect(()=>{
    axios.get("https://a2zithub.org/dairy/abi/product_det").then((res)=>{
      console.log("response",res.data)
      setProducts(res.data)
    })
  },[]);
  return(
    <>
    <Navbar />
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 mt-5 px-20">
    
    {
      products.map((val,index)=>(
        <>
        <Productcard data={val}/>
        </>
      ))
    }
    </div>
    <Footer/>
    </>

  ) 
}

export default Product;