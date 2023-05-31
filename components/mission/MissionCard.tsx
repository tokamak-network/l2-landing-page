import { Flex, Text } from "@chakra-ui/react";
import Image from "next/image";

function MissionCard() {
  return (
    <Flex
      border={"1px solid red"}
      w="299px"
      h="450px"
      mr="20px"
      flexDir={"column"}
      p="20px"
    >
      <Flex alignItems={"center"}>
        <Flex h="80px" w="80px" border={"1px solid purple"} mr="10px"></Flex>
        <Text fontSize={"25px"}>Rollup Security</Text>
      </Flex>
      <Text mt='20px'>
        Darius is built with the security and scalability you need to power your
        dapps. It leverages the underlying security of Ethereum and lets you
        confidently onramp into Base from Coinbase, Ethereum L1, and other
        interoperable chains.
      </Text>
    </Flex>
  );
}

export default MissionCard;
