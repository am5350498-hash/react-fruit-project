
import { useState,useEffect } from "react";
import Navbar from "../Comman/Navbar";
import Footer from "../Comman/Footer";
import { useParams } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Product_det() {
  const {product_id} = useParams();
  const [product_det, setProduct_det]=useState({});

 

  useEffect(()=>{

     var obj ={
    "product_id":product_id,
    "token":localStorage.getItem("token")
  }

    axios.post("https://a2zithub.org/dairy/abi/product_by_id",obj).then((res)=>{
      console.log((res.data))
      setProduct_det(res.data)
    })
  },[])

 function addToCard() {
  const obj = {
    product_id: product_id,
    token: localStorage.getItem("token"),
  };

  axios
    .post("https://a2zithub.org/dairy/abi/addtocart", obj)
    .then((res) => {
      console.log("Response:", res.data);

      toast.success("Product Added Successfully", {
        position: "top-right",
        autoClose: 3000,
        theme: "light",
      });
    })
    .catch((err) => {
      console.error("Add to cart error:", err);

      toast.error("Failed to add product!", {
        position: "top-right",
        autoClose: 3000,
      });
    });
}


  
  return (
    <>
      <Navbar />

<ToastContainer
  position="top-right"
  autoClose={3000}
  newestOnTop
  closeOnClick
  pauseOnHover
/>

      <section className="min-h-screen bg-gray-50 px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          {/* Page Heading */}
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
              Product Details
            </h1>
            
          </div>

          {/* Product Details Card */}
          <div className="grid grid-cols-1 gap-8 rounded-2xl bg-white p-4 shadow-sm sm:p-6 md:grid-cols-2 lg:gap-12 lg:p-10">
            {/* Product Image */}
            <div className="flex min-w-0 items-center justify-center overflow-hidden rounded-xl bg-gray-100 p-4 sm:p-8">
              <img
                src={product_det.product_img}
                alt={product_det.name}
                className="h-64 w-full object-contain transition-transform duration-300 hover:scale-105 sm:h-80 lg:h-[420px]"
              />
            </div>

            {/* Product Information */}
            <div className="flex min-w-0 flex-col justify-center">
              <span className="mb-3 w-fit rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
                In Stock
              </span>

              <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl lg:text-4xl">
                {product_det.product_name}
              </h2>

             
<div className="mt-4 flex flex-wrap items-center gap-3">
  <span className="text-xl font-semibold text-red-600 line-through">
    ₹{Number(product_det.price) + 40}
  </span>

  <span className="text-3xl font-bold text-blue-600">
    ₹{product_det.price}
  </span>
</div>


              <div className="my-6 border-t border-gray-200" />

              <h3 className="mb-2 text-lg font-semibold text-gray-800">
                Product Description
              </h3>

              <p className="text-sm leading-7 text-gray-600 sm:text-base">
                {product_det.details}
              </p>

             

              {/* Add to Cart */}
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">

                <button
                  type="button"
                  onClick={addToCard}
                  
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 font-semibold text-white transition hover:bg-blue-700 active:scale-[0.98]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.8}
                    stroke="currentColor"
                    className="h-5 w-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 3h1.5l2.1 12.1a2 2 0 001.97 1.65h9.9a2 2 0 001.96-1.6L21 7.5H5"
                    />
                    <circle cx="9" cy="20" r="1" />
                    <circle cx="18" cy="20" r="1" />
                  </svg>
                  Add to Cart
                </button>

                
              </div>

             
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Product_det;
