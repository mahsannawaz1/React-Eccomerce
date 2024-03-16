import { Grid, GridItem } from "@chakra-ui/react";
import NavBar from "../components/NavBar";
import Main from "../components/Main";

const Layout = () => {
  return (
    <Grid>
      <GridItem>
        <NavBar />
      </GridItem>
      <GridItem>
        <Main />
      </GridItem>
    </Grid>
  );
};

export default Layout;
