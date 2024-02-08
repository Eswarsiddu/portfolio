import React from "react";
import { useOutletContext } from "react-router-dom";

function ContactMe() {
  const { navBarHeight } = useOutletContext();
  return (
    <div
      className="flex justify-between container mx-auto"
      style={{ paddingTop: `${navBarHeight + 10}px` }}
    >
      <div className="w-1/3">
        <h2>Contact me</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
          porro tempora, rerum delectus recusandae fugiat quos deleniti cumque
          deserunt asperiores quidem repudiandae! Voluptate, libero. Quibusdam,
          est? Incidunt quis enim aliquid!
        </p>
      </div>
      <div className="w-1/3">
        <form className="flex flex-col gap-3">
          <h2 className=" text-center">Tell me about your project</h2>
          <InputGroup
            label="Name"
            type="text"
            placeholder="Enter your name"
            required
          />
          <InputGroup
            label="Email"
            type="email"
            placeholder="Enter your email"
            required
          />
          <InputGroup
            label="Phone"
            type="text"
            placeholder="Enter your phone number"
          />
          <InputGroup
            label="Company"
            type="text"
            placeholder="Enter your company name"
          />
          <InputGroup
            label="Message"
            type="text"
            placeholder="Enter your message"
            required
          />
        </form>
      </div>
    </div>
  );
}

function InputGroup({
  label,
  type,
  placeholder,
  required = false,
  disabled = false,
  pattern = "",
}) {
  // console.log("required for label", label, required);
  return (
    <div className=" flex flex-col gap-1">
      <label htmlFor="" className=" ps-4">
        {label}{" "}
        {required ? (
          <span className="text-red-500">*</span>
        ) : (
          <span className=" opacity-50 text-sm">(optional)</span>
        )}
      </label>
      <input
        type={type}
        pattern={pattern}
        className=" rounded-full p-2 border border-red-400 w-full"
        placeholder={placeholder}
        required={required}
        disabled={disabled}
      />
    </div>
  );
}

export default ContactMe;
