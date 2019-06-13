import React from 'react';
import '../styles/SWNotify.css';

export default function SWNotify(props) {
  return (
    <div id="sw" aria-live="polite">
      New content!
      <button autoFocus onClick={props.handleSWReload}>Reload</button>
    </div>
  );
}
