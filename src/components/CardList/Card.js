import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../../actions/actionCreators';


class Card extends Component {
    render() {
        const {name} = this.props;
        return (
        <div className="card">
            <span className="card-pokemon-name">{name}</span>
        </div>
    );}
}

const mapStateToProps = (state) => ({
  pokedetail: state.pokedetail
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actionCreators, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Card);