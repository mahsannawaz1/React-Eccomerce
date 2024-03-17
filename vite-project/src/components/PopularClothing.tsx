import {
  Box,
  Flex,
  Grid,
  GridItem,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import p1 from "../assets/images/clothing_images/1.png";
import p2 from "../assets/images/clothing_images/2.png";
import p3 from "../assets/images/clothing_images/3.png";
import p4 from "../assets/images/clothing_images/4.png";

const PopularClothing = () => {
  return (
    <Box marginY="15px">
      <Box>
        <Heading textAlign="center" textTransform="uppercase">
          Popular in Clothing
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
          <GridItem>
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
          </GridItem>
        </Grid>
      </Flex>
    </Box>
  );
};

export default PopularClothing;
