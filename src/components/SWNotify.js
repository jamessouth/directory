import React from 'react';
import {
  div,
  btn
} from '../styles/SWNotify.module.css';

export default function SWNotify({
  handleSWReload
}) {
  return (
    <div className={div} aria-live="polite">
      New content!
      <button className={btn} autoFocus onClick={handleSWReload}>Reload</button>
    </div>
  );
}
