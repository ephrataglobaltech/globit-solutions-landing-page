import React from "react";
import Layout from "@/components/Layout";

export default function TermsOfService() {
  return (
    <Layout>
    <div className="min-h-screen bg-background text-foreground py-16 px-6 md:px-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>
        <p className="text-muted-foreground mb-4">
          Last updated: November 2025
        </p>

        <p className="mb-4">
          Welcome to <strong>Globit Solutions</strong>. By accessing or using our
          platform, you agree to comply with and be bound by the following terms
          and conditions.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2">1. Use of Services</h2>
        <p className="mb-4">
          You agree to use our services only for lawful purposes and in
          accordance with institutional or organizational policies.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2">2. User Accounts</h2>
        <p className="mb-4">
          Users are responsible for maintaining the confidentiality of their
          account credentials and activities conducted through their accounts.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2">3. Intellectual Property</h2>
        <p className="mb-4">
          All content, software, and designs provided by Globit Solutions remain
          the intellectual property of <strong>Ephrata Global Tech</strong> and
          may not be copied or redistributed without written permission.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2">4. Service Modifications</h2>
        <p className="mb-4">
          We reserve the right to modify, suspend, or discontinue any aspect of
          the service at any time, with or without prior notice.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2">5. Limitation of Liability</h2>
        <p className="mb-4">
          Globit Solutions and its affiliates are not liable for any indirect or
          consequential damages resulting from the use or inability to use our
          services.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2">6. Governing Law</h2>
        <p className="mb-4">
          These terms are governed by the laws of the Federal Republic of
          Nigeria, without regard to its conflict of law principles.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2">7. Contact Us</h2>
        <p>
          For questions about these Terms, contact us at{" "}
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
