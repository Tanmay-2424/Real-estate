import React from "react";
import { assets, testimonialsData } from "../assets/assets";
import { motion } from "framer-motion";

const Testimonails = () => {
  return (
    <motion.div
        initial={{ opacity: 0, x:100}}
        transition={{ duration: 1}}
        whileInView={{ opacity: 1, x: 0}}
        viewport={{ once: true }}
      className="container mx-auto py-10 lg:px-32 w-full
    overflow-hidden"
      id="Testimonails"
    >
      <h1
        className="text-2xl sm:text-4xl font-bold mb-2
      text-center"
      >
        Customer
        <span
          className="underline underline-offset-4
      decoration-1 under font-light"
        >
          Testimonails
        </span>
      </h1>
      <p
        className="text-center text-gray-500 mb-12 max-w-80
      mx-auto"
      >
        Real Stories from Those Who Found Home With Us
      </p>

      <div className="flex flex-wrap justify-center gap-8 max-w-[1024px] mx-auto">
        {testimonialsData.map((testimonial, index) => (
          <div
            key={index}
            className="w-full sm:w-[45%] lg:w-[30%] shadow-lg rounded px-8 py-12 text-center"
          >
            <img
              className="w-20 h-20 rounded-full mx-auto mb-4"
              src={testimonial.image}
              alt={testimonial.alt}
            />
            <h2 className="text-lg text-gray-700 font-medium">
              {testimonial.name}
            </h2>
            <p className="text-gray-500 mb-4 text-xs">{testimonial.title}</p>
            <div className="flex justify-center gap-1 text-red-500 mb-4">
              {Array.from({ length: testimonial.rating }, (_, index) => (
                <img key={index} src={assets.star_icon} alt="" />
              ))}
            </div>
            <p className='text-gray-600 text-sm'>{testimonial.text}</p>
          </div>
        ))}
      </div>
    </ motion.div>
  );
};

export default Testimonails;
