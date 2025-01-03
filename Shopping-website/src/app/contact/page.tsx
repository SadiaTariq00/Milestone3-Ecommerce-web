'use client';
import { useState } from "react";



export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Contact Form Submitted:", formData);
    alert("Your message has been submitted! We will get back to you soon.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <>

      <div className="p-8 min-h-screen" style={{ backgroundImage: "url('https://img.freepik.com/free-vector/hand-drawn-shopping-pattern-design_23-2149628702.jpg')" }}>
        <form
          onSubmit={handleSubmit}
          className="max-w-xl mx-auto bg-white shadow-md rounded-lg p-6"
        >
          {/* Logo and Heading */}
          <div>
           
            <h1 className="text-3xl font-bold text-center text-yellow-600 mb-6">Contact Us</h1>
          </div>

          {/* Name Field */}
          <div className="mb-4">
            <label htmlFor="name" className="block text-green-900 font-bold">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border-gray-300 border rounded-lg p-2 shadow-yellow-500 shadow-sm"
              placeholder="Enter your name"
              required
            />
          </div>

          {/* Email Field */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-green-900 font-bold">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border-gray-300 border rounded-lg p-2 shadow-yellow-500 shadow-sm"
              placeholder="Enter your email"
              required
            />
          </div>

        

          {/* Message Field */}
          <div className="mb-4">
            <label htmlFor="message" className="block text-green-900 font-bold">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full border-gray-300 border rounded-lg p-2 shadow-yellow-500 shadow-sm"
              placeholder="Enter your message"
              rows={5}
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-green-600 text-white font-bold py-2 rounded-lg hover:bg-yellow-700"
          >Send Message
          </button>
        </form>
      </div>

    </>
  );
}