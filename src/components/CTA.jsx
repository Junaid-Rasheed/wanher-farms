"use client";

import { Sprout } from 'lucide-react';
import { useState } from 'react';

export function CTA() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({ firstName: '', lastName: '', email: '' });
  };

  return (
    <section className="py-20 px-6 md:px-12 lg:px-24 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-2 text-gray-700 mb-6">
          <Sprout className="w-5 h-5" />
          <span className="text-sm font-medium">Become our partner</span>
        </div>

        <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
          Lets grow together!<br />
          Join us as a distributor, partner or customer. Get in touch
        </h2>

        <p className="text-gray-700 mb-12">Sign-up below to join the beta group.</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="Name"
              className="w-full px-6 py-4 bg-gray-200 text-gray-900 placeholder-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-700 transition-all"
              required
            />
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Last name"
              className="w-full px-6 py-4 bg-gray-200 text-gray-900 placeholder-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-700 transition-all"
              required
            />
          </div>

          <div className="relative">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email Address"
              className="w-full px-6 py-4 bg-gray-200 text-gray-900 placeholder-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-700 transition-all"
              required
            />
            <button
              type="submit"
              className="absolute right-2 top-1/2 -translate-y-1/2 px-6 py-2 font-semibold text-gray-900 hover:text-green-700 transition-colors"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
