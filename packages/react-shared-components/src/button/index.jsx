import React from 'react';
import classnames from 'classnames';

import './index.scss';

function Button({ className, icon: Icon, children, disabled, ...props }) {
  return Icon ? (
    <>
      <Icon className={classnames('text-b', className, { disabled })} {...props} />
      <span>{children}</span>
    </>
  ) : (
    <button className={classnames('button text-b', className)} disabled={disabled} {...props}>
      {children}
    </button>
  );
}

export default Button;
