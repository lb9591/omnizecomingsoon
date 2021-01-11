import React, { Component } from "react";
import './signup-form.style.css';

export class SignupForm extends Component {
    constructor(){
        super();
        this.state = {
            firstName:'',
            lastName: '',
            email:'',
            company: '',
        }
    }
    render() {
        return (
        <div className='form-group'>
         <form id="signupForm" onSubmit={this.state.firstName} method="POST">
            <div className="form-list">
            <label htmlFor="firstName">First Name</label>
         <input type="text" className="form-control" />
        </div>
        <div className="form-list">
            <label htmlFor="lastName">Last Name</label>
            <input type="text" className="form-control" aria-describedby="emailHelp" />
        </div>
        <div className="form-list">
           <label htmlFor="email">Email</label>
            <input className="form-control" aria-describedby='emailHelp'></input>
        </div>
        </form>
    </div>
        )
}
};