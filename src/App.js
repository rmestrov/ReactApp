import React, { Component } from 'react';
import './App.css';
import FormContainer from './containers/FormContainer';

class App extends Component {
  render() {
    return (
     <div className="container">
       <div classNmae="columns">
          <div className="col-md-9 centered">
            <h3>Form Component</h3>
            <FormContainer />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
