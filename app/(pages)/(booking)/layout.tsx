import React from 'react';

const BookingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <h1>Booking Layout</h1>
      <div>{children}</div>
    </div>
  );
};

export default BookingLayout;
