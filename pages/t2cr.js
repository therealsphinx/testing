import React, { useEffect, useState } from 'react';

const Tcr2Page = () => {
  const [signature, setSignature] = useState('');

  const handleSignature = async () => {
    try {
      // Check if Metamask is installed
      if (typeof window.ethereum !== 'undefined') {
        // Request user's permission to connect
        const addresses = await window.ethereum.request({ method: 'eth_requestAccounts' });
        // Get the user's Ethereum address
        const userAddress = addresses[0];

        // Prompt user to sign a message
        const message = 'This is a test';
        const signedMessage = await window.ethereum.request({ method: 'personal_sign', params: [JSON.stringify(message), userAddress] });

        // Set the signature in state
        setSignature(signedMessage);
      } else {
        console.log('Metamask is not installed');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  useEffect(() => {
    handleSignature();
  }, []);

  return (
    <div>
      <p>Old case not supported</p>
    </div>
  );
};

export default Tcr2Page;
