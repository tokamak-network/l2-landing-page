"use client";

import { Flex, Link, Text, useTheme } from "@chakra-ui/react";
import RoadmapCard from "../roadmap/RoadmapCard";
import Comb from "../roadmap/Comb";
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
      
      <Comb/>
    </Flex>
  );
}

export default Roadmap;
