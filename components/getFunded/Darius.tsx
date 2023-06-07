import { Flex, Link, Text, useTheme } from "@chakra-ui/react";
import useMediaView from "@/app/hooks/useMediaView";
import DariusGraphic from "../../app/assets/darius_graphic.svg";
import Image from "next/image";
import discord from "../../app/assets/navi_icon_discord_mobile.svg";

const Darius = () => {
  const theme = useTheme();

  return (
    <Flex
      w={["320px", "320px", "740px", "740px", "1200px", "1200px"]}
      flexDir={["column", "column", "column", "column", "row", "row"]}
      fontFamily={theme.fonts.openSans}
      justifyContent={"space-between"}
      alignItems={"center"}
    >
      <Flex
        h={["260px", "260px", "310px", "310px", "310px", "310px"]}
        w={["260px", "260px", "310px", "310px", "310px", "310px"]}
        mb={["23.2px", "23.2px", "43.5px", "43.5px", "0px", "0px"]}
      >
        <Image src={DariusGraphic} alt="funded image" />
      </Flex>
      <Flex 
        flexDir={"column"}
        alignItems={[
          "center",
          "center",
          "center",
          "center",
          "flex-end",
          "flex-end",
        ]}
      >
        <Text
          fontWeight={"bold"}
          color={"#1c1c1c"}
          fontSize={["32px", "32px", "36px", "36px", "36px", "36px"]}
          textAlign={["center", "center", "center", "center", "right", "right"]}
          mb="20px"
        >
          GET STARTED WITH DARIUS
        </Text>
        <Text
          w={["", "", "730px", "730px", "580px", "580px"]}
          fontWeight={"normal"}
          color={"#7a7e87"}
          fontSize={["16px", "16px", "18px", "18px", "18px", "18px"]}
          mb={["36px", "36px", "60px", "60px", "60px", "60px"]}
          textAlign={["center", "center", "center", "center", "right", "right"]}
        >
          Discover the ultimate destination for fulfilling all your development
          requirements when building on Darius.
        </Text>
        <Flex
          flexDir={["column", "column", "row", "row", "row", "row"]}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Link
            mr="15px"
            h="45px"
            w={["238px", "238px", "164px", "164px", "160px", "160px"]}
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
            mb={['20px','20px','0px','0px','0px','0px']}
          >
            Guide
          </Link>
          <Link
            //   mt={mobileView ? "20px" : ""}
            mr="15px"
            h="45px"
            w={["238px", "238px", "164px", "164px", "160px", "160px"]}
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
            <Image src={discord} alt="discord" />
            <Text ml="9px">Join us</Text>
          </Link>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Darius;