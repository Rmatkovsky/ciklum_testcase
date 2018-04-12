const getProduct = product => (
    !product
        ? {}
        : {
            id: product.id,
            name: product.name,
            category: product.category,
            price: product.price,
            color: product.color,
        }
);

const getProducts = products => products.map(getProduct);

export default {
    req: {},
    res: {
        getProduct,
        getProducts,
    },
};
