import { Flex, Link, Text, useTheme } from "@chakra-ui/react";
import FundedGraphic from "../../app/assets/funded_graphic.svg";
import Image from "next/image";
import FundedAnime from "../animations/FundedAnime";
import FundedAnimeMobile from "../animations/FundedAnimeMobile";
import useMediaView from "../../app/hooks/useMediaView";

const Fund = () => {
  const theme = useTheme();
  const {mobileView, tabletView,pcView}  = useMediaView()

  return (
    <Flex
      w={["100%", "100%", "740px", "740px", "1200px", "1200px"]}
      flexDir={[
        "column-reverse",
        "column-reverse",
        "column-reverse",
        "column-reverse",
        "row",
        "row",
      ]}
      px={['20px', '20px','0px','0px','0px','0px']}
      mb={["90px", "90px", "120px", "120px", "181px", "181px"]}
      fontFamily={theme.fonts.openSans}
      justifyContent={"space-between"}
      alignItems={"center"}
    >
      <Flex
        flexDir={"column"}
        mt={["60px", "60px", "90px", "90px", "0px", "0px"]}
        alignItems={[
          "center",
          "center",
          "center",
          "center",
          "flex-start",
          "flex-start",
        ]}
      >
        <Text
          fontWeight={"bold"}
          color={"#1c1c1c"}
          fontSize={["32px", "32px", "36px", "36px", "36px", "36px"]}
          mb="20px"
        >
          GET FUNDED
        </Text>
        <Text
          w={["100%", "100%", "740px", "740px", "700px", "700px"]}
          fontWeight={"normal"}
          color={"#7a7e87"}
          fontSize={["16px", "16px", "18px", "18px", "18px", "18px"]}
          mb={["36px", "36px", "60px", "60px", "60px", "60px"]}
          textAlign={["center", "center", "center", "center", "left", "left"]}
        >
          GranTON & TONStarter programs allocate substantial resources to
          projects that promote ecosystem expansion and critical services.
          <br></br>
          Individuals or Teams can use these programs to receive funding from
          Tokamak Foundation (GranTON) or the public (TONStarter) for building
          their next big project.
        </Text>
        <Flex
          flexDir={["column", "column", "row", "row", "row", "row"]}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Link
            mr="15px"
            h="45px"
            w={["238px","238px","164px","164px","164px","164px"]}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            fontWeight={600}
            href="https://tokamak.notion.site/Grant-Announcement-EN-503f8396ee604673b0023e0183810e75"
            textDecor={"none"}
            backgroundImage="linear-gradient(to bottom, #1f8efa, #2a72e5)"
            boxShadow={"0 3px 8px 0 rgba(49, 127, 203, 0.25)"}
            borderRadius={"24px"}
            color={"#ffffff"}
            target="blank"
            // letterSpacing={"wide"}
            fontSize={"14px"}
            fontFamily={theme.fonts.openSans}
            _hover={{ textDecor: "none" }}
            mb={['20px','20px','0px','0px','0px','0px']}
          >
            Apply to GranTON
          </Link>
          <Link
            //   mt={mobileView ? "20px" : ""}
            mr="15px"
            h="45px"
            w="238px"
            href="https://tonstarter.tokamak.network/"
            display={"flex"}
            textDecor={"none"}
            justifyContent={"center"}
            alignItems={"center"}
            fontWeight={600}
            borderRadius={"24px"}
            target="blank"
            bg="#ffffff"
            color={"#1c1c1c"}
            border={"1px solid #dfe4ee"}
            fontSize={"14px"}
            fontFamily={theme.fonts.openSans}
            _hover={{ textDecor: "none" }}
          >
            Get funding from TONStarter
          </Link>
        </Flex>
      </Flex>
      {/* <Flex
        h={["260px", "260px", "310px", "310px", "310px", "310px"]}
        w={["260px", "260px", "310px", "310px", "310px", "310px"]}
      >
        <Image src={FundedGraphic} alt="funded image" />
      </Flex> */}
     {mobileView? <FundedAnimeMobile/>:<FundedAnime/>}
    </Flex>
  );
};

export default Fund;
