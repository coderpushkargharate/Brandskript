import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">

      {/* HERO SECTION */}
      <div className="relative py-20 text-center bg-white border-b">
        <span className="text-sm text-blue-600 font-medium">Privacy Policy</span>

        <h1 className="text-4xl font-bold mt-3">Our Privacy Policy</h1>

        <p className="max-w-xl mx-auto mt-4 text-gray-600">
          Learn how we handle your personal information and ensure your privacy
          and data security on our platform.
        </p>

        <p className="mt-4 text-sm text-gray-500">
          ⏱ Last Updated on April 24, 2024
        </p>
      </div>

      {/* CONTENT */}
      <div className="max-w-4xl mx-auto px-4 py-14 space-y-8">

        <PolicyCard
          title="Information We Collect"
          content="We may collect personal information from you when you visit our website,
          register for an account, or interact with our services. This information may
          include your name, email address, contact details, and any other information
          you voluntarily provide to us."
        />

        <PolicyCard
          title="How We Use Your Information"
          content={
            <ul className="list-decimal pl-5 space-y-2 text-gray-600">
              <li>Providing and improving our products and services</li>
              <li>Personalizing your experience on our website</li>
              <li>Communicating with you about your account and updates</li>
              <li>Analyzing website traffic and user behavior</li>
            </ul>
          }
        />

        <PolicyCard
          title="Data Security"
          content="We take data security seriously and employ industry-standard measures to
          protect your personal information from unauthorized access, disclosure,
          alteration, or destruction. However, no method of transmission over the
          internet or electronic storage is 100% secure."
        />

        <PolicyCard
          title="Third-Party Disclosure"
          content="We do not sell, trade, or otherwise transfer your personal information to
          third parties without your consent, except as required by law or to trusted
          service providers who assist us in operating our website and services."
        />

        <PolicyCard
          title="Cookies"
          content="Our website may use cookies to enhance your browsing experience and collect
          information about how you interact with our site. You can adjust your browser
          settings to refuse cookies, but some features may not function properly."
        />

        <PolicyCard
          title="Changes to this Privacy Policy"
          content="We reserve the right to update or change this Privacy Policy at any time.
          Any changes will be posted on this page, and the effective date will be updated
          accordingly."
        />

        <PolicyCard
          title="Contact Us"
          content={
            <p className="text-gray-600">
              If you have any questions or concerns about our Privacy Policy, please
              contact us at{" "}
              <a
                href="mailto:connect@brandskript.com"
                className="text-blue-600 font-medium"
              >
                connect@brandskript.com
              </a>
            </p>
          }
        />
      </div>
    </div>
  );
};

export default PrivacyPolicy;

/* ---------- Reusable Card ---------- */

const PolicyCard = ({ title, content }) => (
  <div className="bg-white border rounded-xl p-6 shadow-sm">
    <h2 className="text-xl font-semibold mb-3">{title}</h2>
    <div className="text-gray-600 text-sm leading-relaxed">
      {content}
    </div>
  </div>
);
