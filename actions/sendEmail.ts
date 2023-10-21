"use server";

import { Resend } from "resend";
import { validateString, getErrorMessage } from "@/utils/helper";
import ContactForm from "@/email/ContactForm";
import React from "react";

const resend = new Resend(process.env.RESEND_API_KEY);

console.log(process.env.NEXT_PROJECTS_KEY);

export const sendEmail = async (formData: FormData) => {
  const name = formData.get("name");
  const number = formData?.get("number");
  const senderEmail = formData.get("email");
  const message = formData.get("message");

  if (!validateString(senderEmail)) {
    return { error: "invalid email" };
  }

  if (!validateString(message)) {
    return { error: "invalid message" };
  }

  try {
    const data = await resend.emails.send({
      from: "Portfolio form <onboarding@resend.dev>",
      to: "spectertech202@gmail.com",
      subject: "message from portfolio form V_3",
      reply_to: senderEmail as string,
      react: React.createElement(ContactForm, {
        message: message as string,
        senderEmail: senderEmail as string,
        name: name as string,
        number: number as string,
      }),
    });

    return { data };
  } catch (error) {
    console.log("my error", error);
    return {
      error: getErrorMessage(error),
    };
  }
};
