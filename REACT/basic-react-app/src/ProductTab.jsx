import Product from "./Product.jsx";

function ProductTab() {
  let styles = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
  }
  return (
    <div style={styles}>
      <Product title="Logitech MX Master" image="/src/images/mouse.jpg" idx={0}/>
      <Product title="Apple Pencil (2nd Gen)" image="/src/images/applePencil.jpg" idx={1}/>
      <Product title="Zebronics zeb-transformer" image="/src/images/keyboard.jpg" idx={2}/>
      <Product title="Petronics Toad 23" image="/src/images/wirelessMouse.jpg" idx={3}/>
    </div>
  );
}

export default ProductTab;
