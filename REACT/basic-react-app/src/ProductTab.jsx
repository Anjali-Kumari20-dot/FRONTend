import Product from "./Product.jsx";

function ProductTab() {
  // RENDERING ARRAYS
  let options = ["Hi-tech", "Lightweight", "Portable"];
  //   let options = [
  //     <li>"Hi-tech"</li>,
  //     <li>"Lightweight"</li>,
  //     <li>"Portable"</li>,
  //   ];
  let options2 = { a: "Hi-tech", b: "Lightweight", c: "Portable" };
  return (
    <>
      <Product
        title="Phone"
        price={30000}
        features={options}
      />
      <Product
        title="Laptop"
        price={40000}
        features={options}
      />
      <Product
        title="Printer"
        price={50000}
        features={options}
      />
    </>
  );
}

export default ProductTab;
