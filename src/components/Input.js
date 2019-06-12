import React, { useRef, useState, useEffect } from 'react';
import '../styles/Input.css';

export default function Input(props) {
  const inPut = useRef(null);
  let [inputText, updateInputText] = useState('');

  useEffect(() => inPut.current.focus(), [props.inputInUse]);

  const handleChange = e => {
    updateInputText(e.target.value);
    props.filter(e.target.value);
  }

  return(
    <>
      <label htmlFor="search">search</label>
      <input ref={inPut} onBlur={props.handleInputBlur} onFocus={props.handleInputFocus} role="searchbox" tabIndex={props.modalOpen ? "-1" : "0"} value={inputText} onChange={handleChange} className="search" id="search" type="search" name="search_box" placeholder="Search"/>
    </>
  );
}
