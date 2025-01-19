import React, { useEffect } from "react";
import { useOutletContext } from "react-router-dom";

const TermsAndConditions = () => {
  const { navBarHeight } = useOutletContext();
  useEffect(() => {
    document.title = "Siddu Eswar | Terms and Conditions";
    window.scrollTo(0, 0);
  }, []);
  return (
    <div
      className="container mx-auto my-8 mb-8 md:px-6 px-2 xs:px-0 space-y-8"
      style={{
        paddingTop: `${navBarHeight}px`,
      }}
    >
      <section>
        <h1 className="text-3xl font-bold mb-4 text-center">
          📄 Terms and Conditions - Siddu Eswar (Website & App Development)
        </h1>
        <p className="text-sm text-gray-500 text-center">
          <strong>Effective Date:</strong> 17<sup>th</sup> January 2025
        </p>
      </section>

      {/* Scope of Services */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">
          <i className="fa-solid fa-briefcase"></i> Scope of Services
        </h2>
        <p>
          We offer professional website and mobile app development services,
          including but not limited to custom development, e-commerce solutions,
          SEO optimization, and ongoing support. Full details of our services
          can be found on our website.
        </p>
      </section>

      {/* Project Engagement and Process */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">
          <i className="fa-solid fa-tasks"></i> Project Engagement and Process
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            A formal project proposal will be shared, outlining timelines,
            milestones, and deliverables before work begins.
          </li>
          <li>
            Any work requested beyond the agreed project scope will require a
            separate quotation and approval.
          </li>
          <li>
            Clear communication and mutual agreement will guide all project
            stages.
          </li>
        </ul>
      </section>

      {/* Payment Terms */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">
          <i className="fa-solid fa-credit-card"></i> Payment Terms
        </h2>
        <p>
          All payments must be made exclusively through Razorpay using the
          secure payment link provided via email. This ensures the highest level
          of transaction security and creates an automated record for accurate
          documentation.
        </p>
        {/* <div className=""></div> */}
        {/* Payment Structure */}
        <h3 className="text-xl font-semibold mt-4 mb-2">Payment Structure</h3>
        <p>Payment structure may vary based on project type and agreement:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>0% upfront</strong> for smaller projects or trials.
          </li>
          <li>
            <strong>25% upfront</strong> for medium-sized projects.
          </li>
          <li>
            <strong>50% upfront</strong> for larger or custom development
            projects.
          </li>
        </ul>
        {/* Policy on Non-Gateway Payments */}
        <h3 className="text-xl font-semibold mt-4 mb-2">
          Policy on Non-Gateway Payments
        </h3>
        <p className="mt-2">
          Payments made outside the Razorpay payment gateway (e.g., direct UPI
          or bank transfers) are strongly discouraged. Non-gateway payments will
          be allowed only with prior written agreement and will require manual
          processing, which may result in delays or complications in
          reconciliation.{" "}
          <strong>Administrative charges will apply for such payments</strong>,
          though the actual amount will depend on various factors related to the
          transaction, including payment type, reconciliation time, and
          transaction complexity.
        </p>
        {/* Late Payments */}
        <h3 className="text-xl font-semibold mt-4 mb-2">Late Payments</h3>
        <p className="mt-2">
          Late payments may result in project delays or service suspension until
          the balance is cleared. Payments are considered complete only when
          successfully processed through Razorpay or manually reconciled (in the
          case of an approved exception).
        </p>
        {/* Refund and Dispute Handling */}
        <h3 className="text-xl font-semibold mt-4 mb-2">
          Refund and Dispute Handling
        </h3>
        <p className="mt-2">
          Refunds and disputes are handled exclusively for payments made through
          Razorpay. Non-gateway payments may not qualify for the same level of
          support or refund options.
        </p>
        {/* Razorpay Terms */}
        <h3 className="text-xl font-semibold mt-4 mb-2">Razorpay Terms</h3>
        <p className="mt-2">
          All payments are subject to Razorpay's official{" "}
          <a
            href="https://razorpay.com/terms/"
            target="_blank"
            rel="noreferrer"
            className="text-[#8af9ff] underline"
          >
            Terms and Conditions
          </a>
          .
        </p>
        {/* Invoice Notes
        <h3 className="text-xl font-semibold mt-4 mb-2">Invoice Notes</h3>
        <p className="mt-2">
          For your security and documentation, payments must be made through the
          Razorpay payment link provided. Non-gateway payments are allowed only
          in exceptional cases, with prior agreement, and may incur
          administrative charges that vary depending on the transaction.
        </p> */}
      </section>

      {/* Refund and Cancellation */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">
          <i className="fa-solid fa-undo-alt"></i> Refund and Cancellation
          Policy
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            If canceled before project commencement, a{" "}
            <strong>50% refund</strong> will be issued.
          </li>
          <li>
            No refunds will be provided once approved milestones are delivered.
          </li>
          <li>
            Refunds will be processed within <strong>10 business days</strong>{" "}
            after approval.
          </li>
        </ul>
      </section>

      {/* Intellectual Property Rights */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">
          <i className="fa-solid fa-shield-alt"></i> Intellectual Property
          Rights
        </h2>
        <p>
          All project deliverables, including code, designs, and assets, remain
          the property of <strong>Siddu Eswar</strong> until full payment is
          received.
        </p>
        <p className="mt-4">
          Upon full payment,{" "}
          <strong>ownership of the final deliverables</strong> (such as the
          website design, code, and assets) will be transferred to the client.
        </p>

        <div className="ps-6">
          <h3 className="text-xl font-semibold mt-6 mb-4">
            Infrastructure Management and Control:
          </h3>
          <p className="mb-4">
            <strong>
              If infrastructure (e.g., servers, domains, DNS records, cloud
              accounts) is managed under Siddu Eswar’s accounts:
            </strong>
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              All resources, configurations, and administrative permissions will
              be controlled by <strong>Siddu Eswar</strong>.
            </li>
            <li>
              The client will have access to project data but not administrative
              control.
            </li>
            <li>
              Ongoing management, monitoring, and maintenance will be handled by{" "}
              <strong>Siddu Eswar</strong>.
            </li>
          </ul>

          <p className="mt-4">
            <strong>If infrastructure is under the client’s accounts:</strong>
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              The client must provide continuous administrative access for
              project deployment, monitoring, and maintenance.
            </li>
            <li>
              This access is required to ensure proper performance, security,
              and technical support.
            </li>
          </ul>

          <h4 className="text-xl font-semibold mt-6 mb-4">Portfolio Rights</h4>
          <p>
            We reserve the right to feature completed projects in our portfolio
            unless otherwise agreed in writing.
          </p>
        </div>
      </section>

      {/* Client Responsibilities */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">
          <i className="fa-solid fa-user"></i> Client Responsibilities
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            Provide complete and accurate project requirements before work
            begins.
          </li>
          <li>Ensure timely feedback and approvals to avoid project delays.</li>
        </ul>
      </section>

      {/* Confidentiality */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">
          <i className="fa-solid fa-lock"></i> Confidentiality
        </h2>
        <p>
          All client information shared during the project will be treated as
          confidential and will not be disclosed to third parties without
          consent.
        </p>
      </section>

      {/* Limitation of Liability */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">
          <i className="fa-solid fa-exclamation-triangle"></i> Limitation of
          Liability
        </h2>
        <p>
          While we strive to deliver high-quality services, we are not
          responsible for:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            Third-party service failures (e.g., hosting, payment gateways).
          </li>
          <li>Loss of data due to client mismanagement post-handover.</li>
          <li>
            Indirect or consequential damages from the use of the services
            provided.
          </li>
        </ul>
      </section>

      {/* Contact Section */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">
          <i className="fa-solid fa-envelope"></i> Contact Information
        </h2>
        <p>For any questions or clarifications, please reach out to:</p>
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
              +91- 95027 66882
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

export default TermsAndConditions;
