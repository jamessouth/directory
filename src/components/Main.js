import React from 'react';
import Box from './Box';
import Input from './Input';
import Select from './Select';
import Modal from './Modal';
import '../styles/Main.css';

const Fragment = React.Fragment;

const Main = props => {

  document.body.style.overflowY = !props.state ? 'visible' : !!props.state.modalEmployee ? 'hidden' : 'visible';

  return (
    <Fragment>
      {props.state && !!props.state.modalEmployee &&
        <Fragment>
          <div className="overlay" />
          <Modal handleModalPrev={props.handleModalPrev} handleModalNext={props.handleModalNext} handleModalClose={props.handleModalClose} emp={props.state.modalEmployee} sing={props.state.singlet}>
          </Modal>
        </Fragment>
      }
      <div className="h1_input">
        <h1>awesome startup employee directory</h1>
        <Input handleInputBlur={props.handleInputBlur} handleInputFocus={props.handleInputFocus} modalOpen={props.state && !!props.state.modalEmployee} filter={props.filter}></Input>
        <Select modalOpen={props.state && !!props.state.modalEmployee} handleSort={props.handleSort}></Select>
      </div>
      <main role="group">
        {props.state && props.state.employees
          .filter(e => e.isVisible)
          .map((e,i) =>
          <Box inputInUse={props.state.inputInUse} focusBox={props.state.last || {key:'x'}} modalOpen={!!props.state.modalEmployee} handleModalOpen={props.handleModalOpen} key={e.key} boxkey={e.key} isLoaded={props.state.isLoaded} photo={e.photo} name={e.name} user={e.username} email={e.email} city={e.city}></Box>
        )}
      </main>
    </Fragment>
  );
}

export default Main;
