import { useEffect } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import LandingPage from "/images/smartTechsScreenshot.png"; // Use the image for Smart Techs HR Services

const SmartTechsHRServices = () => {
  const { navBarHeight } = useOutletContext();
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div
      className="text-white container w-full mx-auto px-4 md:px-8 mt-6"
      style={{
        paddingTop: `${navBarHeight}px`,
      }}
    >
      {/* back button */}
      <button
        onClick={() => {
          console.log("referrer", document.referrer, !document.referrer);
          if (!document.referrer) {
            navigate("/"); // Replace '/' with your homepage URL if needed
            return;
          }
          if (document.referrer.indexOf(window.location.hostname) === -1) {
            // If the referrer is from a different domain, redirect to home
            navigate("/");
          } else {
            // Otherwise, `go` back to the previous page in history
            window.history.back();
          }
        }}
        className="text-[#06bca7] bg-transparent px-4 py-2 rounded"
      >
        <span> &lt; Back</span>
      </button>

      <div className="flex justify-between items-center flex-col md:flex-row gap-4 md:gap-0">
        <div className="w-full md:w-4/12 flex flex-col gap-4">
          <h2 className="text-3xl font-bold text-[#06bca7] tex-red-500">
            Smart Techs HR Services
          </h2>
          <p className="pe-4">
            Provides expert HR solutions with a focus on recruitment, training,
            and strategic workforce management to support business success.
          </p>
        </div>
        <img
          src={LandingPage}
          alt="Smart Techs HR Services"
          className="w-full md:w-8/12"
        />
      </div>

      <div className="my-4 flex justify-between">
        <div className="w-full py-8">
          <div className="mb-6">
            <h2 className="text-2xl text-[#06bca7] font-bold mb-2">
              Project Brief
            </h2>
            <p className="pe-8">
              Smart Techs HR Services needed an online platform that could
              effectively showcase their HR solutions and attract clients. I
              designed a user-friendly website that highlights their
              recruitment, training, and workforce management services. This
              platform enables businesses to easily discover and engage with
              Smart Techs HR Services for strategic workforce solutions,
              ensuring smooth and efficient talent management.
            </p>
          </div>

          <div className="mb-6">
            <h2 className="text-2xl text-[#06bca7] font-bold mb-2">Result</h2>
            <p className="mb-1">
              The launch of Smart Techs HR Services' website was a success! The
              project involved creating key user interfaces for a seamless user
              experience (UX):
            </p>
            <ul className="ps-4 list-disc flex flex-col gap-2">
              <li>
                <span className="font-bold">Landing Page : </span>The first
                point of contact, guiding visitors to explore HR services and
                solutions.
              </li>
              <li>
                <span className="font-bold">About Us Page : </span>Introduces
                Smart Techs HR Services’ core values, highlighting their
                expertise and approach in workforce management.
              </li>
              <li>
                <span className="font-bold">Services Page : </span>A dedicated
                page outlining the HR services offered by Smart Techs, including
                recruitment, employee training, and strategic HR management.
              </li>
              <li>
                <span className="font-bold">Contact Page : </span>A simple
                contact form for easy communication, enabling businesses to
                request consultations or inquire about services.
              </li>
              <li>
                <span className="font-bold">Registration Form Page : </span>This
                page allows individuals to register by filling out a form to
                find job opportunities. It provides an easy way for job seekers
                to submit their details and connect with potential employers.
              </li>
            </ul>
          </div>

          <h2 className="text-2xl text-[#06bca7] font-bold">
            Services Provided
          </h2>
          <ul className="ps-4 list-disc flex flex-col gap-2 mt-2">
            <li>Website Design</li>
            <li>Website Development</li>
            {/* <li>SEO Optimization</li> */}
            <li>Content Strategy</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SmartTechsHRServices;
