import { useEffect } from "react";
("react");
import { useOutletContext } from "react-router-dom";
import LandingPage from "/images/spearSecurityScreenshot.jpg";

const SpearSecurityForce = () => {
  const { navBarHeight } = useOutletContext();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className=" text-white container w-full mx-auto px-4 md:px-8 mt-6">
      <div className="flex justify-between items-center flex-col md:flex-row gap-4 md:gap-0">
        <div className="w-full md:w-4/12 flex flex-col gap-4">
          <h2 className=" text-3xl font-bold text-[#06bca7] tex-red-500">
            Spear Security Force
          </h2>
          <p className="pe-4">
            Safeguards businesses and homes with trained guards, elite armed
            protection, and premium housekeeping services.
          </p>
          <a
            className=" bg-[#7932d9] font-medium w-max block p-3 rounded hover:bg-[#6925c2]"
            href="https://www.spearsecurityforce.in"
            target="_blank"
            rel="noreferrer"
          >
            <span>Visit Website</span>
          </a>
        </div>
        <img
          src={LandingPage}
          alt="project logo"
          className="w-full md:w-8/12"
        />
      </div>

      <div className="my-4 flex justify-between">
        <div className=" w-full py-8">
          <div className=" mb-6">
            <h2 className=" text-2xl text-[#06bca7] font-bold mb-2">
              Project Brief
            </h2>
            <p className=" pe-8 ">
              A respected provider in the security industry, Spear Security
              Force lacked a digital presence to match their expertise and
              attract new clients. To bridge this gap, I designed a
              user-friendly website that showcases their comprehensive security
              solutions, including highly trained security guards, elite armed
              guards, and premium housekeeping services. This platform
              streamlines the path towards a secure and protected space for
              businesses and residences across India, allowing potential clients
              to easily understand their services and contact them for a quote.
            </p>
          </div>

          <div className=" mb-6">
            <h2 className=" text-2xl text-[#06bca7] font-bold mb-2">Result</h2>
            <p className=" mb-1">
              Spear Security Force's website launch was a success! The project
              involved crafting key user interfaces for optimal user experience
              (UX):
            </p>
            <ul className="ps-4 list-disc flex flex-col gap-2">
              <li>
                <span className=" font-bold ">Landing Page : </span>This first
                impression point serves as the digital storefront, capturing
                potential clients and guiding them towards relevant security
                solutions.
              </li>
              <li>
                <span className="font-bold ">About Us Page : </span>This section
                establishes Spear Security Force's brand identity and core
                values of professionalism and expertise, fostering trust with
                potential clients.
              </li>
              <li>
                <span className="font-bold">Detailed Services Page : </span>A
                dedicated page details all services offered by Spear Security
                Force (security guards, armed guards, and housekeeping). This
                page provides clear and comprehensive information about each
                service, ensuring users understand the provided solutions. The
                information can be presented in sections with clear headings,
                such as "Security Guard Services," "Armed Guard Services," and
                "Housekeeping Services."
              </li>
              <li>
                <span className="font-bold">Our Clients Page : </span>This
                section showcase successful client partnerships, potentially
                building social proof and attracting new business.
              </li>
              <li>
                <span className="font-bold">Contact Page : </span>A
                user-friendly contact form was implemented to streamline
                communication and allow potential clients to easily request
                quotes or inquire about services.
              </li>
            </ul>
            <p className="mt-4">
              Additionally, the website's SEO strategy has yielded impressive
              results, achieving a second-page ranking on Google Search within a
              week of launch.{" "}
            </p>
          </div>

          <h2 className=" text-2xl text-[#06bca7] font-bold">
            Services Provided
          </h2>
          <ul className=" ps-4 list-disc flex flex-col gap-2 mt-2">
            <li>Website Design</li>
            <li>Website Development</li>
            <li>SEO Optimisation</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

function ImagesDisplay({ images = [] }) {
  return (
    <div className="grid grid-cols-2 gap-4">
      <img src="https://via.placeholder.com/150" alt="image1" />
      <img src="https://via.placeholder.com/150" alt="image2" />
      <img src="https://via.placeholder.com/150" alt="image3" />
      <img src="https://via.placeholder.com/150" alt="image4" />
    </div>
  );
}

export default SpearSecurityForce;
