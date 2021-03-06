// Styling
import {
  Description,
  GlobalStyle,
  ShopImage,
  ThemeButton,
  Title,
} from "./styles";
import React, { useState } from "react";
import { Route, Switch } from "react-router";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
// Components
import ProductDetail from "./components/ProductDetail";
import ProductList from "./components/ProductList";
import { ThemeProvider } from "styled-components";
// Data
import products from "./products";
import ProductForm from "./components/ProductForm";
const theme = {
  light: {
    mainColor: "#242424", // main font color
    backgroundColor: "#fefafb", // main background color
    pink: "#ff85a2",
    red: "#ff3232",
  },
  dark: {
    mainColor: "#fefafb", // main font color
    backgroundColor: "#242424", // main background color
    pink: "#ff85a2",
    red: "#ff3232",
  },
};

function App() {
  const [currentTheme, setCurrentTheme] = useState("light");
  const [product, setProduct] = useState(null);
  const [_products, setProducts] = useState(products);

  const deleteProduct = (productId) => {
    const updatedProducts = _products.filter(
      (product) => product.id !== +productId
    );
    setProducts(updatedProducts);
    setProduct(null);
  };

  const selectProduct = (productId) => {
    const selectedProduct = products.find(
      (product) => product.id === productId
    );
    setProduct(selectedProduct);
  };

  const toggleTheme = () =>
    setCurrentTheme(currentTheme === "light" ? "dark" : "light");

  /*const setView = () =>
    product ? (
      <ProductDetail
        product={product}
        deleteProduct={deleteProduct}
        selectProduct={selectProduct}
      />
    ) : (
      <ProductList
        products={_products}
        deleteProduct={deleteProduct}
        selectProduct={selectProduct}
      />
    );*/

  return (
    <ThemeProvider theme={theme[currentTheme]}>
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1"
        crossorigin="anonymous"
      ></link>
      <GlobalStyle />

      <NavBar currentTheme={currentTheme} toggleTheme={toggleTheme} />
      <Switch>
        <Route path={["/products/newform", "/products/:productSlug/edit"]}>
          <ProductForm />
        </Route>
        <Route path="/products/:productSlug">
          <ProductDetail deleteProduct={deleteProduct} />
        </Route>

        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/products">
          <ProductList deleteProduct={deleteProduct} />
        </Route>
      </Switch>
      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW"
        crossorigin="anonymous"
      ></script>
    </ThemeProvider>
  );
}

export default App;
