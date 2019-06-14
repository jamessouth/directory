import React from 'react';
import styles from '../styles/SWNotify.module.css';

export default function SWNotify(props) {
  return (
    <div className={styles.div} aria-live="polite">
      New content!
      <button className={styles.btn} autoFocus onClick={props.handleSWReload}>Reload</button>
    </div>
  );
}
