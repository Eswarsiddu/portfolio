import React, { useEffect } from "react";
import { Link, useOutletContext } from "react-router-dom";

// const AboutMe = () => {
//   const { navBarHeight } = useOutletContext();
//   return (
//     <div
//       style={{
//         paddingTop: `${navBarHeight}px`,
//       }}
//     >
//       About me
//     </div>
//   );
// };

// import React from "react";

const AboutMe = () => {
  const { navBarHeight } = useOutletContext();
  useEffect(() => {
    document.title = "Siddu Eswar | About Me";
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div
        className="bg-gradient-to-l from-[#7932d9] to-[#00f2ff98]"
        style={{
          paddingTop: `${navBarHeight}px`,
        }}
      >
        <div className="py-16 md:px-6 px-2 xs:px-0">
          <h1 className="text-xl lg:text-2xl font-bold text-center">
            Discover the Expertise Behind Your Digital Success - Siddu Eswar
          </h1>
          <p className=" container mx-auto mt-4 ">
            As a dedicated developer, I bring your vision to life with secure,
            high-quality, and scalable web and app solutions. With a passion for
            innovation and a focus on user-centric design, I transform ideas
            into powerful digital experiences that drive business growth and
            success.
          </p>
        </div>
      </div>

      <div className="container mx-auto my-8 lg:pt-0 mb-8 md:px-6 px-2 xs:px-0 space-y-8">
        <section className="">
          <h2 className="text-2xl font-semibold mb-4">
            <i class="fa-solid fa-user"></i> Who I Am and What I Do:
          </h2>
          <p className=" mb-4">
            I’m <span>Siddu Eswar</span>, a professional web and mobile app
            developer committed to delivering exceptional digital products that
            help businesses thrive. With extensive experience across multiple
            domains, I specialize in creating modern, performance-driven
            websites, apps, and software tailored to your unique goals.
          </p>
          <p>
            My focus is on providing secure, reliable, and innovative digital
            solutions that leave a lasting impact while maintaining transparency
            and professionalism throughout the project lifecycle.
          </p>
        </section>

        <section className="">
          <h2 className="text-2xl font-semibold mb-4">
            <i class="fa-solid fa-star"></i> What I Do Best:
          </h2>
          <p>
            I offer a comprehensive range of development services to elevate
            your brand's online presence:
          </p>
          <ul className="list-disc pl-6 ">
            <li>
              <strong>Web Development:</strong> Crafting modern, responsive, and
              SEO-friendly websites for all industries.
            </li>
            <li>
              <strong>Mobile App Development:</strong> Building dynamic,
              cross-platform apps optimized for performance and user experience.
            </li>
            <li>
              <strong>E-Commerce Solutions:</strong> Designing secure and
              scalable online stores with seamless payment gateway integration.
            </li>
            <li>
              <strong>Custom Solutions:</strong> Developing bespoke software
              tailored to meet complex business needs.
            </li>
            <li>
              <strong>SEO Services:</strong> Optimizing websites for better
              visibility and higher rankings.
            </li>
            <li>
              <strong>Maintenance & Support:</strong> Providing ongoing support,
              performance optimization, and technical maintenance.
            </li>
          </ul>
        </section>

        <section className="">
          <h2 className="text-2xl font-semibold mb-4">
            <i class="fa-solid fa-thumbs-up"></i> Why Work With Me?
          </h2>
          <p>
            Choosing Siddu Eswar means partnering with a developer dedicated to
            excellence and transparency.
          </p>
          <ul className="list-disc pl-6 ">
            <li>
              <strong>Quality-Driven Approach:</strong> Clean, optimized code
              and visually stunning designs.
            </li>
            <li>
              <strong>Transparent Process:</strong> Clear milestones, no hidden
              charges, and milestone-based payments.
            </li>
            <li>
              <strong>Secure Payment Handling:</strong> Razorpay integration for
              safe and reliable transactions.
            </li>
            <li>
              <strong>Client-Centric Focus:</strong>Custom-tailored solutions to
              meet your business objectives.
            </li>
          </ul>
          <p>
            I’m not just a developer — I’m your technology partner, committed to
            helping you succeed digitally.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">
            <i class="fa-solid fa-envelope"></i> Let's Build Something Amazing
            Together!
          </h2>
          <p className=" mb-4">
            Ready to transform your ideas into powerful digital solutions? Let’s
            collaborate and create something exceptional.
          </p>
          <Link to="/contact-me" className="text-[#8af9ff] underline">
            Contact Me
          </Link>
          {/* <p className="text-gray-700">
            <a
              href="mailto:contact@siddueswar.com"
              className="text-[#8af9ff] underline"
            >
              your-email@example.com
            </a>
          </p>
          <p className="text-gray-700">
            <a href="tel:+919502766882" className="text-[#8af9ff] underline">
              +91-95027 66882
            </a>
          </p> */}
        </section>
      </div>
    </>
  );
};

export default AboutMe;
