import React, { useEffect, useState } from 'react';

const Tcr2Page = () => {
  const [signature, setSignature] = useState('');

  useEffect(() => {
    // Function to handle signature
    const handleSignature = async () => {
      try {
        // Check if Metamask is installed
        if (typeof window.ethereum !== 'undefined') {
          // Request user's permission to connect
          await window.ethereum.enable();

          // Get the user's Ethereum address
          const accounts = await window.ethereum.request({ method: 'eth_accounts' });

          // Prompt user to sign a message
          const message = 'Please sign this message';
          const signedMessage = await window.ethereum.request({
            method: 'personal_sign',
            params: [message, accounts[0]],
          });

          // Set the signature in state
          setSignature(signedMessage);
        } else {
          console.log('Metamask is not installed');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };

    handleSignature();
  }, []);

  return (
    <div>
      <h1>Welcome to TCR2 Page</h1>
      {/* Display the signature */}
      <p>Signature: {signature}</p>
      {/* Add your content here */}
    </div>
  );
};

export default Tcr2Page;
