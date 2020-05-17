import React, { useState } from 'react';
import { IconSearch, IconClose } from '../icons';

const noop = () => {};

export default function SearchInput({
  placeholder,
  onClear = noop,
  onInput = noop,
  onSubmit = noop,
  children,
  ...props
}) {
  const [term, setTerm] = useState('');
  const inputHandler = (event) => {
    const value = event.target.value;
    setTerm(value);

    onInput(value);
    if (value === '') {
      onClear();
    }
  };

  const clearHandler = () => {
    setTerm('');
    onClear();
  };

  const submitHandler = (event) => {
    if (event.key === 'Enter') {
      onSubmit(term);
    }
  };

  return (
    <label {...props}>
      <IconSearch />
      <input value={term} placeholder={placeholder} onChange={inputHandler} onKeyDown={submitHandler} />
      {term !== '' && <IconClose onClick={clearHandler} />}
      <div>{children}</div>
    </label>
  );
}