import React, { useState } from 'react';
import classnames from 'classnames';
import Input from 'reactstrap/lib/Input';
import Label from 'reactstrap/lib/Label';

import { IconInvisible, IconVisible } from '../icons';

import './index.scss';

const noop = () => {};

export default function CustomInput({
  placeholder,
  onInput = noop,
  onSubmit = noop,
  children,
  type,
  className,
  invalid,
  validationError,
  outline,
  defaultValue,
  icon: Icon,
  ...props
}) {
  const [term, setTerm] = useState(defaultValue);
  const [isEncrypted, setEncrypted] = useState(false);
  const inputHandler = (event) => {
    const value = event.target.value;
    setTerm(value);

    onInput(value);
  };

  const submitHandler = (event) => {
    if (event.key === 'Enter') {
      onSubmit(term);
    }
  };

  const encrypted = type === 'password';
  const search = type === 'search';

  return (
    <>
      <Label className="input-label">
        <Input
          {...props}
          value={term}
          placeholder={placeholder}
          type={!encrypted || isEncrypted ? 'text' : 'password'}
          className={classnames(className, 'text-l', {
            search,
            outline,
            'control text-input': !outline,
            'custom-icon': encrypted || Icon,
            invalid,
          })}
          onChange={inputHandler}
          onKeyDown={submitHandler}
        />
        {encrypted && (
          <span
            className="right-icon d-flex justify-content-center align-items-center"
            onClick={() => setEncrypted(!isEncrypted)}
          >
            {isEncrypted ? <IconInvisible /> : <IconVisible />}
          </span>
        )}
        {Icon && (
          <span className="right-icon d-flex justify-content-center align-items-center">
            <Icon />
          </span>
        )}
      </Label>
      {invalid && <div className="error description pl-3">{validationError}</div>}
    </>
  );
}
