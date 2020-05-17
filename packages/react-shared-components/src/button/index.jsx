import React from 'react';

import './index.scss';

function Button({ className, icon: Icon, children, ...props }) {
  return Icon ? (
    <>
      <Icon className={`text-b ${className}`} />
      <span>{children}</span>
    </>
  ) : (
    <button className={`btn text-b ${className}`} {...props}>
      {children}
    </button>
  );
}

export default Button;
