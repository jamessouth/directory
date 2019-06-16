import React, { useState } from 'react';
import handleChange from '../util/handleChange';
import { div } from '../styles/Select.module.css';

export default function Select({
  modalOpen,
  handleSort
}) {
  const [selectValue, updateSelectValue] = useState('Select...');

  return(
    <div className={div}>
      <label htmlFor="sort">Sort by:</label>
      <select tabIndex={modalOpen ? "-1" : "0"} value={selectValue} onChange={handleChange(updateSelectValue, handleSort)} id="sort">
        <option hidden>Select...</option>
        <option>first name</option>
        <option>last name</option>
        <option>city</option>
      </select>
    </div>
  );

}
