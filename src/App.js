import React, { useState, useEffect, useCallback } from 'react';
import Main from './components/Main';
import FetchError from './components/FetchError';
import navigateEmployees from './util/navigateEmployees';
import processPeople from './util/processPeople';
import getPeople from './util/getPeople';

export default function App() {

  const [employees, setEmployees] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [modalEmployee, setModalEmployee] = useState(null);
  const [singlet, setSinglet] = useState(false);
  const [last, setLast] = useState(null);
  const [inputInUse, setInputInUse] = useState(true);
  const [newSW, setNewSW] = useState(null);
  const [fetchError, setFetchError] = useState(null);
  const endpoint = 'https://random165165165user.me/api/?results=12&nat=us&inc=name,location,email,login,dob,cell,picture&noinfo';

  useEffect(() => {
    async function fetchData() {
      try {
        const resp = await getPeople(endpoint);
        const data = processPeople(resp);
        setEmployees(data);
        setIsLoaded(true);
      } catch (err) {
        console.log(err);
        setFetchError(err);
      }
    }
    fetchData();
  }, [endpoint]);

  const handleModalClose = useCallback(
    (e) => {
      if (e.type === 'keyup' && e.key !== 'Escape') return;
      setLast(modalEmployee);
      setModalEmployee(null);
      setTimeout(() => {
        setLast(null);
      }, 500);

    },
    [modalEmployee, setLast, setModalEmployee]
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
    setEmployees(emps.map((e,i) => {
      e.key = e.key.replace(/\d+$/, i);
      return e;
      }));
  }

  function handleModalNext(e) {
    const index = modalEmployee.key.match(/\d+$/)[0];
    navigateEmployees(employees, setModalEmployee)('next', index);
  }

  function handleModalPrev(e) {
    const index = modalEmployee.key.match(/\d+$/)[0];
    navigateEmployees(employees, setModalEmployee)('prev', index);
  }

  function handleModalOpen(e) {
    if(e.type === 'keypress' && (e.key !== ' ' && e.key !== 'Enter')) return;
    const ppl = document.querySelectorAll('li').length;
    let index = e.currentTarget.getAttribute('data-key').match(/\d+$/)[0];
    setModalEmployee(employees[index]);
    setSinglet(ppl === 1 ? true : false);
  }

  function filterEmployees(val) {
    setEmployees(employees.map(e => {
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
    setInputInUse(true);
  }

  function handleInputBlur(e) {
    setTimeout(() => {
      setInputInUse(false);
    }, 500);
  }

  function handleNewSW(e) {
    setNewSW(e.detail);
  }

  function handleSWReload(e) {
    if (!newSW.waiting) {
      return;
    }
    newSW.waiting.postMessage('skipWaiting');
    setNewSW(null);
  }

  return (
    <>
      {
        fetchError && <FetchError message={fetchError.message}/>
      }
      {
        !fetchError && <Main
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
      }
    </>
  );
}
