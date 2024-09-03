import { Link } from "react-router-dom";
import { RouteNames } from "../../Routes";
import Button from "../../CustomComponents/Button";
import { useNavigate } from "react-router-dom";

export default function Projects() {
  return (
    <div className="my-6 ">
      {/* <p>Projects</p> */}
      <h2 className="my-10 text-3xl text-white text-center font-bold">
        {/* Projects */}
        {/* PROJECTS */}
        MY WORKS
      </h2>
      <ProjectCard
        title={"Spear Security Force"}
        shortDescription={
          "A 5-page professional website showcasing their services and contact information to grow their business, featuring enhanced online availability and accessibility to reach and attract more clients effectively."
        }
        image={"/images/spearSecurityScreenshot.jpg"}
        siteLink={"https://www.spearsecurityforce.in/"}
        readMoreLink={RouteNames.SPEAR_SECURITY_FORCE}
      />
      {/* <div className="container mx-auto px-4 flex md:flex-row-reverse flex-col gap-6 md:gap-16 w-full">
        <div className=" text-white flex flex-col justify-center bg-red gap-4 flex-grow">
          <h3 className="text-2xl">Spear security Force</h3>
          <div className="md:hidden flex-shrink-0">
            <a href="https://www.spearsecurityforce.in/" target="_blank">
              <img
                src="/images/spearSecurityScreenshot.jpg"
                alt="Spear Security Force"
                className="w-full"
              />
            </a>
          </div>
          <p className="">
            A 5-page professional website showcasing their services and contact
            information to grow their business, featuring enhanced online
            availability and accessibility to reach and attract more clients
            effectively.
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
        <div className="hidden md:block w-6/12 flex-shrink-0">
          <a href="https://www.spearsecurityforce.in/" target="_blank">
            <img
              src="/images/spearSecurityScreenshot.jpg"
              alt="Spear Security Force"
              className="w-full"
            />
          </a>
        </div>
      </div> */}
    </div>
  );
}

export function ProjectCard({
  title,
  shortDescription,
  image,
  siteLink,
  readMoreLink,
}) {
  const navigate = useNavigate();
  return (
    <div className="container mx-auto px-4 flex md:flex-row-reverse flex-col gap-6 md:gap-16 w-full">
      <div className=" text-white flex flex-col justify-center bg-red gap-4 flex-grow">
        <h3 className="text-2xl">{title}</h3>
        <div className="md:hidden flex-shrink-0">
          <a href={siteLink} target="_blank">
            <img src={image} alt={title} className="w-full" />
          </a>
        </div>
        <p className="">{shortDescription}</p>
        {/* <p className=" leading-7">
        Looking beyond security, Spear Security Force also provides a
        premium housekeeping program. Their pre-vetted and reliable staff
        can clean and disinfect your home or business, ensuring a healthy
        environment. With their commitment to these services and their core
        values of integrity, professionalism, and excellence, Spear Security
        Force aims to be your trusted partner for complete peace of mind.
      </p> */}
        <div className="flex gap-4">
          <Button
            onClick={() => {
              window.open(siteLink);
            }}
          >
            <span className="text-sm xs:text-base font-bold">Visit site</span>
          </Button>

          <Button
            secondary
            onClick={() => {
              navigate(readMoreLink);
            }}
          >
            <span className="text-sm xs:text-base font-bold">Read More</span>
          </Button>
        </div>
      </div>
      <div className="hidden md:block w-6/12 flex-shrink-0">
        <a href={siteLink} target="_blank">
          <img src={image} alt={title} className="w-full" />
        </a>
      </div>
    </div>
  );
}
