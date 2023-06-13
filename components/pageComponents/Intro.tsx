"use client";

import { Flex, Text, useTheme, Button, Link } from "@chakra-ui/react";
import blue1 from "../../app/assets/introAnimation/Blue1.svg";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import useMediaView from "@/app/hooks/useMediaView";
import Image from "next/image";
function Intro() {
  const theme = useTheme();
  const { mobileView, tabletView, pcView } = useMediaView();

  const imgAnimation = useAnimation();

  const handleMouseMove = (e: any) => {
    const { clientX, clientY } = e;

    const moveX = clientX - window.innerWidth / 2;
    const moveY = clientY - window.innerHeight / 2;
    const offsetFactor = 50;
    imgAnimation.start({
      x: -(moveX / offsetFactor),
      y: -(moveY / offsetFactor),
    });
  };

  return (
    <Flex
      h={'672px'}
      // alignItems={"center"}
      flexDir={"column"}
      bg="#fafbfc"
     
      // position={'absolute'}
    >
     

      <Flex w="100%" flexDir={"column"} alignItems={"center"}>
        <Text
          fontSize={["40px", "40px", "80px", "80px", "80px", "80px"]}
          mt={["119px", "119px", "126px", "126px", "155px", "155px"]}
          fontWeight={"bold"}
          w={["320px", "320px", "740px", "740px", "1068px", "1068px"]}
          color={"#1c1c1c"}
          lineHeight={mobileView ? 1.15 : 1}
          textAlign={"center"}
          fontStyle={"normal"}
          zIndex={1000}
          fontFamily={theme.fonts.openSans}
        >
          Make Ethereum Boundless
        </Text>
        <Text
          w={["320px", "320px", "740px", "740px", "920px", "920px"]}
          letterSpacing={"wide"}
          lineHeight={1.56}
          fontSize={mobileView ? "16px" : "18px"}
          color={"#7a7e87"}
          textAlign={"center"}
          mt="15px"
          zIndex={1000}
          fontWeight={"normal"}
        >
          Introducing Darius, the cutting-edge solution that combines speed,
          affordability, developer-friendliness, and the security of Ethereum.
          It empowers users to engage in real-time, flexible, cost-effective
          transactions, including the upcoming native fast-withdrawal
          transactions.
        </Text>

        <Flex
          mt="36px"
          flexDir={["column", "column", "row", "row", "row", "row"]}
        >
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
    </Flex>
  );
}

export default Intro;
