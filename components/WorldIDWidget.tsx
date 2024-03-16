import React from "react";
import { IDKitWidget, VerificationLevel } from "@worldcoin/idkit";

const WorldIDWidget = () => {
  const [vetified, setVerified] = React.useState(false);

  // Calls your implemented server route
  const verifyProof = async (proof: any) => {
    const response = await fetch("/api/verify", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(proof),
    });
    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.message || "Error verifying proof");
    }
    return data;
  };

  // Functionality after verifying
  const onSuccess = () => {
    setVerified(true);
  };

  return (
    <IDKitWidget
      app_id="app_staging_ad9e62a7517f041dc62751f4abb1c38c"
      action="login"
      verification_level={VerificationLevel.Device}
      handleVerify={verifyProof}
      onSuccess={onSuccess}
    >
      {({ open }) => (
        <button
          className="py-2 px-4 bg-black text-white rounded-full hover:bg-opacity-80"
          onClick={open}
          disabled={vetified}
        >
          {vetified ? "Verified" : "Verify with World ID"}
        </button>
      )}
    </IDKitWidget>
  );
};

export default WorldIDWidget;
