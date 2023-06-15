"use client";

import { Flex, Link, Text, useTheme } from "@chakra-ui/react";
import Image from "next/image";
import "@fontsource/open-sans/700.css";
// import '@fontsource/open-sans/500.css';
import { useState, useEffect } from "react";
import dayjs from "dayjs";
import topArrow from "../app/assets/top_arrow_icon.png";
import useMediaView from "@/app/hooks/useMediaView";

function Footer() {
  const theme = useTheme();
  const [dWidth, setDWidth] = useState(0);

  const { mobileView } = useMediaView();

  useEffect(() => {
    const deviceWidth = window.outerWidth;
    setDWidth(deviceWidth);
  }, []);

  const data = [
    {
      title: "About",
      subTitles: [
        {
          text: "Team",
          Link: "",
        },
        {
          text: "Careers",
          Link: "",
        },
        {
          text: "Partners",
          Link: "",
        },
      ],
    },
    {
      title: "Mainnet",
      subTitles: [
        {
          text: "Darius",
          Link: "",
        },
      ],
    },
    {
      title: "L2 On-Demand",
      subTitles: [
        {
          text: "Tokamak OPTIMISM",
          Link: "",
        },
        {
          text: "Tokamak zkEVM+",
          Link: "",
        },
      ],
    },
    {
      title: "Ecosystem",
      subTitles: [
        {
          text: "Swap",
          Link: "",
        },
        {
          text: "Bridge",
          Link: "",
        },
        {
          text: "Staking",
          Link: "",
        },
        {
          text: "DAO",
          Link: "",
        },
        {
          text: "Launchpad",
          Link: "",
        },
      ],
    },
    {
      title: "Developers",
      subTitles: [
        {
          text: "Grant",
          Link: "",
        },
        {
          text: "Bug Bounty",
          Link: "",
        },
        {
          text: "Github",
          Link: "",
        },
        {
          text: "Documentation",
          Link: "",
        },
      ],
    },
    {
      title: "Community",
      subTitles: [
        {
          text: "Medium",
          Link: "",
        },
        {
          text: "Twitter",
          Link: "",
        },
        {
          text: "Kakakotalk",
          Link: "",
        },
        {
          text: "Discord",
          Link: "",
        },
        {
          text: "Telegram",
          Link: "",
        },
        {
          text: "Linkedin",
          Link: "",
        },
      ],
    },
  ];

  const Line = () => {
    return (
      <Flex
        w={["100%", "100%", "100%", "100%", "1200px", "1200px"]}
        height={"1px"}
        bg="#dfe4ee"
      ></Flex>
    );
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const FooterContainer = () => {
    return (
      <Flex
        zIndex={100}
        justifyContent={"space-between"}
        w={["100%", "100%", "100%", "100%", "1200px", "1200px"]}
        flexDir={"column"}
        flexWrap={"wrap"}
        alignItems={"center"}
        mt={['20px','20px','0px','0px','0px','0px']}
      >
        <Flex
          w={"100%"}
          flexDir={"row"}
          flexWrap={"wrap"}
          justifyContent={"space-between"}
          height={['540px','540px',"179px","179px","179px","179px"]}
          mb={['30px','30px',"60px","60px","60px","60px"]}
          px={["20px", "20px", "30px", "30px", "0px", "0px"]}
        >
          {data.map((info: any, index: number) => {
            return (
              <Flex
                key={index}
                flexDir={"column"}
                width={mobileView ? "40%" : ""}
                minW={mobileView ? "150px" : ""}
                height={"179px"}
                // mr={width < 701 ? index%2 === 0? "20px" : "":''}
              >
                <Flex
                  fontWeight={"bold"}
                  fontFamily={"Open Sans, sans-serif"}
                  color={"#1c1c1c"}
                  fontSize={"20px"}
                >
                  {info.title}
                </Flex>
                {info.subTitles.map((sub: any, index: number) => {
                  return (
                    <Flex
                      fontFamily={"Open Sans, sans-serif"}
                      key={index}
                      color={"#4c4c4c"}
                      fontWeight={600}
                      fontSize={"14px"}
                      mb="4px"
                    >
                      {sub.text}
                    </Flex>
                  );
                })}
              </Flex>
            );
          })}
        </Flex>
      </Flex>
    );
  };

  const FooterBottom = () => {
    return (
      <Flex
        justifyContent={"space-between"}
        h={mobileView ? "120px" : "112px"}
        alignItems={"center"}
        px={["20px", "20px", "30px", "30px", "0px", "0px"]}
        w={["100%", "100%", "100%", "100%", "1200px", "1200px"]}
      >
        {mobileView ? (
          <Text color={"#999999"} fontSize={"13px"}>
            Copyright © {dayjs().year()}{" "}
            <span style={{ color: "#1c1c1c" }}>Tokamak Network</span>
          </Text>
        ) : (
          <Text color={"#999999"}>
            Copyright © {dayjs().year()}{" "}
            <span style={{ color: "#1c1c1c" }}>Tokamak Network</span> All Rights
            Reserved.
          </Text>
        )}

        <Flex onClick={scrollToTop} _hover={{ cursor: "pointer" }}>
          <Image src={topArrow} alt="arrow" height={40} width={30} />
        </Flex>

        {/* <Text></Text> */}
      </Flex>
    );
  };
  return (
    <Flex
      bottom={0}
      w="100%"
      flexDir={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      zIndex={10}
    >
      {mobileView && <Line />}
      <FooterContainer />

      <Line />
      <FooterBottom />
    </Flex>
  );
}

export default Footer;
