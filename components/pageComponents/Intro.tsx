"use client";

import { Flex, Text, useTheme, Button, Link } from "@chakra-ui/react";

import useMediaView from "@/app/hooks/useMediaView";

function Intro() {
  const theme = useTheme();
  const { mobileView, tabletView, pcView } = useMediaView();

  return (
    <Flex
      h={pcView ? "672px" : tabletView ? "722px" : "690px"}
      alignItems={"center"}
      flexDir={"column"}
      bg="#fafbfc"
    >
      <Text
        fontSize={mobileView ? "40px" : "80px"}
        mt={mobileView? '119px':tabletView? '126px':"155px"}
        fontWeight={"bold"}
        w={pcView ? "1068px" : tabletView ? "740px" : "320px"}
        color={"#1c1c1c"}
        lineHeight={mobileView? 1.15:1}
        textAlign={"center"}
        letterSpacing={"wider"}
        fontStyle={"normal"}
        fontFamily={theme.fonts.openSans}
      >
        Make Ethereum Boundless
      </Text>
      <Text
        w={pcView ? "920px" : tabletView ? "740px" : "320px"}
        letterSpacing={"wide"}
        lineHeight={1.56}
        fontSize={mobileView ? "16px" : "18px"}
        color={"#7a7e87"}
        textAlign={"center"}
        mt='15px'
      >
        Introducing Darius, the cutting-edge solution that combines speed,
        affordability, developer-friendliness, and the security of Ethereum. It
        empowers users to engage in real-time, flexible, cost-effective
        transactions, including the upcoming native fast-withdrawal
        transactions.
      </Text>
      <Flex mt="36px" flexDir={mobileView ? "column" : "row"}>
        <Link
          mr="15px"
          h="45px"
          w="160px"
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          fontWeight={600}
          href=""
          textDecor={"none"}
          backgroundImage="linear-gradient(to bottom, #1f8efa, #2a72e5)"
          boxShadow={"0 3px 8px 0 rgba(49, 127, 203, 0.25)"}
          borderRadius={"24px"}
          color={"#ffffff"}
          // letterSpacing={"wide"}
          fontSize={"14px"}
          fontFamily={theme.fonts.openSans}
          _hover={{ textDecor: "none" }}
        >
          Bridge to DARIUS
        </Link>
        <Link
          mt={mobileView ? "20px" : ""}
          mr="15px"
          h="45px"
          w="160px"
          href=""
          display={"flex"}
          textDecor={"none"}
          justifyContent={"center"}
          alignItems={"center"}
          fontWeight={600}
          borderRadius={"24px"}
          bg="#ffffff"
          color={"#1c1c1c"}
          border={"1px solid #dfe4ee"}
          fontSize={"14px"}
          fontFamily={theme.fonts.openSans}
          _hover={{ textDecor: "none" }}
        >
          Block Explorer
        </Link>
      </Flex>
    </Flex>
  );
}

export default Intro;
