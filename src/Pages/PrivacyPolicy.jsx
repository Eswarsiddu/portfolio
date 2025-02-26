import React, { useEffect } from "react";
import { useOutletContext } from "react-router-dom";

const PrivacyPolicy = () => {
  useEffect(() => {
    document.title = "Siddu Eswar | Privacy Policy";
    window.scrollTo(0, 0);
  }, []);
  const { navBarHeight } = useOutletContext();
  return (
    <div
      className="container mx-auto my-8 mb-8 md:px-6 px-2 xs:px-0 space-y-8"
      style={{
        paddingTop: `${navBarHeight}px`, // Adjust this value based on your navBarHeight if dynamic.
      }}
    >
      {/* Section Header */}
      <section>
        <h1 className="text-3xl font-bold mb-4 text-center">
          📄 Privacy Policy – Siddu Eswar (Website & App Development)
        </h1>
        <p className="text-sm text-gray-500 text-center">
          <strong>Effective Date:</strong> 17<sup>th</sup> January 2025
        </p>
      </section>

      {/* Information We Collect */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">
          <i className="fa-solid fa-database"></i> Information We Collect
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Personal Information:</strong> Name, email, phone number,
            billing details.
          </li>
          <li>
            <strong>Project Details:</strong> Project requirements and
            specifications.
          </li>
          <li>
            <strong>Payment Information:</strong> Processed securely via
            Razorpay (not stored on our servers).
          </li>
          <li>
            <strong>Technical Data:</strong> IP addresses, browser type, and
            usage data for analytics purposes.
          </li>
        </ul>
      </section>

      {/* How We Use Your Information */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">
          <i className="fa-solid fa-user-check"></i> How We Use Your Information
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>To deliver and manage services requested by you.</li>
          <li>To process payments securely through Razorpay.</li>
          <li>To communicate project updates and support services.</li>
          <li>To improve our services and optimize website performance.</li>
        </ul>
      </section>

      {/* Data Protection and Security */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">
          <i className="fa-solid fa-lock"></i> Data Protection and Security
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            Your data is protected using industry-standard encryption and secure
            servers.
          </li>
          <li>
            <strong>Payment Security:</strong> All transactions are processed
            using <strong>Razorpay</strong>, a PCI DSS-compliant payment
            gateway.
          </li>
          <li>
            We do not share or sell your personal data with third parties.
            However, we may share your information with trusted third parties
            when required for payment processing or to comply with legal
            obligations. In such cases, you will be informed, unless prohibited
            by law.
          </li>
        </ul>
      </section>

      {/* Cookies and Tracking */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">
          <i className="fa-solid fa-cookie-bite"></i> Cookies and Tracking
        </h2>
        <p>
          Our website may use cookies for a better user experience and website
          analytics.
        </p>
        <p>
          Cookies help us understand user behavior but do not store personal
          information.
        </p>
      </section>

      {/* Third-Party Services */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">
          <i className="fa-solid fa-network-wired"></i> Third-Party Services
        </h2>
        <p>
          We use third-party services for secure transactions and analytics:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Razorpay:</strong> For payment processing. Refer to their{" "}
            <a
              href="https://razorpay.com/privacy/"
              target="_blank"
              className="text-[#8af9ff] underline"
            >
              Privacy Policy
            </a>
            .
          </li>
          <li>
            <strong>Google Analytics:</strong> For website performance tracking.
          </li>
        </ul>
      </section>

      {/* Data Retention */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">
          <i className="fa-solid fa-database"></i> Data Retention
        </h2>
        <p>
          We retain your data only for as long as necessary to fulfill the
          purposes outlined in this policy or as required for legal obligations.
        </p>
      </section>

      {/* Your Rights */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">
          <i className="fa-solid fa-user-shield"></i> Your Rights
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Access, modify, or delete your personal data.</li>
          <li>Withdraw consent for data processing.</li>
          <li>
            If you believe your data has been mishandled, you may contact the
            relevant data protection authorities or legal bodies in your
            jurisdiction.
          </li>
        </ul>
      </section>

      {/* Children’s Privacy */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">
          <i className="fa-solid fa-child"></i> Children’s Privacy
        </h2>
        <p>
          Our services are not intended for individuals under the age of 18. We
          do not knowingly collect data from minors.
        </p>
      </section>

      {/* Policy Changes */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">
          <i className="fa-solid fa-file-alt"></i> Policy Changes
        </h2>
        <p>
          We may update this Privacy Policy periodically. Significant changes
          will be communicated via our website.
        </p>
      </section>

      {/* Contact Information */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">
          <i className="fa-solid fa-envelope"></i> Contact Information
        </h2>
        <p>
          For any questions or concerns regarding this Privacy Policy, please
          reach out:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Email:</strong>{" "}
            <a
              href="mailto:contact@siddueswar.com"
              className="text-[#8af9ff] underline"
            >
              contact@siddueswar.com
            </a>
          </li>
          <li>
            <strong>Phone:</strong>{" "}
            <a href="tel:+919502766882" className="text-[#8af9ff] underline">
              +91-95027 66882
            </a>
          </li>
          <li>
            <strong>Address:</strong>{" "}
            <span>Koretipadu, Guntur, Andhra Pradesh, India - 522007</span>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
