import React from "react";
import { ServicesData } from "../../InfoDatas/ServicesData";

const Services = () => {
  return (
    <>
      <h1 className=" text-center w-max mx-auto font-extrabold text-4xl mt-2 mb-4 text-transparent bg-clip-text bg-gradient-to-l from-[#7932d9] to-[#00f2ff98]">
        Services
      </h1>
      <p className=" container mx-auto text-xl mb-10">
        Unleash your digital potential with our expert website and mobile app
        development services. We craft innovative, user-centric solutions that
        drive results. From concept to launch, we deliver exceptional digital
        experiences tailored to your brand.
      </p>
      <div className="w-full container mx-auto flex flex-col mb-16">
        {ServicesData.map((service, index) => {
          return (
            <section className=" py-8 border-b">
              <div className="flex items-center gap-4 w-full lg:hidden">
                <i
                  className={`fa-solid ${service.icon} text-3xl text-[#00f1ff]`}
                ></i>
                <h2 className="text-2xl font-bold">{service.title}</h2>
              </div>
              <div
                key={index}
                className=" flex flex-col-reverse lg:flex-row w-full justify-between bg-[#4f0596 items-center"
              >
                <div className="w-full lg:w-8/12">
                  <div className="flex flex-col justify-center gap-6 h-full mt-6">
                    <div className="items-center gap-4 w-full hidden lg:flex">
                      <i
                        className={`fa-solid ${service.icon} text-3xl text-[#00f1ff]`}
                      ></i>
                      <h2 className="text-2xl font-bold">{service.title}</h2>
                    </div>
                    {service.descriptions.map((description, index) => {
                      return (
                        <p className=" text-lg" key={index}>
                          {description}
                        </p>
                      );
                    })}
                  </div>
                </div>
                <div className="w-full lg:w-4/12">
                  <img
                    className="w-full"
                    alt={service.title + " Visual Picture"}
                    src={service.image}
                  />
                </div>
              </div>
            </section>
          );
        })}
      </div>
    </>
  );
};

export default Services;
