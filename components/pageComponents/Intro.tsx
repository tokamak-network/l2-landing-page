"use client";

import { Flex, Text, useTheme, Button } from "@chakra-ui/react";
import Link from "next/link";

function Intro() {
  return (
    <Flex h="945px" justifyContent={"center"} alignItems={"center"} flexDir={'column'} mx='150px'>
      <Text fontSize={'40px'} fontWeight={'bold'}>Make Ethereum Boundless</Text>
      <Text>
        Introducing Darius, the cutting-edge solution that combines speed,
        affordability, developer-friendliness, and the security of Ethereum. It
        empowers users to engage in real-time, flexible, cost-effective
        transactions, including the upcoming native fast-withdrawal
        transactions.
      </Text>
      <Flex mt='50px'>
        <Button mr='20px'>Bridge to DARIUS</Button>
        <Button>Block Explorer</Button>
      </Flex>
    </Flex>
  );
}

export default Intro;
