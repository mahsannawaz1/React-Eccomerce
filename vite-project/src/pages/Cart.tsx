import {
  Text,
  Table,
  TableCaption,
  TableContainer,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  Box,
  Flex,
  Heading,
  Button,
  Input,
} from "@chakra-ui/react";

const Cart = () => {
  return (
    <Box paddingX="10%" marginY={10}>
      <TableContainer>
        <Table variant="simple">
          <TableCaption>Imperial to metric conversion factors</TableCaption>
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
                Remove
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>inches</Td>
              <Td>millimetres (mm)</Td>
              <Td isNumeric>25.4</Td>
              <Td>inches</Td>
              <Td>millimetres (mm)</Td>
              <Td isNumeric>25.4</Td>
            </Tr>
            <Tr>
              <Td>feet</Td>
              <Td>centimetres (cm)</Td>
              <Td isNumeric>30.48</Td>
              <Td>feet</Td>
              <Td>centimetres (cm)</Td>
              <Td isNumeric>30.48</Td>
            </Tr>
            <Tr>
              <Td>yards</Td>
              <Td>metres (m)</Td>
              <Td isNumeric>0.91444</Td>
              <Td>yards</Td>
              <Td>metres (m)</Td>
              <Td isNumeric>0.91444</Td>
            </Tr>
          </Tbody>
          <Tfoot>
            <Tr>
              <Th>To convert</Th>
              <Th>into</Th>
              <Th isNumeric>multiply by</Th>
              <Td>yards</Td>
              <Td>metres (m)</Td>
              <Td isNumeric>0.91444</Td>
            </Tr>
          </Tfoot>
        </Table>
      </TableContainer>
      <Flex marginY={10}>
        <Box>
          <Heading marginBottom={3} fontSize={30} marginLeft={5}>
            Cart Total
          </Heading>
          <TableContainer>
            <Table>
              <Thead>
                {/* <Tr fontWeight="bold">
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
                    Remove
                  </Th>
                </Tr> */}
              </Thead>
              <Tbody>
                <Tr>
                  <Td>Subtotal</Td>
                  <Td paddingLeft={200}>$82</Td>
                </Tr>
                <Tr>
                  <Td>Shipping Fee </Td>
                  <Td paddingLeft={200}>Free </Td>
                </Tr>
                <Tr>
                  <Td fontWeight={"bold"}>Total</Td>
                  <Td paddingLeft={200}>$82</Td>
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
