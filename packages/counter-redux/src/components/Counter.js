import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { increment, decrement } from '../actions/counter';

class Counter extends Component {
    constructor(props) {
        super(props);

        this.incrementAsync = this.incrementAsync.bind(this);
        this.incrementIfOdd = this.incrementIfOdd.bind(this);
    }

    incrementIfOdd() {
        if (this.props.value % 2 !== 0) {
            this.props.increment();
        }
    }

    incrementAsync() {
        setTimeout(() => this.props.increment(), 1000);
    }

    render() {
        return (
            <p>
                Clicked: {this.props.value} times
                {' '}
                <button onClick={() => this.props.increment()}>+</button>
                {' '}
                <button onClick={() => this.props.decrement()}>-</button>
                {' '}
                <button onClick={this.incrementIfOdd}>Increment if odd</button>
                {' '}
                <button onClick={this.incrementAsync}>Increment async</button>
            </p>
        );
    }
}

Counter.propTypes = {
    value: PropTypes.number.isRequired,
    increment: PropTypes.func.isRequired,
    decrement: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({ value: state.counter });
const mapDispatchToProps = dispatch => bindActionCreators({
    increment,
    decrement,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Counter);