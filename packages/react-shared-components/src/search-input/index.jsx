import React, { useState, useRef, useEffect } from 'react';
import classnames from 'classnames';

import Input from '../input';
import OptionsList from './OptionsList';
import { IconArrows } from '../icons';

import './index.scss';

const noop = () => {};

export default function Filter({ onSelect = noop, options, defaultValue = {}, className, type, placeholder, onInput }) {
  const search = type === 'search';
  console.log('search', search);
  const [isOpen, setIsOpen] = useState(search && !!options.length);
  const [selected, setSelected] = useState(defaultValue);
  const node = useRef();

  const handleClick = (e) => {
    if (node.current && node.current.contains(e.target)) {
      // inside click
      setIsOpen(!isOpen);
      return;
    }

    setIsOpen(false);
  };

  useEffect(() => {
    // add when mounted
    document.addEventListener('mousedown', handleClick);
    // return function to be called when unmounted
    return () => {
      document.removeEventListener('mousedown', handleClick);
    };
  }, []);

  const selectHandler = ({ target }) => {
    onSelect(options[target.dataset.index]);
    setSelected(options[target.dataset.index]);
    setIsOpen(false);
  };

  console.log('isOpen', isOpen, options, type);
  return (
    <div ref={node} className="filter">
      <Input
        key={selected.label}
        placeholder={placeholder}
        onInput={onInput}
        icon={!search && IconArrows}
        defaultValue={selected.label}
        readOnly={!search}
        outline={!search}
        type={type}
        className={classnames(className, { selected: selected.label && !search })}
      />
      <OptionsList selectHandler={selectHandler} isOpen={isOpen} options={options} />
    </div>
  );
}
