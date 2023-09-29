"use client";
import React, { useState } from "react";
import emailjs from "emailjs-com";

const ContactForm: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setIsSubmitting(true);

    try {
      const templateId = "template_s3oddtb";
      const userId = "oima6GjDFnvBEc6bQ";

      const templateParams = {
        from_name: name,
        from_email: email,
        message,
      };

      await emailjs.send("default_service", templateId, templateParams, userId);

      setIsSubmitted(true);
      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      console.error("Error sending email:", error);
    }

    setIsSubmitting(false);
  };

  return (
    <div className="flex justify-center p-10">
      {isSubmitted ? (
        <div className="text-green-600 text-center font-light text-xl">
          Thank you for your message! We will get back to you soon.
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="flex flex-col justify-center w-2/3">
          <div className="flex flex-col justify-center">
            <label className="text-center" htmlFor="name">
              Name:
            </label>
            <input
              className="rounded-md p-2 m-2"
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="flex flex-col justify-center">
            <label className="text-center" htmlFor="email">
              Email:
            </label>
            <input
              className="rounded-md p-2 m-2"
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="flex flex-col justify-center">
            <label className="text-center" htmlFor="message">
              Message:
            </label>
            <textarea
              className="rounded-md p-2 m-2"
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-full m-5"
            disabled={isSubmitting}>
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>
        </form>
      )}
    </div>
  );
};

export default ContactForm;
