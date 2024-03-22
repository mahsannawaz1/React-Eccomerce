import { Grid, GridItem } from "@chakra-ui/react";
import NavBar from "../components/NavBar";

import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
import { useReducer } from "react";
import cartReducer from "../reducers/cartReducer";
import CartContext from "../assets/contexts/cartContext";

const Layout = () => {
  const [cart, dispatch] = useReducer(cartReducer, { cartItems: [] });
  return (
    <Grid>
      <CartContext.Provider value={{ cart, dispatch }}>
        <GridItem
          position="sticky"
          top="0px"
          zIndex={99999999}
          background={"white"}
        >
          <NavBar />
        </GridItem>
        <GridItem>
          <Outlet />
        </GridItem>
      </CartContext.Provider>
      <GridItem>
        <Footer />
      </GridItem>
    </Grid>
  );
};

export default Layout;
