"use client";
import React, { FormEvent, useRef, useState } from "react";
import { ToastAction } from "@/components/ui/toast";
import { useToast } from "@/components/ui/use-toast";
import axios from "axios";
import Heading from "./Heading";

type FormData = {
  name: string;
  email: string;
  message: string;
};

const Contact: React.FC = () => {
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);
  const initialFormData: FormData = {
    name: "",
    email: "",
    message: "",
  };
  const [formData, setFormData] = useState<FormData>(initialFormData);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      await axios({
        method: "POST",
        url: "/api/send",
        data: { ...formData },
      });
      setFormData(initialFormData);
    } catch (error) {
      console.error("error herooooooooo", error);
    } finally {
      toast({
        title: "Email Sent!!",
        description: "Thanks, i'll get back to you soon.",
        action: (
          <ToastAction altText="Goto schedule to undo">Close</ToastAction>
        ),
      });
      formRef.current?.reset();
    }
  };
  return (
    <div className="text-[#D0CFCF] mb-24">
      <Heading title="Contact" />
      <form
        className="flex flex-col gap-4 max-w-xl mx-auto "
        action=""
        onSubmit={handleSubmit}
        ref={formRef}
      >
        <label className="flex flex-col" htmlFor="name">
          NAME
          <input
            className="rounded-sm h-9 text-white p-2 bg-[#404040]"
            required
            type="text"
            name="name"
            id="name"
            onChange={handleChange}
          />
        </label>
        <label className="flex flex-col" htmlFor="email">
          EMAIL
          <input
            className="rounded-sm h-9 text-white p-2 bg-[#404040]"
            required
            type="email"
            name="email"
            id="email"
            onChange={handleChange}
          />
        </label>
        <label className="flex flex-col" htmlFor="message">
          MESSAGE(Max. 500 characters)
          <textarea
            className="rounded-sm p-2 text-white bg-[#404040]"
            name="message"
            id=""
            cols={5}
            rows={8}
            onChange={handleChange}
          ></textarea>
        </label>
        <button className="bg-[#4F4F4F] h-12 rounded-sm" type="submit">
          SEND MESSAGE
        </button>
      </form>
    </div>
  );
};

export default Contact;
