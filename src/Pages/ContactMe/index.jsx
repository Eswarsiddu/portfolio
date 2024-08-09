import React from "react";
import { useOutletContext } from "react-router-dom";
import { ServicesData } from "../../InfoDatas/ServicesData";

function ContactMe() {
  const { navBarHeight } = useOutletContext();
  const messageTitleRef = React.useRef(null);
  const messageTextAreaRef = React.useRef(null);
  return (
    <>
      <h1
        className=" bg-gradient-to-l from-[#7932d9] to-[#00f2ff98] text-center text-4xl lg:text-5xl font-bold mb-4"
        style={{ padding: `${navBarHeight}px 0` }}
      >
        <span className="block translate-y-1/2">Contact Me Today</span>
      </h1>
      <div className="flex flex-col gap-1 items-center justify-between container mx-auto">
        {/* <div className=" w-1/2 lg:w-1/3"> */}
        {/* <h2 className="text-3xl font-medium">I am here to help</h2> */}
        {/* <p className="py-2 text-lg">
            Do you have a project in mind or need assistance with your existing
            online presence? I'm here to help. Whether you're looking for
            website design, SEO, or digital marketing strategies, I can provide
            tailored solutions to meet your specific needs.
          </p> */}
        <p className="text-base lg:text-lg mb-4">
          Feel free to reach out with any questions or inquiries you may have.
          I'm eager to discuss your project and explore how I can help you
          achieve your goals.
        </p>
        {/* </div> */}
        <div className=" w-full mb-8">
          <form className=" grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-8">
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
            />
            <InputGroup
              label="Phone"
              type="text"
              placeholder="Enter your phone number"
              required
            />
            <InputGroup
              label="Company"
              type="text"
              placeholder="Enter your company name"
            />
            <div>
              <label htmlFor="" className=" text-xl font-bold ">
                Purpose of Inquiry
              </label>
              <div className=" flex flex-col gap-2 mt-2">
                <div className="flex gap-2 items-center">
                  <input
                    type="radio"
                    id="question"
                    name="purpose"
                    onChange={(e) => {
                      messageTitleRef.current.innerHTML = "Service Enquiry";
                      messageTextAreaRef.current.placeholder =
                        "Enter your service enquiry";
                    }}
                    className="w-5 h-5 cursor-pointer"
                    defaultChecked
                  />
                  <label htmlFor="question" className=" cursor-pointer text-lg">
                    Service Enquiry
                  </label>
                </div>
                <div className="flex gap-2 items-center">
                  <input
                    type="radio"
                    id="project"
                    name="purpose"
                    onChange={(e) => {
                      messageTitleRef.current.innerHTML = "Quote Enquiry";
                      messageTextAreaRef.current.placeholder =
                        "Enter your quote enquiry";
                    }}
                    className="w-5 h-5 cursor-pointer"
                  />
                  <label htmlFor="project" className=" cursor-pointer text-lg">
                    Quote Enquiry
                  </label>
                </div>
                <div className="flex gap-2 items-center">
                  <input
                    type="radio"
                    id="partnership"
                    name="purpose"
                    onChange={(e) => {
                      messageTitleRef.current.innerHTML = "Feedback";
                      messageTextAreaRef.current.placeholder =
                        "Enter your feedback";
                    }}
                    className="w-5 h-5 cursor-pointer"
                  />
                  <label
                    htmlFor="partnership"
                    className=" cursor-pointer text-lg"
                  >
                    Feedback
                  </label>
                </div>
              </div>
            </div>
            <div>
              <label htmlFor="" className="text-xl font-bold">
                What services are you interested in?
              </label>
              <div className="grid grid-cols-2 gap-2 mt-2">
                {ServicesData.map((service, index) => {
                  return (
                    <div className="flex gap-2 items-center" key={index}>
                      <input
                        type="checkbox"
                        id={service.title.split(" ").join("-")}
                        name={service.title.split(" ").join("-")}
                        className="w-5 h-5 cursor-pointer"
                        required
                      />
                      <label
                        htmlFor={service.title.split(" ").join("-")}
                        className=" text-lg cursor-pointer"
                      >
                        {service.title}
                      </label>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="col-span-2">
              <label
                htmlFor=""
                className="text-xl font-bold"
                ref={messageTitleRef}
              >
                Service Enquiry
                {/* Message */}
              </label>
              <textarea
                ref={messageTextAreaRef}
                className=" rounded-lg p-2 border border-red-400 focus:border-[#7932d9] focus:outline-2 focus:outline-[#7932d9] ring-0 w-full bg-[#FFFFF0] text-black text-base lg:text-lg mt-2"
                placeholder="Enter your service enquiry"
                rows={5}
                required
              ></textarea>
            </div>
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
    <div className=" flex flex-col gap-1 w-full">
      <label htmlFor="" className="text-xl font-bold ps-1">
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
        className=" rounded-lg p-2 border border-red-400 focus:border-[#7932d9] focus:outline-2 focus:outline-[#7932d9] ring-0 w-full bg-[#FFFFF0] text-black text-base lg:text-lg"
        placeholder={placeholder}
        required={required}
        disabled={disabled}
      />
    </div>
  );
}

export default ContactMe;
