import React from 'react';

export default function Profile({ name, img, ...props }) {
  return (
    <div>
      <img className="user-image mr-2" src={img} alt="User" />
      <span>{name}</span>
    </div>
  );
}
