"use client";

import { Flex, Link, Text, useTheme } from "@chakra-ui/react";
import RoadmapCard from "../roadmap/RoadmapCard";
import Image from "next/image";
import Comb from "../roadmap/Comb";
import useMediaView from "@/app/hooks/useMediaView";
import roadmapLine from "../../app/assets/roadmapLine.png";
import TitanLogo from "../../app/assets/Titan_symbol.svg";
function Roadmap() {
  const theme = useTheme();
  const { mobileView, tabletView, pcView } = useMediaView();

  return (
    <Flex justifyContent={"center"} alignItems={"center"} flexDir={"column"} >
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
        mb={"90px"}
        textAlign={"center"}
      >
        The DARIUS roadmap outlines protocol improvements that will be adjusted
        based on market conditions and other factors.{" "}
      </Text>

      <Flex
        flexDir={"column"}
        pl="168px"
        backgroundImage={roadmapLine.src}
        backgroundRepeat={'no-repeat'}
        backgroundPosition={'center'}
        backgroundSize='985px 5px'
        position={"relative"}
          top="-75px"
        // transform={"rotate(90deg)"}
      >
        <Flex
          h="233px"
          alignItems={"flex-end"}
          mb="25px"
          position={"relative"}
          top="75px"
        >
          <RoadmapCard top={""} left="" completed={true} title='L2 Mainnet Open' subtitle="" />
          <RoadmapCard top={"-83px"} left={"-40px"} completed={true} title='Unified Bridge & Swap Open' subtitle=""/>
          <RoadmapCard top={""} left={"-80px"} completed={false} title='Native Fast Withdrawal Open' subtitle=""/>
          <RoadmapCard top={"-83px"} left={"-120px"} completed={false} title='TONStarter (Launchpad) L2 Service Open' subtitle=""/>
          <RoadmapCard top={""} left={"-160px"} completed={false} title='On-Demand Service Open' subtitle=""/>
        </Flex>
        <Flex justifyContent={"space-between"}>
          <Flex
            top={"0px"}
            position={"relative"}
            left={"235px"}
            w="222px" /* Adjust the width as per your requirement */
            h="152px"
          >
            <Image height={100} width={115} src={TitanLogo} alt="TitanLogo" />
          </Flex>
          {/* <RoadmapCard top={"0px"} left={"180px"} completed={false} /> */}
        </Flex>
        <Flex
          alignItems={"flex-start"}
          h="233px"
          mt="25px"
          position={"relative"}
          top="-75px"
        >
          <RoadmapCard top={""} left="" completed={true}  title='DARIUS L2 (Goerli) Testnet Open' subtitle="TESTNET"/>
          <RoadmapCard top={"83px"} left={"-40px"} completed={false} title='Optimism Bedrock Integration' subtitle="" />
          <RoadmapCard top={""} left={"-80px"} completed={false} title='Holešky (Holešovice) Testnet Open' subtitle=""/>
          <RoadmapCard top={"83px"} left={"-120px"} completed={false} title='Improved Fee Structure Integration' subtitle=""/>
          <RoadmapCard top={""} left={"-160px"} completed={false} title='Optimism OP Stack Maintenance' subtitle="CONTINOUS"/>
        </Flex>
      </Flex>

      {/* <Comb/> */}
    </Flex>
  );
}

export default Roadmap;
