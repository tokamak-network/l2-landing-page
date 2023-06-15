"use client";
import { Flex, Text } from "@chakra-ui/react";
import Intro from "@/components/pageComponents/Intro";
import Mission from "@/components/pageComponents/Mission";
import Roadmap from "@/components/pageComponents/Roadmap";
import Eccosystem from "@/components/pageComponents/Ecosystem";
import News from "@/components/pageComponents/News";
import GetFunded from "@/components/pageComponents/GetFunded";
import TopRing from "@/components/animations/TopRing";
import MiddleRing from "@/components/animations/MiddleRing";
import BottomRing from "@/components/animations/BottomRing";
import useMediaView from "./hooks/useMediaView";
import TabletRing from "@/components/animations/TabletRing";
export default function Home() {
  const { mobileView, tabletView, pcView } = useMediaView();

  return (
    <Flex flexDir={"column"} maxW={"100vw"} overflowY={"hidden"}>
      {!mobileView && <TopRing />}
      {tabletView && <TabletRing />}
      <Intro />
      <Mission />
      <Roadmap />
      <Eccosystem />

      <News />
      <GetFunded />

      {pcView && <MiddleRing />}
      {pcView && <BottomRing />}
    </Flex>
  );
}
