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
          Link: "https://tokamak.network/about",
        },
        {
          text: "Careers",
          Link: "https://medium.com/onther-tech/onther-looking-to-recruit-blockchain-contributor-984ea4368824",
        },
        {
          text: "Partners",
          Link: "https://tokamak.network/#partners",
        },
      ],
    },
    {
      title: "Mainnet",
      subTitles: [
        {
          text: "Titan",
          Link: "http://titan.tokamak.network/",
        },
      ],
    },
    {
      title: "L2 On-Demand",
      subTitles: [
        {
          text: "TokamakOPTIMISM",
          Link: "https://tokamak.network/#layer2",
        },
        {
          text: "TokamakzkEVM",
          Link: "https://tokamak.network/#layer2",
        },
      ],
    },
    {
      title: "Ecosystem",
      subTitles: [
        {
          text: "Bridge & Swap",
          Link: "https://bridge.tokamak.network",
        },
        {
          text: "Staking",
          Link: "https://simple.staking.tokamak.network/staking",
        },
        {
          text: "DAO",
          Link: "https://dao.tokamak.network/#/",
        },
        {
          text: "Launchpad",
          Link: "https://tonstarter.tokamak.network/",
        },
        {
          text: "Price Dashboard",
          Link: "https://price.tokamak.network/#/",
        },
        {
          text: "Block Explorer",
          Link: "https://explorer.titan.tokamak.network",
        },
      ],
    },
    {
      title: "Developers",
      subTitles: [
        {
          text: "Grant",
          Link: "https://tokamak.notion.site/Tokamak-Network-Grant-Program-f2384b458ea341a0987c7e73a909aa21",
        },
        {
          text: "Github",
          Link: "https://github.com/tokamak-network",
        },
        {
          text: "Documentation",
          Link: "https://tokamaknetwork.gitbook.io/",
        },
      ],
    },
    {
      title: "Community",
      subTitles: [
        {
          text: "Medium",
          Link: "https://medium.com/onther-tech",
        },
        {
          text: "Twitter",
          Link: "https://twitter.com/tokamak_network",
        },
        // {
        //   text: "KakaoTalk (KR)",
        //   Link: "https://open.kakao.com/o/g2zlglHd",
        // },
        {
          text: "Discord (EN)",
          Link: "https://discord.com/invite/J4chV2zuAK",
        },
        {
          text: "Telegram",
          Link: "https://t.me/tokamak_network",
        },
        {
          text: "LinkedIn",
          Link: "https://www.linkedin.com/company/tokamaknetwork/",
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
        mt={["20px", "20px", "0px", "0px", "0px", "0px"]}
      >
        <Flex
          w={"100%"}
          flexDir={"row"}
          flexWrap={"wrap"}
          justifyContent={"space-between"}
          height={["540px", "540px", "179px", "179px", "179px", "179px"]}
          mb={["30px", "30px", "60px", "60px", "60px", "60px"]}
          pr={["20px", "20px", "30px", "30px", "0px", "0px"]}
          pl={["40px", "40px", "30px", "30px", "0px", "0px"]}
        >
          {data.map((info: any, index: number) => {
            return (
              <Flex
                key={index}
                flexDir={"column"}
                width={mobileView ? "40%" : ""}
                minW={mobileView ? "150px" : ""}
                // height={"179px"}
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
                    <Link
                      href={sub.Link}
                      isExternal
                      style={{ textDecoration: "none" }}
                      fontFamily={"Open Sans, sans-serif"}
                      key={index}
                      color={"#4c4c4c"}
                      fontWeight={600}
                      fontSize={"14px"}
                      mb="4px"
                    >
                      {sub.text === "TokamakOPTIMISM" ? (
                        <Text>
                          Tokamak{" "}
                          <span
                            style={{
                              verticalAlign: "super",
                              fontSize: "12px",
                              marginLeft: "-2px",
                            }}
                          >
                            Op
                          </span>
                        </Text>
                      ) : sub.text === "TokamakzkEVM" ? (
                        <Text>
                          Tokamak{" "}
                          <span
                            style={{
                              verticalAlign: "super",
                              fontSize: "12px",
                              marginLeft: "-2px",
                            }}
                          >
                            ZK+
                          </span>
                        </Text>
                      ) : (
                        <Text> {sub.text}</Text>
                      )}
                    </Link>
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
