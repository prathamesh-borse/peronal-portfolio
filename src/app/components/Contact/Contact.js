"use client";
import Image from "next/image";
import React, { useState } from "react";

const Contact = () => {
  const [userEmail, setUserEmail] = useState("");
  const [userMessage, setUserMessage] = useState("");

  const sendMail = () => {
    if (!userEmail || !userMessage) {
      alert("Please fill out both fields before sending.");
      return;
    }

    // Owner Email Address
    const recipientEmail = "prathameshborse.official@gmail.com";

    // mailTo Link
    const mailToLink = `mailto:${recipientEmail}?subject=Contact%20Form&body=From: ${userEmail}%0D%0A%0D%0A${userMessage}`;

    // Open Default Mail Client
    window.location.href = mailToLink;

    // clear input field
    setUserEmail("");
    setUserMessage("");
  };

  return (
    <>
      <div id="contact" className="mt-15 xs:mb-30">
        <div className="h-screen text-white">
          <div className="flex flex-col items-center justify-center">
            <h3 className="hero text-3xl font-semibold mb-2">Contact</h3>
            <p className="contactMe text-[#00c2cb] font-medium">
              Ready to get started on your project?
            </p>
            <p className="contactMe text-[#00c2cb] font-medium pb-1">
              Contact me now for a Free consultation.
            </p>
          </div>
          <div className="hover:cursor-pointer flex flex-col sm:flex-row gap-4 items-center justify-center p-3">
            <div className="flex flex-row items-center justify-center hover:bg-pink-600 transition-all duration-300 p-4 bg-[#00c2cb] rounded-lg w-full sm:w-auto shadow-2xl gap-2">
              <Image
                src="/assets/email-icon.svg"
                alt="Email Icon"
                width={40}
                height={40}
                className="w-10 h-10 hover:text-white"
              />
              <h3 className="text-center text-base text-lg font-medium pl-0 text-black break-all hover:text-white">
                prathameshborse.official@gmail.com
              </h3>
            </div>
            <div className="flex flex-row items-center justify-center hover:bg-pink-600 transition-all duration-300 p-4 bg-[#00c2cb] rounded-lg items-center w-full sm:w-auto shadow-2xl gap-2">
              <Image
                src="/assets/phone-icon.svg"
                alt="Waving Hand"
                width={40}
                height={40}
                className="w-10 h-10"
              />
              <span className="text-center text-base sm:text-lg font-medium text-black hover:text-white">
                (+91)<span className="pl-2">7972582918</span>
              </span>
            </div>
          </div>
          <h3 className="hero text-center text-2xl font-semibold mt-5">
            Get in touch using this form
          </h3>
          <div className="flex items-center justify-center mt-3 px-4">
            <div className="w-full max-w-lg">
              <input
                type="email"
                name="email"
                id="email"
                value={userEmail}
                onChange={(e) => setUserEmail(e.target.value)}
                placeholder="Email"
                className="contactMeForm w-full px-4 py-2 mb-3 bg-transparent text-black placeholder-gray-300 border border-white rounded-lg outline-none"
              />
              <textarea
                name="message"
                id="message"
                rows={11}
                cols={70}
                value={userMessage}
                onChange={(e) => setUserMessage(e.target.value)}
                className="contactMeForm w-full px-4 py-3 bg-transparent text-black placeholder-gray-300 border border-white rounded-lg outline-none"
                placeholder="Sent a message to get started."
              ></textarea>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <button
              onClick={sendMail}
              className="w-auto sm:w-48 mx-auto mt-4 px-6 py-2 bg-[#00c2cb] text-white font-medium rounded-full hover:opacity-70 transition duration-300"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
