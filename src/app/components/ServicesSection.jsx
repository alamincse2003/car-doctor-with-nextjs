import React from "react";
import { FaArrowRight } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import dbConnect, { collectionNamesObj } from "@/lib/dbConnect";

const serviceCollection = dbConnect(collectionNamesObj.servicesCollection);
const data = await serviceCollection.find({}).toArray();
const ServicesSection = () => {
  return (
    <section className="py-16   mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-10">
          Our Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.map((item) => (
            <div
              key={item._id}
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition p-4"
            >
              <div className="relative w-full h-48 rounded-lg overflow-hidden">
                <Image
                  src={item.img}
                  alt={item.title}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="mt-4 flex justify-between items-center">
                <div>
                  <h3 className="text-lg font-bold text-gray-800">
                    {item.title}
                  </h3>
                  <p className="text-blue-600 font-medium">{item.price}</p>
                </div>
                <Link href={`/services/${item._id}`}>
                  <FaArrowRight className="text-blue-600 hover:text-blue-800 text-xl" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
