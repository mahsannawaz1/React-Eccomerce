import {
  Box,
  Flex,
  Grid,
  GridItem,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";

import useNewCollection from "../services/useNewCollection";
import { Link } from "react-router-dom";
const NewCollection = () => {
  const { data } = useNewCollection();
  return (
    <Box marginY="15px">
      <Box>
        <Heading textAlign="center" textTransform="uppercase">
          new collection
        </Heading>
        <Flex justifyContent="center" marginTop={3}>
          <Box
            width={{
              base: "100px",
              md: "160px",
            }}
            height="5px"
            borderRadius="10px"
            background="black"
          ></Box>
        </Flex>
      </Box>
      <Flex justifyContent="center" paddingX={4} marginY={5}>
        <Grid
          templateColumns={{
            sm: "1fr",
            md: "1fr 1fr",
            lg: "1fr 1fr 1fr 1fr",
          }}
          gap="25px"
        >
          {data?.map((product) => (
            <GridItem key={product.id}>
              <Box border={"none"}>
                <Link to={`/product/${product.id}`}>
                  <Box>
                    <Image
                      src={product.image}
                      height="418px"
                      objectFit={"contain"}
                    />
                    <Text marginTop={2}>{product.title}</Text>
                    <Flex alignItems="center">
                      <Text marginRight={3} fontWeight="600">
                        {product.price.toFixed(2)}$
                      </Text>
                      <Text
                        display="inline"
                        textDecoration="line-through"
                        color="gray"
                      >
                        {(product.price + 40).toFixed(2)}$
                      </Text>
                    </Flex>
                  </Box>
                </Link>
              </Box>
            </GridItem>
          ))}
        </Grid>
      </Flex>
    </Box>
  );
};

export default NewCollection;
