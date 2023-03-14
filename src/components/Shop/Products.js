import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DUMMY_PRODUCTS = [
    { id: "p1", name: "My First Book", price:6, description: "My first book"},
    { id: "p2", name: "My Second Book", price:5, description: "My second book"},
    { id: "p3", name: "My Third Book", price:15, description: "My third book"},
];

const Products = (props) => {
    const products = DUMMY_PRODUCTS.map( (product) => {
        return <ProductItem key={product.id} 
            id={product.id} name={product.name} 
            price={product.price} description={product.description}/>
    })

    return (
        <section className={classes.products}>
            <h2>Buy your favorite products</h2>
            <ul>
                {products}
            </ul>
        </section>
    );
};

export default Products;
