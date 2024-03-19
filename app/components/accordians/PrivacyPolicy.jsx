import React from "react";
import Accordion from "./Accordion";
import Header from "../Header";

const PrivacyPolicy = () => {
  return (
    <div>
      <Header />
      <div className="flex flex-col justify-center items-center">
        <div className="flex items-center text-white text-3xl hover:bg-orange-500 bg-orange-400 w-screen h-60 justify-center">
          Privacy Policy
        </div>
        <div className="w-3/4 my-10">
          <Accordion
            title="1. Information Collection"
            answer={
              <ul className="list-disc">
                <li>
                  We may collect personal identification information from users
                  in various ways, including but not limited to:
                </li>
                <li className="ml-5">When users visit our website</li>
                <li className="ml-5">When users register on the website</li>
                <li className="ml-5">When users place an order</li>
                <li className="ml-5">When users subscribe to our newsletter</li>
              </ul>
            }
          />
          <Accordion
            title="2. Conditions"
            answer={
              <ul className="list-disc">
                <li>The information collected may include:</li>
                <li className="ml-5">Name, email address, phone number</li>
                <li className="ml-5">Delivery address</li>
                <li className="ml-5">Payment information</li>
              </ul>
            }
          />
          <Accordion
            title="2. Data Usage and Protection"
            answer={
              <ul className="list-disc">
                <li>
                  We collect and use personal information for the following
                  purposes:
                </li>
                <li className="ml-5">
                  To provide and personalize our services
                </li>
                <li className="ml-5">To process transactions</li>
                <li className="ml-5">To send periodic emails or updates</li>
                <li>
                  We are committed to protecting the confidentiality and
                  security of user information and employ appropriate data
                  collection, storage, and processing practices.
                </li>
              </ul>
            }
          />
          <Accordion
            title="3. Cookies and Tracking"
            answer={
              <ul className="list-disc">
                <li className="ml-3">
                  Our website may use &quot;cookies&quot; to enhance user
                  experience. Users can choose to set their web browser to
                  refuse cookies or to alert when cookies are being sent.
                  However, this may affect certain functionalities of the
                  website.
                </li>
              </ul>
            }
          />
          <Accordion
            title="6. Security Measures"
            answer={
              <ul className="list-disc">
                <li className="ml-3">
                  We adopt appropriate data collection, storage, and processing
                  practices and security measures to protect against
                  unauthorized access, alteration, disclosure, or destruction of
                  personal information.
                </li>
              </ul>
            }
          />
          <Accordion
            title="7. Changes to This Privacy Policy"
            answer={
              <ul className="list-disc">
                <li className="ml-3">
                  Daeem Delivery has the discretion to update this Privacy
                  Policy at any time. Users are encouraged to frequently check
                  this page for any changes.
                </li>
              </ul>
            }
          />
          <Accordion
            title="8. Acceptance of These Terms"
            answer={
              <ul className="list-disc">
                <li className="ml-3">
                  By using this website, you signify your acceptance of this
                  Privacy Policy. If you do not agree to this policy, please do
                  not use our website.
                </li>
              </ul>
            }
          />
          <Accordion
            title="9. Contact Information"
            answer={
              <ul className="list-disc">
                <li className="ml-3">
                  If you have any questions about this Privacy Policy, the
                  practices of this site, or your dealings with this site,
                  please contact us at [provide contact details].
                </li>
              </ul>
            }
          />
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
