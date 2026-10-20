
import { Link } from "react-router-dom";

function productcard(props) {
  const originalPrice = Number(props.data.price) + 40;
  const discountPercent = Math.round(
    ((originalPrice - Number(props.data.price)) / originalPrice) * 100
  );

  return (
    <>
      <div>
        {[
          {
            name: "Wireless Headphones",
            price: "₹1,499",
            image:
              "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=600&q=80",
          },
        ].map((product, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
          >
            {/* Discount Badge - Always Visible */}
            <div className="absolute left-3 top-3 z-20 rounded-md bg-red-600 px-3 py-1.5 text-sm font-bold text-white shadow-md">
              {discountPercent}% OFF
            </div>

            <img
              src={props.data.product_img}
              alt={props.data.product_name || "Product"}
              className="h-56 w-full object-cover"
            />

            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800">
                {props.data.product_name}
              </h3>

              <div className="mt-2 flex items-center gap-3">
                <p className="text-lg font-semibold text-red-600 line-through">
                  ₹{originalPrice}
                </p>

                <p className="text-xl font-bold text-blue-600">
                  ₹{props.data.price}
                </p>
              </div>

              <Link to={`/product_det/${props.data.product_tbl_id}`}>
                <button className="mt-4 w-full rounded-lg bg-blue-600 py-2 text-white hover:bg-blue-700">
                  View Product
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default productcard;
