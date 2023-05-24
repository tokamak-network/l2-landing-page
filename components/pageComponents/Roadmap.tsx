"use client";

import { Flex, Link, Text, useTheme } from "@chakra-ui/react";

function Roadmap() {
  return (
    <Flex
      h="945px"
      justifyContent={"center"}
      alignItems={"center"}
      flexDir={"column"}
      mx="150px"
    >
      <Text fontSize={"40px"} fontWeight={"bold"}>
        Roadmap
      </Text>
      <Text>
        The DARIUS roadmap outlines protocol improvements that will be adjusted
        based on market conditions and other factors.{" "}
      </Text>
    </Flex>
  );
}

export default Roadmap;
