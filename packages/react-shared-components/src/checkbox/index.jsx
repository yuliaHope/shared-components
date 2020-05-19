import React from 'react';
import classnames from 'classnames';
import Input from 'reactstrap/lib/Input';
import Label from 'reactstrap/lib/Label';
import FormGroup from 'reactstrap/lib/FormGroup';

import './index.scss';

export default function Checkbox({ id, label, className, ...props }) {
  return (
    <FormGroup check>
      <Input type="checkbox" className={classnames('custom-checkbox', className)} id={id} {...props} />
      <Label htmlFor={id} class="container">
        {label}
        <span class="checkmark"></span>
      </Label>
    </FormGroup>
  );
}
