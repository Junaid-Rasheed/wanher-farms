"use client";

import { Sprout } from "lucide-react";
import { useState } from "react";

export function CTA() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Mailto submit
  const handleSubmit = (e) => {
    e.preventDefault();

    const subject = encodeURIComponent("New Contact from Website");
    const body = encodeURIComponent(
      `First name: ${formData.firstName}
Last name: ${formData.lastName}
Email: ${formData.email}

Sent from website contact form.`
    );

    window.location.href = `mailto:openaiflaws@gmail.com?subject=${subject}&body=${body}`;

    // reset form
    setFormData({ firstName: "", lastName: "", email: "" });
  };

  return (
    <section className="py-20 px-6 bg-[#f4f2ef]">
      <div className="mx-2 md:mx-20">
        {/* Top Label */}
        <div className="flex items-center gap-2 text-gray-700 mb-6">
          <Sprout className="w-4 h-4" />
          <span className="text-sm font-medium">Become our partner</span>
        </div>

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-semibold mb-4 leading-tight">
          Lets grow together!
        </h2>
        <h3 className="text-3xl md:text-5xl font-medium text-gray-800 mb-6">
          Join us as a distributor, partner or customer. Get in touch
        </h3>

        <p className="text-gray-600 mb-10 text-md">
          Sign-up below to join the beta group.
        </p>

        {/* FORM */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* First + Last Name */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="Name"
              className="w-full px-5 py-3 bg-[#dfdcd9] rounded-md placeholder-[#b8b6b4] focus:ring-2 focus:ring-black/60 outline-none"
              required
            />
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Last name"
              className="w-full px-5 py-3 bg-[#dfdcd9] rounded-md placeholder-[#b8b6b4] focus:ring-2 focus:ring-black/60 outline-none"
              required
            />
          </div>

          {/* Email + Submit button inside */}
          <div className="relative">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email Address"
              className="w-full px-5 py-3 bg-[#dfdcd9] rounded-md placeholder-[#b8b6b4] focus:ring-2 focus:ring-black/60 outline-none"
              required
            />

            <button
              type="submit"
              className="absolute right-3 top-1/2 -translate-y-1/2 px-4 py-1 font-medium text-gray-900 hover:text-black transition cursor-pointer"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
