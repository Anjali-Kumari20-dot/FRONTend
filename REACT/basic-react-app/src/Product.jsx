import "./Product.css"
function Product({title, price, features}) {
  return (
    <div className="Product">
      <h3>{title}</h3>
      <h4>Price : {price}</h4>
      <p>{features.map((feature) => <li>{feature}</li>)}</p>
      {price > 30000 && <p>"Discount of 5%"</p>}
    </div>
  );
}

export default Product;
