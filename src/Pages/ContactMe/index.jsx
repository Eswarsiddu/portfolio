import React, { useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import { ServicesData } from "../../InfoDatas/ServicesData";
import Button from "../../CustomComponents/Button";
import toast from "react-hot-toast";

const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;

function ContactMe() {
  const { navBarHeight } = useOutletContext();
  const [loading, setLoading] = React.useState(false);
  const messageTitleRef = React.useRef(null);
  const messageTextAreaRef = React.useRef(null);

  const nameRef = React.useRef(null);
  const emailRef = React.useRef(null);
  const phoneRef = React.useRef(null);
  const companyRef = React.useRef(null);
  const purposeRef = React.useRef(null);
  const servicesRef = React.useRef(null);

  useEffect(() => {
    document.title = "Siddu Eswar | Contact Me";
    window.scrollTo(0, 0);
  }, []);

  const formSubmitted = (e) => {
    e.preventDefault();
    toast.dismiss();
    const form = e.target;
    const formData = new FormData(form);
    const data = {};
    for (let [key, value] of formData.entries()) {
      console.log(key, value);
      if (key === "services") {
        if (data[key]) {
          data[key].push(value);
        } else {
          data[key] = [value];
        }
      } else {
        data[key] = value;
      }
    }
    if (data.email) {
      if (!emailRegex.test(data.email)) {
        toast.error("Invalid Email");
        emailRef.current?.focus();
        window.scrollTo(0, 0);
        // emailRef.current?.scrollIntoView();
        return;
      }
    }
    if (!data.services) {
      toast.error("Please select a service");
      servicesRef.current?.focus();
      window.scrollTo(0, servicesRef.current?.offsetTop - 120);
      return;
    }
    if (messageTextAreaRef.current.value.length < 10) {
      toast.error("Message should be atleast 10 characters long");
      messageTextAreaRef.current.focus();
      window.scrollTo(0, messageTextAreaRef.current.offsetTop - 120);
      return;
    }
    data.message = messageTextAreaRef.current?.value;
    toast.promise(
      new Promise(async (resolve, reject) => {
        try {
          setLoading(true);
          const res = await fetch(
            "https://4x2ipky4ra2fplylzj7nrzgqc40xpdim.lambda-url.ap-south-1.on.aws/",
            {
              method: "POST",
              body: JSON.stringify(data),
              headers: {
                "Content-Type": "application/json",
              },
            }
          );
          setLoading(false);
          if (res.ok) {
            resolve();
            e.target.reset();
          } else {
            reject();
          }
        } catch (e) {
          console.log(e);
          setLoading(false);
          reject();
        }
      }),
      {
        loading: "Submitting Form, Please Wait",
        success: "Thank you for submitting the form",
        error: "Error Submitting Form, Please Try Again",
      },
      {
        duration: 5000,
      }
    );
    // toast.success("Form Submitted");
    // console.log(data);
  };
  return (
    <>
      <h1
        className=" bg-gradient-to-l from-[#7932d9] to-[#00f2ff98] text-center text-4xl lg:text-5xl font-bold mb-4"
        style={{ padding: `${navBarHeight}px 0` }}
      >
        <span className="block translate-y-1/2">Contact Me Today</span>
      </h1>
      <div className="flex flex-col gap-1 items-center justify-between container mx-auto md:px-6 2xl:px-0">
        {/* <div className=" w-1/2 lg:w-1/3"> */}
        {/* <h2 className="text-3xl font-medium">I am here to help</h2> */}
        {/* <p className="py-2 text-lg">
            Do you have a project in mind or need assistance with your existing
            online presence? I'm here to help. Whether you're looking for
            website design, SEO, or digital marketing strategies, I can provide
            tailored solutions to meet your specific needs.
          </p> */}
        <p className="text-base lg:text-lg mb-4">
          Feel free to reach out with any questions or enquiries you may have.
          I'm eager to discuss your project and explore how I can help you
          achieve your goals.
        </p>
        {/* </div> */}
        <div className=" w-full mb-8 max-w-[1400px] mx-auto">
          <form
            className="flex flex-col gap-4 lg:gap-6 w-full"
            onSubmit={formSubmitted}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <InputGroup
                label="Name"
                type="text"
                name="name"
                namedRef={nameRef}
                disabled={loading}
                placeholder="Enter your name"
                required
              />
              <InputGroup
                label="Email"
                type="email"
                name="email"
                namedRef={emailRef}
                pattern={"[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}$"}
                disabled={loading}
                placeholder="Enter your email"
              />
              <InputGroup
                label="Phone"
                type="text"
                name="phone"
                namedRef={phoneRef}
                maxNumber={10}
                placeholder="Enter your phone number"
                disabled={loading}
                required
                pattern={"[0-9]{10}"}
              />
              <InputGroup
                label="Company"
                type="text"
                name="company"
                namedRef={companyRef}
                disabled={loading}
                placeholder="Enter your company name"
              />

              <div>
                <label htmlFor="" className=" text-lg font-bold ">
                  Purpose of Inquiry
                </label>
                <div className=" flex flex-col gap-2 mt-2">
                  <div className="flex gap-2 items-center">
                    <input
                      type="radio"
                      id="question"
                      name="purpose"
                      value="Service Enquiry"
                      disabled={loading}
                      onChange={(e) => {
                        messageTitleRef.current.innerHTML = "Service Enquiry";
                        messageTextAreaRef.current.placeholder =
                          "Enter your service enquiry";
                      }}
                      className="w-5 h-5 cursor-pointer"
                      defaultChecked
                    />
                    <label htmlFor="question" className=" cursor-pointer">
                      Service Enquiry
                    </label>
                  </div>
                  <div className="flex gap-2 items-center">
                    <input
                      type="radio"
                      id="project"
                      name="purpose"
                      value="Quote Enquiry"
                      disabled={loading}
                      onChange={(e) => {
                        messageTitleRef.current.innerHTML = "Quote Enquiry";
                        messageTextAreaRef.current.placeholder =
                          "Enter your quote enquiry";
                      }}
                      className="w-5 h-5 cursor-pointer"
                    />
                    <label htmlFor="project" className=" cursor-pointer">
                      Quote Enquiry
                    </label>
                  </div>
                  <div className="flex gap-2 items-center">
                    <input
                      type="radio"
                      id="partnership"
                      name="purpose"
                      value="Feedback"
                      disabled={loading}
                      onChange={(e) => {
                        messageTitleRef.current.innerHTML = "Feedback";
                        messageTextAreaRef.current.placeholder =
                          "Enter your feedback";
                      }}
                      className="w-5 h-5 cursor-pointer"
                    />
                    <label htmlFor="partnership" className=" cursor-pointer">
                      Feedback
                    </label>
                  </div>
                </div>
              </div>
              <div>
                <label htmlFor="" className="text-lg font-bold">
                  What services are you interested in?
                </label>
                <div className="grid grid-cols-2 gap-2 mt-2">
                  {ServicesData.map((service, index) => {
                    return (
                      <div className="flex gap-2 items-center" key={index}>
                        <input
                          ref={index === 0 ? servicesRef : null}
                          type="checkbox"
                          id={service.title.split(" ").join("-")}
                          name="services"
                          className="w-4 h-4 cursor-pointer"
                          disabled={loading}
                          value={service.title}
                          // required
                        />
                        <label
                          htmlFor={service.title.split(" ").join("-")}
                          className=" cursor-pointer"
                        >
                          {service.title}
                        </label>
                      </div>
                    );
                  })}
                </div>
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
                className=" rounded-lg p-2 border border-red-400 focus:border-[#7932d9] focus:outline-2 focus:outline-[#7932d9] ring-0 w-full bg-[#FFFFF0] text-black text-base lg:text-lg mt-2 autofill:bg-white"
                placeholder="Enter your service enquiry"
                rows={5}
                disabled={loading}
                required
              ></textarea>
            </div>
            {/* <InputGroup
            label="Message"
            type="text"
            placeholder="Enter your message"
            required
          /> */}
            {/* <button className="bg-green-400 rounded">
            Submit
          </button> */}
            <div>
              <Button disabled={loading}>Submit</Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

function InputGroup({
  label,
  type,
  name,
  placeholder,
  maxNumber,
  namedRef,
  required = false,
  disabled = false,
  pattern = undefined,
}) {
  // console.log("required for label", label, required);
  return (
    <div className=" flex flex-col gap-1 w-full">
      <label htmlFor="" className="text-lg font-bold ps-1">
        {label}{" "}
        {required ? (
          <span className="text-red-500">*</span>
        ) : (
          <span className=" opacity-50 text-sm">(optional)</span>
        )}
      </label>
      <input
        ref={namedRef}
        type={type}
        pattern={pattern}
        name={name}
        maxLength={maxNumber}
        // onInvalid={(e) => {
        //   console.log("invalid", e.target.value);
        //   e.target.setCustomValidity(
        //     `Please enter a valid ${label.toLowerCase()}`
        //   );
        // }}
        className=" rounded-lg p-2 border border-red-400 focus:border-[#7932d9] focus:outline-2 focus:outline-[#7932d9] ring-0 w-full bg-[#FFFFF0] text-black"
        placeholder={placeholder}
        required={required}
        disabled={disabled}
      />
    </div>
  );
}

export default ContactMe;
