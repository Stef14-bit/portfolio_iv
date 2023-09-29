"use client";
import React, { useRef, SyntheticEvent } from "react";
import emailjs, { EmailJSResponseStatus } from "emailjs-com";

export const ContactUs = () => {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: SyntheticEvent) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm(
          "service_ibklexa",
          "template_t0nuw7q",
          form.current,
          "oima6GjDFnvBEc6bQ"
        )
        .then(
          (result: EmailJSResponseStatus) => {
            console.log(result.text);
          },
          (error: EmailJSResponseStatus) => {
            console.error(error.text);
          }
        );
    }
  };

  return (
    <form
      className="flex flex-col h- p-10 m-10"
      ref={form}
      onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
  );
};

export default ContactUs;
