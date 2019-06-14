import React, { useState, useEffect, useCallback } from 'react';
import Main from './components/Main';
import navigateEmployees from './util/navigateEmployees';
import processPeople from './util/processPeople';
import getPeople from './util/getPeople';

export default function App() {

  const [employees, updateEmployees] = useState([]);
  let [isLoaded, updateIsLoaded] = useState(false);
  let [modalEmployee, updateModalEmployee] = useState(null);
  let [singlet, updateSinglet] = useState(false);
  let [last, updateLast] = useState(null);
  let [inputInUse, updateInputInUse] = useState(true);
  let [newSW, updateNewSW] = useState(null);
  const endpoint = 'https://randomuser.me/api/?results=12&nat=us&inc=name,location,email,login,dob,cell,picture&noinfo';

  useEffect(() => {
    async function fetchData() {
      try {
        const resp = await getPeople(endpoint);
        const data = processPeople(resp);
        updateEmployees(data);
      } catch (err) {
        console.log(err);
      } finally {
        updateIsLoaded(true);

      }
    }
    fetchData();
  }, [endpoint]);

  const handleModalClose = useCallback(
    (e) => {
      if (e.type === 'keyup' && e.key !== 'Escape') return;
      updateLast(modalEmployee);
      updateModalEmployee(null);
      setTimeout(() => {
        updateLast(null);
      }, 500);

    },
    [modalEmployee, updateLast, updateModalEmployee]
  );

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 768px)');
    const mq2 = window.matchMedia('(min-width: 1024px)');
    mq.addListener(handleModalClose);
    mq2.addListener(handleModalClose);
  }, [handleModalClose]);


  function sortEmployees(crit) {
    let emps = employees.sort((a,b) => {
      if (crit === 'first name') {
        return a.name.match(/^\w+/i)[0] > b.name.match(/^\w+/i)[0] ? 1 : a.name.match(/^\w+/i)[0] < b.name.match(/^\w+/i)[0] ? -1 : a.name.match(/\w*-?'?\w+$/i)[0] > b.name.match(/\w*-?'?\w+$/i)[0] ? 1 : -1;
      } else if (crit === 'last name') {
        return a.name.match(/\w*-?'?\w+$/i)[0] > b.name.match(/\w*-?'?\w+$/i)[0] ? 1 : a.name.match(/\w*-?'?\w+$/i)[0] < b.name.match(/\w*-?'?\w+$/i)[0] ? -1 : a.name.match(/^\w+/i)[0] > b.name.match(/^\w+/i)[0] ? 1 : -1;
      } else {
        return a.city.toLowerCase() > b.city.toLowerCase() ? 1 : a.city.toLowerCase() < b.city.toLowerCase() ? -1 : a.name.match(/^\w+/i)[0] > b.name.match(/^\w+/i)[0] ? 1 : -1;
      }
    });
    updateEmployees(emps.map((e,i) => {
      e.key = e.key.replace(/\d+$/, i);
      return e;
      }));
  }

  function handleModalNext(e) {
    const index = modalEmployee.key.match(/\d+$/)[0];
    navigateEmployees(employees, updateModalEmployee)('next', index);
  }

  function handleModalPrev(e) {
    const index = modalEmployee.key.match(/\d+$/)[0];
    navigateEmployees(employees, updateModalEmployee)('prev', index);
  }

  function handleModalOpen(e) {
    if(e.type === 'keypress' && (e.key !== ' ' && e.key !== 'Enter')) return;
    const ppl = document.querySelectorAll('li').length;
    let index = e.currentTarget.getAttribute('data-key').match(/\d+$/)[0];
    updateModalEmployee(employees[index]);
    updateSinglet(ppl === 1 ? true : false);
  }

  function filterEmployees(val) {
    updateEmployees(employees.map(e => {
      if(!e.name.toLowerCase().includes(val.toLowerCase())){
        e.isVisible = false;
      } else {
        e.isVisible = true;
      }
      return e;
      })
    );
  }

  function handleInputFocus(e) {
    updateInputInUse(true);
  }

  function handleInputBlur(e) {
    setTimeout(() => {
      updateInputInUse(false);
    }, 500);
  }

  function handleNewSW(e) {
    updateNewSW(e.detail);
  }

  function handleSWReload(e) {
    if (!newSW.waiting) {
      return;
    }
    newSW.waiting.postMessage('skipWaiting');
    updateNewSW(null);
  }

  return (
    <Main
      handleSort={sortEmployees}
      handleModalPrev={handleModalPrev}
      handleInputFocus={handleInputFocus}
      handleInputBlur={handleInputBlur}
      handleNewSW={handleNewSW}
      handleSWReload={handleSWReload}
      handleModalNext={handleModalNext}
      handleModalClose={handleModalClose}
      handleModalOpen={handleModalOpen}
      filter={filterEmployees}
      employees={employees}
      isLoaded={isLoaded}
      modalEmployee={modalEmployee}
      singlet={singlet}
      last={last}
      inputInUse={inputInUse}
      newSW={newSW}
    />
  );
}
