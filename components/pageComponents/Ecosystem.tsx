"use client";

import { Flex, Link, Text, useTheme } from "@chakra-ui/react";
import EcosystemCard from "./EcosystemCard";
function Eccosystem() {
  return (
    <Flex
      h="945px"
      justifyContent={"center"}
      alignItems={"center"}
      flexDir={"column"}
      mx="150px"
    >
      <Text fontSize={"40px"} fontWeight={"bold"}>
        Ecosystem
      </Text>
      <Text>Check out different dapps on DARIUS</Text>
      <Flex wrap={"wrap"} mt={'30px'}>
        <EcosystemCard />
        <EcosystemCard />
        <EcosystemCard />
        <EcosystemCard />
        <EcosystemCard />
        <EcosystemCard />
      </Flex>
    </Flex>
  );
}

export default Eccosystem;
