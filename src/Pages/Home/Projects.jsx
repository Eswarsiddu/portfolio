import { Link } from "react-router-dom";
import { RouteNames } from "../../Routes";

export default function Projects() {
  return (
    <div className="my-6 ">
      {/* <p>Projects</p> */}
      <h2 className="my-10 text-3xl text-white text-center">Projects</h2>
      <div className="container mx-auto px-4 flex gap-16">
        <div className="w-1/3">
          <img
            src="/images/spearSecurityScreenshot.jpg"
            alt="Spear Security Force"
            className="w-full"
            // className="w-1/2 mx-auto"
          />
          {/* <iframe src="https://www.youtube.com/embed/1j8Zg6Z2j4A" className="w-full" height="200" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
          {/* <iframe
            src="http://spearsecurityforce.in/"
            className="w-full h-[200%]"
          /> */}
        </div>
        <div className=" text-white flex flex-col gap-4 w-2/3">
          <h3 className="text-2xl">Spear security Force</h3>
          <p className=" leading-7">
            Spear Security Force offers complete security solutions in India.
            They specialize in protecting critical infrastructure and commercial
            properties with both highly trained security guards and elite armed
            guards. Their guards can tailor solutions to your specific needs,
            while their armed guards are trained in advanced tactics for
            high-risk situations.
          </p>
          <p className=" leading-7">
            Looking beyond security, Spear Security Force also provides a
            premium housekeeping program. Their pre-vetted and reliable staff
            can clean and disinfect your home or business, ensuring a healthy
            environment. With their commitment to these services and their core
            values of integrity, professionalism, and excellence, Spear Security
            Force aims to be your trusted partner for complete peace of mind.
          </p>
          <div className="flex gap-4">
            <a
              className="p-2 bg-[#7932d9] rounded text-white hover:bg-[#6925c2] font-medium"
              href="https://www.spearsecurityforce.in/"
              target="_blank"
            >
              Visit site
            </a>
            <Link
              to={RouteNames.SPEAR_SECURITY_FORCE}
              className="p-2 bg-red-500 rounded text-white hover:bg-red-600 font-medium"
            >
              Read More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
