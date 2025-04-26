import "./Product.css";
import Price from "./Price.jsx";

function Product({ title, image, idx }) {
  let oldPrices = ["12,495", "11,900", "1,599", "599"];
  let newPrices = ["899", "9,199", "899", "278"];
  let description = [
    ["8,000 DPI", "5 Programmable Buttons"],
    ["intuitive surface", "Designed for iPad Pro"],
    ["Designed for iPad Pro", "Designed for iPad Pro"],
    ["Wireless", "Optical orientation"],
  ];
  let imageStyles = {
    width: "180px",
    height: "180px",
    borderRadius: "50%",
    marginTop: "1rem",
  }
  return (
    <div className="Product">
      <h4>{title}</h4>
      <img src={image} alt="{title}" width="150" style={imageStyles} />
      <ul>
        <li>{description[idx][0]}</li>
        <li>{description[idx][1]}</li>
      </ul>
      <Price oldPrice={oldPrices[idx]} newPrice={newPrices[idx]} />
    </div>
  );
}

export default Product;
