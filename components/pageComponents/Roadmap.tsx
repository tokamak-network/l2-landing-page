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
      title: "Titan Goerli Open",
      subtitle: "TESTNET",
      tabLeft: "",
      desktopLeft: "",
      tabTop: "",
      desktopTop: "",
      completed: true,
      test: false,
    },
    {
      title: "Optimism Bedrock Integration",
      subtitle: "",
      tabLeft: "-120px",
      desktopLeft: "-40px",
      tabTop: "10px",
      desktopTop: "83px",
      completed: false,
      test: false,
    },
    {
      title: "Titan Holešky Open",
      subtitle: "TESTNET",
      tabLeft: "",
      desktopLeft: "-80px",
      tabTop: "20px",
      desktopTop: "",
      completed: false,
      test: true,
    },
    {
      title: "Improved Fee Structure Integration",
      subtitle: "",
      tabLeft: "-120px",
      desktopLeft: "-120px",
      tabTop: "30px",
      desktopTop: "83px",
      completed: false,
      test: false,
    },
    {
      title: "Optimism OP Stack Maintenance",
      subtitle: "CONTINUOUS",
      tabtLeft: "",
      desktopLeft: "-160px",
      tabTop: "40px",
      desktopTop: "",
      completed: false,
      test: false,
    },
    {
      title: "Titan L2 Mainnet Open",
      subtitle: "MAINNET",
      tabLeft: "",
      desktopLeft: "",
      tabTop: "",
      desktopTop: "",
      completed: true,
      test: false,
    },
    {
      title: "Tokamak Bridge Open",
      subtitle: "",
      tabLeft: "120px",
      desktopLeft: "-40px",
      tabTop: "10px",
      desktopTop: "-83px",
      completed: true,
      test: false,
    },
    {
      title: "Tokamak Fast Withdrawal Open",
      subtitle: "",
      tabLeft: "",
      desktopLeft: "-80px",
      tabTop: "20px",
      desktopTop: "",
      completed: false,
      test: false,
    },
    {
      title: "TONStarter L2 Launchpad Open",
      subtitle: "",
      tabLeft: "120px",
      desktopLeft: "-120px",
      tabTop: "30px",
      desktopTop: "-83px",
      completed: false,
      test: false,
    },
    {
      title: "TokamakOP L2 On-Demand Open",
      subtitle: "",
      tabLeft: "",
      desktopLeft: "-160px",
      tabTop: "40px",
      desktopTop: "",
      completed: false,
      test: false,
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
                test={item.test}
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
                test={item.test}
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
                test={item.test}
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
                test={item.test}
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
        title: "Titan Goerli Open",
        subtitle: "TESTNET",
        completed: true,
        top: "42px",
        test: "true",
      },
      {
        title: "Titan L2 Mainnet Open",
        subtitle: "MAINNET",
        completed: true,
        top: "14px",
        test: "false",
      },
      {
        title: "Tokamak Bridge Open",
        subtitle: "",
        completed: true,
        top: "24px",
        test: "false",
      },
      {
        title: "Optimism Bedrock Integration",
        subtitle: "",
        completed: false,
        top: "19px",
        test: "false",
      },
      {
        title: "Tokamak Fast Withdrawal Open",
        subtitle: "",
        completed: false,
        top: "21px",
        test: "false",
      },
      {
        title: "Titan Holešky Open",
        subtitle: "TESTNET",
        completed: false,
        top: "20px",
        test: "true",
      },
      {
        title: "TONStarter L2 Launchpad Open",
        subtitle: "",
        completed: false,
        top: "34px",
        test: "false",
      },
      {
        title: "Improved Fee Structure Integration",
        subtitle: "",
        completed: false,
        top: "21px",
        test: "false",
      },
      {
        title: "TokamakOP L2 On-Demand Open",
        subtitle: "",
        completed: false,
        top: "21px",
        test: "false",
      },
      {
        title: "Optimism OP Stack Maintenance",
        subtitle: "CONTINUOUS",
        completed: false,
        top: "40px",
        test: "false",
      },
    ];

    return (
      <Flex flexDir={"row"}>
        <Flex
          h="172px"
          w="1px"
          position={"relative"}
          left={"88px"}
          top={"-8px"}
          backgroundImage={"linear-gradient(to bottom, #fff, #3e7fe7)"}
          // border={"1px solid red"}
        ></Flex>
        <Flex flexDir={"column"} position={"relative"}>
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
                alignItems={"flex-end"}
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
                  alignItems={"flex-end"}
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
                  <Flex
                    position={"relative"}
                    flexDir={"column"}
                    alignItems={"center"}
                    top={item.top}
                  >
                    {item.completed && (
                      <Flex mb="3px">
                        <Image src={check} alt="check" />
                      </Flex>
                    )}
                    {item.title === "TokamakOP L2 On-Demand Open" ? (
                      <Text
                        color={item.completed ? "#2a72e5" : "#7a7e87"}
                        w="120px"
                        fontSize={"14px"}
                      >
                        Tokamak{" "}
                        <span
                          style={{
                            verticalAlign: "super",
                            fontSize: "13x",
                            marginLeft: "-2px",
                          }}
                        >
                          Op
                        </span>{" "}
                        L2 On-Demand Open
                      </Text>
                    ) : (
                      <Text
                        w="140px"
                        fontSize={"14px"}
                        textAlign={"center"}
                        color={item.completed ? "#1c1c1c" : "#7a7e87"}
                      >
                        {item.title}
                      </Text>
                    )}

                    <Text
                      mt="9px"
                      color={
                        item.completed
                          ? "#2a72e5"
                          : item.test
                          ? "#7a7e87"
                          : "#46bb75"
                      }
                      fontWeight={"bold"}
                      fontSize={"12px"}
                    >
                      {item.subtitle}
                    </Text>
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
    <Flex
      justifyContent={"center"}
      mt={[0, 0, "90px", "90px", "120px", "120px"]}
      // border={"1px solid red"}
      alignItems={"center"}
      flexDir={"column"}
      zIndex={10}
    >
      <Text
        fontSize={["32px", "32px", "36px", "36px", "36px", "36px"]}
        fontFamily={theme.fonts.openSans}
        fontWeight={"bold"}
        // w="104px"
        // letterSpacing={"wider"}
        mb="20px"
        color={"#1c1c1c"}
      >
        TITAN ROADMAP
      </Text>
      <Text
        fontSize={"16px"}
        fontFamily={theme.fonts.openSans}
        color={"#7a7e87"}
        w={["100%", "100%", "760px", "760px", "760px", "760px"]}
        mb={"50px"}
        textAlign={"center"}
        px={["20px", "20px", "0px", "0px", "0px", "0px"]}
      >
        Titan roadmap outlines protocol improvements that will be adjusted based
        on market conditions and other factors.{" "}
      </Text>
      {pcView ? <DesktopHive /> : tabletView ? <TabletHive /> : <MobileHive />}

      {/* <Comb/> */}
    </Flex>
  );
}

export default Roadmap;
