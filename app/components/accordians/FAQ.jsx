import React from "react";
import Accordion from "./Accordion";
import Header from "../Header";

const FAQ = () => {
  return (
    <div>
      <Header />
      <div className="flex flex-col justify-center items-center">
        <div className="flex items-center text-white text-3xl hover:bg-orange-500 bg-orange-400 w-screen h-60 justify-center">
          Frequently Asked Questions (FAQ)  
        </div>
        <div className="w-3/4 my-10">
          <Accordion
            title="Q: What areas do you deliver to?"
            answer="A: We currently deliver to [list of covered areas]. Please enter your location during the ordering process to check if we deliver to your area."
          />
          <Accordion
            title="Q: What are your delivery hours?"
            answer="A: Our delivery hours are from [start time] to [end time] on [days of operation]. However, please note that delivery times may vary based on demand and location."
          />
          <Accordion
            title="Q: Can I schedule a specific delivery time?"
            answer="A: At the moment, we do not offer specific time slot scheduling. Our deliveries are made within a specified window for each order.
"
          />
          <Accordion
            title="Q: How do I place an order?"
            answer="A: To place an order, visit our website [link] or use our mobile app. Select the items you want to order, input your delivery address, and proceed to checkout."
          />
          <Accordion
            title="Q: What payment methods do you accept?"
            answer="A: We accept payments via [list of accepted payment methods], including credit/debit cards and online payment services."
          />
          <Accordion
            title="Q: Can I modify or cancel my order after it's placed?"
            answer="A: Once an order is confirmed, modifications or cancellations may not be possible. Please contact our support team immediately for assistance."
          />
          <Accordion
            title="Q: What is your return policy?"
            answer="A: Our return policy allows returns for [specific conditions eligible for returns, e.g., damaged items, incorrect orders]. Please refer to our Return Policy for more details."
          />
          <Accordion
            title="Q: How do I initiate a return or request a refund?"
            answer="A: If you need to initiate a return or request a refund, please contact our customer support team within [specified time frame] with details of the issue."
          />
          <Accordion
            title="Q: How can I contact your customer support?"
            answer="A: You can reach our customer support team via [contact method], available [hours of operation]. For urgent inquiries, you can also [mention any additional emergency contact method]."
          />
          <Accordion
            title="Q: What should I do if I encounter a problem with my delivery?"
            answer="A: If you encounter any issues with your delivery, such as missing items or damages, please contact our support team immediately. We will assist you in resolving the issue."
          />
          <Accordion
            title="Q: How do I create an account?"
            answer='A: You can create an account on our website by clicking on the "Sign Up" or "Create Account" button and following the instructions.'
          />
          <Accordion
            title="Q: I'm experiencing technical issues with your website/app. What should I do?"
            answer="A: If you're experiencing technical difficulties, try clearing your browser cache or restarting the app. If the problem persists, contact our technical support team for assistance."
          />
        </div>
      </div>
    </div>
  );
};

export default FAQ;
