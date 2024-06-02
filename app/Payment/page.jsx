"use client";
import React, { useEffect, useState } from "react";
import crypto from "crypto-js";

export default function Page() {
  const [signature, setSignature] = useState("");
  const [totalPrice, setTotalPrice] = useState("");
  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const totalPriceString = searchParams.get("totalPrice");

    // Convert totalPriceString to a number and add 10
    const totalPrice = (parseInt(10, 10) + 10) * 100;
    console.log("totalPrice", totalPrice);
    // Convert totalPrice to a string with double quotes around it
    setTotalPrice(totalPrice);

    // Function to calculate SHA-256 hash
    function sha256(str) {
      // Calculate SHA-256 hash
      return crypto.SHA256(str).toString(crypto.enc.Hex);
    }

    // Calculate signature
    var requestParams = {
      command: "AUTHORIZATION",
      access_code: "pFhhsBpJOFReL6eF2BzU",
      merchant_identifier: "b62d1bca",
      merchant_reference: "Teste023",
      amount: totalPrice,
      currency: "SAR",
      language: "en",
      customer_email: "test01@payfort.com",
      order_description: "iPhone 6-S",
    };

    // Sort request parameters
    var sortedKeys = Object.keys(requestParams).sort();
    var shaString = sortedKeys
      .map((key) => key + "=" + requestParams[key])
      .join("");

    shaString = "$2y$10$oaeCGHT4c" + shaString + "$2y$10$oaeCGHT4c";

    // Calculate SHA-256 hash and set signature value
    setSignature(sha256(shaString));
  }, []);

  useEffect(() => {
    // Submit form when signature is set
    if (signature) {
      document.getElementById("signature").value = signature;
      document.getElementById("paymentForm").submit();
    }
  }, [signature]);

  return (
    <div>
      <form
        id="paymentForm"
        action="https://sbcheckout.payfort.com/FortAPI/paymentPage"
        method="post"
      >
        <input type="hidden" name="command" value="AUTHORIZATION" />
        <input type="hidden" name="access_code" value="pFhhsBpJOFReL6eF2BzU" />
        <input type="hidden" name="merchant_identifier" value="b62d1bca" />
        <input type="hidden" name="merchant_reference" value="Teste023" />
        <input type="hidden" name="amount" value={totalPrice} />
        <input type="hidden" name="currency" value="SAR" />
        <input type="hidden" name="language" value="en" />
        <input type="hidden" name="customer_email" value="test01@payfort.com" />
        <input type="hidden" name="order_description" value="iPhone 6-S" />
        <input type="hidden" name="signature" id="signature" />
        {/* Add hidden input for signature */}
      </form>
    </div>
  );
}
