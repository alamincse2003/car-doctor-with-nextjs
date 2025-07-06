import Image from "next/image";
import Link from "next/link";
import React from "react";

export default async function ServicesDetailsPage({ params }) {
  const p = await params;
  const res = await fetch(`http://localhost:3000/api/service/${p.id}`);
  const data = await res.json();

  return (
    <div className="py-10 mt-20">
      <div className="relative w-full h-64 md:h-96">
        <Image
          src="/assets/images/checkout/checkout.png"
          alt="banner"
          layout="fill"
          objectFit="cover"
          className="brightness-75"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-white text-3xl md:text-5xl font-bold">
            {data.title}
          </h1>
        </div>
      </div>
      <section className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Left: Image + Content */}
          <div className="md:col-span-2 space-y-4">
            <div className="w-full h-64 relative rounded-lg overflow-hidden">
              <Image
                src={data.img}
                alt={data.title}
                layout="fill"
                objectFit="cover"
              />
            </div>
            <h2 className="text-2xl font-bold text-gray-800">{data.title}</h2>
            <p className="text-gray-700 leading-relaxed">{data.description}</p>
          </div>

          {/* Right: Price + Checkout */}
          <div className="bg-white rounded-xl shadow-md p-6 space-y-4 border">
            <p className="text-xl text-gray-600">Price</p>
            <h3 className="text-3xl font-semibold text-blue-600">
              {data.price || "$0.00"}
            </h3>
            <Link href={`/checkout/${data._id}`}>
              <button className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition">
                Proceed to Checkout
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
