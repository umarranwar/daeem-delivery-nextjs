import React from "react";
import Accordion from "./Accordion";
import Header from "../Header";

const ReturnPolicy = () => {
  return (
    <div>
      <Header />
      <div className="flex flex-col justify-center items-center">
        <div className="flex items-center text-white text-3xl hover:bg-orange-500 bg-orange-400 w-screen h-60 justify-center">
          Return Policy
        </div>
        <div className="w-3/4 my-10">
          <Accordion
            title="1. Eligibility"
            answer={
              <ul className="list-disc">
                <li>
                  Returns are accepted for items that meet the following
                  conditions:
                </li>
                <li className="ml-5">
                  The item is damaged or defective upon delivery.
                </li>
                <li className="ml-5">The wrong item was delivered.</li>
                <li className="ml-5">
                  The item is in its original packaging and condition.
                </li>
              </ul>
            }
          />
          <Accordion
            title="2. Conditions"
            answer={
              <ul className="list-disc">
                <li className="ml-5">
                  To be eligible for a return, the item must be reported within
                  [specific time frame] from the date of delivery.
                </li>
                <li className="ml-5">
                  The wrong item was delivered.Items that are damaged due to
                  misuse or mishandling by the customer are not eligible for
                  return.
                </li>
              </ul>
            }
          />
          <Accordion
            title="3. Return Process"
            answer={
              <ul className="list-disc">
                <li>
                  To initiate a return, please contact our customer support team
                  at [provide contact details] with the following information:{" "}
                </li>
                <li className="ml-5">Order number</li>
                <li className="ml-5">Description of the issue</li>
                <li className="ml-5">
                  Clear images or videos showing the problem (if applicable)
                </li>
              </ul>
            }
          />
          <Accordion
            title="4. Refund or Exchange"
            answer={
              <ul className="list-disc">
                <li className="ml-5">
                  Upon receiving and verifying the returned item, we will notify
                  you of the approval or rejection of your refund or exchange.
                </li>
                <li className="ml-5">
                  If approved, a refund will be processed to the original
                  payment method used for the purchase. Exchanges will be
                  processed accordingly.
                </li>
              </ul>
            }
          />
          <Accordion
            title="5. Shipping Costs"
            answer={
              <ul className="list-disc">
                <li className="ml-5">
                  Shipping costs for returning items are the responsibility of
                  the customer, except in cases where the return is due to an
                  error on our part.
                </li>
              </ul>
            }
          />
          <Accordion
            title="6. Contact Information"
            answer={
              <ul className="list-disc">
                <li className="ml-5">
                  For any questions regarding returns or our Return Policy,
                  please contact us at [provide contact details].{" "}
                </li>
              </ul>
            }
          />
        </div>
      </div>
    </div>
  );
};

export default ReturnPolicy;
