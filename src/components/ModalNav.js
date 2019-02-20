import React from 'react';
const Fragment = React.Fragment;

const ModalNav = props =>

  !props.sing ?
  <Fragment>
    <button aria-label="previous" onClick={props.handleModalPrev} className="prev">&lt;</button>
    <button aria-label="next" onClick={props.handleModalNext} className="next">&gt;</button>
  </Fragment> : null;

export default ModalNav;
