import React from 'react';
import '../styles/SWNotify.css';

const Modal = props => {

  let styles = {top: window.scrollY + window.innerHeight - 100};

  return (
    <div id="sw" aria-live="polite" style={styles}  >
      New content!
      <button autoFocus onClick={props.handleSWReload}>Reload</button>
    </div>
  );
}

export default Modal;
