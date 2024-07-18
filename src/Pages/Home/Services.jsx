import React from "react";

const ServicesData = [
  {
    title: "Web Development",
    description:
      "We create high-performing websites that are easy to navigate, visually appealing, and optimized for search engines.",
    icon: "fa-laptop-code",
  },
  {
    title: "Mobile Development",
    description:
      "We develop mobile apps that are user-friendly, visually stunning, and optimized for performance.",
    icon: "fa-mobile-screen",
  },
  {
    title: "E-Commerce Solutions",
    description:
      "We build e-commerce websites that are secure, scalable, and designed to drive sales.",
    icon: "fa-shopping-cart",
  },
  {
    title: "Custom Solutions",
    description:
      "We create custom web and mobile applications that are tailored to your unique needs and goals.",
    icon: "fa-cogs",
  },
  {
    title: "SEO Services",
    description:
      "We offer comprehensive SEO services to help your website rank higher in search engine results and attract more visitors.",
    icon: "fa-search",
  },
  {
    title: "Maintenance & Support",
    description:
      "We provide ongoing maintenance and support services to keep your website or app running smoothly and securely.",
    icon: "fa-tools",
  },
];

const Services = () => {
  return (
    <div className="container mx-auto px-2 md:px-4 py-16">
      <div className="flex justify-center">
        <h2
          className={
            " inline-block text-2xl xs:text-3xl md:text-5xl font-bold text-center pb-0 xs:pb-2 md:pb-4 lg:pb-6 " +
            " text-transparent bg-clip-text bg-gradient-to-r from-[#00f1ff] to-[#7932d9]"
          }
        >
          What You Will Get
        </h2>
      </div>
      <p className=" lg:text-center md:text-lg md:px-4 pb-8">
        Elevate your online presence with our expert website and app development
        services. We create digital solutions that perfectly align with your
        brand and captivate your audience.
        {/* Elevate your online presence with our expert website and app development
        services. We create high-performing digital solutions tailored to your
        specific needs that perfectly align with your brand, captivate your
        audience, and drive results. From concept to completion, let us
        transform your digital vision into a reality. */}
      </p>
      {/* <i className="fa-solid fa-mobile-screen text-8xl"></i> */}
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {ServicesData.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
    </div>
  );
};

function ServiceCard({ title, description, icon }) {
  return (
    <div className="flex flex-col gap-4 borde rounded-lg p-4 bg-[#212121]">
      <div className="flex items-center gap-4">
        <i className={`fa-solid ${icon} text-3xl text-[#00f1ff]`}></i>
        <h3 className="text-xl font-bold">{title}</h3>
      </div>
      <p>{description}</p>
    </div>
  );
}

export default Services;
