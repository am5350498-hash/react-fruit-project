import Navbar from "../Comman/Navbar";
import Footer from "../Comman/Footer";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function Profile() {

    const [ profile , setProfile]= useState("")

    var obj={
        "token":localStorage.getItem("token")
    }

    useEffect(()=>{
        axios.post("https://a2zithub.org/dairy/abi/user_profile",obj).then((res)=>{
            console.log("response",res.data.data[0])
            setProfile(res.data.data[0])
        })
    },[])

  const navigate = useNavigate();

  function handleLogout() {
    localStorage.removeItem("token");
    navigate("/login");
  }

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-slate-50 px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">

          {/* Page Heading */}
          <div className="mb-7">
            <p className="mb-2 text-xs font-bold uppercase tracking-[3px] text-blue-600">
              MY ACCOUNT
            </p>
            <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              My Profile
            </h1>
           
          </div>

          {/* Gradient Header - Same Design */}
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#123a82] via-blue-700 to-[#6389f5] px-6 py-10 sm:px-10 sm:py-14">
            <div className="absolute -right-10 -top-20 h-64 w-64 rounded-full border-[35px] border-white/10"></div>
            <div className="absolute -bottom-28 right-1/3 h-56 w-56 rounded-full bg-white/10"></div>

            <div className="relative z-10 max-w-xl">
              <span className="inline-block rounded-full border border-white/30 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white">
                Personal Account
              </span>
              <h2 className="mt-5 text-3xl font-bold text-white sm:text-4xl">
                Welcome to Your Profile
              </h2>
              <p className="mt-3 text-sm leading-6 text-blue-100 sm:text-base">
                Keep your information up to date and manage your account in one place.
              </p>
            </div>
          </div>

          {/* Two Sections */}
          <div className="mt-8 grid grid-cols-1 items-start gap-6 lg:grid-cols-5">

            {/* Section 1: Profile Overview */}
            <section className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:shadow-lg lg:col-span-2">

              <div className="h-24 bg-gradient-to-r from-blue-100 via-indigo-50 to-white"></div>

              <div className="px-6 pb-7">
                <div className="-mt-14 flex flex-col items-center text-center">

                  {/* Profile Avatar */}
                 <img
                  src={profile.profile}
                 alt="Profile"
                 className="h-28 w-28 rounded-full border-4 border-white object-cover shadow-lg"/>

                  <h2 className="mt-4 text-2xl font-bold text-slate-900">
                    {profile.user_name}
                  </h2>

                  <p className="mt-1 text-sm text-slate-500">
                    Customer Account
                  </p>

                  <span className="mt-4 rounded-full border border-green-200 bg-green-50 px-4 py-1.5 text-xs font-semibold text-green-700">
                    Account Active
                  </span>

                  <Link
                    to="/edit-profile"
                    className="mt-6 w-full rounded-xl bg-blue-600 px-5 py-3 text-center text-sm font-semibold text-white shadow-md shadow-blue-100 transition hover:-translate-y-0.5 hover:bg-blue-700"
                  >
                    Edit Profile
                  </Link>
                </div>

                {/* Overview Details */}
                <div className="mt-7 rounded-2xl bg-slate-50 p-5">
                  <h3 className="mb-4 text-base font-bold text-slate-800">
                    Account Overview
                  </h3>

                  <div className="flex items-center justify-between gap-3 border-b border-slate-200 pb-4">
                    <span className="text-sm text-slate-500">
                      Account Type
                    </span>
                    <span className="text-sm font-semibold text-slate-800">
                      Customer
                    </span>
                  </div>

                  <div className="flex items-center justify-between gap-3 pt-4">
                    <span className="text-sm text-slate-500">
                      Account Status
                    </span>
                    <span className="text-sm font-semibold text-green-600">
                      Active
                    </span>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 2: Personal Information & Account */}
            <section className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:shadow-lg lg:col-span-3">

              <div className="border-b border-slate-100 px-5 py-6 sm:px-8">
                <h3 className="text-xl font-bold text-slate-900 sm:text-2xl">
                  Personal Information
                </h3>
                <p className="mt-2 text-sm text-slate-500">
                  Your personal and contact details.
                </p>
              </div>

              <div className="p-5 sm:p-8">

                {/* Information Grid */}
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">

                  <div className="rounded-2xl border border-slate-100 bg-slate-50 p-5 transition hover:border-blue-200 hover:bg-blue-50/50">
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      Full Name
                    </p>
                    <p className="mt-3 break-words font-semibold text-slate-800">
                      {profile.user_name}
                    </p>
                  </div>

                  <div className="rounded-2xl border border-slate-100 bg-slate-50 p-5 transition hover:border-blue-200 hover:bg-blue-50/50">
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      Email Address
                    </p>
                    <p className="mt-3 break-words font-semibold text-slate-800">
                     {profile.user_email}
                    </p>
                  </div>

                  <div className="rounded-2xl border border-slate-100 bg-slate-50 p-5 transition hover:border-blue-200 hover:bg-blue-50/50">
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      Mobile Number
                    </p>
                    <p className="mt-3 break-words font-semibold text-slate-800">
                     {profile.user_mobile}
                    </p>
                  </div>

                  <div className="rounded-2xl border border-slate-100 bg-slate-50 p-5 transition hover:border-blue-200 hover:bg-blue-50/50">
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      Address
                    </p>
                    <p className="mt-3 break-words font-semibold text-slate-800">
                      Not added yet
                    </p>
                  </div>

                </div>

                {/* Account Actions */}
                <div className="mt-8 border-t border-slate-100 pt-7">
                  <h3 className="text-lg font-bold text-slate-900">
                    Account & Orders
                  </h3>
                  <p className="mt-1 text-sm text-slate-500">
                    Manage your orders and account access.
                  </p>

                  <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">

                    <Link
                      to="/orders"
                      className="flex min-h-20 flex-col justify-center rounded-xl border border-blue-100 bg-blue-50/70 px-5 py-4 transition hover:border-blue-300 hover:bg-blue-50"
                    >
                      <span className="font-semibold text-blue-800">
                        My Orders
                      </span>
                      <span className="mt-1 text-xs text-slate-500">
                        View your order history
                      </span>
                    </Link>

                    <button
                      type="button"
                      onClick={handleLogout}
                      className="flex min-h-20 flex-col justify-center rounded-xl border border-red-100 bg-red-50 px-5 py-4 text-left transition hover:border-red-300 hover:bg-red-100"
                    >
                      <span className="font-semibold text-red-600">
                        Logout
                      </span>
                      <span className="mt-1 text-xs text-red-500">
                        Sign out of your account
                      </span>
                    </button>

                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Bottom Note */}
          <div className="mt-7 rounded-2xl border border-blue-100 bg-blue-50 px-5 py-5 sm:px-7">
            <h4 className="font-bold text-blue-900">
              Keep your profile updated
            </h4>
            <p className="mt-2 text-sm leading-6 text-blue-800/80">
              Make sure your contact information is correct so you can manage your account easily.
            </p>
          </div>

        </div>
      </main>

      <Footer />
    </>
  );
}

export default Profile;