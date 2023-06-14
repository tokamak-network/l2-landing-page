"use client";

import { Flex, Link, Text, useTheme } from "@chakra-ui/react";
import RoadmapCard from "../roadmap/RoadmapCard";
import Image from "next/image";
import useMediaView from "@/app/hooks/useMediaView";
import roadmapLine from "../../app/assets/roadmapLine.png";
import TitanLogo from "../../app/assets/Titan_symbol.svg";
import roadmapLineVertical from "../../app/assets/roadmap-line_vertical.png";
import MobileRoadmapHex from "../roadmap/MobileRoadmapHex";
import check from "./../../app/assets/icon-check_mobile.svg";
function Roadmap() {
  const theme = useTheme();
  const { mobileView, tabletView, pcView } = useMediaView();

  const roadmapItems = [
    {
      title: "DARIUS L2 (Goerli) Testnet Open",
      subtitle: "TESTNET",
      tabLeft: "",
      desktopLeft: "",
      tabTop: "",
      desktopTop: "",
      completed: true,
    },
    {
      title: "Optimism Bedrock Integration",
      subtitle: "",
      tabLeft: "-120px",
      desktopLeft: "-40px",
      tabTop: "10px",
      desktopTop: "83px",
      completed: false,
    },
    {
      title: "Holešky (Holešovice) Testnet Open",
      subtitle: "",
      tabLeft: "",
      desktopLeft: "-80px",
      tabTop: "20px",
      desktopTop: "",
      completed: false,
    },
    {
      title: "Improved Fee Structure Integration",
      subtitle: "",
      tabLeft: "-120px",
      desktopLeft: "-120px",
      tabTop: "30px",
      desktopTop: "83px",
      completed: false,
    },
    {
      title: "Optimism OP Stack Maintenance",
      subtitle: "CONTINUOUS",
      tabtLeft: "",
      desktopLeft: "-160px",
      tabTop: "40px",
      desktopTop: "",
      completed: false,
    },
    {
      title: "L2 Mainnet Open",
      subtitle: "",
      tabLeft: "",
      desktopLeft: "",
      tabTop: "",
      desktopTop: "",
      completed: true,
    },
    {
      title: "Unified Bridge & Swap Open",
      subtitle: "",
      tabLeft: "120px",
      desktopLeft: "-40px",
      tabTop: "10px",
      desktopTop: "-83px",
      completed: true,
    },
    {
      title: "Native Fast Withdrawal Open",
      subtitle: "",
      tabLeft: "",
      desktopLeft: "-80px",
      tabTop: "20px",
      desktopTop: "",
      completed: false,
    },
    {
      title: "TONStarter (Launchpad) L2 Service Open",
      subtitle: "",
      tabLeft: "120px",
      desktopLeft: "-120px",
      tabTop: "30px",
      desktopTop: "-83px",
      completed: false,
    },
    {
      title: "On-Demand Service Open",
      subtitle: "",
      tabLeft: "",
      desktopLeft: "-160px",
      tabTop: "40px",
      desktopTop: "",
      completed: false,
    },
  ];

  const TabletHive = () => {
    return (
      <Flex
        height={"985px"}
        mb="26px"
        backgroundImage={roadmapLineVertical.src}
        backgroundRepeat={"no-repeat"}
        backgroundPosition={"center"}
        backgroundSize="5px 985px"
        position={"relative"}
      >
        <Flex flexDir={"column"} mt="71px" position={"relative"} left={"45px"}>
          {roadmapItems.slice(0, 5).map((item: any, index: number) => {
            return (
              <RoadmapCard
                key={index}
                top={item.tabTop}
                left={item.tabLeft}
                completed={item.completed}
                title={item.title}
                subtitle={item.subtitle}
              />
            );
          })}
        </Flex>
        <Flex alignItems={"flex-start"} mt="255px">
          <Flex position={"relative"}>
            <Image height={100} width={115} src={TitanLogo} alt="TitanLogo" />
          </Flex>
        </Flex>
        <Flex flexDir={"column"} mt="71px" position={"relative"} left={"-45px"}>
          {roadmapItems.slice(5, 10).map((item: any, index: number) => {
            return (
              <RoadmapCard
                key={index}
                top={item.tabTop}
                left={item.tabLeft}
                completed={item.completed}
                title={item.title}
                subtitle={item.subtitle}
              />
            );
          })}
        </Flex>
      </Flex>
    );
  };

  const DesktopHive = () => {
    return (
      <Flex
        flexDir={"column"}
        pl="168px"
        backgroundImage={roadmapLine.src}
        backgroundRepeat={"no-repeat"}
        backgroundPosition={"center"}
        backgroundSize="985px 5px"
        position={"relative"}
        top="-75px"
      >
        <Flex
          h="233px"
          alignItems={"flex-end"}
          mb="25px"
          position={"relative"}
          top="75px"
        >
          {roadmapItems.slice(5, 10).map((item: any, index: number) => {
            return (
              <RoadmapCard
                key={index}
                top={item.desktopTop}
                left={item.desktopLeft}
                completed={item.completed}
                title={item.title}
                subtitle={item.subtitle}
              />
            );
          })}
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
        </Flex>
        <Flex
          alignItems={"flex-start"}
          h="233px"
          mt="25px"
          position={"relative"}
          top="-75px"
        >
          {roadmapItems.slice(0, 5).map((item: any, index: number) => {
            return (
              <RoadmapCard
                key={index}
                top={item.desktopTop}
                left={item.desktopLeft}
                completed={item.completed}
                title={item.title}
                subtitle={item.subtitle}
              />
            );
          })}
        </Flex>
      </Flex>
    );
  };
  const MobileHive = () => {
    const mobileRoadmapItems = [
      {
        title: "DARIUS L2 (Goerli) Testnet Open",
        subtitle: "TESTNET",
        completed: true,
        top: "42px",
      },
      {
        title: "L2 Mainnet Open",
        subtitle: "",
        completed: true,
        top: "14px",
      },
      {
        title: "Unified Bridge & Swap Open",
        subtitle: "",
        completed: true,
        top: "24px",
      },
      {
        title: "Optimism Bedrock Integration",
        subtitle: "",
        completed: false,
        top: "19px",
      },
      {
        title: "Native Fast Withdrawal Open",
        subtitle: "",
        completed: false,
        top: "21px",
      },
      {
        title: "Holešky (Holešovice) Testnet Open",
        subtitle: "",
        completed: false,
        top: "20px",
      },
      {
        title: "TONStarter (Launchpad) L2 Service Open",
        subtitle: "",
        completed: false,
        top: "34px",
      },
      {
        title: "Improved Fee Structure Integration",
        subtitle: "",
        completed: false,
        top: "21px",
      },
      {
        title: "On-Demand Service Open",
        subtitle: "",
        completed: false,
        top: "21px",
      },
      {
        title: "Optimism OP Stack Maintenance",
        subtitle: "CONTINUOUS",
        completed: false,
        top: "40px",
      },
    ];

    return (
      <Flex flexDir={"row"}>
        <Flex
          h="172px"
          w="1px"
          position={"relative"}
          left={"88px"}
          top={'-8px'}
          backgroundImage={"linear-gradient(to bottom, #fff, #3e7fe7)"}
          // border={"1px solid red"}
        ></Flex>
        <Flex flexDir={"column"} position={"relative"} >
          {mobileRoadmapItems.map((item: any, index: number) => {
            return (
              <Flex
                // border={"1px solid red"}
                width={"166px"}
                // overflow={'hidden'}
                h="57px"
                key={index}
                left={index % 2 === 0 ? "-71px" : "81px"}
                position={"relative"}
                alignItems={'flex-end'}
                flexDirection={index % 2 === 0 ? "row-reverse" : "row"}
               
              >
                <Flex
                  position={"relative"}
                  left={index % 2 === 0 ? "-7px" : "6px"}
                  h="57px"
                  w="1px"
                  bg={
                    index === 0 || index === 1 || index === 2
                      ? "transparent"
                      : item.completed
                      ? "#2a72e5"
                      : "#e2e6ef"
                  }
                ></Flex>
                <Flex
                  flexDir={index % 2 === 0 ? "row-reverse" : "row"}
                  alignItems={'flex-end'}
                  left={
                    index > 2
                      ? index % 2 === 0
                        ? "1px"
                        : "-2px"
                      : index % 2 === 0
                      ? "0px"
                      : "-1px"
                  }
                  position={"relative"}
                >
                  <MobileRoadmapHex completed={item.completed} />
                  <Flex position={'relative'} flexDir={"column"} alignItems={"center"} top={item.top}>
                    {item.completed && (
                      <Flex mb='3px'>
                        <Image src={check} alt="check" />
                      </Flex>
                    )}
                    <Text
                      // border={"1px solid red"}
                     
                    
                      w="140px"
                      fontSize={"14px"}
                      textAlign={"center"}
                    >
                      {item.title}
                    </Text>
                    <Text mt='9px' color={item.completed ? "#2a72e5" : "#46bb75"} fontWeight={'bold'} fontSize={'12px'}>{item.subtitle}</Text>
                  </Flex>
                </Flex>
              </Flex>
            );
          })}
          <Flex
            h="45px"
            left="87px"
            position={"relative"}
            w="1px"
            bg={"#e2e6ef"}
          ></Flex>
        </Flex>
      </Flex>
    );
  };
  return (
    <Flex justifyContent={"center"} mt={[0,0,0,0,'110px','110px']} alignItems={"center"} flexDir={"column"}>
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
        mb={"50px"}
        textAlign={"center"}
      >
        The DARIUS roadmap outlines protocol improvements that will be adjusted
        based on market conditions and other factors.{" "}
      </Text>
      {pcView ? <DesktopHive /> : tabletView ? <TabletHive /> : <MobileHive />}

      {/* <Comb/> */}
    </Flex>
  );
}

export default Roadmap;
