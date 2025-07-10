



const ShopingCart = () => {
    const products = [
        { id: 1, name: "Apple", price: 1.0 },
        { id: 2, name: "Banana", price: 0.5 },
        { id: 3, name: "Banana", price: 0.5 },
        { id: 4, name: "Banana", price: 0.5 },
        { id: 5, name: "Banana", price: 0.5 },
        { id: 6, name: "Orange", price: 0.75 }
    ];


    const productss = products.map((product) => (
        <li key={product.id}>
            {product.name} - ${product.price.toFixed(2)}
        </li>
    ));



    return (
    <div>
    <h1>Shoping Cartt</h1>
    <p>{productss}</p>
    </div>


    )


};

export default ShopingCart;