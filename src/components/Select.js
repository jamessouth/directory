import React, { useState } from 'react';
import handleChange from '../util/handleChange';
import styles from '../styles/Select.module.css';

export default function Select(props) {
  let [selectValue, updateSelectValue] = useState('Select...');

  return(
    <div className={styles.div}>
      <label htmlFor="sort">Sort by:</label>
      <select tabIndex={props.modalOpen ? "-1" : "0"} value={selectValue} onChange={handleChange(updateSelectValue, props.handleSort)} id="sort">
        <option hidden>Select...</option>
        <option>first name</option>
        <option>last name</option>
        <option>city</option>
      </select>
    </div>
  );

}
