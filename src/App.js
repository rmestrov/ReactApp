import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state={
      data:[],
    }
  }

componentDidMount()
{
  fetch('https://pokeapi.co/api/v2/pokemon/?limit=15')
  .then((Response) => Response.json())
  .then((findresponse) =>
  {
      this.setState({
        data:findresponse.results,
      })
  })
}

  render() {
    let i=0;
    return (
      <div class="list-group">
      
        {
          this.state.data.map((dynamicData,key) =>
          <div class="container">
            <span>
              <h2>{dynamicData.name}</h2>
              Result item: {i += 1}
            </span>
          </div>
          )
        }
      
      </div>
    );
  }
}

export default App;