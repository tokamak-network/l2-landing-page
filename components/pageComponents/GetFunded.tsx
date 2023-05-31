"use client";

import { Flex, Link, Text, useTheme } from "@chakra-ui/react";
import FundCard from "../getFunded/FundCard";
function GetFunded () {

    return (
        <Flex
        h="945px"
        justifyContent={"center"}
        alignItems={"center"}
        flexDir={"column"}
        mx="150px"
      >
        <Text fontSize={"40px"} fontWeight={"bold"}>
          Get Funded
        </Text>
        <Text>GranTON & TONStarter programs allocate substantial resources to projects that promote ecosystem expansion and critical services. </Text>
  
        <Flex mt="30px">
        <FundCard/>
        <FundCard/>
        </Flex>
      </Flex>
    )
}

export default GetFunded