import {
  Text,
  Table,
  TableContainer,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Box,
  Flex,
  Heading,
  Button,
  Input,
  Badge,
  Image,
  Link,
  Show,
} from "@chakra-ui/react";
import { IoClose } from "react-icons/io5";

import CartContext from "../assets/contexts/cartContext";
import { useContext } from "react";
import { Link as ReactRouterLink } from "react-router-dom";
const Cart = () => {
  const { cart, dispatch } = useContext(CartContext);
  return (
    <Box paddingX="10%" marginY={10}>
      <TableContainer>
        <Table variant="simple">
          <Thead>
            <Tr fontWeight="bold">
              <Th fontWeight="bold" padding={{ base: "5px" }}>
                <Text textAlign={"center"}>Products</Text>
              </Th>
              <Show above="lg">
                <Th fontWeight="bold" padding={{ base: "5px" }}>
                  Title
                </Th>
              </Show>
              <Th fontWeight="bold" padding={{ base: "5px" }} isNumeric>
                <Text textAlign={"center"}>Price</Text>
              </Th>
              <Th fontWeight="bold" padding={{ base: "5px" }} isNumeric>
                <Text textAlign={"center"}>Qty</Text>
              </Th>
              <Show above="md">
                <Th fontWeight="bold" padding={{ base: "5px" }} isNumeric>
                  <Text textAlign={"center"}>Total</Text>
                </Th>
              </Show>
              <Th fontWeight="bold" padding={{ base: "5px" }} isNumeric>
                <Text textAlign={"center"}>Remove</Text>
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            {cart.cartItems.map(({ item, quantity }) => (
              <Tr key={item.id}>
                <Td padding={{ base: "5px" }}>
                  <Flex justifyContent={"center"}>
                    <Link as={ReactRouterLink} to={`/product/${item.id}`}>
                      <Image src={item.image} boxSize={10} />
                    </Link>
                  </Flex>
                </Td>
                <Show above="lg">
                  <Td
                    padding={{ base: "5px" }}
                    maxWidth={"200px"}
                    whiteSpace={"nowrap"}
                    isTruncated
                  >
                    <Link as={ReactRouterLink} to={`/product/${item.id}`}>
                      {item.title}
                    </Link>
                  </Td>
                </Show>
                <Td isNumeric padding={{ base: "5px" }}>
                  <Text textAlign={"center"}>${item.price.toFixed(2)}</Text>
                </Td>
                <Td textAlign={"end"} padding={{ base: "5px" }}>
                  <Flex justifyContent={"Center"}>
                    <Badge padding={{ base: "5px 10px", lg: "5px 15px" }}>
                      {quantity}
                    </Badge>
                  </Flex>
                </Td>
                <Show above="md">
                  <Td textAlign={"end"} padding={{ base: "5px" }}>
                    <Text textAlign={"center"}>
                      ${(quantity * item.price).toFixed(2)}
                    </Text>
                  </Td>
                </Show>
                <Td isNumeric padding={{ base: "5px" }}>
                  <Flex justifyContent={"center"}>
                    <IoClose
                      cursor={"pointer"}
                      onClick={() =>
                        dispatch({ type: "DELETE", cartItemId: item.id })
                      }
                    />
                  </Flex>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>

      <Flex
        marginY={{ base: 3, lg: 10 }}
        flexDirection={{
          base: "column",
          lg: "row",
        }}
      >
        <Box>
          <Heading marginBottom={3} fontSize={30} marginLeft={5}>
            Cart Total
          </Heading>
          <TableContainer>
            <Table>
              <Thead></Thead>
              <Tbody>
                <Tr>
                  <Td>Subtotal</Td>
                  <Td paddingLeft={{ base: 10, lg: 200 }}>
                    $
                    {cart.cartItems.reduce(
                      (acc, item) => acc + item.quantity * item.item.price,
                      0
                    )}
                  </Td>
                </Tr>
                <Tr>
                  <Td>Shipping Fee </Td>
                  <Td
                    paddingLeft={{ base: 10, lg: 200 }}
                    textAlign={{ lg: "end" }}
                  >
                    Free
                  </Td>
                </Tr>
                <Tr fontWeight={"bold"}>
                  <Td>Total</Td>
                  <Td paddingLeft={{ base: 10, lg: 200 }}>
                    $
                    {cart.cartItems.reduce(
                      (acc, item) => acc + item.quantity * item.item.price,
                      0
                    )}
                  </Td>
                </Tr>
              </Tbody>
            </Table>
          </TableContainer>
        </Box>
        <Box
          width={{ lg: "400px" }}
          marginLeft={{ base: 0, lg: "10%" }}
          marginY={{ base: 3, lg: 0 }}
        >
          <Text color={"gray"}>If you have a Promo code,Enter it here</Text>
          <Flex justifyContent="center" position={"relative"} marginTop={1}>
            <Input
              type="email"
              placeholder="Your Promo Code"
              outline={0}
              border={"1px solid lightgrey"}
              padding={"15px 10px"}
              // paddingRight="110.41px"
              borderRadius={0}
            />

            <Button
              zIndex={9999}
              variant={"solid"}
              right="0px"
              top="0px"
              position="absolute"
              padding={"15px 10px"}
              colorScheme="green"
              borderRadius={0}
              fontWeight={"400"}
              border={"1px solid lightgrey"}
            >
              Submit
            </Button>
          </Flex>
        </Box>
      </Flex>
      <Flex
        marginLeft={{ base: 0, lg: 5 }}
        justifyContent={{ base: "center", lg: "flex-start" }}
      >
        <Button
          colorScheme="red"
          textTransform={"uppercase"}
          borderRadius={0}
          padding={"15px 20px"}
        >
          Proceed To Checkout
        </Button>
      </Flex>
    </Box>
  );
};

export default Cart;
