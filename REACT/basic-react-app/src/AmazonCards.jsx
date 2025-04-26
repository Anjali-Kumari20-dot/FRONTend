import ProductTab from "./ProductTab.jsx";

function Layout() {
    let styles = {
      marginTop: "8rem",
    }
    return (
      <div style={styles}>
        <h2>Blockbuster Deals | Shop Now</h2>
        <ProductTab />
      </div>
    );
  }
  
  export default Layout;
  