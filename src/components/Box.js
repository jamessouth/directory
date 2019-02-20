import React, { Component } from 'react';
import loading from '../loading.png';
import '../styles/Box.css';

export default class Box extends Component{

  shouldComponentUpdate(p){
    if(!p.modalOpen && !p.inputInUse && this.div.getAttribute('data-key') === p.focusBox.key){
      this.div.focus();
    }
    return true;
  }

  render(){
    return (
      <div ref={div => this.div = div} role="listitem" onKeyPress={this.props.handleModalOpen} onClick={this.props.handleModalOpen} data-key={this.props.boxkey} className="shown" tabIndex={this.props.modalOpen ? "-1" : "0"}>
        <img src={this.props.isLoaded ? this.props.pic : loading} alt="employee pic"/>
        <p className="name">{this.props.isLoaded ? this.props.name : ''}</p>
        <p className="user">{this.props.isLoaded ? this.props.user : ''}</p>
        <p className="email">{this.props.isLoaded ? this.props.email : ''}</p>
        <p className="city">{this.props.isLoaded ? `${this.props.city}, USA` : ''}</p>
      </div>
    );
  }
}
