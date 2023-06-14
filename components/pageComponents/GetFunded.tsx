"use client";

import { Flex, Link, Text, useTheme } from "@chakra-ui/react";
import Fund from "../getFunded/Fund";
import Darius from "../getFunded/Darius";
function GetFunded() {
  return (
    <Flex
      zIndex={100}
      justifyContent={"center"}
      alignItems={"center"}
      flexDir={"column"}
      mt={["60px", "60px", "145px", "145px", "150px", "150px"]}
      mb={["90px", "90px", "180px", "180px", "180px", "180px"]}
    >
      <Fund />
      <Darius />
    </Flex>
  );
}

export default GetFunded;
