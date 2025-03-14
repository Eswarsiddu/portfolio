// import webDev from "/images/services/website.png";
// import mobile2 from "/images/services/5794866.png";
// import eCommerce from "/images/services/handDrawn.png";
// import seo from "/images/services/WavyBus.png";
// import custom from "/images/services/search.png";
// import maintainance from "/images/services/3819454.png";

import webDev from "/images/services/website.webp";
import mobile2 from "/images/services/5794866.webp";
import eCommerce from "/images/services/handDrawn.webp";
import seo from "/images/services/WavyBus.webp";
import custom from "/images/services/search.webp";
import maintainance from "/images/services/3819454.webp";

export const Services = {
  WEB_DEVELOPMENT: "Web Development",
  MOBILE_APP_DEVELOPMENT: "Mobile App Development",
  E_COMMERCE_SOLUTIONS: "E-Commerce Solutions",
  CUSTOM_SOLUTIONS: "Custom Solutions",
  SEO_SERVICES: "SEO Services",
  MAINTENANCE_AND_SUPPORT: "Maintenance & Support",
};

export const ServicesData = [
  {
    title: Services.WEB_DEVELOPMENT,
    id: Services.WEB_DEVELOPMENT.split(" ").join("-").toLowerCase(),
    image: webDev,
    descriptions: [
      // "We create high-performing websites that are easy to navigate, visually appealing, and optimized for search engines.",
      // "Our websites are designed to drive results and help your business grow.",
      // "From concept to launch, we deliver exceptional digital experiences tailored to your brand.",
      "We craft exceptional digital experiences. Our websites are meticulously designed to be both visually stunning and incredibly user-friendly. With a focus on intuitive navigation, we ensure visitors can effortlessly find what they're looking for.",
      "Driving results is our priority. Beyond aesthetics, our websites are built with a strategic approach to help businesses thrive. By combining design excellence with performance optimization, we create online platforms that captivate audiences and deliver tangible outcomes.",
      "Your vision, our expertise. From the initial concept to the grand launch, we collaborate closely with clients to bring their brand story to life. Our commitment to delivering tailored solutions ensures that every website we create is a true reflection of our clients' unique identity.",
    ],
    shortDescription:
      "We create high-performing websites that are easy to navigate, visually appealing, and optimized for search engines.",
    icon: "fa-laptop-code",
  },
  {
    title: Services.MOBILE_APP_DEVELOPMENT,
    id: Services.MOBILE_APP_DEVELOPMENT.split(" ").join("-").toLowerCase(),
    image: mobile2,
    descriptions: [
      // "We develop mobile apps that are user-friendly, visually stunning, and optimized for performance.",
      // "Our mobile apps are designed to captivate your audience and drive results.",
      // "From concept to launch, we deliver exceptional digital experiences tailored to your brand.",
      "We create mobile apps that captivate. Our team is dedicated to crafting exceptional mobile experiences that are as visually stunning as they are user-friendly. We prioritize intuitive design and seamless performance to ensure your audience enjoys every interaction.",
      "Driving results with every tap. Beyond aesthetics, our mobile apps are built with a strategic focus on achieving your goals. By combining engaging design with optimal functionality, we create powerful tools that connect with your users and deliver measurable results.",
      "Your vision, our expertise. From concept to launch, we collaborate closely with you to bring your mobile app idea to life. Our comprehensive approach ensures that every aspect of the development process aligns with your brand identity and target audience.",
    ],
    shortDescription:
      "We develop mobile apps that are user-friendly, visually stunning, and optimized for performance.",
    icon: "fa-mobile-screen",
  },
  {
    title: Services.E_COMMERCE_SOLUTIONS,
    id: Services.E_COMMERCE_SOLUTIONS.split(" ").join("-").toLowerCase(),
    image: eCommerce,
    descriptions: [
      // "We build e-commerce websites that are secure, scalable, and designed to drive sales.",
      // "Our e-commerce solutions are tailored to your unique needs and goals, helping you attract more customers and increase revenue.",
      // "From concept to launch, we deliver exceptional digital experiences that help your business shine.",
      "We build high-performance e-commerce platforms. Our e-commerce websites and mobile apps are designed with security, scalability, and sales in mind. We create robust online stores that can handle increasing traffic and transactions, while safeguarding sensitive customer data.",
      "Tailored solutions for your business. We understand that every business is unique. Our e-commerce solutions are customized to meet your specific needs and goals. From product catalogs and secure checkout processes to intuitive navigation and compelling product displays, we deliver exceptional shopping experiences that drive conversions.",
      "Empowering your business with control. Our e-commerce platforms come equipped with user-friendly admin panels, giving you the power to manage your online store with ease. Update product information, adjust prices, create enticing offers, and track performance - all from a centralized dashboard.",
    ],
    shortDescription:
      "We build e-commerce websites that are secure, scalable, and designed to drive sales.",
    icon: "fa-shopping-cart",
  },
  {
    title: Services.CUSTOM_SOLUTIONS,
    id: Services.CUSTOM_SOLUTIONS.split(" ").join("-").toLowerCase(),
    image: custom,
    descriptions: [
      // "We create custom web and mobile applications that are tailored to your unique needs and goals.",
      // "Our custom solutions are designed to help your business stand out from the competition and achieve your objectives.",
      // "From concept to launch, we deliver exceptional digital experiences that drive results.",
      "Crafting Bespoke Digital Solutions. We specialize in creating custom web and mobile applications that perfectly align with your business objectives. Our solutions are tailored to your unique needs, ensuring they address your specific challenges and capitalize on your opportunities.",
      "Driving Results Through Innovation. Our custom applications are designed to set you apart from the competition. By delivering exceptional user experiences and streamlining processes, we empower your business to achieve its goals and surpass expectations.",
      "Your Vision, Our Expertise. From the initial concept to the final product, we collaborate closely with you to bring your ideas to life. Our dedicated team leverages cutting-edge technology and industry best practices to deliver exceptional digital experiences that drive results.",
    ],
    shortDescription:
      "We create custom web and mobile applications that are tailored to your unique needs and goals.",
    icon: "fa-cogs",
  },
  {
    title: Services.SEO_SERVICES,
    id: Services.SEO_SERVICES.split(" ").join("-").toLowerCase(),
    image: seo,
    descriptions: [
      // "We offer comprehensive SEO services to help your website rank higher in search engine results and attract more visitors.",
      // "Our SEO services are designed to increase your online visibility and drive organic traffic to your site.",
      // "From keyword research to on-page optimization, we help you improve your search engine rankings and grow your business.",
      "Boost Your Online Visibility. Our comprehensive SEO services are designed to elevate your website's ranking in search engine results. By increasing your visibility, we help you attract a larger audience and generate more organic traffic.",
      "Drive Organic Traffic and Growth. We implement strategic SEO tactics to bring qualified visitors to your website. By optimizing your online presence, we help you stand out from the competition and achieve sustainable business growth.",
      "Expert SEO Optimization. From in-depth keyword research to meticulous on-page optimization, our team provides expert guidance to improve your search engine rankings. We'll help you create content that resonates with your target audience and drives results.",
    ],
    shortDescription:
      "We offer comprehensive SEO services to help your website rank higher in search engine results and attract more visitors.",
    icon: "fa-search",
  },
  {
    title: Services.MAINTENANCE_AND_SUPPORT,
    id: Services.MAINTENANCE_AND_SUPPORT.split(" ").join("-").toLowerCase(),
    image: maintainance,
    descriptions: [
      // "We provide ongoing maintenance and support services to keep your website or app running smoothly and securely.",
      // "Our maintenance and support services are designed to help you maintain your digital assets and protect your investment.",
      // "From software updates to security patches, we help you keep your website or app up-to-date and secure.",
      `Keep Your Digital Assets Thriving. Our dedicated maintenance and support services ensure your website or app operates seamlessly and securely. We offer ongoing care to preserve the health and performance of your digital investment."Protect Your Investment with Our Support. By entrusting us with your website or app maintenance, you're safeguarding your digital assets. Our comprehensive support services minimize downtime, enhance security, and protect your business from potential threats.`,
      `Protect Your Investment with Our Support. By entrusting us with your website or app maintenance, you're safeguarding your digital assets. Our comprehensive support services minimize downtime, enhance security, and protect your business from potential threats.`,
      `Stay Ahead with Regular Updates. We keep your website or app up-to-date with the latest software and security patches. Our proactive approach helps maintain optimal performance, protects against vulnerabilities, and ensures your digital platform continues to deliver exceptional user experiences.`,
    ],
    shortDescription:
      "We provide ongoing maintenance and support services to keep your website or app running smoothly and securely.",
    icon: "fa-tools",
  },
];
