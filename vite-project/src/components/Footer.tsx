import {
  Flex,
  Image,
  Link,
  ListItem,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import logo from "../assets/images/logo.jpg";

import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <Flex justifyContent={"center"}>
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
      </Flex>
      <UnorderedList
        marginX={0}
        marginY={{
          base: 2,
          lg: 6,
        }}
        fontWeight={"500"}
        display="flex"
        justifyContent={"center"}
        listStyleType="none"
        gap={{
          base: 2,
          lg: 10,
        }}
        fontSize={{
          base: 12,
          lg: 18,
        }}
      >
        <ListItem>
          <Link>Company</Link>
        </ListItem>
        <ListItem>
          <Link>Products</Link>
        </ListItem>
        <ListItem>
          <Link>Offices</Link>
        </ListItem>
        <ListItem>
          <Link>About</Link>
        </ListItem>
        <ListItem>
          <Link>Contact</Link>
        </ListItem>
      </UnorderedList>
      <UnorderedList
        paddingLeft={{
          base: 3,
          lg: 12,
        }}
        marginY={{
          base: 2,
          lg: 6,
        }}
        fontWeight={"500"}
        display="flex"
        justifyContent={"center"}
        listStyleType="none"
        gap={{
          base: 2,
          lg: 5,
        }}
      >
        <ListItem>
          <Link>
            <FaInstagram size={25} />
          </Link>
        </ListItem>
        <ListItem>
          <Link>
            <FaFacebookF size={25} />
          </Link>
        </ListItem>
        <ListItem>
          <Link>
            <FaWhatsapp size={25} />
          </Link>
        </ListItem>
      </UnorderedList>
      <Flex
        justifyContent={"center"}
        marginX={{ base: 0, lg: "30px" }}
        height={"2px"}
        borderRadius={2}
        bgColor={"lightgrey"}
      ></Flex>
      <Text
        fontSize={{
          base: 12,
          lg: 18,
        }}
        paddingLeft={{ base: 4, lg: 8 }}
        marginY={{
          base: 2,
          lg: 6,
        }}
        colorScheme="gray"
        textAlign={"center"}
      >
        CopyRight &reg; 2024 - All Rights Reserved
      </Text>
    </>
  );
};

export default Footer;
