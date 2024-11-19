import toast from "react-hot-toast";
const getProductsAdded = () => {
    const products = localStorage.getItem('product');
    if (products) {
        const productItems = JSON.parse(products)
        return productItems;
    }
    return []
}

const addProducts = (product) => {
    const products = getProductsAdded();
    const checkItem = products.find(item => item.id === product.id);
    if (checkItem) {
        return toast.error('This is an error!');
    }
    else {
        products.push(product)
        localStorage.setItem('product', JSON.stringify(products));
        toast.success('Successfully created!');
    }

}

// remove products one one ;
const removeProducts = id => {
    const products = getProductsAdded();
    const remaining = products.filter(item => item.id !== id);
    localStorage.setItem('product', JSON.stringify(remaining));
    toast.success('Successfully created!');
}


const allProductsClear = () => {
    const products = getProductsAdded();
    localStorage.removeItem('product', products)
}

export { getProductsAdded, addProducts, removeProducts, allProductsClear }

