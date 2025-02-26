import React, { useEffect } from "react";
import { ServicesData, Services } from "../../InfoDatas/ServicesData";
import { useLocation, useOutletContext } from "react-router-dom";

const ServicesPage = () => {
  const { navBarHeight } = useOutletContext();
  // const refs = ServicesData.map((service) => {
  //   return {
  //     ref: React.createRef(),
  //     title: service.title,
  //   };
  // });

  const WebRef = React.useRef(null);
  const MobileRef = React.useRef(null);
  const ECommerceRef = React.useRef(null);
  const CustomSolRef = React.useRef(null);
  const SEORef = React.useRef(null);
  const MaintenanceRef = React.useRef(null);

  const location = useLocation();
  useEffect(() => {
    document.title = "Siddu Eswar | Services";
    setTimeout(() => {
      if (location.state?.title) {
        // Scrool to that section
        const decrementer = 60;
        switch (location.state.title) {
          case Services.WEB_DEVELOPMENT:
            window.scrollTo(0, WebRef.current.offsetTop - decrementer);
            // WebRef.current.scrollIntoView();
            break;
          case Services.MOBILE_APP_DEVELOPMENT:
            window.scrollTo(0, MobileRef.current.offsetTop - decrementer);
            // MobileRef.current.scrollIntoView();
            break;
          case Services.E_COMMERCE_SOLUTIONS:
            window.scrollTo(0, ECommerceRef.current.offsetTop - decrementer);
            // ECommerceRef.current.scrollIntoView();
            break;
          case Services.CUSTOM_SOLUTIONS:
            window.scrollTo(0, CustomSolRef.current.offsetTop - decrementer);
            // CustomSolRef.current.scrollIntoView();
            break;
          case Services.SEO_SERVICES:
            window.scrollTo(0, SEORef.current.offsetTop - decrementer);
            // SEORef.current.scrollIntoView();
            break;
          case Services.MAINTENANCE_AND_SUPPORT:
            window.scrollTo(0, MaintenanceRef.current.offsetTop - decrementer);
            // MaintenanceRef.current.scrollIntoView();
            break;
          default:
            window.scrollTo(0, 0);
            break;
        }
      } else {
        window.scrollTo(0, 0);
      }
    }, 100);
  }, []);
  return (
    <>
      {/* <h1 className=" text-center w-max mx-auto font-extrabold text-4xl mt-2 mb-4 text-transparent bg-clip-text bg-gradient-to-l from-[#7932d9] to-[#00f2ff98]">
        Services
      </h1> */}
      <div
        className="bg-gradient-to-l from-[#7932d9] to-[#00f2ff98]"
        style={{
          paddingTop: `${navBarHeight}px`,
        }}
      >
        <p className=" container mx-auto text-xl lg:text-2xl py-16 md:px-6 px-2 xs:px-0 ">
          Unleash your digital potential with our expert website and mobile app
          development services. We craft innovative, user-centric solutions that
          drive results. From concept to launch, we deliver exceptional digital
          experiences tailored to your brand.
        </p>
      </div>
      <div className="w-full container mx-auto flex flex-col pt-16 lg:pt-0 mb-8 md:px-6 px-2 xs:px-0">
        {ServicesData.map((service, index) => {
          let currentRef = null;
          switch (service.title) {
            case Services.WEB_DEVELOPMENT:
              currentRef = WebRef;
              break;
            case Services.MOBILE_APP_DEVELOPMENT:
              currentRef = MobileRef;
              break;
            case Services.E_COMMERCE_SOLUTIONS:
              currentRef = ECommerceRef;
              break;
            case Services.CUSTOM_SOLUTIONS:
              currentRef = CustomSolRef;
              break;
            case Services.SEO_SERVICES:
              currentRef = SEORef;
              break;
            case Services.MAINTENANCE_AND_SUPPORT:
              currentRef = MaintenanceRef;
            default:
              break;
          }
          return (
            <section
              id={service.title.split(" ").join("-")}
              ref={currentRef}
              className=" pb-8 mb-8 border-b border-[rgba(255,255,255,0.25)]"
            >
              <div className="flex items-center gap-4 w-full lg:hidden">
                <i
                  className={`fa-solid ${service.icon} text-3xl text-[#00f1ff]`}
                ></i>
                <h2 className="text-2xl font-bold">{service.title}</h2>
              </div>
              <div
                key={index}
                className={
                  " flex flex-col-reverse w-full justify-between bg-[#4f0596 items-center " +
                  (index % 2 == 0 ? "lg:flex-row" : "lg:flex-row-reverse")
                }
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
                        <p className=" text-base lg:text-lg" key={index}>
                          {description}
                        </p>
                      );
                    })}
                  </div>
                </div>
                <div className=" w-10/12 md:w-2/3 lg:w-4/12">
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
      <p className="container mx-auto md:px-6 px-2 xs:px-0 text-base lg:text-lg">
        We are a full-service digital agency dedicated to creating exceptional
        online experiences. From crafting stunning websites and engaging mobile
        apps to developing robust e-commerce platforms and customized digital
        solutions, we offer a comprehensive range of services to help businesses
        thrive. Our expertise extends to optimizing online visibility through
        SEO and ensuring the ongoing health of digital assets with our
        maintenance and support services.
      </p>
      <p className="container mx-auto md:px-6 px-2 xs:px-0 mt-8 mb-16 text-base lg:text-lg">
        We combine design excellence, strategic thinking, and technical
        expertise to deliver tangible results. Our focus is on understanding our
        clients' unique needs and goals, and then tailoring our solutions
        accordingly. Whether you're looking to establish a strong online
        presence, drive sales, or enhance user engagement, we have the skills
        and experience to help you succeed.
      </p>
    </>
  );
};

export default ServicesPage;
