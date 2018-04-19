import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { fetchProducts } from '../actions/products';
import ProductsList from './ProductsList';

class EnabledProducts extends Component {
    componentDidMount() {
        this.props.fetchProducts({ status: 'enabled' });
    }

    render() {
        return (
            <div>
                <h2>Enabled products</h2>
                { this.props.loading && <div>loading...</div> }
                <ProductsList products={this.props.products} />
            </div>
        );
    }
}

EnabledProducts.propTypes = {
    fetchProducts: PropTypes.func.isRequired,
    loading: PropTypes.bool.isRequired,
    error: PropTypes.bool.isRequired,
    products: PropTypes.array.isRequired,
};

const mapStateToProps = state => ({
    loading: state.products.loading,
    error: state.products.error,
    products: state.products.products,
});

const mapDispatchToProps = dispatch => bindActionCreators({
    fetchProducts
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(EnabledProducts);
