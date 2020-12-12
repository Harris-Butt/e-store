import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./Componenents/Header";
import ProductHomePage from "./Componenents/ProductHomePage";
import ProductList from "./Componenents/ProductList";
import Home from "./Componenents/Home";
import React, { useReducer } from "react";
import products from "./Products";
import GenderProducts from "./Componenents/GenderProducts";
import TypeProduct from "./Componenents/TypeProduct";
import ProductDetail from "./Componenents/ProductDetail";

export const AppContext = React.createContext();

const initialState = {
  gender: "",
  wearType: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "men":
      return { gender: (state.gender = "men"), wearType: "" };
    case "women":
      return { gender: (state.gender = "women"), wearType: "" };
    case "jackets":
      return { gender: state.gender, wearType: (state.wearType = "jackets") };
    case "bombers":
      return { gender: state.gender, wearType: (state.wearType = "bombers") };

    default:
      return { gender: state.gender, wearType: state.wearType };
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(`State is ${state}`);
  return (
    <AppContext.Provider
      value={{
        stateValue: state,
        stateDispatch: dispatch,
        productList: products,
      }}
    >
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="products" element={<ProductHomePage />}>
            <Route path="/" element={<ProductList />} />
            <Route path=":gender" element={<GenderProducts />}>
              <Route path="/" element={<ProductList />} />
              <Route path=":type" element={<TypeProduct />}>
                <Route path="/" element={<ProductList />} />
                <Route path=":productId" element={<ProductDetail />} />
              </Route>
            </Route>
          </Route>
        </Routes>
      </Router>
    </AppContext.Provider>
  );
}

export default App;
