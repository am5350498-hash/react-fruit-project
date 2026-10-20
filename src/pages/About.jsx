
import Navbar from "../Comman/Navbar";
import Footer from "../Comman/Footer";

function About() {
  return (
    <>
      <Navbar />

      <div className="w-full overflow-hidden bg-white">

        {/* Hero Section */}
        <section className="bg-gradient-to-r from-green-50 via-yellow-50 to-green-50">
          <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-14 sm:px-8 md:grid-cols-2 md:py-20">

            <div>
              <span className="inline-block rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">
                🍃 Freshness in Every Bite
              </span>

              <h1 className="mt-5 text-4xl font-extrabold leading-tight text-gray-900 sm:text-5xl lg:text-6xl">
                Bringing Nature's
                <span className="block text-green-600">
                  Goodness to You
                </span>
              </h1>

              <p className="mt-5 max-w-xl text-base leading-7 text-gray-600 sm:text-lg">
                We believe healthy living starts with fresh fruits.
                Discover delicious, nutritious and naturally sweet fruits
                selected to bring freshness and happiness to your family.
              </p>

              <a
                href="/products"
                className="mt-7 inline-flex items-center gap-2 rounded-full bg-green-600 px-7 py-3.5 font-semibold text-white shadow-lg transition duration-300 hover:-translate-y-1 hover:bg-green-700"
              >
                Explore Our Fruits →
              </a>

              <div className="mt-8 flex flex-wrap gap-6">
                <div>
                  <h3 className="text-2xl font-bold text-green-700">
                    100%
                  </h3>
                  <p className="text-sm text-gray-600">Natural Goodness</p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-green-700">
                    Fresh
                  </h3>
                  <p className="text-sm text-gray-600">Every Single Day</p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-green-700">
                    Healthy
                  </h3>
                  <p className="text-sm text-gray-600">Happy Lifestyle</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-5 rounded-full bg-yellow-200/60 blur-3xl"></div>

              <img
                src="https://images.unsplash.com/photo-1610832958506-aa56368176cf?auto=format&fit=crop&w=1000&q=85"
                alt="Fresh colorful fruits"
                className="relative h-72 w-full rounded-3xl object-cover shadow-xl sm:h-96"
              />

              <div className="absolute -bottom-4 left-3 rounded-2xl bg-white px-5 py-4 shadow-xl sm:left-6">
                <p className="text-lg font-bold text-gray-800">
                  🍎 Eat Fresh, Live Healthy
                </p>
                <p className="mt-1 text-sm text-gray-500">
                  A little freshness every day!
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* About Us Section */}
        <section className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 sm:px-8 md:grid-cols-2">

          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=600&q=80"
              alt="Fresh produce"
              className="h-52 w-full rounded-2xl object-cover shadow-md sm:h-64"
            />

            <img
              src="https://images.unsplash.com/photo-1619566636858-adf3ef46400b?auto=format&fit=crop&w=600&q=80"
              alt="Fresh greens and fruits"
              className="mt-8 h-52 w-full rounded-2xl object-cover shadow-md sm:h-64"
            />
          </div>

          <div>
            <p className="font-bold uppercase tracking-widest text-green-600">
              About Our Store
            </p>

            <h2 className="mt-3 text-3xl font-extrabold leading-tight text-gray-900 sm:text-4xl">
              We Make Healthy Eating
              <span className="text-green-600"> Easy & Delicious</span>
            </h2>

            <p className="mt-5 leading-7 text-gray-600">
              Our fruit store is built around a simple idea: everyone
              deserves access to delicious fruits and everyday goodness.
              We want to make shopping for fresh fruits simple, convenient
              and enjoyable.
            </p>

            <p className="mt-4 leading-7 text-gray-600">
              From juicy apples to sweet mangoes and refreshing orange,
              explore a colorful collection of fruits for your daily
              nutrition and healthy lifestyle.
            </p>

            <ul className="mt-6 space-y-4">
              <li className="flex items-center gap-3 text-gray-700">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-green-100 text-green-700">✓</span>
                Carefully selected fruit varieties
              </li>
              <li className="flex items-center gap-3 text-gray-700">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-green-100 text-green-700">✓</span>
                A simple and convenient shopping experience
              </li>
              <li className="flex items-center gap-3 text-gray-700">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-green-100 text-green-700">✓</span>
                Freshness and customer satisfaction first
              </li>
            </ul>
          </div>

        </section>

        {/* Why Choose Us */}
        <section className="bg-gray-50 px-5 py-16 sm:px-8 md:py-20">
          <div className="mx-auto max-w-7xl">

            <div className="mx-auto mb-12 max-w-2xl text-center">
              <p className="font-bold uppercase tracking-widest text-green-600">
                Why Choose Us
              </p>
              <h2 className="mt-3 text-3xl font-extrabold text-gray-900 sm:text-4xl">
                Freshness You Can Feel
              </h2>
              <p className="mt-4 leading-7 text-gray-600">
                We make every fruit-shopping experience easy, enjoyable
                and full of goodness.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">

              <div className="rounded-2xl bg-white p-7 text-center shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-green-100 text-3xl">
                  🍎
                </div>
                <h3 className="mt-5 text-xl font-bold text-gray-800">
                  Fresh Fruits
                </h3>
                <p className="mt-3 text-sm leading-6 text-gray-600">
                  Discover a variety of delicious fruits for your everyday needs.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-7 text-center shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-yellow-100 text-3xl">
                  🌿
                </div>
                <h3 className="mt-5 text-xl font-bold text-gray-800">
                  Natural Goodness
                </h3>
                <p className="mt-3 text-sm leading-6 text-gray-600">
                  Enjoy naturally flavorful fruits as part of a balanced diet.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-7 text-center shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-green-100 text-3xl">
                  🛒
                </div>
                <h3 className="mt-5 text-xl font-bold text-gray-800">
                  Easy Shopping
                </h3>
                <p className="mt-3 text-sm leading-6 text-gray-600">
                  Browse your favorite fruits through a simple shopping experience.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-7 text-center shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-red-100 text-3xl">
                  ❤️
                </div>
                <h3 className="mt-5 text-xl font-bold text-gray-800">
                  Customer First
                </h3>
                <p className="mt-3 text-sm leading-6 text-gray-600">
                  Your shopping experience and satisfaction matter to us.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* Call To Action */}
        <section className="px-5 py-16 sm:px-8">
          <div className="mx-auto max-w-7xl overflow-hidden rounded-3xl bg-green-600 px-6 py-12 text-center sm:px-12 sm:py-16">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              Make Every Day a Little Fresher!
            </h2>

            <p className="mx-auto mt-4 max-w-2xl leading-7 text-green-50">
              Discover your favorite fruits and bring more natural goodness
              to your everyday routine.
            </p>

            <a
              href="/products"
              className="mt-7 inline-flex rounded-full bg-white px-8 py-3.5 font-bold text-green-700 transition hover:bg-yellow-100"
            >
              Shop Fruits Now →
            </a>
          </div>
        </section>

      </div>

      <Footer />
    </>
  );
}

export default About;
