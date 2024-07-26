import React from "react";
import { useOutletContext } from "react-router-dom";

function ContactMe() {
  const { navBarHeight } = useOutletContext();
  return (
    <>
      <h1
        className=" bg-gradient-to-l from-[#7932d9] to-[#00f2ff98] text-center text-5xl font-bold mb-8"
        style={{ padding: `${navBarHeight}px 0` }}
      >
        Contact Me Today
      </h1>
      <div className="flex lg:items-center flex-col-reverse md:flex-row justify-between container px-4 mx-auto">
        <div className=" w-1/2 lg:w-1/3">
          <h2 className="text-3xl font-medium">I am here to help</h2>
          {/* <p className="py-2 text-lg">
            Do you have a project in mind or need assistance with your existing
            online presence? I'm here to help. Whether you're looking for
            website design, SEO, or digital marketing strategies, I can provide
            tailored solutions to meet your specific needs.
          </p>
          <p className="text-lg">
            Feel free to reach out with any questions or inquiries you may have.
            I'm eager to discuss your project and explore how I can help you
            achieve your goals.
          </p> */}
        </div>
        <div className=" w-1/2 lg:w-1/3">
          <form className="flex flex-col gap-3">
            <h2 className=" text-center text-3xl font-medium">Contact Me</h2>
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
            {/* <InputGroup
            label="Message"
            type="text"
            placeholder="Enter your message"
            required
          /> */}
          </form>
        </div>
      </div>
    </>
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
