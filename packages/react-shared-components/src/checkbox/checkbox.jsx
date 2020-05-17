import React from 'react';

import classnames from 'classnames';

import './index.scss';

const Checkbox = ({ className, checked, prefixCls, disabled, ...props }) => (
  <span className={classnames({ checked, disabled }, className, 'text-l')}>
    <input type="checkbox" className={`${prefixCls}-input checkbox`} checked={!!checked} {...props} />
    <span className={`${prefixCls}-inner`} />
  </span>
);

export default Checkbox;
