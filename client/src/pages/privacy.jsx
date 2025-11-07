import React from "react";
import Layout from "@/components/Layout";

export default function PrivacyPolicy() {
  return (
    <Layout>
    <div className="min-h-screen bg-background text-foreground py-16 px-6 md:px-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
        <p className="text-muted-foreground mb-4">
          Last updated: November 2025
        </p>

        <p className="mb-4">
          At <strong>Globit Solutions</strong>, we value your privacy. This
          Privacy Policy explains how we collect, use, and protect your
          information when you use our services and applications.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2">
          1. Information We Collect
        </h2>
        <p className="mb-4">
          We may collect personal details such as your name, email, phone
          number, and institution information when you register or use our
          platform. We also collect usage data to improve our products and user
          experience.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2">
          2. How We Use Information
        </h2>
        <p className="mb-4">
          Information is used to deliver services, improve our systems, provide
          customer support, and communicate updates or offers relevant to your
          institution.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2">
          3. Data Protection
        </h2>
        <p className="mb-4">
          Your data security is our priority. We use industry-standard
          encryption, access controls, and monitoring systems to safeguard all
          information stored with us.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2">4. Third-Party Access</h2>
        <p className="mb-4">
          We do not sell, rent, or share personal data with third parties unless
          required by law or explicitly authorized by you.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2">
          5. Changes to This Policy
        </h2>
        <p className="mb-4">
          We may update this Privacy Policy periodically. Any changes will be
          reflected on this page with an updated revision date.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2">6. Contact Us</h2>
        <p>
          For questions about this policy, please contact us at{" "}
          <a
            href="mailto:support@ephrataglobal.com"
            className="text-primary hover:underline"
          >
            support@ephrataglobal.com
          </a>
          .
        </p>
      </div>
    </div>
    </Layout>
  );
}
