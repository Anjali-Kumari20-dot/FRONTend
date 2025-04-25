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
        price="30,000"
        description="A mobile phone is a portable device that allows users to make calls, send texts, access the internet, and use various apps for communication, entertainment, and productivity."
        features={options}
        // features2={options2.a}
      />
      <Product
        title="Laptop"
        price="40,000"
        description="A laptop is a portable personal computer designed for mobile use. It typically features a keyboard, touchpad, display screen, and can run various software applications for work, education, or entertainment."
        features={options}
        // features2={options2.b}
      />
      <Product
        title="Printer"
        price="50,000"
        description=" A printer is a device that produces physical copies of digital documents or images. It can be connected to a computer or network, allowing users to print text, photos, and other files."
        features={options}
        // features2={options2.c}
      />
    </>
  );
}

export default ProductTab;
