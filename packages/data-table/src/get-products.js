const products = [
    { id: 1, title: 'product-1', status: 'enabled', },
    { id: 2, title: 'product-2', status: 'disabled', },
    { id: 3, title: 'product-3', status: 'enabled', },
];

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function getTimeout() {
    return getRandomInt(1000);
}

export default (filter) => new Promise((resolve) => {
    setTimeout(() => resolve(products.filter(product => {
        return Object.keys(filter).every(filterKey => product[filterKey] === filter[filterKey]);
    })), getTimeout());
});
