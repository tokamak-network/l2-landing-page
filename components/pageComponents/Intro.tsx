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
      h={"672px"}
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
          w={["100%", "100%", "100%", "100%", "1068px", "1068px"]}
          px={["20px", "20px", "30px", "30px", "0px", "0px"]}
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
          w={["100%", "100%", "100%", "100%", "1068px", "1068px"]}
          letterSpacing={"wide"}
          px={["20px", "20px", "30px", "30px", "", ""]}
          lineHeight={1.56}
          fontSize={mobileView ? "16px" : "18px"}
          color={"#7a7e87"}
          textAlign={"center"}
          mt="15px"
          zIndex={1000}
          fontWeight={"normal"}
        >
          Introducing Titan, cutting-edge L2 that combines Ethereum’s speed,
          affordability, and security. Empowers users to engage in real-time,
          flexible, and cost-effective transactions, including native
          fast-withdrawal.
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
            href="https://bridge.tokamak.network/#/"
            textDecor={"none"}
            zIndex={1000}
            backgroundImage="linear-gradient(to bottom, #1f8efa, #2a72e5)"
            boxShadow={"0 3px 8px 0 rgba(49, 127, 203, 0.25)"}
            borderRadius={"24px"}
            color={"#ffffff"}
            target="blank"
            // letterSpacing={"wide"}
            fontSize={"14px"}
            fontFamily={theme.fonts.openSans}
            _hover={{ textDecor: "none" }}
          >
            Bridge to Titan
          </Link>
          <Link
            mt={mobileView ? "20px" : ""}
            mr="15px"
            h="45px"
            w="160px"
            href="https://explorer.titan.tokamak.network/"
            display={"flex"}
            textDecor={"none"}
            justifyContent={"center"}
            alignItems={"center"}
            fontWeight={600}
            borderRadius={"24px"}
            target="_blank"
            zIndex={1000}
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
