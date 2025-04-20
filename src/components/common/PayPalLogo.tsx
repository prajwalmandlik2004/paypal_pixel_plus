import React from 'react';

interface PayPalLogoProps {
  className?: string;
}

const PayPalLogo: React.FC<PayPalLogoProps> = ({ className = '' }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <span className="font-bold text-blue-800 text-2xl">Pay</span>
      <span className="font-bold text-blue-500 text-2xl">Pal</span>
    </div>
  );
};

export default PayPalLogo;