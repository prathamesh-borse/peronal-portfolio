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
          <div className="flex flex-wrap sm:flex-row flex-col gap-4 items-center justify-center p-3">
            <div className="flex flex-wrap flex-col sm:flex-row sm:items-center sm:justify-center hover:bg-pink-600 transition-all duration-300 p-4 bg-[#00c2cb] rounded-lg items-center w-full sm:w-auto shadow-2xl gap-2">
              <Image
                src="/assets/email-icon.svg"
                alt="Email Icon"
                width={40}
                height={40}
                className="w-10 h-10"
              />
              <h3 className="flex sm:pl-3 sm:items-center sm:justify-center hover:text-white text-center text-lg font-medium pl-0 text-black">
                prathameshborse.official@gmail.com
              </h3>
            </div>
            <div className="flex flex-wrap flex-col sm:flex-row sm:items-center sm:justify-center hover:bg-pink-600 transition-all duration-300 p-4 px-24 bg-[#00c2cb] rounded-lg items-center w-full sm:w-auto shadow-2xl gap-2">
              <Image
                src="/assets/phone-icon.svg"
                alt="Waving Hand"
                width={40}
                height={40}
                className="w-10 h-10"
              />
              <span className="hover:text-white text-center text-lg font-medium pl-3 text-black">
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
                className="contactMeForm w-full px-4 py-2 bg-transparent placeholder-white rounded-xl text-white border border-1 border-white rounded-lg outline-none mb-3"
              />
              <textarea
                name="message"
                id="message"
                rows={11}
                cols={70}
                value={userMessage}
                onChange={(e) => setUserMessage(e.target.value)}
                className="contactMeForm w-full px-4 py-3 bg-transparent placeholder-white rounded-xl text-white border border-1 border-white rounded-lg outline-none"
                placeholder="Sent a message to get started."
              ></textarea>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <button
              onClick={sendMail}
              className="h-10 w-35 uppercase hover:text-white mt-2 px-6 py-2 bg-[#00c2cb] text-white uppercase rounded-full hover:opacity-70 transition duration-300"
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
