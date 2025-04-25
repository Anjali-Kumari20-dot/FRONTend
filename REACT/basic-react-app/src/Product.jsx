import "./Product.css"
function Product({title, price, features, features2, description}) {
  return (
    <div className="Product">
      <h3>{title}</h3>
      <h4>Price : {price}</h4>
      <h5>{description}</h5>
      <p>{features.map((feature) => <li>{feature}</li>)}</p>
      {/* <p>{features2}</p> */}
    </div>
  );
}

export default Product;
