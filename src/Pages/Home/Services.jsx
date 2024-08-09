import React from "react";
import { ServicesData } from "../../InfoDatas/ServicesData";
import { Link, useNavigate } from "react-router-dom";
import { RouteNames } from "../../Routes";

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
      <div className="  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* <div className=""> */}
        {ServicesData.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
    </div>
  );
};

function ServiceCard({ title, shortDescription, icon }) {
  const navigate = useNavigate();
  // const [hovered, setHovered] = React.useState(false);
  return (
    <div
      tabIndex={0}
      className="col-star relative flex flex-col gap-4 rounded-lg borde p-4 bg-[#212121] overflow-hidde group hover:bg-gradient-to-r to-[#00f1ffa6] from-[#7932d9a6] cursor-pointer"
      // to={RouteNames.SERVICES + "#" + title.split(" ").join("-")}
      // to={RouteNames.SERVICES}
      onClick={() => {
        navigate(RouteNames.SERVICES, {
          state: { title },
          replace: false,
        });
      }}
    >
      <div className="flex items-center gap-4">
        <i className={`fa-solid ${icon} text-3xl text-[#00f1ff]`}></i>
        <h3 className="text-xl font-bold">{title}</h3>
      </div>
      <p>{shortDescription}</p>
      <p className="group-hover:underline relative w-max">
        <span className="ps-4 group-hover:ps-0 group-hover:pe-2 transition-all duration-300">
          View More
        </span>
        <i class="fa-solid fa-chevron-right absolute left-0 group-hover:left-full transition-all duration-300 top-1/2 -translate-y-1/2"></i>
      </p>
    </div>
  );
}

export default Services;
