import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class DataTable extends Component {
    render() {
        const productsList = this.props.products.map((product) => {
            return <li key={product.id}>{JSON.stringify(product)}</li>
        });

        if (productsList.length > 0) {
            return (
                <ul>
                    {productsList}
                </ul>
            );
        }

        return null;
    }
}

DataTable.propTypes = {
    products: PropTypes.array.isRequired,
};
