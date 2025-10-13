"use client";
import { Analytics } from "@vercel/analytics/next";
import Image from "next/image";
import React, { useState } from "react";

const Contact = () => {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userMessage, setUserMessage] = useState("");

  const sendMail = () => {
    if (!userName || !userEmail || !userMessage) {
      alert("Please fill out all fields before sending.");
      return;
    }

    // Owner Email Address
    const recipientEmail = "prathameshborse.official@gmail.com";

    // mailTo Link
    const subject = encodeURIComponent(
      "New message from portfolio contact form",
    );
    const body = encodeURIComponent(
      `From: ${userName} <${userEmail}>\n\n${userMessage}`,
    );
    const mailToLink = `mailto:${recipientEmail}?subject=${subject}&body=${body}`;

    // Open Default Mail Client
    window.location.href = mailToLink;

    // clear input field
    setUserName("");
    setUserEmail("");
    setUserMessage("");
  };

  return (
    <>
      <div id="contact" className="scroll-mt-24 py-20 px-4 xs:mb-30">
        <div className="max-w-6xl mx-auto text-white">
          <div className="text-center">
            <h3 className="hero text-3xl font-semibold mb-2">Contact</h3>
            <p className="contactMe text-[#00c2cb] font-medium">
              Ready to get started on your project?
            </p>
            <p className="contactMe text-[#00c2cb] font-medium">
              Contact me now for a Free consultation.
            </p>
          </div>
          <div className="mt-8 flex justify-center">
            <div className="w-full max-w-2xl mx-auto">
              <div className="backdrop-blur-md/30 bg-white/5 border border-white/20 rounded-2xl p-5 sm:p-6 shadow-2xl">
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    sendMail();
                  }}
                  className="space-y-4"
                >
                  <div>
                    <label htmlFor="name" className="block text-sm mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={userName}
                      onChange={(e) => setUserName(e.target.value)}
                      placeholder="Your name"
                      className="contactMeForm w-full px-4 py-3 bg-transparent text-white dark:text-black placeholder-gray-400 border border-white rounded-lg outline-none focus:ring-2 focus:ring-[#00c2cb]"
                      required
                      aria-required="true"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={userEmail}
                      onChange={(e) => setUserEmail(e.target.value)}
                      placeholder="you@example.com"
                      className="contactMeForm w-full px-4 py-3 bg-transparent text-white placeholder-gray-400 border border-white rounded-lg outline-none focus:ring-2 focus:ring-[#00c2cb]"
                      required
                      aria-required="true"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm mb-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={8}
                      value={userMessage}
                      onChange={(e) => setUserMessage(e.target.value)}
                      placeholder="Tell me about your project..."
                      className="contactMeForm w-full px-4 py-3 bg-transparent text-white placeholder-gray-400 border border-white rounded-lg outline-none focus:ring-2 focus:ring-[#00c2cb]"
                      required
                      aria-required="true"
                    ></textarea>
                  </div>
                  <div className="pt-2 flex justify-center">
                    <button
                      type="submit"
                      className="w-48 px-6 py-3 bg-[#00c2cb] text-white font-medium rounded-full hover:opacity-80 transition duration-300 mx-auto"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Analytics />
    </>
  );
};

export default Contact;
