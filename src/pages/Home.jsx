import { useState, useEffect } from "react";
import Navbar from "../Comman/Navbar";
import Footer from "../Comman/Footer";
import Productcard from "../Comman/Product_card";
import axios from "axios";
import { Link } from "react-router-dom";


function Home() {
  const [current, setCurrent] = useState(0);
  const [slides, setSlides] = useState([]);
  const [feature, setFeature] = useState([]);
  const [new_product, setNew_product] = useState([]);
  const [best_selling_product, setBest_selling_product] = useState([]);


   useEffect(() => {
  axios.get("https://a2zithub.org/dairy/abi/new_product").then((res)=>{
      console.log("response:", res.data);
      setNew_product(res.data)
    
    })
},[]);


   useEffect(() => {
  axios.get("https://a2zithub.org/dairy/abi/best_selling_product").then((res)=>{
      console.log("response:", res.data);
      setBest_selling_product(res.data)
    
    })
},[]);

  useEffect(() => {
  axios.get("https://a2zithub.org/dairy/abi/feature_product").then((res)=>{
      console.log("response:", res.data);
      setFeature(res.data)
    
    })
},[]);

  useEffect(() => {
  axios.get("https://a2zithub.org/dairy/abi/slider_det").then((res)=>{
      console.log("Slider API Response:", res.data);
      setSlides(res.data)
    })
},[]);

  useEffect(()=>{
    const time = setInterval(()=>{
      setCurrent((prev)=>(prev+1) %  slides.length)
    },2000)
    return ()=> clearInterval(time);
  },[slides.length])

  return (
    <>
      <Navbar />

      <section className="relative w-full overflow-hidden bg-gray-900 mb-1">
        {/* Slider Image */}
        <div className="relative h-[350px] sm:h-[450px] md:h-[550px]">
          {slides.map((slide, index) => (
            <div
              className={`absolute inset-0  brightness-220 transition-all duration-700 `}
            >
              {
                slides.length > 0 &&(
              <img
                src={slides[current].slider_img}
                alt={""}
                className="h-full w-full object-cover"
              />
              )}
              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black/50" />

              {/* Slider Content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center px-5 text-center text-white">
                <h1 className="mb-4 text-3xl font-bold sm:text-5xl md:text-6xl">
                  {slide.title}
                </h1>

                <p className="mb-6 max-w-xl text-base sm:text-lg md:text-xl">
                  {slide.subtitle}
                </p>

               
              </div>
            </div>
          ))}
        </div>
       
      </section>


{/*  Featured Products section */}
<section className="bg-white px-6 py-12">
  <div className="mx-auto max-w-7xl ">
    <h2 className="mb-8 text-3xl font-bold text-gray-800">
      Featured Products
    </h2>
  

   <Link to="/product">
   <div className="mb-6 flex w-full justify-end">
  <button className="rounded-lg bg-blue-600 px-5 py-2 text-sm font-semibold text-white transition hover:bg-blue-700">
    View All →
  </button>
</div>
</Link>


  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
    {
      feature.map((val,index)=>(
        <>
        <Productcard  data={val}/>
        </>
      ))
    }
    </div>
  </div>
</section>



{/* New Product Section */}
<section className="bg-gray-50 px-6 py-12">
  <div className="mx-auto max-w-7xl">
    <h2 className="mb-8 text-3xl font-bold text-gray-800">
      New Products
    </h2>

  
<Link to="/product">
<div className="mb-6 flex w-full justify-end">
  <button className="rounded-lg bg-blue-600 px-5 py-2 text-sm font-semibold text-white transition hover:bg-blue-700">
    View All →
  </button>
</div>
</Link>

<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
    {
      new_product.map((val,index)=>(
        <>
        <Productcard  data={val}/>
        </>
      ))
    }
    </div>
  </div>
</section>

{/* Best Selling Product Section */}
<section className="bg-white px-6 py-12">
  <div className="mx-auto max-w-7xl">
    <h2 className="mb-8 text-3xl font-bold text-gray-800">
      Best Selling Products
    </h2>

   
    <Link to="/product">
    <div className="mb-6 flex w-full justify-end">
  <button className="rounded-lg bg-blue-600 px-5 py-2 text-sm font-semibold text-white transition hover:bg-blue-700">
    View All →
  </button>
</div>
</Link>

    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">

      {
      best_selling_product.map((val,index)=>(
        <>
        <Productcard  data={val}/>
        </>
      ))
    }
   
    </div>
  </div>
</section>


      <Footer />
    </>
  );
}

export default Home;