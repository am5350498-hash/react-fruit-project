
function Footer() {
  return (
    <footer className="bg-gray-900 text-white">

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <h1 className="text-3xl font-bold text-blue-400">
              ShopNova<span className="text-white"></span>
            </h1>
            <p className="text-gray-400 mt-4 leading-7">
              We provide quality products and services
              to make your digital experience better.
            </p>
            <div className="flex gap-4 mt-5">
              <a
                href="https://www.facebook.com/"
                aria-label="Facebook"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-blue-500 transition"
              >f</a>
              <a href="https://www.instagram.com/" aria-label="Instagram"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-pink-500 transition" > ◎ </a>
              <a href="https://www.linkedin.com/"  aria-label="LinkedIn" className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-blue-600 transition" > in </a>
            </div>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-5"> Quick Links </h2>
            <ul className="space-y-3 text-gray-400">
              <li>
                <a href="/" className="hover:text-blue-400 transition"> Home</a>
              </li>
              <li>
                <a href="/about" className="hover:text-blue-400 transition"> About Us</a>
              </li>
              <li>
                <a href="/product" className="hover:text-blue-400 transition"> Products </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-blue-400 transition"> Contact Us </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-5"> Our Services  </h2>
            <ul className="space-y-3 text-gray-400">
              <li>
                <a href="/web-development" className="hover:text-blue-400 transition"> Web Development</a>
              </li>
              <li>
                <a href="/web-design" className="hover:text-blue-400 transition"> Web Design </a>
              </li>
              <li>
                <a href="/ui-ux" className="hover:text-blue-400 transition"> UI / UX Design </a>
              </li>
              <li>
                <a href="/support" className="hover:text-blue-400 transition">  Support </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h2 className="text-xl font-semibold mb-5"> Contact Us</h2>
            <ul className="space-y-4 text-gray-400">
              <li>📍 Ahilyanagar, Maharashtra</li>
              <li>
                📧{" "}
                <a  href="mailto:info@example.com"  className="hover:text-blue-400" > info@example.com</a>
              </li>

              <li>📞{" "}
                <a href="tel:+910000000000" className="hover:text-blue-400" > +91 00000 00000</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-5">
            <div>
              <h2 className="text-xl font-semibold">
                Subscribe to Our Newsletter
              </h2>
              <p className="text-gray-400 mt-2">
                Get updates about our latest products and services.
              </p>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert("Newsletter backend is not connected yet.");
              }}
              className="flex w-full md:w-auto gap-2"
            >
              <input
                type="email"
                placeholder="Enter your email"
                required
                className="min-w-0 flex-1 md:w-64 px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 outline-none focus:border-blue-400"
              />

              <button
                type="submit"
                className="px-5 py-3 bg-blue-500 rounded-lg hover:bg-blue-600 transition"
              >
                Subscribe
              </button>
            </form>

          </div>
        </div>

      </div>

      {/* Copyright */}
      <div className="border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row justify-between items-center gap-3 text-sm text-gray-400">

          <p>
            © {new Date().getFullYear()} Logo. All Rights Reserved.
          </p>

          <div className="flex gap-5">
            <a href="/privacy" className="hover:text-blue-400">
              Privacy Policy
            </a>

            <a href="/terms" className="hover:text-blue-400">
              Terms & Conditions
            </a>
          </div>

        </div>
      </div>

    </footer>
  );
}

export default Footer;