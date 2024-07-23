import React from "react";
import { ServicesData } from "../../InfoDatas/ServicesData";

const Services = () => {
  return (
    <>
      <h1 className=" text-center w-max mx-auto font-extrabold text-4xl mt-2 mb-4 text-transparent bg-clip-text bg-gradient-to-l from-[#7932d9] to-[#00f2ff98]">
        Services
      </h1>
      <p className=" container mx-auto px-4 md:px-6 text-xl mb-10">
        Unleash your digital potential with our expert website and mobile app
        development services. We craft innovative, user-centric solutions that
        drive results. From concept to launch, we deliver exceptional digital
        experiences tailored to your brand.
      </p>
      <div className="w-full container mx-auto px-4 md:px-6 flex flex-col gap-8 mb-16">
        {ServicesData.map((service, index) => {
          return (
            <div
              key={index}
              className=" flex w-full justify-between bg-[#4f0596"
            >
              <div className="w-6/12">
                <div className="flex flex-col justify-center gap-6 h-full mt-6">
                  <div className="flex items-center gap-4 w-full">
                    <i
                      className={`fa-solid ${service.icon} text-3xl text-[#00f1ff]`}
                    ></i>
                    <h3 className="text-2xl font-bold">{service.title}</h3>
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
              <div className="w-4/12">
                <img className="w-full" src={service.image} />
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Services;
