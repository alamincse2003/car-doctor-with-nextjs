"use client";

export default function CheckoutForm() {
  return (
    <div className="py-12 lg:mt-20 mt-15">
      <div className="w-11/12 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center  text-gray-800">
          Book Service : <span className="text-blue-600">Service</span>
        </h2>
        <form className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-5">
          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Name
            </label>
            <input
              type="text"
              name="name"
              defaultValue="Your Name"
              readOnly
              placeholder="Your Name"
              className="w-full px-4 py-2 border rounded-md bg-gray-100 text-gray-700 focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="text"
              name="email"
              defaultValue="Your Email"
              readOnly
              placeholder="Your Email"
              className="w-full px-4 py-2 border rounded-md bg-gray-100 text-gray-700 focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          {/* Due Amount */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Due Amount
            </label>
            <input
              type="text"
              name="price"
              defaultValue="Due Phone"
              readOnly
              placeholder="Due Phone"
              className="w-full px-4 py-2 border rounded-md bg-gray-100 text-gray-700 focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          {/* Date */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Date
            </label>
            <input
              type="date"
              name="date"
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Phone
            </label>
            <input
              type="text"
              name="phone"
              placeholder="Your Phone"
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          {/* Address */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Present Address
            </label>
            <input
              type="text"
              name="address"
              placeholder="Your Address"
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          {/* Submit Button */}
          <div className="md:col-span-2">
            <button
              type="submit"
              className="w-full mt-4 bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition"
            >
              Order Confirm
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
