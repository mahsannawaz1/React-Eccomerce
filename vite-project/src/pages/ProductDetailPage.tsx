import {
  Text,
  Flex,
  Grid,
  GridItem,
  Link,
  Image,
  Heading,
  Button,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Show,
} from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";
import { LiaGreaterThanSolid } from "react-icons/lia";
import p1 from "../assets/images/clothing_images/1.png";
import { CiStar } from "react-icons/ci";

const ProductDetailPage = () => {
  const SIZES: { [size: string]: string } = {
    SMALL: "S",
    MEDIUM: "M",
    LARGE: "L",
    X_LARGE: "XL",
    XX_LARGE: "XXL",
  };
  console.log(Object.entries(SIZES));
  return (
    <>
      <Flex
        justifyContent={"center"}
        flexDirection={"column"}
        paddingX="10%"
        marginY={10}
      >
        <Show above="lg">
          <Flex gap={1} alignItems={"center"} marginY={"10"}>
            <Link
              as={ReactRouterLink}
              textTransform={"uppercase"}
              to="/"
              marginLeft={2}
            >
              Home
            </Link>
            <LiaGreaterThanSolid />
            <Link as={ReactRouterLink} textTransform={"uppercase"} to="/">
              Shop
            </Link>
            <LiaGreaterThanSolid />
            <Link as={ReactRouterLink} textTransform={"capitalize"} to="/men">
              Men
            </Link>
            <LiaGreaterThanSolid />
            <Link
              as={ReactRouterLink}
              textTransform={"capitalize"}
              to="/product/:id"
            >
              Men Green Solid ZipperedFull Zip Fit Bomber Jacket
            </Link>
          </Flex>
        </Show>
        <Grid
          gridTemplateColumns={{
            base: "100%",
            lg: "40% 60%",
          }}
          gap={{ base: 10, xl: 0 }}
        >
          <GridItem>
            <Flex justifyContent={{ base: "center", xl: "initial" }}>
              <Image src={p1} objectFit={"contain"} />
              <Show above="xl">
                <Flex
                  flexDirection={"column"}
                  rowGap={1}
                  justifyContent={"space-between"}
                >
                  <Image src={p1} boxSize={100} objectFit={"contain"} />
                  <Image src={p1} boxSize={100} objectFit={"contain"} />
                  <Image src={p1} boxSize={100} objectFit={"contain"} />
                  <Image src={p1} boxSize={100} objectFit={"contain"} />
                </Flex>
              </Show>
            </Flex>
          </GridItem>
          <GridItem
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"space-between"}
          >
            <Heading>
              Men Green Solid ZipperedFull Zip Fit Bomber Jacket
            </Heading>
            <Flex gap={"2px"} alignItems={"center"}>
              <CiStar />
              <CiStar />
              <CiStar />
              <CiStar />
              <CiStar />
              <Text>( 122 )</Text>
            </Flex>
            <Flex
              gap={4}
              fontSize={{
                base: "14",
                lg: "18",
              }}
              fontWeight={"600"}
            >
              <Text textDecoration={"line-through"} color="gray">
                $120
              </Text>
              <Text color="red">$65</Text>
            </Flex>
            <Text>
              Your perfect pack for everyday use and walks in the forest. Stash
              your laptop (up to 15 inches) in the padded sleeve, your everyday
            </Text>
            <Text
              marginY={3}
              fontSize={{
                base: "14",
                lg: "18",
              }}
              fontWeight={"600"}
              color="gray"
            >
              Select Size
            </Text>
            <Flex gap={2}>
              {Object.entries(SIZES).map((size) => (
                <Button borderRadius={0}>{size[1]}</Button>
              ))}
            </Flex>
            <Flex marginY={3}>
              <Button
                colorScheme="red"
                textTransform={"uppercase"}
                borderRadius={0}
                padding={"15px 20px"}
              >
                Add TO cart
              </Button>
            </Flex>
            <Flex flexDirection={"column"} rowGap={2}>
              <Flex>
                <Text fontWeight={"600"}>Category: </Text>
                <Text>Men, T-Shirt, Crop Top </Text>
              </Flex>
              <Flex>
                <Text fontWeight={"600"}>Tags: </Text>
                <Text>Modern, Latest </Text>
              </Flex>
            </Flex>
          </GridItem>
        </Grid>
        <Tabs
          border="1px solid rgb(226, 232, 240)"
          variant="unstyled"
          marginY={"10"}
        >
          <TabList border="1px solid rgb(226, 232, 240)">
            <Tab
              fontWeight={"600"}
              padding={{ base: "8px 15px", xl: "15px 20px" }}
              borderRight="1px solid rgb(226, 232, 240)"
            >
              Description
            </Tab>
            <Tab
              fontWeight={"600"}
              padding={{ base: "8px 15px", xl: "15px 20px" }}
              borderRight="1px solid rgb(226, 232, 240)"
            >
              Reviews (122)
            </Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Text>
                An eCommerce website is an online platform that allows
                businesses to sell products or services over the internet. It
                typically includes features such as product listings, shopping
                cart functionality, secure payment gateways, and order
                management systems. Customers can browse products, add them to
                their cart, complete purchases, and track orders, all through
                the website. eCommerce websites vary in scale and complexity,
                ranging from small boutique shops to large-scale marketplaces
                serving millions of users. They play a crucial role in
                facilitating online transactions and enabling businesses to
                reach a global audience.
              </Text>
            </TabPanel>
            <TabPanel>
              <Text>
                An eCommerce website is an online platform that allows
                businesses to sell products or services over the internet. It
                typically includes features such as product listings, shopping
                cart functionality, secure payment gateways, and order
                management systems. Customers can browse products, add them to
                their cart, complete purchases, and track orders, all through
                the website. eCommerce websites vary in scale and complexity,
                ranging from small boutique shops to large-scale marketplaces
                serving millions of users. They play a crucial role in
                facilitating online transactions and enabling businesses to
                reach a global audience.
              </Text>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Flex>
    </>
  );
};

export default ProductDetailPage;
