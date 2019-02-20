import React, { Component } from 'react';
import Main from './components/Main';
import processPeople from './util/processPeople';


export default class App extends Component{

  state = {
    employees: [],
		isLoaded: false,
		modalEmployee: null,
		singlet: false,
		last: null,
		inputInUse: true,
		error: null
  }

  componentDidMount(){
    this.getPeople()
			.then(processPeople)
			.then(res => this.setState({employees: res, isLoaded: true}),
			error => this.setState({isLoaded: true, error}));
		let mq = window.matchMedia('(min-width: 768px)');
		let mq2 = window.matchMedia('(min-width: 1024px)');
		mq.addListener(this.handleModalClose);
		mq2.addListener(this.handleModalClose);
  }



  async getPeople(){
    try{
      let response = await fetch('https://randomuser.me/api/?results=12&nat=us&inc=name,location,email,login,dob,cell,picture&noinfo');
      let people = await response.json();
      return people.results;
    } catch(err){
      console.log('error on fetch: ', err);
    }
  }

	navigateEmployees = (dir, beginIndex) => {
		let start = dir === 'next' ? parseInt(beginIndex, 10) + 1 : parseInt(beginIndex, 10) - 1;
		let arr = this.state.employees;
		for(
			let i = dir === 'next' ? 0 : arr.length;
			dir === 'next' ? i < arr.length : i > -1;
			dir === 'next' ? i++ : i--
		){
			if(arr[(i + start) % arr.length].isVisible){
				this.setState({
					modalEmployee: arr[(i + start) % arr.length]
				});
				break;
			}
		}
	}

	sortEmployees = crit => {
		let emps = this.state.employees.sort((a,b) => {
			if(crit === 'first name'){
				return a.name.match(/^\w+/i)[0] > b.name.match(/^\w+/i)[0] ? 1 : a.name.match(/^\w+/i)[0] < b.name.match(/^\w+/i)[0] ? -1 : a.name.match(/\w*-?'?\w+$/i)[0] > b.name.match(/\w*-?'?\w+$/i)[0] ? 1 : -1;
			} else if(crit === 'last name'){
				return a.name.match(/\w*-?'?\w+$/i)[0] > b.name.match(/\w*-?'?\w+$/i)[0] ? 1 : a.name.match(/\w*-?'?\w+$/i)[0] < b.name.match(/\w*-?'?\w+$/i)[0] ? -1 : a.name.match(/^\w+/i)[0] > b.name.match(/^\w+/i)[0] ? 1 : -1;
			} else {
				return a.location.city.toLowerCase() > b.location.city.toLowerCase() ? 1 : a.location.city.toLowerCase() < b.location.city.toLowerCase() ? -1 : a.name.match(/^\w+/i)[0] > b.name.match(/^\w+/i)[0] ? 1 : -1;
			}
		});
		this.setState({employees: emps.map((e,i) => {
			e.key = e.key.replace(/\d+$/, i);
			return e;
			})
		});
	}

	handleModalClose = e => {
		if(e.type === 'keyup' && e.key !== 'Escape'){return;}
		this.setState({
			last: this.state.modalEmployee,
			modalEmployee: null
		});
		setTimeout(() => {
			this.setState({last: null});
		}, 500);
	}

	handleModalNext = e => {
		let index = this.state.modalEmployee.key.match(/\d+$/)[0];
		this.navigateEmployees('next', index);
	}

	handleModalPrev = e => {
		let index = this.state.modalEmployee.key.match(/\d+$/)[0];
		this.navigateEmployees('prev', index);
	}

	handleModalOpen = e => {
		if(e.type === 'keypress' && (e.key !== ' ' && e.key !== 'Enter')){return;}
		const ppl = document.querySelectorAll('.shown').length;
		let index = e.currentTarget.getAttribute('data-key').match(/\d+$/)[0];
		this.setState({
			modalEmployee: this.state.employees[index],
			singlet: ppl === 1 ? true : false
		});
	}

	filterEmployees = val => {
		this.setState({employees: this.state.employees.map(e => {
			if(!e.name.toLowerCase().includes(val.toLowerCase())){
				e.isVisible = false;
			} else {
				e.isVisible = true;
			}
			return e;
			})
		});
	}

	handleInputFocus = e => {
		this.setState({inputInUse: true});
	}

	handleInputBlur = e => {
		setTimeout(() => {
			this.setState({inputInUse: false});
		}, 500);
	}

  render(){
    return (
        		<Main handleSort={this.sortEmployees} handleModalPrev={this.handleModalPrev} handleInputFocus={this.handleInputFocus} handleInputBlur={this.handleInputBlur} handleModalNext={this.handleModalNext} handleModalClose={this.handleModalClose} handleModalOpen={this.handleModalOpen} filter={this.filterEmployees} state={this.state}></Main>
    );
  }
}
