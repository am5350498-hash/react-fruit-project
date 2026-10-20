
import { useEffect, useState } from "react";
import Navbar from "../Comman/Navbar";
import Footer from "../Comman/Footer";
import axios from "axios";

function Card() {
  const [card, setCard] = useState([]);

  useEffect(() => {
    const obj = {
      token: localStorage.getItem("token"),
    };

    axios
      .post("https://a2zithub.org/dairy/abi/cart_list", obj)
      .then((res) => {
        console.log("Cart Response:", res.data);
        setCard(Array.isArray(res.data) ? res.data : []);
      })
      .catch((err) => {
        console.log("Cart Error:", err.response?.data || err.message);
      });
  }, []);

  function increaseQty(product_id) {
    setCard((prev) =>
      prev.map((item) =>
        String(item.product_id) === String(product_id)
          ? { ...item, qty: Number(item.qty || 1) + 1 }
          : item
      )
    );
  }

  function decreaseQty(product_id) {
    setCard((prev) =>
      prev.map((item) =>
        String(item.product_id) === String(product_id)
          ? {
              ...item,
              qty: Math.max(1, Number(item.qty || 1) - 1),
            }
          : item
      )
    );
  }

  function removeProduct(product_id) {
    setCard((prev) =>
      prev.filter(
        (item) => String(item.product_id) !== String(product_id)
      )
    );
  }

  const grandTotal = card.reduce(
    (total, item) =>
      total + Number(item.price || 0) * Number(item.qty || 1),
    0
  );

  return (
    <>
      <Navbar />

      <section className="min-h-screen bg-gray-50 px-4 py-10 sm:px-8">
        <div className="mx-auto w-full max-w-6xl">
          <div className="mb-8 text-center">
            <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Shopping Cart
            </h1>
            <p className="mt-2 text-gray-500">
              Review your products before checkout.
            </p>
          </div>

          <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-lg">
            {card.length === 0 ? (
              <div className="px-5 py-16 text-center">
                <p className="text-5xl">🛒</p>
                <h2 className="mt-4 text-xl font-bold text-gray-800">
                  Your cart is empty
                </h2>
                <p className="mt-2 text-gray-500">
                  Add products to see them here.
                </p>
              </div>
            ) : (
              <>
                <div className="overflow-x-auto">
                  <table className="w-full min-w-[750px] text-left">
                    <thead className="bg-blue-600 text-white">
                      <tr>
                        <th className="px-5 py-4">Sr.No</th>
                        <th className="px-5 py-4">Product Name</th>
                        <th className="px-5 py-4">Image</th>
                        <th className="px-5 py-4">Qty</th>
                        <th className="px-5 py-4">Price</th>
                        <th className="px-5 py-4">Total</th>
                        <th className="px-5 py-4">Action</th>
                      </tr>
                    </thead>

                    <tbody className="divide-y divide-gray-100">
                      {card.map((item, index) => (
                        <tr
                          key={item.product_id}
                          className="transition hover:bg-blue-50/50"
                        >
                          <td className="px-5 py-4">{index + 1}</td>

                          <td className="px-5 py-4 font-semibold text-gray-800">
                            {item.product_name}
                          </td>

                          <td className="px-5 py-4">
                            <img
                              src={item.product_img}
                              alt={item.product_name}
                              className="h-16 w-16 rounded-xl object-cover"
                            />
                          </td>

                          <td className="px-5 py-4">
                            <div className="flex items-center gap-2">
                              <button
                                onClick={() => decreaseQty(item.product_id)}
                                className="h-8 w-8 rounded-md border font-bold hover:bg-gray-100"
                              >
                                −
                              </button>

                              <span className="min-w-6 text-center font-bold">
                                {item.qty}
                              </span>

                              <button
                                onClick={() => increaseQty(item.product_id)}
                                className="h-8 w-8 rounded-md border font-bold hover:bg-gray-100"
                              >
                                +
                              </button>
                            </div>
                          </td>

                          <td className="px-5 py-4 text-gray-700">
                            ₹{Number(item.price).toLocaleString("en-IN")}
                          </td>

                          <td className="px-5 py-4 font-bold text-blue-600">
                            ₹
                            {(
                              Number(item.price || 0) *
                              Number(item.qty || 1)
                            ).toLocaleString("en-IN")}
                          </td>

                          <td className="px-5 py-4">
                            <button
                              onClick={() => removeProduct(item.product_id)}
                              className="rounded-lg bg-red-50 px-3 py-2 text-sm font-semibold text-red-600 hover:bg-red-600 hover:text-white"
                            >
                              Remove
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="flex flex-col items-end gap-3 border-t bg-gray-50 p-5">
                  <p className="text-lg font-semibold text-gray-700">
                    Grand Total:{" "}
                    <span className="text-2xl font-bold text-blue-600">
                      ₹{grandTotal.toLocaleString("en-IN")}
                    </span>
                  </p>
                </div>
              </>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Card;
