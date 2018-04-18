import React, { Component } from 'react';

const counter = (state = { value: 0 }, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return { value: state.value + 1 };

        case 'DECREMENT':
            return { value: state.value - 1 };

        default:
            return state;
    }
}

export default class Counter extends Component {
    constructor(props) {
        super(props);

        this.state = counter(undefined, {});

        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
        this.incrementAsync = this.incrementAsync.bind(this);
        this.incrementIfOdd = this.incrementIfOdd.bind(this);
    }

    dispatch(action) {
        this.setState(prevState => counter(prevState, action));
    }

    increment() {
        this.dispatch({ type: 'INCREMENT' });
    }

    decrement() {
        this.dispatch({ type: 'DECREMENT' });
    }

    incrementIfOdd() {
        if (this.state.value % 2 !== 0) {
            this.increment();
        }
    }

    incrementAsync() {
        setTimeout(() => this.increment(), 1000);
    }

    render() {
        const { value } = this.state;

        return (
            <p>
                Clicked: {value} times
                {' '}
                <button onClick={this.increment}>+</button>
                {' '}
                <button onClick={this.decrement}>-</button>
                {' '}
                <button onClick={this.incrementIfOdd}>Increment if odd</button>
                {' '}
                <button onClick={this.incrementAsync}>Increment async</button>
            </p>
        );
    }
}
