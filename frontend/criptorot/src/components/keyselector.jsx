// components/KeySelector.tsx
import React from "react";

function KeySelector({ keyValue, setKey }) {
  return (
    <section className='flex flex-row gap-5 w-3/4'>
      <h2 className='font-bold'>Key: </h2>
      <input
        type='range'
        min='1'
        max='100'
        value={keyValue}
        onChange={(e) => setKey(Number(e.target.value))}
        className='range range-primary'
      />
      <span>
        <input
          type='number'
          value={keyValue}
          className='w-12'
          onChange={(e) => setKey(Number(e.target.value))}
        />
      </span>
    </section>
  );
}

export default KeySelector;
