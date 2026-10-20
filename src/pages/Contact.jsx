
import Navbar from "../Comman/Navbar";
import Footer from "../Comman/Footer";

function Contact() {
  return (
    <>
      <Navbar />

      <main className="w-full overflow-hidden bg-white">

        {/* Hero Section */}
        <section className="bg-gradient-to-br from-green-50 via-white to-lime-50 px-4 py-16 sm:px-6 md:py-20">
          <div className="mx-auto max-w-4xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-green-200 bg-white px-5 py-2 text-sm font-semibold text-green-700 shadow-sm">
              <span>🍃</span> WE ARE HERE FOR YOU
            </span>

            <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
              Let's Start a
              <span className="block text-green-600">Fresh Conversation.</span>
            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-gray-600 sm:text-lg">
              Questions about our fruits or your order? Get in touch
              with us. We're always happy to help!
            </p>
          </div>
        </section>

        {/* Main Contact Section */}
        <section className="px-4 py-12 sm:px-6 sm:py-16">
          <div className="mx-auto grid max-w-6xl grid-cols-1 items-stretch gap-8 lg:grid-cols-5">

            {/* Contact Information */}
            <div className="relative overflow-hidden rounded-3xl bg-green-700 p-7 text-white shadow-xl sm:p-10 lg:col-span-2">
              <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-white/10"></div>
              <div className="absolute -bottom-16 -left-12 h-48 w-48 rounded-full bg-lime-300/10"></div>

              <div className="relative">
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-green-200">
                  Contact Information
                </p>

                <h2 className="mt-4 text-3xl font-bold leading-tight">
                  We'd Love to Hear From You!
                </h2>

                <p className="mt-4 text-sm leading-7 text-green-100 sm:text-base">
                  Reach out to us for enquiries, product information
                  or help with your fruit shopping.
                </p>

                <div className="mt-10 space-y-7">

                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/15 text-xl">
                      📍
                    </div>
                    <div className="min-w-0 pt-1">
                      <h3 className="font-bold">Our Location</h3>
                      <p className="mt-2 text-sm leading-6 text-green-100">
                        Your Store Address,
                        <br />
                        Your City, Maharashtra
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/15 text-xl">
                      📞
                    </div>
                    <div className="min-w-0 pt-1">
                      <h3 className="font-bold">Phone Number</h3>
                      <p className="mt-2 text-sm text-green-100">
                        +91 XXXXX XXXXX
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/15 text-xl">
                      ✉️
                    </div>
                    <div className="min-w-0 pt-1">
                      <h3 className="font-bold">Email Address</h3>
                      <p className="mt-2 break-all text-sm text-green-100">
                        hello@example.com
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/15 text-xl">
                      🕒
                    </div>
                    <div className="min-w-0 pt-1">
                      <h3 className="font-bold">Working Hours</h3>
                      <p className="mt-2 text-sm leading-6 text-green-100">
                        Monday – Saturday
                        <br />
                        9:00 AM – 8:00 PM
                      </p>
                    </div>
                  </div>

                </div>

                <div className="mt-10 rounded-2xl border border-white/20 bg-white/10 p-5">
                  <p className="text-lg font-bold">
                    🍎 Freshness You Can Trust
                  </p>
                  <p className="mt-2 text-sm leading-6 text-green-100">
                    Bringing natural goodness to your everyday life.
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="rounded-3xl border border-gray-100 bg-white p-6 shadow-lg shadow-gray-100/80 sm:p-10 lg:col-span-3">
              <div>
                <span className="text-sm font-bold uppercase tracking-widest text-green-600">
                  Send An Enquiry
                </span>

                <h2 className="mt-3 text-3xl font-extrabold text-gray-900">
                  Get in Touch
                </h2>

                <p className="mt-3 text-sm leading-6 text-gray-500 sm:text-base">
                  Fill in the details below and send us your message.
                </p>
              </div>

              <form
                className="mt-8 space-y-5"
                onSubmit={(e) => e.preventDefault()}
              >
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">

                  <div>
                    <label
                      htmlFor="contact-name"
                      className="mb-2 block text-sm font-semibold text-gray-700"
                    >
                      Full Name <span className="text-red-500">*</span>
                    </label>

                    <input
                      id="contact-name"
                      type="text"
                      name="name"
                      placeholder="Your full name"
                      required
                      className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 text-sm text-gray-800 outline-none transition placeholder:text-gray-400 focus:border-green-500 focus:bg-white focus:ring-4 focus:ring-green-100"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-email"
                      className="mb-2 block text-sm font-semibold text-gray-700"
                    >
                      Email Address <span className="text-red-500">*</span>
                    </label>

                    <input
                      id="contact-email"
                      type="email"
                      name="email"
                      placeholder="you@example.com"
                      required
                      className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 text-sm text-gray-800 outline-none transition placeholder:text-gray-400 focus:border-green-500 focus:bg-white focus:ring-4 focus:ring-green-100"
                    />
                  </div>

                </div>

                <div>
                  <label
                    htmlFor="contact-subject"
                    className="mb-2 block text-sm font-semibold text-gray-700"
                  >
                    Subject <span className="text-red-500">*</span>
                  </label>

                  <input
                    id="contact-subject"
                    type="text"
                    name="subject"
                    placeholder="How can we help you?"
                    required
                    className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 text-sm text-gray-800 outline-none transition placeholder:text-gray-400 focus:border-green-500 focus:bg-white focus:ring-4 focus:ring-green-100"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className="mb-2 block text-sm font-semibold text-gray-700"
                  >
                    Your Message <span className="text-red-500">*</span>
                  </label>

                  <textarea
                    id="contact-message"
                    name="message"
                    rows="5"
                    placeholder="Write your message here..."
                    required
                    className="w-full resize-y rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 text-sm leading-6 text-gray-800 outline-none transition placeholder:text-gray-400 focus:border-green-500 focus:bg-white focus:ring-4 focus:ring-green-100"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="flex w-full items-center justify-center gap-3 rounded-xl bg-green-600 px-6 py-4 font-bold text-white shadow-md shadow-green-100 transition duration-300 hover:-translate-y-0.5 hover:bg-green-700 active:translate-y-0 sm:w-auto sm:min-w-52"
                >
                  Send Message
                  <span className="text-xl">→</span>
                </button>

                <p className="text-xs leading-5 text-gray-400">
                  * Please fill in all required fields before submitting.
                </p>
              </form>
            </div>

          </div>
        </section>

        {/* Bottom Banner */}
        <section className="px-4 pb-16 sm:px-6">
          <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-5 rounded-3xl bg-lime-50 px-6 py-9 text-center sm:px-10 md:flex-row md:text-left">
            <div>
              <h2 className="text-2xl font-extrabold text-gray-900">
                Stay Fresh. Eat Healthy. 🍊
              </h2>
              <p className="mt-2 text-sm leading-6 text-gray-600">
                Explore our fruit collection and add freshness to your day.
              </p>
            </div>

            <a
              href="/products"
              className="inline-flex shrink-0 items-center justify-center rounded-xl bg-green-700 px-7 py-3.5 font-bold text-white transition hover:bg-green-800"
            >
              Explore Fruits →
            </a>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}

export default Contact;