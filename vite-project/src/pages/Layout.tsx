import { Grid, GridItem } from "@chakra-ui/react";
import NavBar from "../components/NavBar";

import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <Grid>
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
      <GridItem>
        <Footer />
      </GridItem>
    </Grid>
  );
};

export default Layout;
