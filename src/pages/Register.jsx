
import { useState } from "react";
import Navbar from "../Comman/Navbar";
import Footer from "../Comman/Footer";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Registor() {

    const navigation=useNavigate()


  const [user_name, setName] = useState("");
  const [user_email, setEmail] = useState("");
  const [user_mobile, setMobile] = useState("");
  const [user_password, setPassword] = useState("");
  const [C_password, setCpass] = useState("");

  function handleRegister(e) {
    e.preventDefault();

    // Password check
    if (user_password !== C_password) {
  alert("Password match hot nahi!");
  return;
}

    const obj = {
  user_name,
  user_email,
  user_mobile,
  user_password,
};

    
axios.post("https://a2zithub.org/dairy/abi/user_register", obj).then((res) => {
    console.log("API Response:", res);
    navigation("/login")
    alert("Server response received. Check console.");
  })

  }

  return (
    <>
      <Navbar />

      <section className="bg-green-50 px-4 py-10">
        <div className="mx-auto max-w-lg rounded-lg border border-green-200 bg-white p-6 shadow-sm sm:p-8">
          <h1 className="mb-2 text-center text-2xl font-bold text-gray-800">
            Create Account
          </h1>

          <p className="mb-6 text-center text-sm text-gray-500">
            Please fill in your details to register.
          </p>

          <form onSubmit={handleRegister} className="space-y-4">
            <div>
              <label className="mb-1 block text-sm font-medium text-gray-700">
                Full Name
              </label>
              <input
                type="text"
                name="user_name"
                value={user_name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
                required
                className="w-full rounded-md border border-gray-300 px-3 py-2 outline-none focus:border-green-600 focus:ring-1 focus:ring-green-600"
              />
            </div>

            <div>
              <label className="mb-1 block text-sm font-medium text-gray-700">
                Email Address
              </label>
              <input
                type="email"
                name="user_email"
                value={user_email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="w-full rounded-md border border-gray-300 px-3 py-2 outline-none focus:border-green-600 focus:ring-1 focus:ring-green-600"
              />
            </div>

            <div>
              <label className="mb-1 block text-sm font-medium text-gray-700">
                Mobile Number
              </label>
              <input
                type="tel"
                name="user_mobile"
                value={user_mobile}
                onChange={(e) => setMobile(e.target.value)}
                placeholder="Enter 10 digit mobile number"
                pattern="[0-9]{10}"
                maxLength={10}
                required
                className="w-full rounded-md border border-gray-300 px-3 py-2 outline-none focus:border-green-600 focus:ring-1 focus:ring-green-600"
              />
            </div>

            <div>
              <label className="mb-1 block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                name="user_password"
                value={user_password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
                minLength={6}
                required
                className="w-full rounded-md border border-gray-300 px-3 py-2 outline-none focus:border-green-600 focus:ring-1 focus:ring-green-600"
              />
            </div>

            <div>
              <label className="mb-1 block text-sm font-medium text-gray-700">
                Confirm Password
              </label>
              <input
                type="password"
                name="C_password"
                value={C_password}
                onChange={(e) => setCpass(e.target.value)}
                placeholder="Confirm password"
                minLength={6}
                required
                className="w-full rounded-md border border-gray-300 px-3 py-2 outline-none focus:border-green-600 focus:ring-1 focus:ring-green-600"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-md bg-green-600 py-2.5 font-semibold text-white transition hover:bg-green-700"
            >
              Register
            </button>

            <p className="text-center text-sm text-gray-600">
              Already have an account?{" "}
              <Link
                to="/login"
                className="font-semibold text-green-700 hover:underline"
              >
                Login
              </Link>
            </p>
          </form>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Registor;
