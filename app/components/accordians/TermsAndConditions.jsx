import React from "react";
import Accordion from "./Accordion";
import Header from "../Header";

const TermsAndConditions = () => {
  return (
    <div>
      <Header />
      <div className="flex flex-col justify-center items-center">
        <div className="flex items-center text-white text-3xl hover:bg-orange-500 bg-orange-400 w-screen h-60 justify-center">
          Terms and Conditions
        </div>
        <div className="w-3/4 my-10">
          <Accordion
            title="1. Introduction"
            answer="A: We currently deliver to [list of covered areas]. Please enter your location during the ordering process to check if we deliver to your area."
          />
          <Accordion
            title="2. Service Description"
            answer="Daeem Delivery provides delivery services including [describe services offered]. Services are subject to availability and acceptance."
          />
          <Accordion
            title="3. User Responsibilities"
            answer="Users must provide accurate and complete information for delivery orders.
            Users agree to comply with all applicable laws and regulations.
            Users are responsible for maintaining the confidentiality of their account information.
"
          />
          <Accordion
            title="4. Orders and Payment"
            answer="Orders are subject to acceptance and confirmation by Daeem Delivery.
            Payment for services must be made in full prior to delivery.
            Additional fees or charges may apply and will be clearly communicated before confirmation."
          />
          <Accordion
            title="5. Delivery"
            answer="Delivery times provided are estimates and not guaranteed.
            Daeem Delivery is not liable for delays due to unforeseen circumstances (e.g., weather, traffic, etc.)."
          />
          <Accordion
            title="7. Termination"
            answer="Daeem Delivery reserves the right to terminate or suspend services to users who violate these terms or engage in fraudulent activities."
          />
          <Accordion
            title="8. Intellectual Property"
            answer="All content, logos, trademarks, and intellectual property displayed on the website belong to Daeem Delivery and are protected by copyright laws."
          />
          <Accordion
            title="9. Governing Law"
            answer="These terms are governed by the laws of [Your Jurisdiction]. Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the courts in [Your Jurisdiction]."
          />
          <Accordion
            title="10. Changes to Terms and Conditions"
            answer="Daeem Delivery reserves the right to modify, update, or replace these terms at any time. Changes will be effective immediately upon posting on the website."
          />
          <Accordion
            title="11. Contact Information"
            answer="For any questions regarding these terms, please contact us at [provide contact details]."
          />
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;
