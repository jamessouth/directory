import React from 'react';

const ModalNav = props =>

  !props.sing ?
  <>
    <button aria-label="previous" onClick={props.handleModalPrev} className="prev">&lt;</button>
    <button aria-label="next" onClick={props.handleModalNext} className="next">&gt;</button>
  </> : null;

export default ModalNav;
