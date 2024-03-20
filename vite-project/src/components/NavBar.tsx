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
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import logo from "../assets/images/logo.jpg";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import { ChevronDownIcon } from "@chakra-ui/icons";
const NavBar = () => {
  return (
    <Flex
      borderBottom={"2px solid #F4F4F4"}
      justifyContent={{
        base: "space-between",
        lg: "space-around",
      }}
      alignItems="center"
      padding={{
        base: "8px",
        lg: "0px",
      }}
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
          fontWeight={"700"}
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
          alignItems={"center"}
          listStyleType="none"
          gap={{
            base: "5",
            lg: "12",
          }}
          fontSize={18}
        >
          <ListItem fontWeight={"500"}>
            <NavLink to="/">Shop</NavLink>
          </ListItem>
          <ListItem paddingTop={"2.5px"}>
            <Menu isLazy>
              <MenuButton
                fontWeight={"500"}
                as={Button}
                rightIcon={<ChevronDownIcon />}
                variant="outline"
                border={0}
                fontSize={18}
              >
                Clothing
              </MenuButton>
              <MenuList>
                <MenuItem>
                  <NavLink to="/men">Men</NavLink>
                </MenuItem>
                <MenuItem>
                  <NavLink to="/women">Women</NavLink>
                </MenuItem>
              </MenuList>
            </Menu>
          </ListItem>

          <ListItem fontWeight={"500"}>
            <NavLink to="/">Electornics</NavLink>
          </ListItem>
          <ListItem fontWeight={"500"}>
            <NavLink to="/">Jewelery</NavLink>
          </ListItem>
        </UnorderedList>
      </Show>
      <Flex gap={8}>
        <Show above="md">
          <Button
            borderRadius={"35px"}
            background="white"
            paddingX={7}
            border={"1px solid lightgray"}
          >
            Login
          </Button>
        </Show>
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
