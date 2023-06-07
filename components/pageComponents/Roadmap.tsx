"use client";

import { Flex, Link, Text, useTheme } from "@chakra-ui/react";
import RoadmapCard from "../roadmap/RoadmapCard";
import Comb from "../roadmap/Comb";
import useMediaView from "@/app/hooks/useMediaView";
function Roadmap() {
  const theme = useTheme();
  const { mobileView, tabletView, pcView } = useMediaView();

  return (
    <Flex justifyContent={"center"} alignItems={"center"} flexDir={"column"}>
      <Text
        fontSize={["32px", "32px", "36px", "36px", "36px", "36px"]}
        fontFamily={theme.fonts.openSans}
        fontWeight={"bold"}
        // w="104px"
        // letterSpacing={"wider"}
        mb="20px"
        color={"#1c1c1c"}
      >
        DARIUS ROADMAP
      </Text>
      <Text
        fontSize={"16px"}
        fontFamily={theme.fonts.openSans}
        color={"#7a7e87"}
        w={["320px", "320px", "760px", "760px", "760px", "760px"]}
        mb={"60px"}
        textAlign={"center"}
      >
        The DARIUS roadmap outlines protocol improvements that will be adjusted
        based on market conditions and other factors.{" "}
      </Text>

      <Flex flexDir={"column"}  border={'1px solid red'} pl='168px'>
        <Flex h="233px" alignItems={"flex-end"} mb='25px' position={'relative'} top='75px'>
          <RoadmapCard top={""} left="" />
          <RoadmapCard top={"-83px"} left={"-40px"} />
          <RoadmapCard top={""} left={"-80px"} />
          <RoadmapCard top={"-83px"} left={"-120px"} />
          <RoadmapCard top={""} left={"-160px"} />
        </Flex>
        <Flex justifyContent={'space-between'}>
        <RoadmapCard top={"0px"} left={"180px"} />
        
        </Flex>
       <Flex alignItems={"flex-start"} h="233px" mt='25px' position={'relative'} top='-75px'>
          <RoadmapCard top={""} left="" />
          <RoadmapCard top={"83px"} left={"-40px"} />
          <RoadmapCard top={""} left={"-80px"} />
          <RoadmapCard top={"83px"} left={"-120px"} />
          <RoadmapCard top={""} left={"-160px"} />
        </Flex>
      </Flex>

      {/* <Comb/> */}
    </Flex>
  );
}

export default Roadmap;
