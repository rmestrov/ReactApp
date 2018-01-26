import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import './index.css';
import * as actionCreators from '../../actions/actionCreators';
import CardListByType from './CardListByType';

class CardList extends Component {
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
  .then((response) =>
  {
      this.setState({
        data:response.results,
      })
  })
}


render() {
    let i=0;
    if (this.props.filter.isFilterByPokemonType)
    return <CardListByType />;
    
    else {
        return (
        <div className="card-list"> {
            this.state.data.map((dynamicData,key) =>
            <div className="card">
                <span>
                    <h2>{dynamicData.name}</h2>
                    <h4>Result item: { i += 1}</h4>
                </span>
            </div>
            )}
        </div>
        );}
    }
}

const mapStateToProps = (state) => ({
  list: state.list,
  filter: state.filter,
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actionCreators, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(CardList);