import { useForm } from "@formspree/react";
import React, { useEffect, useState } from "react";
import { Analytics } from "@vercel/analytics/next";

const Contact = () => {
  const [state, handleSubmit] = useForm("mzzkkawj");
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    if (state.succeeded) {
      setShowSuccess(true);

      // Hide success msg & show form again after 3 sec
      const timer = setTimeout(() => {
        setShowSuccess(false);
        state.reset(); // reset formspree state
      }, 4000);

      return () => clearTimeout(timer);
    }
  }, [state]);

  return (
    <div id="contact" className="scroll-mt-24 py-20 px-4 xs:mb-30">
      <div className="max-w-6xl mx-auto text-white">
        <div className="text-center">
          <h3 className="hero text-3xl font-semibold mb-2">Contact</h3>
          <p className="contactMe text-[#00c2cb] font-medium">
            Ready to get started on your project?
          </p>
        </div>

        <div className="mt-8 flex justify-center">
          <div className="w-full max-w-2xl mx-auto">
            <div className="backdrop-blur-md/30 bg-white/5 border border-white/20 rounded-2xl p-5 sm:p-6 shadow-2xl">
              {/* ✅ Success message */}
              {showSuccess && (
                <div className="text-center text-green-400 py-6 text-lg font-semibold">
                  ✅ Message Sent Successfully!
                </div>
              )}

              {/* ✅ Show form only when success message is NOT visible */}
              {!showSuccess && (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your name"
                    className="contactMeForm w-full px-4 py-3 bg-transparent text-white border border-white rounded-lg"
                    required
                  />

                  <input
                    type="email"
                    name="email"
                    placeholder="you@example.com"
                    className="contactMeForm w-full px-4 py-3 bg-transparent text-white border border-white rounded-lg"
                    required
                  />

                  <textarea
                    name="message"
                    rows="8"
                    placeholder="Tell me about your project..."
                    className="contactMeForm w-full px-4 py-3 bg-transparent text-white border border-white rounded-lg"
                    required
                  ></textarea>

                  <button
                    type="submit"
                    disabled={state.submitting}
                    className="w-48 px-6 py-3 bg-[#00c2cb] text-white font-medium rounded-full hover:opacity-80 transition duration-300 mx-auto"
                  >
                    {state.submitting ? "Sending..." : "Submit"}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
      <Analytics />
    </div>
  );
};

export default Contact;
