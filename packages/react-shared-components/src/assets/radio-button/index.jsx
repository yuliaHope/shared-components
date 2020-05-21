import React from 'react';
import Input from 'reactstrap/lib/Input';
import Label from 'reactstrap/lib/Label';
import FormGroup from 'reactstrap/lib/FormGroup';

import './index.scss';

export default function RadioBtn({ label, className, ...props }) {
  return (
    <FormGroup className={className} check>
      <Label check className="radio-label">
        <Input type="radio" {...props} />
        {label}
        <span className="radio-custom"></span>
      </Label>
    </FormGroup>
  );
}
