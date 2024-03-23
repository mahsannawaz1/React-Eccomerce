import { Grid, GridItem } from "@chakra-ui/react";
import NavBar from "../components/NavBar";

import Footer from "../components/Footer";
import { Outlet, useLocation } from "react-router-dom";
import { useReducer } from "react";
import cartReducer from "../reducers/cartReducer";
import CartContext from "../assets/contexts/cartContext";
import authReducer from "../reducers/authReducer";
import { User } from "../services/useAuth";
import AuthContext from "../assets/contexts/authContext";

const Layout = () => {
  const [cart, cartDispatch] = useReducer(cartReducer, { cartItems: [] });
  const [user, userDispatch] = useReducer(authReducer, {} as User);
  const location = useLocation();

  return (
    <Grid>
      <AuthContext.Provider value={{ user, dispatch: userDispatch }}>
        <CartContext.Provider value={{ cart, dispatch: cartDispatch }}>
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
      </AuthContext.Provider>
      {location.pathname === "/login" ? null : (
        <GridItem>
          <Footer />
        </GridItem>
      )}
    </Grid>
  );
};

export default Layout;
