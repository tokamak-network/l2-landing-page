import { Flex, Text, Button, Box, useTheme } from "@chakra-ui/react";
import Image from "next/image";
import Check from "../../app/assets/icon-check.svg";
import React from "react";

type RoadmapProps = {
  top: string;
  left: string;
  completed: boolean;
  title: string;
  subtitle: string;
  test: boolean;
};

function RoadmapCard(props: RoadmapProps) {
  const { top, left, completed, title, subtitle, test } = props;
  const theme = useTheme();
  const renderTitle = () => {
    return (
      <span>
        Tokamak<sup>OP</sup>
        <br />
        L2 On-Demand Open
      </span>
    );
  };
  return (
    <Box
      top={top}
      left={left}
      w="222px"
      h="152px"
      bg={completed ? "none" : "#dfe4ee"}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      position="relative"
      overflow="hidden"
      clipPath="polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)"
    >
      <Box
        top={"1px"}
        left={"1px"}
        w="220px"
        h="150px"
        backgroundImage={
          completed ? "linear-gradient(to bottom, #1f8efa, #2a72e5)" : ""
        }
        bg={completed ? "" : "white"}
        display={"flex"}
        justifyContent={"space-evenly"}
        alignItems={"center"}
        position="absolute"
        overflow="hidden"
        zIndex={1}
        flexDir={"column"}
        clipPath="polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)"
      >
        <Flex>
          <Image src={Check} alt="" />
        </Flex>
        <Text
          fontFamily={theme.fonts.openSans}
          fontSize={"16px"}
          fontWeight={600}
          color={completed ? "#ffffff" : "#464d59"}
          zIndex={10000}
          // position={"absolute"}
          textAlign={"center"}
          px={title === "L2 Mainnet Open" ? "65px" : "35px"}
        >
          {title === "TokamakOP L2 On-Demand Open" ? renderTitle() : title}
        </Text>
        <Text
          mt="25px"
          fontSize={"12px"}
          fontWeight={600}
          color={completed ? "#ffff07" : test ? "#7a7e87" : "#46bb75"}
        >
          {subtitle}
        </Text>
      </Box>
    </Box>
  );
}

export default RoadmapCard;
