import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../../actions/actionCreators';
import './index.css';
import { Checkbox, CheckboxGroup } from 'react-checkbox-group';

class Abilitycheckbox extends Component {
    
    constructor(props) {
        super(props);

        //this.onChange = this.onChange.bind(this);
        this.myFunction = this.myFunction.bind(this);
    }

    filterPokemon(type) {
        this.props.actions.fetchPokemonByAbility(type);
        this.props.actions.filterPokemonByType({
            isFilterByPokemonType: true,
            type,
        });
    }

    /*onChange(event) {
        this.filterPokemon(event.target.value);
    }*/

    myFunction(event) {
        var checkBox = document.getElementById("check");

        if(checkBox.checked == true) {
            this.filterPokemon(event.target.value);
        }
    }

    render() {
        return (
    <div>
        <form className="checkBox"
          ref={form => this.form = form}>
          <div><label>
              <input type="checkbox" value="sturdy" id="check" name="ability" onClick={this.myFunction} />Sturdy
          </label></div>
          <div><label>
              <input type="checkbox" value="damp" id="check" name="ability" onClick={this.myFunction}/>Damp
          </label></div>
          <div><label>
              <input type="checkbox" value="limber" id="check" name="ability" onClick={this.myFunction}/>Limber
          </label></div>
        </form>
      </div>
            /*<CheckboxGroup name="abilities" >
                <div onChange={this.onChange}><Checkbox value="sturdy" /><label>Sturdy</label></div>
                <div onChange={this.onChange}><Checkbox value="damp" /><label>Damp</label></div>
                <div onChange={this.onChange}><Checkbox value="limber" /><label>Limber</label></div>
            </CheckboxGroup>*/
                
                
        );
    }
}


const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actionCreators, dispatch)
});

export default connect(null, mapDispatchToProps)(Abilitycheckbox);