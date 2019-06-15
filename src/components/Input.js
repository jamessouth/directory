import React, { useRef, useState, useEffect } from 'react';
import handleChange from '../util/handleChange';
import '../styles/Input.css';

export default function Input({
  handleInputBlur,
  handleInputFocus,
  modalOpen,
  filter
}) {
  const inPut = useRef(null);
  let [inputText, updateInputText] = useState('');

  useEffect(() => inPut.current.focus(), []);

  return(
    <>
      <label htmlFor="search">search</label>
      <input
        ref={inPut}
        onBlur={handleInputBlur}
        onFocus={handleInputFocus}
        role="searchbox"
        tabIndex={modalOpen ? "-1" : "0"}
        value={inputText}
        onChange={handleChange(updateInputText, filter)}
        id="search"
        type="search"
        name="search_box"
        placeholder="Search"
      />
    </>
  );
}
