import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../actions/actionCreators';
import Menu from './Menu';
import CardList from './CardList/index';

class Main extends Component {

    render() {
        return (
            <div className="home-container">
                <Menu />
                <CardList />
            </div>
        );
    }
}

//inject pokelist and all action creators as actions
const mapStateToProps = (state) => ({
    pokelist: state.pokelist
});

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(actionCreators, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);