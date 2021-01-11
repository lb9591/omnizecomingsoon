import React from "react";
import "./App.css";
import SweetAlert from 'react-bootstrap-sweetalert';
import { CountDown } from "./components/countdown/countdown-component";
import { Button } from '@material-ui/core'
import { SignupForm } from "./components/signup-form/signup-form.component";
import OmnizeLogo from './assets/images/omnize-logo.png';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        showAlert:null,
    }
    this.handleClick = this.handleClick.bind(this);
}
hideAlert = () => {
  this.setState({
      showAlert: null
  });
}
handleClick = () => {
    this.setState({
        showAlert: <SweetAlert
        success
        title="Woot!"
        onConfirm={this.hideAlert}
        onCancel={this.hideAlert}
      >
  Keep checking your email for more information regarding the release of the beta!
   </SweetAlert>
    });
  }
  
  render() {
    return (
          <div className="coming-soon">
            <div className='coming-wrapper'>
            <img src={OmnizeLogo} alt="Omnize Logo" width='600px'/>
            <h1 className="title">BETA COMING SOON</h1>
            <CountDown />
            </div>
            <SignupForm />
      <Button className='signupButton' onClick={() => this.handleClick()}>
        Stay in the loop!
        </Button>        
      {this.state.showAlert}    

          </div>
      
    );
  }
}

export default App;
