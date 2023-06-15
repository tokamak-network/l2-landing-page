"use client";

import { Flex, Link, Text, useTheme, Button } from "@chakra-ui/react";
import EcosystemCard from "../ecosystem/EcosystemCard";
import { useState } from "react";
import Slider from "react-slick";
import useMediaView from "@/app/hooks/useMediaView";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import LYDA from '../../app/assets/LYDA_symbol.svg'
import DEX from '../../app/assets/tonDEX_symbol.svg'
import DOM from '../../app/assets/DOM_symbol.png'
import Native from '../../app/assets/staking_symbol.svg'
import TONStarter from '../../app/assets/TON_symbol.svg'
function Eccosystem() {
  const theme = useTheme();
  const [selected, setSelected] = useState("All");
  const [currentIndex, setCurrentIndex] = useState(0);
  const { mobileView, tabletView, pcView } = useMediaView();
  const [pageIndex, setPageIndex] = useState<number>(1);
  const [pageLimit, setPageLimit] = useState<number>(2);

  const types = [
    "All",
    "Bridge",
    "DAO",
    "DEX",
    "Game",
    "LaunchPad",
    "Social",
    "NFT",
  ];

  const tabSettings = {
    accessibility: true,
    speed: 500,
    variableWidth: false,
    swipeToSlide: false,
    centerPadding: "30px",
    infinite: false,
    className: "slider1",
    centerMode: false,
    dots: true,
    slidesToShow: 2,
    initialSlide: 0,
    slidesToScroll: 2,
    arrows: false,
    rows: 3,
    slidesPerRow: 1,
  };
  const settings = {
    accessibility: true,
    speed: 500,
    variableWidth: false,
    swipeToSlide: false,
    centerPadding: "30px",
    infinite: false,
    className: "slider1",
    centerMode: false,
    dots: true,
    slidesToShow: 3,
    initialSlide: 0,
    slidesToScroll: 3,
    arrows: false,
    rows: 2,
    slidesPerRow: 1,
    // beforeChange: (next: any) => setCurrentIndex(next),
    // afterChange: (current: any) => setCurrentIndex(current),
  };

  const slickStyle = tabletView
    ? `.slider1 {
      width:  800px;

    .slick-slider{
      width:  800px;
    }
    .slick-list {
      margin-left: 30px
    }
    .slick-slide{
      height: 650px !important;
      margin-bottom: 60px
    }
    .slick-dots{
      position: relative;
      display: flex !important;
      justify-content: center
    }
    .slick-dots li {
      width: 9px
    }
    .slick-dots li button {
      width: 9px;
      height: 9px;
      padding: 0px
    }
    .slick-dots li button:before {
      color: #dfe4ee;
      opacity: 1;
      width: 9px;
      height: 9px;
      padding: 0px
    }
    .slick-dots li.slick-active button:before{
      color: #2a72e5;
      opacity: 1;
      width: 9px;
      height: 9px;
      padding: 0px
    }
  }`
    : `
  .slider1 {
    width: 1230px;
    left: 15px;

    .slick-slider{
      width:  1230px !important;
      // padding-left:30px
    }
    .slick-list {
      //  margin-left: 30px
    }
    .slick-slide{
      height: 454px;
      margin-bottom: 60px;
    }
    .slick-slide slick-active{
      width: 380px !important
    }
    .slick-dots{
      display:flex !important;
      margin-top:60px !important;
      justify-content: center
    }
    .slick-dots li {
      // height: 9px;
      width: 9px
    }
    .slick-dots li button {
      width: 9px;
      height: 9px;
      padding: 0px
    }
    .slick-dots li button:before {
      color: #dfe4ee;
      opacity: 1;
      width: 9px;
      height: 9px;
      padding: 0px
    }
    .slick-dots li.slick-active button:before{
      color: #2a72e5;
      opacity: 1;
      width: 9px;
      height: 9px;
      padding: 0px
    }
  }
  `;
  const cards = [
    {
      title: "TONStarter",
      image: TONStarter,
      url: "tonstarter.tokamak.network",
      content:
        "TONStarter is a decentralized launchpad platform that supports public fundraising, and strong liquidity economics. L2 migration.",
      status: "COMING SOON",
    },
    {
      title: "Native FW",
      image: Native,
      url: "simple.staking.tokamak.network",
      content:
        "TONStarter is a decentralized launchpad platform that supports public fundraising, and strong liquidity economics. L2 migration.",
      status: "COMING SOON",
    },
    {
      title: "Bridge & Swap",
      image:  TONStarter,
      url: "dao.tokamak.network",
      content:
        "Bridge & Swap is a unified Dapp that supports both bridge and swap functionality to DARIUS Network.",
      status: "",
    },
    {
      title: "TONDEX",
      image: DEX,
      url: "tonstarter.tokamak.network",
      content:
        "TONStarter is a decentralized launchpad platform that supports public fundraising, and strong liquidity economics. L2 migration.",
      status: "COMING SOON",
    },
    {
      title: "Dragons of Midgard",
      image: DOM,
      url: "dragonsofmidgard.com",
      content:
        "Dragons of Midgard is a playable NFT Collectible PVP game set in the medieval era in the kingdom of midgard. 5555 Unique Dragons living and evolving on the Ethereum Blockchain controlled by AURA.",
      status: "COMING SOON",
    },
    {
      title: "LYDA",
      image: LYDA,
      url: "lyda.so",
      content:
        "LYDA is a platform to launch social tokens to transform social capitals in fandoms into economic benefits for creators and fans. LYDA eliminated the early stage investment for fan token IDO’s on the technical side, …",
      status: "COMING SOON",
    },
    {
      title: "TONStarter",
      image:  TONStarter,
      url: "tonstarter.tokamak.network",
      content:
        "TONStarter is a decentralized launchpad platform that supports public fundraising, and strong liquidity economics. L2 migration.",
      status: "COMING SOON",
    },
    {
      title: "Native FW",
      image:Native,
      url: "simple.staking.tokamak.network",
      content:
        "TONStarter is a decentralized launchpad platform that supports public fundraising, and strong liquidity economics. L2 migration.",
      status: "COMING SOON",
    },
    {
      title: "Bridge & Swap",
      image: TONStarter,
      url: "dao.tokamak.network",
      content:
        "Bridge & Swap is a unified Dapp that supports both bridge and swap functionality to DARIUS Network.",
      status: "",
    },
    {
      title: "TONDEX",
      image: DEX,
      url: "tonstarter.tokamak.network",
      content:
        "TONStarter is a decentralized launchpad platform that supports public fundraising, and strong liquidity economics. L2 migration.",
      status: "COMING SOON",
    },
  ];

  const getPaginatedData = () => {
    const startIndex = 0;
    const endIndex = startIndex + pageLimit * pageIndex;
    return cards.slice(startIndex, endIndex);
  };

  const CustomButton = (props: { title: string; num: number }) => {
    const { title, num } = props;
    return (
      <Button
        w={["96px", "96px", "", "", "", ""]}
        fontFamily={theme.fonts.openSans}
        bg="transparent"
        backgroundImage={
          selected === title
            ? "linear-gradient(to bottom, #1f8efa, #2a72e5)"
            : "none"
        }
        fontSize={"14px"}
        color={selected === title ? "#fff" : "#7a7e87"}
        _hover={{
          backgroundImage: "linear-gradient(to bottom, #1f8efa, #2a72e5)",
          color: "#fff",
        }}
        mb="15px"
        h="29px"
        mr={(num + 1) % 3 === 0 ? "0px" : "16px"}
        borderRadius={"24px"}
        px="24px"
        onClick={() => setSelected(title)}
      >
        {title}
      </Button>
    );
  };
  return (
    <Flex zIndex={1} justifyContent={"center"} alignItems={"center"} flexDir={"column"} id="ecosystem">
      <Text
        fontSize={["32px", "32px", "36px", "36px", "36px", "36px"]}
        fontFamily={theme.fonts.openSans}
        fontWeight={"bold"}
      >
        Ecosystem
      </Text>
      <Text
        fontSize={"16px"}
        fontFamily={theme.fonts.openSans}
        color={"#7a7e87"}
        // w={["320px", "320px", "100%", "100%", "100%", "100%"]}
        mb={"60px"}
        textAlign={"center"}
      >
        Check out different dapps on DARIUS{" "}
      </Text>
      <Flex
        flexWrap={"wrap"}
        flexDir={"row"}
        mb="15px"
        justifyContent={mobileView ? "" : "center"}
        w={["320px", "320px", "100%", "100%", "100%", "100%"]}
      >
        {types.map((type: string, index: number) => {
          return <CustomButton num={index} title={type} key={index} />;
        })}
      </Flex>
      {mobileView ? (
        <Flex
          flexDir={"column"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          {getPaginatedData().map((card: any, index: number) => (
            <EcosystemCard
              key={index}
              num={index}
              title={card.title}
              image={card.image}
              content={card.content}
              url={card.url}
              status={card.status}
            />
          ))}
          <Button
            bg="transparent"
            border={"1px solid #dfe4ee"}
            _focus={{ bg: "transparent" }}
            _active={{ bg: "transparent" }}
            height={"29px"}
            width={"96px"}
            borderRadius={"24px"}
            onClick={() => setPageIndex(pageIndex + 1)}
          >
            More
          </Button>
        </Flex>
      ) : tabletView ? (
        <Flex justifyContent={"center"} mt="40px">
          <style>{slickStyle}</style>

          <Slider {...tabSettings} className="slider1">
            {cards.map((card: any, index: number) => (
              <EcosystemCard
                key={index}
                num={index}
                title={card.title}
                image={card.image}
                content={card.content}
                url={card.url}
                status={card.status}
              />
            ))}
          </Slider>
        </Flex>
      ) : (
        <Flex justifyContent={"center"} mt="40px">
          <style>{slickStyle}</style>

          <Slider {...settings} className="slider1">
            {cards.map((card: any, index: number) => (
              <EcosystemCard
                key={index}
                num={index}
                title={card.title}
                image={card.image}
                content={card.content}
                url={card.url}
                status={card.status}
              />
            ))}
          </Slider>
        </Flex>
      )}
    </Flex>
  );
}

export default Eccosystem;
