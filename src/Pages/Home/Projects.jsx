import { Link } from "react-router-dom";
import { RouteNames } from "../../Routes";
import Button from "../../CustomComponents/Button";
import { useNavigate } from "react-router-dom";

export default function Projects() {
  const navigate = useNavigate();
  return (
    <div className="my-6 ">
      {/* <p>Projects</p> */}
      <h2 className="my-10 text-3xl text-white text-center font-bold">
        {/* Projects */}
        PROJECTS
      </h2>
      <div className="container mx-auto px-4 flex flex-row-reverse gap-16 w-full">
        <div className="w-6/12 flex-shrink-0">
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
        <div className=" text-white flex flex-col justify-center bg-red gap-4 flex-grow">
          <h3 className="text-2xl">Spear security Force</h3>
          <p className="">
            A 5-page professional website showcasing their services and contact
            information to grow their business, featuring enhanced online
            availability and accessibility to reach and attract more clients
            effectively.
          </p>
          {/* <p className=" leading-7">
            Looking beyond security, Spear Security Force also provides a
            premium housekeeping program. Their pre-vetted and reliable staff
            can clean and disinfect your home or business, ensuring a healthy
            environment. With their commitment to these services and their core
            values of integrity, professionalism, and excellence, Spear Security
            Force aims to be your trusted partner for complete peace of mind.
          </p> */}
          <div className="flex gap-4">
            {/* <a
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
            </Link> */}
            <Button
              onClick={() => {
                window.open("https://www.spearsecurityforce.in/");
              }}
            >
              <span className="text-sm xs:text-base font-bold">Visit site</span>
            </Button>

            <Button
              secondary
              onClick={() => {
                navigate(RouteNames.SPEAR_SECURITY_FORCE);
              }}
            >
              <span className="text-sm xs:text-base font-bold">Read More</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
