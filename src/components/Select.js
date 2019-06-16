import React, { useState } from 'react';
import handleChange from '../util/handleChange';
import { div } from '../styles/Select.module.css';

export default function Select({
  isModalOpen,
  handleSort
}) {
  const [selectValue, setSelectValue] = useState('Select...');

  return(
    <div className={div}>
      <label htmlFor="sort">Sort by:</label>
      <select tabIndex={isModalOpen ? "-1" : "0"} value={selectValue} onChange={handleChange(setSelectValue, handleSort)} id="sort">
        <option hidden>Select...</option>
        <option>first name</option>
        <option>last name</option>
        <option>city</option>
      </select>
    </div>
  );

}
