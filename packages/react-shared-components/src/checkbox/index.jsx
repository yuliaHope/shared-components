import React from 'react';
import Input from 'reactstrap/lib/Input';
import Label from 'reactstrap/lib/Label';
import FormGroup from 'reactstrap/lib/FormGroup';

import './index.scss';

export default function Checkbox({ label, className, ...props }) {
  return (
    <FormGroup className={className} check>
      <Label check className="checkbox-label">
        <Input type="checkbox" {...props} />
        {label}
        <span className="checkbox-custom"></span>
      </Label>
    </FormGroup>
  );
}
