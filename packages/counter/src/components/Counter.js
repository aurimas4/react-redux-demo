import React, { Component } from 'react';

export default class Counter extends Component {
    constructor(props) {
        super(props);

        this.state = {
            value: 0
        };

        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
        this.incrementAsync = this.incrementAsync.bind(this);
        this.incrementIfOdd = this.incrementIfOdd.bind(this);
    }

    increment() {
        this.setState(prevState => ({
            value: prevState.value + 1
        }));
    }

    decrement() {
        this.setState(prevState => ({
            value: prevState.value - 1
        }));
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
