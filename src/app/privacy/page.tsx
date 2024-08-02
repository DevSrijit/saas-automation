import React from 'react';

export const metadata = {
  title: 'Privacy Policy - Fuzzie'
};

export default function PrivacyPolicy() {
  return (
    <div className="p-20 bg-white text-gray-900 w-full min-w-screen">
      <h1 className="text-4xl font-bold mb-6 text-center">Privacy Policy</h1>
      <div className="prose prose-lg max-w-none">
        <p>
          Welcome to Fuzzie! Your privacy is critically important to us. This Privacy Policy outlines our policies and procedures regarding the collection, use, and protection of personal information when you use our website. By accessing or using our website, you agree to the terms of this Privacy Policy.
        </p>
        <p>
          <strong>Disclaimer:</strong> Please note that Fuzzie is developed and maintained by an independent developer who is currently a student. While we strive to ensure the security and privacy of your information, we are not legal or security experts. This Privacy Policy is provided on an "as-is" basis, and we disclaim all warranties of any kind, express or implied.
        </p>
        <h2 className="text-2xl font-semibold mt-8 mb-4">Information We Collect</h2>
        <p>
          We may collect and process the following types of information:
        </p>
        <ul className="list-disc list-inside mb-6">
          <li>
            <strong>Personal Information:</strong> Information that can be used to identify you, such as your name, email address, and payment information. We collect this information when you register for our services or make a purchase using Stripe.
          </li>
          <li>
            <strong>OAuth Data:</strong> Information from third-party services such as Notion, Google, Discord, and Slack when you connect your accounts to Fuzzie.
          </li>
          <li>
            <strong>Usage Data:</strong> Information regarding your interactions, preferences, and activities on our website.
          </li>
          <li>
            <strong>Profile Pictures and Assets:</strong> Images and files you upload, which are stored via Uploadcare.
          </li>
        </ul>
        <h2 className="text-2xl font-semibold mt-8 mb-4">How We Use Your Information</h2>
        <p>
          We use the collected information for the following purposes:
        </p>
        <ul className="list-disc list-inside mb-6">
          <li>To provide, operate, and maintain our services</li>
          <li>To process transactions and manage orders</li>
          <li>To personalize your experience and improve our website</li>
          <li>To communicate with you and provide customer support</li>
          <li>To analyze usage patterns and enhance our services</li>
          <li>To create automation using OAuth connections</li>
        </ul>
        <h2 className="text-2xl font-semibold mt-8 mb-4">How We Protect Your Information</h2>
        <p>
          We implement a variety of security measures to ensure the safety of your personal information. This includes, but is not limited to, encryption, access controls, and regular security assessments. Despite our efforts, no security measures are perfect or impenetrable, and we cannot guarantee the security of your information.
        </p>
        <h2 className="text-2xl font-semibold mt-8 mb-4">Third-Party Services</h2>
        <p>
          We utilize third-party services to facilitate our operations and provide our services. These include:
        </p>
        <ul className="list-disc list-inside mb-6">
          <li><strong>Clerk:</strong> For authentication purposes</li>
          <li><strong>Stripe:</strong> For payment processing</li>
          <li><strong>Uploadcare:</strong> For storing profile pictures and assets</li>
          <li><strong>Neon Tech:</strong> For database storage</li>
          <li><strong>Vercel:</strong> For hosting and deployment</li>
        </ul>
        <p>
          Each of these third-party service providers has its own privacy policies governing the use of your information. We encourage you to review these policies. When you connect your Notion, Google, Discord, or Slack accounts, we access only the data necessary to provide our services.
        </p>
        <h2 className="text-2xl font-semibold mt-8 mb-4">Your Rights and Choices</h2>
        <p>
          You have the right to access, correct, update, or delete your personal information. You may also object to the processing of your data or request the restriction of its use. To exercise these rights, please contact us at mail@srijit.co.
        </p>
        <h2 className="text-2xl font-semibold mt-8 mb-4">Data Usage and Sharing</h2>
        <p>
          We use your data solely for the essential functionality of our website. We do not sell, rent, or otherwise disclose your personal information to third parties for their marketing or other purposes.
        </p>
        <h2 className="text-2xl font-semibold mt-8 mb-4">Children's Privacy</h2>
        <p>
          Our website is not intended for use by children under the age of 13. We do not knowingly collect personal information from children under 13. If we become aware that we have inadvertently received personal information from a child under 13, we will delete such information from our records.
        </p>
        <h2 className="text-2xl font-semibold mt-8 mb-4">Changes to This Privacy Policy</h2>
        <p>
          We reserve the right to update or modify this Privacy Policy at any time. Any changes will be effective immediately upon posting the revised Privacy Policy on our website. We encourage you to review this Privacy Policy periodically to stay informed about how we are protecting your information.
        </p>
        <h2 className="text-2xl font-semibold mt-8 mb-4">Contact Us</h2>
        <p>
          If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at:
        </p>
        <address className="not-italic mb-6">
          <strong>Fuzzie</strong><br />
          Email: mail@srijit.co
        </address>
        <p className="text-sm text-gray-600">
          Effective Date: August 3, 2024
        </p>
      </div>
    </div>
  );
}
