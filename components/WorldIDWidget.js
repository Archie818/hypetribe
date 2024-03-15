// components/WorldIDWidget.js

import { IDKitWidget, VerificationLevel } from '@worldcoin/idkit';
import { useState } from 'react';

const WorldIDWidget = () => {
  // TODO: Implement the server route and replace this stub.
  const verifyProof = async (proof) => {
    // You'll need to implement a call to your server route here.
    // This route should verify the proof with your backend server.
    throw new Error("TODO: Implement the verify proof server route");
  };

  const onSuccess = () => {
    // Define what happens after successful verification here.
    console.log("Success");
  };

  return (
    <IDKitWidget
      app_id="app_staging_0ffe6452c5a3261c5f4e2dbb073fdf68"
      action="sign-in"
      verification_level={VerificationLevel.Device}
      handleVerify={verifyProof}
      onSuccess={onSuccess}
    >
      {({ open }) => (
        <button onClick={open}>
          Verify with World ID
        </button>
      )}
    </IDKitWidget>
  );
};

export default WorldIDWidget;
