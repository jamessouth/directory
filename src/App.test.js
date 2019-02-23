import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Box from './components/Box';
import Input from './components/Input';
import Main from './components/Main';
import Modal from './components/Modal';
import ModalNav from './components/ModalNav';
import Select from './components/Select';
import processPeople from './util/processPeople';
import abbrev from './util/abbrev';
import getPeople from './util/getPeople';

function mockFetchGood(data) {
  return jest.fn(() =>
    Promise.resolve({
      ok: true,
      json: () => data
    })
  );
}

function mockFetchBad(data) {
  return jest.fn(() =>
    Promise.resolve({
      ok: false
    })
  );
}

window.matchMedia = jest.fn().mockImplementation(query => {
  return {
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(),
    removeListener: jest.fn(),
  };
});

const person = [
  {
    name: {
      first: "shelly",
      last: "robertson"
    },
    cell: "(321)-029-3088",
    dob: {
      date: "1961-01-10T01:59:04Z"
    },
    email: "shelly.robertson@example.com",
    location: {
      street: "3497 valley view ln",
      city: "los lunas",
      state: "washington",
      postcode: 18915
    },
    login: {
      username: "beautifulfrog156",
      password: "greenbay",
      salt: "8FNXjY1T"
    },
    picture: {
      large: "https://randomuser.me/api/portraits/women/84.jpg"
    }
  }
];

const users = {
  results: [
    {name: 'Mark'},
    {name: 'Paul'}
  ]
};

it('renders without crashing - App', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders without crashing - Box', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Box />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders without crashing - Input', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Input />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders without crashing - Main', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Main />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders without crashing - Modal', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Modal />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders without crashing - ModalNav', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ModalNav />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders without crashing - Select', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Select />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('processes a person', () => {
  expect(processPeople(person)).toEqual([{
    username: "beautifulfrog156",
    street: "3497 valley view ln",
    state: "WA",
    postcode: 18915,
    key: "8FNXjY1T_0",
    photo: "https://randomuser.me/api/portraits/women/84.jpg",
    name: "Shelly Robertson",
    email: "shelly.robertson@example.com",
    city: "los lunas",
    cell: "(321) 029-3088",
    day: "9",
    month: "1",
    year: "61",
    isVisible: true
  }]);
});

it('abbreviates long names', () => {
  expect(abbrev('elizabeth')).toBe('e');
});

it('gets people - ok', async () => {
  expect.assertions(2);
  fetch = mockFetchGood(users);
  const data = await getPeople('fake');
  expect(data).toEqual([
    {name: 'Mark'},
    {name: 'Paul'}
  ]);
  expect(fetch).toHaveBeenCalledTimes(1);
});

it('gets people - error thrown and caught', async () => {
  expect.assertions(2);
  fetch = mockFetchBad(users);
  const spy = jest.spyOn(console, 'log');
  await getPeople('fake');
  expect(spy).toHaveBeenNthCalledWith(1, 'error on fetch: ', 'Network problem - response not ok');
  expect(fetch).toHaveBeenCalledTimes(1);
  spy.mockRestore();
});
