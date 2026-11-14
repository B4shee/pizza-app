import React from 'react';

function Order() {
  const handleOrder = () => {
    alert("Thank you! Your order portal is ready.");
  };

  return (
    <div className="order">
      <p>We&apos;re currently open</p>
      <button type="button" className="btn" onClick={handleOrder}>
        Order
      </button>
    </div>
  );
}

export default Order;