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
import {
  Link as ReactRouterLink,
  useNavigate,
  useParams,
} from "react-router-dom";
import { LiaGreaterThanSolid } from "react-icons/lia";
import { IoStar } from "react-icons/io5";
import { IoStarOutline } from "react-icons/io5";
import useProductDetial from "../services/useProductDetial";
import { Product } from "../services/usePopularProducts";
import { useContext } from "react";
import CartContext from "../assets/contexts/cartContext";

const ProductDetailPage = () => {
  const navigate = useNavigate();
  const SIZES: { [size: string]: string } = {
    SMALL: "S",
    MEDIUM: "M",
    LARGE: "L",
    X_LARGE: "XL",
    XX_LARGE: "XXL",
  };
  const { id } = useParams();
  const ID = parseInt(id ?? "0");

  const { data: product } = useProductDetial(ID);
  const icons = [];
  for (
    let i = 0;
    i < Math.round(product?.rating.rate ? product?.rating.rate : 1);
    i++
  )
    icons.push(i + 1);

  const remainingIcons = [];
  for (
    let i = Math.round(product?.rating.rate ? product?.rating.rate : 1);
    i < 5;
    i++
  )
    remainingIcons.push(i);
  const { cart, dispatch } = useContext(CartContext);
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
            <Link
              as={ReactRouterLink}
              textTransform={"capitalize"}
              to={
                product?.category == "electronics"
                  ? "/electronics"
                  : product?.category == "jewelery"
                  ? "/jewelery"
                  : product?.category == "men's clothing"
                  ? "/men"
                  : product?.category == "women's clothing"
                  ? "/women"
                  : "/"
              }
            >
              {product?.category == "electronics"
                ? "electronics"
                : product?.category == "jewelery"
                ? "jewelery"
                : product?.category == "men's clothing"
                ? "men"
                : product?.category == "women's clothing"
                ? "women"
                : "/"}
            </Link>
            <LiaGreaterThanSolid />
            <Link
              as={ReactRouterLink}
              textTransform={"capitalize"}
              to={`/product/:${product?.id}`}
            >
              {product?.title}
            </Link>
          </Flex>
        </Show>
        <Grid
          gridTemplateColumns={{
            base: "100%",
            lg: "40% 60%",
          }}
          gap={{ base: 10, xl: 5 }}
        >
          <GridItem>
            <Flex justifyContent={{ base: "center", xl: "initial" }}>
              <Image
                src={product?.image}
                maxHeight={"650px"}
                maxWidth={"400px"}
                objectFit={"contain"}
                marginRight={3}
              />
              <Show above="xl">
                <Flex
                  flexDirection={"column"}
                  rowGap={1}
                  justifyContent={"space-between"}
                >
                  <Image
                    src={product?.image}
                    boxSize={100}
                    objectFit={"contain"}
                  />
                  <Image
                    src={product?.image}
                    boxSize={100}
                    objectFit={"contain"}
                  />
                  <Image
                    src={product?.image}
                    boxSize={100}
                    objectFit={"contain"}
                  />
                  <Image
                    src={product?.image}
                    boxSize={100}
                    objectFit={"contain"}
                  />
                </Flex>
              </Show>
            </Flex>
          </GridItem>
          <GridItem
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"space-between"}
          >
            <Heading>{product?.title}</Heading>
            <Flex gap={"2px"} alignItems={"center"}>
              {icons.map((number) => (
                <IoStar key={number} color="red" />
              ))}
              {remainingIcons.map((number) => (
                <IoStarOutline key={number} />
              ))}

              <Text fontWeight={"bold"}>( {product?.rating.count} )</Text>
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
                ${(product?.price ? product?.price + 40 : 0).toFixed(2)}
              </Text>
              <Text color="red">${product?.price.toFixed(2)}</Text>
            </Flex>
            <Text>{product?.description}</Text>
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
              {Object.entries(SIZES).map((size, index) => (
                <Button key={index} borderRadius={0}>
                  {size[1]}
                </Button>
              ))}
            </Flex>
            <Flex marginY={3}>
              <Button
                onClick={() =>
                  // dispatch({
                  //   type: "ADD",
                  //   data: { item: product ?? ({} as Product), quantity: 1 },
                  // })
                  {
                    const searchedProduct = cart.cartItems.find(
                      ({ item }) => item.id === product?.id
                    );
                    console.log(searchedProduct);
                    console.log(cart);
                    if (searchedProduct) {
                      console.log("update");
                      dispatch({
                        type: "UPDATE",
                        cartItemId: searchedProduct.item.id,
                      });
                    } else {
                      console.log("add");
                      dispatch({
                        type: "ADD",
                        data: { item: product ?? ({} as Product), quantity: 1 },
                      });
                    }
                    navigate("/cart");
                  }
                }
                colorScheme="red"
                textTransform={"uppercase"}
                borderRadius={0}
                padding={"15px 20px"}
              >
                Add To cart
              </Button>
            </Flex>
            <Flex flexDirection={"column"} rowGap={2}>
              <Flex>
                <Text fontWeight={"600"}>Category: </Text>
                <Text>
                  {product?.category == "electronics"
                    ? "Electronics"
                    : product?.category == "jewelery"
                    ? " Jewelery"
                    : product?.category == "men's clothing"
                    ? "Men"
                    : "Women"}
                  , T-Shirt, Crop Top{" "}
                </Text>
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
              Reviews ({product?.rating.count})
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
