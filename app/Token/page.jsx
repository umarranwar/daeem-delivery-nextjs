// "use client";
// import React, { useEffect, useState } from "react";
// import crypto from "crypto-js";

// export default function Page() {
//   const [signature, setSignature] = useState("");

//   useEffect(() => {
//     // Function to calculate SHA-256 hash
//     function sha256(str) {
//       // Calculate SHA-256 hash
//       return crypto.SHA256(str).toString(crypto.enc.Hex);
//     }

//     // Calculate signature
//     var requestParams = {
//       service_command: "TOKENIZATION",
//       access_code: "pFhhsBpJOFReL6eF2BzU",
//       merchant_identifier: "b62d1bca",
//       merchant_reference: "Teste01",
//       language: "en",
//       return_url: "daeemdelivery.com",
//     };

//     // Sort request parameters
//     var sortedKeys = Object.keys(requestParams).sort();
//     var shaString = sortedKeys
//       .map((key) => key + "=" + requestParams[key])
//       .join("");

//     shaString = "$2y$10$oaeCGHT4c" + shaString + "$2y$10$oaeCGHT4c";

//     // Calculate SHA-256 hash and set signature value
//     setSignature(sha256(shaString));
//   }, []);

//   useEffect(() => {
//     // Submit form when signature is set
//     if (signature) {
//       document.getElementById("signature").value = signature;
//       document.getElementById("paymentForm").submit();
//     }
//   }, [signature]);

//   return (
//     <div>
//       <form
//         id="paymentForm"
//         action="https://sbcheckout.payfort.com/FortAPI/paymentPage"
//         method="post"
//       >
//         <input type="hidden" name="command" value="TOKENIZATION" />
//         <input type="hidden" name="language" value="en" />
//         <input type="hidden" name="merchant_identifier" value="b62d1bca" />
//         <input type="hidden" name="access_code" value="pFhhsBpJOFReL6eF2BzU" />
//         <input type="hidden" name="signature" id="signature" />
//         <input
//           type="hidden"
//           name="return_url"
//           value="http://daeemdelivery.com/"
//         />
//         <input type="hidden" name="merchant_reference" value="Teste01" />
//         <input type="hidden" name="card_number" value="4005550000000001" />
//         <input type="hidden" name="expiry_date" value="2105" />
//         <input type="hidden" name="card_security_code" value="123" />
//         <input type="hidden" name="card_holder_name" value="Umar" />

//         {/* Add hidden input for signature */}
//       </form>
//     </div>
//   );
// }
