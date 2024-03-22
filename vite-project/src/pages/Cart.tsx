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
              <Th fontWeight="bold">Products</Th>
              <Th fontWeight="bold">Title</Th>
              <Th fontWeight="bold" isNumeric>
                Price
              </Th>
              <Th fontWeight="bold" isNumeric>
                Quantity
              </Th>
              <Th fontWeight="bold" isNumeric>
                Total
              </Th>
              <Th fontWeight="bold" isNumeric>
                <Text textAlign={"center"}>Remove</Text>
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            {cart.cartItems.map(({ item, quantity }) => (
              <Tr key={item.id}>
                <Td>
                  <Link as={ReactRouterLink} to={`/product/${item.id}`}>
                    <Image src={item.image} boxSize={10} />
                  </Link>
                </Td>
                <Td>
                  <Link as={ReactRouterLink} to={`/product/${item.id}`}>
                    {item.title}
                  </Link>
                </Td>
                <Td isNumeric>${item.price.toFixed(2)}</Td>
                <Td textAlign={"end"}>
                  <Badge padding="5px 15px">{quantity}</Badge>
                </Td>
                <Td textAlign={"end"}>${(4 * item.price).toFixed(2)}</Td>
                <Td isNumeric>
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
      <Flex marginY={10}>
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
                  <Td paddingLeft={200}>
                    $
                    {cart.cartItems.reduce(
                      (acc, item) => acc + item.item.price,
                      0
                    )}
                  </Td>
                </Tr>
                <Tr>
                  <Td>Shipping Fee </Td>
                  <Td paddingLeft={200}>Free </Td>
                </Tr>
                <Tr fontWeight={"bold"}>
                  <Td>Total</Td>
                  <Td paddingLeft={200}>
                    {" "}
                    $
                    {cart.cartItems.reduce(
                      (acc, item) => acc + item.item.price,
                      0
                    )}
                  </Td>
                </Tr>
              </Tbody>
            </Table>
          </TableContainer>
          <Flex marginY={6} marginLeft={5}>
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
        <Box width="400px" marginLeft={"10%"}>
          <Text color={"gray"}>If you have a Promo code,Enter it here</Text>
          <Flex justifyContent="center" position={"relative"} marginTop={1}>
            <Input
              type="email"
              placeholder="Your Promo Code"
              outline={0}
              border={"1px solid lightgrey"}
              padding={"15px 10px"}
              paddingRight="110.41px"
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
    </Box>
  );
};

export default Cart;
