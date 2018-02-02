import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../../actions/actionCreators';
import './index.css';


class Ability extends Component {
    constructor(props) {
        super(props);

        this.onChange = this.onChange.bind(this);
    }

    filterPokemon(type) {
        this.props.actions.fetchPokemonByAbility(type);
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
                <div className="container" onChange={this.onChange}>
                    <span className="ability-span">Filter by ability: </span>
                    <div className="radio">
                        <label><input type="radio" name="optradio" value="stench" />Stench</label>
                    </div>
                    <div className="radio">
                        <label><input type="radio" name="optradio" value="drizzle" />Drizzle</label>
                    </div>
                    <div className="radio">
                        <label><input type="radio" name="optradio" value="speed-boost" />Speed Boost</label>
                    </div>
                    <div className="radio">
                        <label><input type="radio" name="optradio" value="battle-armor" />Battle Armor</label>
                    </div>
                </div>
                
                
        );
    }
}



const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actionCreators, dispatch)
});

export default connect(null, mapDispatchToProps)(Ability);