"use client";

import { Flex, Link, Text, useTheme } from "@chakra-ui/react";
import NewsCard from "./NewsCard";
function News() {
  return (
    <Flex
      h="945px"
      justifyContent={"center"}
      alignItems={"center"}
      flexDir={"column"}
      mx="150px"
    >
      <Text fontSize={"40px"} fontWeight={"bold"}>
        News
      </Text>
      <Text>Check our latest News to stay up to date </Text>

      <Flex mt="30px">
        <NewsCard />
        <NewsCard />
        <NewsCard />
      </Flex>
    </Flex>
  );
}

export default News;
