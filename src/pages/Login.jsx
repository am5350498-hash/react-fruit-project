
import { useState } from "react";
import Navbar from "../Comman/Navbar";
import Footer from "../Comman/Footer";
import { Link } from "react-router-dom";
import  axios  from "axios";
import { useNavigate } from "react-router-dom";


function Login(){
    const navigation = useNavigate();

const [user_mobile , setMobile]= useState("");
const [user_password , setPassword]= useState("");
const [error , setError]= useState("");


function Login(e){
    e.preventDefault();
    var obj={
        user_mobile,
        user_password
    }

    axios.post("https://a2zithub.org/dairy/abi/user_login", obj).then((res) => {
    console.log("Response:", res.data);

    if(res.data.status == "success"){
        localStorage.setItem("token",res.data.token)
        navigation("/product")
    }else{
        setError("Invalid Username or Password")
    }
  })
}

  return (
    <>
      <Navbar />

      <section className="bg-green-50 px-4 py-10">
        <div className="mx-auto max-w-lg rounded-lg border border-green-200 bg-white p-6 shadow-sm sm:p-8">
          <h1 className="mb-2 text-center text-2xl font-bold text-gray-800">
            Welcome Back
          </h1>

          <p className="mb-6 text-center text-sm text-gray-500">
            Please login to your account.
          </p>
         {error && (
  <p className="mt-3 mb-2 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-center text-sm font-medium text-red-600">
    {error}
  </p>
)}

          <form onSubmit={Login} className="space-y-4">
            {/* Email */}
            <div>
              <label className="mb-1 block text-sm font-medium text-gray-700">
                Mobile Number
              </label>

              <input
                type="number"
                name="number"
                onChange={(e)=>setMobile(e.target.value)}
                placeholder="Enter your Mobile Number"
                required
                className="w-full rounded-md border border-gray-300 px-3 py-2 outline-none focus:border-green-600 focus:ring-1 focus:ring-green-600"
              />
            </div>

            {/* Password */}
            <div>
              <label className="mb-1 block text-sm font-medium text-gray-700">
                Password
              </label>

              <input
                type="password"
                name="password"
                onChange={(e)=>setPassword(e.target.value)}
                placeholder="Enter your password"
                autoComplete="current-password"
                required
                className="w-full rounded-md border border-gray-300 px-3 py-2 outline-none focus:border-green-600 focus:ring-1 focus:ring-green-600"
              />
            </div>

            {/* Remember Me */}
            <div className="flex items-center justify-between gap-3 text-sm">
              <label className="flex items-center gap-2 text-gray-600">
                <input
                  type="checkbox"
                  className="accent-green-600"
                />
                Remember me
              </label>

              <a
                href="/forgot-password"
                className="font-medium text-green-700 hover:underline"
              >
                Forgot Password?
              </a>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="w-full rounded-md bg-green-600 py-2.5 font-semibold text-white transition hover:bg-green-700"
            >
              Login
            </button>

            {/* Register Link */}
            <p className="text-center text-sm text-gray-600">
              Don't have an account?{" "}
              <Link
                to="/register"
                className="font-semibold text-green-700 hover:underline"
              >
                Register
              </Link>
            </p>
          </form>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Login;