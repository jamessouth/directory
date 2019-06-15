import React from 'react';
import styles from '../styles/SWNotify.module.css';

export default function SWNotify({
  handleSWReload
}) {
  return (
    <div className={styles.div} aria-live="polite">
      New content!
      <button className={styles.btn} autoFocus onClick={handleSWReload}>Reload</button>
    </div>
  );
}
