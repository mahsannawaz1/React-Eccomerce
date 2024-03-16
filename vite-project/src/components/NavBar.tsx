import {
  Flex,
  Image,
  ListItem,
  UnorderedList,
  Text,
  Box,
  Badge,
  Button,
  Show,
} from "@chakra-ui/react";
import logo from "../assets/images/logo.jpg";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <Flex
      justifyContent={{
        base: "space-between",
        lg: "space-around",
      }}
      alignItems="center"
      padding={3}
    >
      <Flex alignItems="center">
        <Image
          src={logo}
          boxSize={{
            base: "40px",
            lg: "80px",
          }}
          objectFit="cover"
        />
        <Text
          textTransform="uppercase"
          fontWeight={"500"}
          fontSize={{
            base: 15,
            lg: 30,
          }}
        >
          Shopper
        </Text>
      </Flex>
      <Show above="md">
        <UnorderedList
          display="flex"
          listStyleType="none"
          gap={7}
          fontSize={18}
          paddingTop={2}
        >
          <ListItem>
            <Link to="">Shop</Link>
            <Flex justifyContent={"center"} marginTop={"3px"}>
              <Box
                width={"80%"}
                height="3px"
                borderRadius={"10px"}
                background="#eb4d4d"
              ></Box>
            </Flex>
          </ListItem>
          <ListItem>
            <Link to="">Clothing</Link>
            <Flex justifyContent={"center"} marginTop={"3px"}>
              <Box
                width={"80%"}
                height="3px"
                borderRadius={"10px"}
                background="#eb4d4d"
              ></Box>
            </Flex>
          </ListItem>
          <ListItem>
            <Link to="">Electronics</Link>
            <Flex justifyContent={"center"} marginTop={"3px"}>
              <Box
                width={"80%"}
                height="3px"
                borderRadius={"10px"}
                background="#eb4d4d"
              ></Box>
            </Flex>
          </ListItem>
          <ListItem>
            <Link to="">Jewelery</Link>
            <Flex justifyContent={"center"} marginTop={"3px"}>
              <Box
                width={"80%"}
                height="3px"
                borderRadius={"10px"}
                background="#eb4d4d"
              ></Box>
            </Flex>
          </ListItem>
        </UnorderedList>
      </Show>
      <Flex gap={5}>
        <Button
          borderRadius={"35px"}
          background="white"
          paddingX={7}
          border={"1px solid lightgray"}
        >
          Login
        </Button>
        <Box position={"relative"}>
          <AiOutlineShoppingCart size={35} />
          <Badge
            position={"absolute"}
            top={"0px"}
            right="0px"
            colorScheme="green"
          >
            1
          </Badge>
        </Box>
      </Flex>
    </Flex>
  );
};

export default NavBar;
