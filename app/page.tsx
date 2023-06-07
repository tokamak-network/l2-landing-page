"use client";
import { Flex, Text } from "@chakra-ui/react";
import Intro from "@/components/pageComponents/Intro";
import Mission from "@/components/pageComponents/Mission";
import Roadmap from "@/components/pageComponents/Roadmap";
import Eccosystem from "@/components/pageComponents/Ecosystem";
import News from "@/components/pageComponents/News";
import GetFunded from "@/components/pageComponents/GetFunded";
export default function Home() {
  return (
    <Flex flexDir={"column"}>
      <Intro />
      <Mission />
      <Roadmap />
      <Eccosystem />
    
      <News />
      <GetFunded />
    </Flex>
  );
}
