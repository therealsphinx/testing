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
          await window.ethereum.request({ method: 'eth_requestAccounts' }).then((addresses) => {
            // Get the user's Ethereum address
            const userAddress = addresses[0];

            // Prompt user to sign a message
            const message = 'This is a test';
            await window.ethereum
              .request({ method: 'personal_sign', params: [JSON.stringify(message), userAddress] })
              .then((signedMessage) => {
                // Set the signature in state
                setSignature(signedMessage);
              })
              .catch((error) => {
                console.error('Error:', error);
              });
          });
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
      <p>Old case not supported</p>
    </div>
  );
};

export default Tcr2Page;
