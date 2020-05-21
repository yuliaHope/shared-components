import React from 'react';

export default function OptionsList({ isOpen, options, selectHandler }) {
  return (
    isOpen &&
    options && (
      <div onClick={selectHandler} className="options-list control">
        {options.map(({ label, value }, index) => (
          <div key={value} data-index={index} className="option py-1 px-2">
            {label}
          </div>
        ))}
      </div>
    )
  );
}
