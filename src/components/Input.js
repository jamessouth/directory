import React, { useRef, useState, useEffect } from 'react';
import handleChange from '../util/handleChange';
import '../styles/Input.css';

export default function Input(props) {
  const inPut = useRef(null);
  let [inputText, updateInputText] = useState('');

  useEffect(() => inPut.current.focus(), [props.inputInUse]);

  return(
    <>
      <label htmlFor="search">search</label>
      <input ref={inPut} onBlur={props.handleInputBlur} onFocus={props.handleInputFocus} role="searchbox" tabIndex={props.modalOpen ? "-1" : "0"} value={inputText} onChange={handleChange(updateInputText, props.filter)} id="search" type="search" name="search_box" placeholder="Search"/>
    </>
  );
}
