const product1 = {
    name: "Shirt",
    price: 59,
    inStock: true
};

const product2 = {
    name: "T-shirt",
    price: 49,
    inStock: true
};

const product3 = {
    name: "Pants",
    price: 69,
    inStock: true
};

const product4 = {
    name: "Skirt",
    price: 55,
    inStock: true
};

const product5 = {
    name: "Jacket",
    price: 99,
    inStock: true
};

const products = [product1, product2, product3, product4, product5];

console.log("Original Array:", products);

console.log("1.First Product:", products[0].name);

const products2 = [product1, {
    name: product2.name,
    price: 150,
    inStock: product2.inStock
}, product3, product4, product5];

console.log("2.Array after updating the second product price:", products2);

const pushMethod = () => {
const products3 = [product1, product2, product3, product4, product5];
products3.push({
    name: "Shoes",
    price: 89,
    inStock: false
});
console.log("3.Array after adding an item to the end:", products3);
}

const popMethod = () => {
const products4 = [product1, product2, product3, product4, product5, {
    name: "Shoes",
    price: 89,
    inStock: true
}];   
products4.pop();
console.log("4.Array after removing an item from the end:", products4);
}
const iterateUsingForeach = () => {
    products.forEach((product) => {
        console.log("5.Iterate using foreach product name:", product.name);
    });
};

const mapMethod = () => {
    return products.map((product => product.price))
};

const filterMethod = () => {
    return products.filter((product => product.inStock === true))
};

const forIn = () => {
    for(let key in product1) {
        console.log(key, product1[key]);
    }
};

pushMethod();

popMethod();

iterateUsingForeach();

console.log("6.Using the map method to output an array containing only the product prices:", mapMethod());

console.log("7.Use the filter method to get the products that are in stock:", filterMethod());

console.log("8.Iterate over the properties of the first product:");
forIn();

