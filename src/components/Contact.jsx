import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FiSend } from "react-icons/fi";

const Contact = () => {
  const form = useRef();
  const [isSent, setIsSent] = useState(false);
  const [error, setError] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      form.current,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log("SUCCESS:", result.text);
          setIsSent(true);
          setError("");
          form.current.reset();
        },
        (error) => {
          console.log("FAILED:", error.text);
          setError("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <section
      id="contact"
      className="min-h-screen bg-black text-white py-12 sm:py-16 px-4 sm:px-6 flex flex-col items-center"
    >
      <h2 className="text-2xl sm:text-4xl font-bold text-purple-400 mb-6 text-center">
        Get in Touch
      </h2>

      <p className="text-center text-gray-300 mb-8 sm:mb-10 max-w-md">
        Let’s Connect and Build Something Great! 🚀
        <br />
        <span className="text-white font-medium">
          I'm open for collaboration, freelance projects, and full-time roles.
        </span>
      </p>

      <form
        ref={form}
        onSubmit={sendEmail}
        className="w-full max-w-md p-6 sm:p-8 rounded-2xl shadow-lg backdrop-blur-lg space-y-5 "
      >
        <div>
          <label className="block text-sm mb-1">Your Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            required
            className="w-full px-4 py-2 rounded-lg bg-white text-black focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
        </div>

        <div>
          <label className="block text-sm mb-1">Email Address</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            required
            className="w-full px-4 py-2 rounded-lg bg-white text-black focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
        </div>

        <div>
          <label className="block text-sm mb-1">Your Message</label>
          <textarea
            name="message"
            rows="4"
            placeholder="Type your message here..."
            required
            className="w-full px-4 py-2 rounded-lg bg-white text-black focus:outline-none focus:ring-2 focus:ring-purple-400 resize-none"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full flex items-center justify-center gap-2 bg-purple-500 hover:bg-purple-600 text-white py-2 px-4 rounded-lg transition-all duration-200"
        >
          <FiSend size={18} /> Send Message
        </button>

        {isSent && (
          <p className="text-green-400 text-sm mt-2">
            ✅ Message sent successfully!
          </p>
        )}
        {error && (
          <p className="text-red-400 text-sm mt-2">
            {error}
          </p>
        )}
      </form>
    </section>
  );
};

export default Contact;
