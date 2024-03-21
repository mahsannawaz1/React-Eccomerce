import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  Hide,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import menBanner from "../assets/images/banner_mens.png";
import { ChevronDownIcon } from "@chakra-ui/icons";
import useMenClothing from "../services/useMenClothing";

const ShoppingMen = () => {
  const { data } = useMenClothing();
  return (
    <Box
      margin={{
        base: "25px 15px",
        lg: "50px 15px",
      }}
      fontSize={{
        base: 12,
        lg: 18,
      }}
    >
      <Image src={menBanner} marginX="15px" />

      <Flex
        justifyContent="center"
        paddingX={4}
        marginY={5}
        flexDirection={"column"}
      >
        <Flex
          justifyContent={"space-between"}
          alignItems={"center"}
          marginY={5}
          gap="25px"
        >
          <Flex alignItems={"center"}>
            <Text fontWeight={"bold"}>Showing 1-{data?.length}</Text>
            <Hide below="md">
              <Text marginLeft={1}> out of 20 Products</Text>
            </Hide>
          </Flex>
          <Menu>
            <MenuButton
              as={Button}
              rightIcon={<ChevronDownIcon />}
              fontSize={{
                base: 12,
                lg: 18,
              }}
            >
              Sort By
            </MenuButton>
            <MenuList
              fontSize={{
                base: 12,
                lg: 18,
              }}
            >
              <MenuItem>Oldest To Newest</MenuItem>
              <MenuItem>Newest To Oldest</MenuItem>
              <MenuItem>Rating</MenuItem>
            </MenuList>
          </Menu>
        </Flex>
        <Grid
          templateColumns={{
            sm: "1fr",
            md: "1fr 1fr",
            lg: "1fr 1fr 1fr",
            xl: "1fr 1fr 1fr 1fr",
            "2xl": "1fr 1fr 1fr 1fr 1fr",
          }}
          gap="25px"
        >
          {data?.map((product) => (
            <GridItem key={product.id}>
              <Box border={"none"}>
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
              </Box>
            </GridItem>
          ))}
          {/* <GridItem>
            <Box border={"none"}>
              <Box>
                <Image src={p1} />
                <Text marginTop={2}>Mens Casual Premium Slim Fit T-Shirts</Text>
                <Flex alignItems="center">
                  <Text marginRight={3} fontWeight="600">
                    80$
                  </Text>
                  <Text
                    display="inline"
                    textDecoration="line-through"
                    color="gray"
                  >
                    120$
                  </Text>
                </Flex>
              </Box>
            </Box>
          </GridItem>
          <GridItem>
            <Box>
              <Box>
                <Image src={p2} />
                <Text marginTop={2}>Mens Casual Premium Slim Fit T-Shirts</Text>
                <Flex alignItems="center">
                  <Text marginRight={3} fontWeight="600">
                    80$
                  </Text>
                  <Text
                    display="inline"
                    textDecoration="line-through"
                    color="gray"
                  >
                    120$
                  </Text>
                </Flex>
              </Box>
            </Box>
          </GridItem>
          <GridItem>
            <Box>
              <Box>
                <Image src={p2} />
                <Text marginTop={2}>Mens Casual Premium Slim Fit T-Shirts</Text>
                <Flex alignItems="center">
                  <Text marginRight={3} fontWeight="600">
                    80$
                  </Text>
                  <Text
                    display="inline"
                    textDecoration="line-through"
                    color="gray"
                  >
                    120$
                  </Text>
                </Flex>
              </Box>
            </Box>
          </GridItem>
          <GridItem>
            <Box>
              <Box>
                <Image src={p2} />
                <Text marginTop={2}>Mens Casual Premium Slim Fit T-Shirts</Text>
                <Flex alignItems="center">
                  <Text marginRight={3} fontWeight="600">
                    80$
                  </Text>
                  <Text
                    display="inline"
                    textDecoration="line-through"
                    color="gray"
                  >
                    120$
                  </Text>
                </Flex>
              </Box>
            </Box>
          </GridItem>
          <GridItem>
            <Box>
              <Box>
                <Image src={p3} />
                <Text marginTop={2}>Mens Casual Premium Slim Fit T-Shirts</Text>
                <Flex alignItems="center">
                  <Text marginRight={3} fontWeight="600">
                    80$
                  </Text>
                  <Text
                    display="inline"
                    textDecoration="line-through"
                    color="gray"
                  >
                    120$
                  </Text>
                </Flex>
              </Box>
            </Box>
          </GridItem>
          <GridItem>
            <Box>
              <Box>
                <Image src={p4} />
                <Text marginTop={2}>Mens Casual Premium Slim Fit T-Shirts</Text>
                <Flex alignItems="center">
                  <Text marginRight={3} fontWeight="600">
                    80$
                  </Text>
                  <Text
                    display="inline"
                    textDecoration="line-through"
                    color="gray"
                  >
                    120$
                  </Text>
                </Flex>
              </Box>
            </Box>
          </GridItem> */}
        </Grid>
      </Flex>
    </Box>
  );
};

export default ShoppingMen;
