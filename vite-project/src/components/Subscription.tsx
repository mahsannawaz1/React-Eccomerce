import { Box, Flex, Text, Button, Input } from "@chakra-ui/react";

const Subscription = () => {
  return (
    <Box marginX={{ base: 0, lg: "30px" }}>
      <Flex
        marginY={{
          base: 20,
          lg: 40,
        }}
        paddingTop={{ base: "20px", lg: "50px" }}
        justifyContent="center"
        alignItems="center"
        background="linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(223,185,186,1) 100%)"
      >
        <Box padding={5}>
          <Box lineHeight={1}>
            <Text
              fontSize={{
                base: "25px",
                lg: "40px",
                xl: "60px",
              }}
              fontWeight="600"
              textAlign="center"
            >
              Get Exclusive Offers on your Email
            </Text>
          </Box>
          <Text
            marginY={{
              base: 3,
              lg: 4,
            }}
            textAlign="center"
            fontSize={{
              base: "10px",
              lg: "15px",
              xl: "20px",
            }}
          >
            Subscribe to our newsletter and stay updated
          </Text>
          <Flex justifyContent="center" position={"relative"}>
            <Input
              type="email"
              placeholder="Your Email ID"
              outline={0}
              border={"1px solid lightgrey"}
              padding={"23px 25px"}
              borderRadius={"25px"}
            />

            <Button
              variant={"solid"}
              right="0px"
              top="0px"
              position="absolute"
              padding={"23px 25px"}
              colorScheme="pink"
              borderRadius="25px"
              fontWeight={"400"}
              border={"1px solid lightgrey"}
            >
              Subscribe
            </Button>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};

export default Subscription;
