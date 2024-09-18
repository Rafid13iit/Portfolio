"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { slideIn } from "@/utils/motion";
import EarthCanvas from "./canvas/Earth";
import SectionWrapper from "../hoc/SectionWrapper";

const Contact = () => {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          from_name: form.name,
          to_name: "Rafid",
          from_email: form.email,
          to_email: "bsse1330@iit.du.ac.bd",
          message: form.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        style={{
          background:
            "linear-gradient(135deg, rgba(58,58,158,1) 0%, rgba(90,50,140,1) 50%, #5b345b 100%)",
          borderRadius: `calc(1.75rem* 0.96)`,
          padding: "2rem",
          boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.5)", // Adding a soft shadow for depth
        }}
        className="flex-[0.75] p-8 rounded-2xl border-neutral-200 dark:border-slate-800"
      >
        <p className="sm:text-[18px] text-[14px] text-purple text-secondary uppercase tracking-wider">
          Get in touch
        </p>
        <h3 className="sm:text-[24px] text-[18px] font-bold text-white">
          Contact.
        </h3>

        <form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col gap-8">
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your good name?"
              className="bg-[rgba(0,0,0,0.6)] py-4 px-6 placeholder:text-secondary placeholder:text-silver text-white rounded-lg outline-none border-none font-medium shadow-inner"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email?"
              className="bg-[rgba(0,0,0,0.6)] py-4 px-6 placeholder:text-secondary placeholder:text-silver text-white rounded-lg outline-none border-none font-medium shadow-inner"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea
              rows={7}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What you want to say?"
              className="bg-[rgba(0,0,0,0.6)] py-4 px-6 placeholder:text-secondary placeholder:text-silver text-white rounded-lg outline-none border-none font-medium shadow-inner"
            />
          </label>

          <button
            type="submit"
            className="bg-[#663399] py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary hover:bg-[#000319] transition duration-300"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
