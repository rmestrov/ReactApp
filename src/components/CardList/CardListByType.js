import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../../actions/actionCreators';
import Card from './Card';

class CardListByType extends Component {
    render() {
        return (
            <div className="card-list">
                {this.renderCard()}
            </div>
        );
    }

    renderLoader(key) {
        return;
    }

    renderCard() {
        const { type } = this.props;
        if (type.length === 0) return this.renderLoader();

        return type.map(({ pokemon }) => {
            return (
                <Card 
                    name = {pokemon.name}
                />
            );
        });
    }
}

const mapStateToProps = (state) => ({
  type: state.type,
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actionCreators, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(CardListByType);