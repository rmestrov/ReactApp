import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../../actions/actionCreators';
import './index.css';

class Menu extends Component {
    constructor(props) {
        super(props);

        this.onChange = this.onChange.bind(this);
    }

    filterPokemon(type) {
        this.props.actions.fetchPokemonByType(type);
        this.props.actions.filterPokemonByType({
            isFilterByPokemonType: true,
            type,
        });
    }

    onChange(event) {
        this.filterPokemon(event.target.value);
    }

    

    render() {
        return (
            <div className="menu">
                <div className="menu-title">
                    Gotta Catch 'Em All!
                </div>
                <div className="dropdown">
                    <span className="filter-span">Filter by type: </span>
                    <select className="btn btn-default dropdown-toggle" onChange={this.onChange}>
                        <option value="">Select type...</option>
                        <option value="normal">Normal</option>
                        <option value="fighting">Fighting</option>
                        <option value="flying">Flying</option>
                        <option value="poison">Poison</option>
                        <option value="ground">Ground</option>
                        <option value="rock">Rock</option>
                        <option value="ghost">Ghost</option>
                        <option value="steel">Steel</option>
                        <option value="fire">Fire</option>
                        <option value="water">Water</option>
                        <option value="grass">Grass</option>
                        <option value="electric">Electric</option>
                        <option value="psychic">Psychic</option>
                        <option value="ice">Ice</option>
                        <option value="dragon">Dragon</option>
                        <option value="dark">Dark</option>
                        <option value="fairy">Fairy</option>
                    </select>
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actionCreators, dispatch)
});

export default connect(null, mapDispatchToProps)(Menu);