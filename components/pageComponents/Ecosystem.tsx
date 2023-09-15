"use client";

import { Flex, Link, Text, useTheme, Button } from "@chakra-ui/react";
import EcosystemCard from "../ecosystem/EcosystemCard";
import { useState } from "react";
import Slider from "react-slick";
import useMediaView from "@/app/hooks/useMediaView";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import LYDA from "../../app/assets/LYDA_symbol.svg";
import DEX from "../../app/assets/tonDEX_symbol.svg";
import DOM from "../../app/assets/DOM_symbol.png";
import Native from "../../app/assets/staking_symbol.svg";
import TONStarter from "../../app/assets/TON_symbol.svg";
import Bridge from '../../app/assets/Bridge.svg'
import TitanNFT from '../../app/assets/NFT_symbol.svg'
function Eccosystem() {
  const theme = useTheme();
  const [selected, setSelected] = useState("All");
  const [currentIndex, setCurrentIndex] = useState(0);
  const { mobileView, tabletView, pcView } = useMediaView();
  const [pageIndex, setPageIndex] = useState<number>(1);
  const [pageLimit, setPageLimit] = useState<number>(2);

  interface ICard {
    title: string;
    image: any;
    url: string;
    content: string;
    status: string;
    type: string[];
  }

  const types = [
    { title: "All", width: "48px" },
    { title: "Bridge", width: "68px" },
    { title: "DAO", width: "54px" },
    { title: "DEX", width: "50px" },
    { title: "Game", width: "64px" },
    { title: "Launchpad", width: "98px" },
    { title: "Social", width: "64px" },
    { title: "NFT", width: "50px" },
  ];

  const cards: ICard[] = [
    {
      title: "TONStarter",
      image: TONStarter,
      url: "https://tonstarter.tokamak.network/",
      content:
        "TONStarter is a decentralized launchpad platform for public fundraising and strong liquidity economics. Integrating with Titan will improve the user experience with lower fees and more competitive investment options.",
      status: "COMING SOON",
      type: ["Launchpad", "Bridge"],
    },
    {
      title: "Tokamak Fast Withdrawal",
      image: Native,
      url: " ",
      content:
        "Tokamak Fast Withdrawal enables users to move assets from L2 to L1 quickly, using assets staked in Staking V2. Users can withdraw assets promptly based on the liquidity provided by Staker by paying fee.",
      status: "COMING SOON",
      type: ["Bridge"],
    },
    {
      title: "Tokamak Bridge",
      image: Bridge,
      url: "https://bridge.tokamak.network/",
      content:
        "Tokamak Bridge is a unified Dapp that supports both Swap and Bridge functionality. With it’s fun card game-like interface, and reward-full TON ecosystem, Tokamak Bridge is an all-in-one solution for cryptocurrency enthusiasts.",
      status: "",
      type: ["Bridge", "DEX"],
    },
    {
      title: "TONDEX",
      image: DEX,
      url: "",
      content:
        "TONDEX is a decentralized exchange for trading tokens in the TON ecosystem. It offers a familiar trading experience for beginners by incorporating market and limit orders from CEX interfaces.",
      status: "COMING SOON",
      type: ["DEX"],
    },
    {
      title: "Titan NFT",
      image: TitanNFT,
      url: "https://nft.event.tokamak.network/",
      content:
        "Titan NFT service commemorates the opening of Titan L2 Network. One hundred NFTs were minted and are available for purchase on Titan. By purchasing them, you will receive free merchandise shipped right to your door.",
      status: "",
      type: ["NFT"],
    },
   
    {
      title: "LYDA",
      image: LYDA,
      url: "https://www.lyda.so/",
      content:
        "LYDA is a platform that transforms social fandoms into economic benefits for creators and fans by launching social tokens. It eliminates the early stage investment for fan token IDOs and establishes independent tokens.",
      status: "COMING SOON",
      type: ["Social", "DAO", "NFT"],
    },
    {
      title: "Dragons of Midgard",
      image: DOM,
      url: "https://dragonsofmidgard.com/",
      content:
        "Dragons of Midgard is a playable NFT Collectible PVP game set in the medieval era in the kingdom of midgard. Unique Dragons living and evolving on the Ethereum Blockchain controlled by AURA.",
      status: "COMING SOON",
      type: ["Game", "NFT"],
    },
  
  ];

  const [filteredCards, setFilteredCards] = useState<ICard[]>(cards);

  const getPaginatedData = () => {
    const startIndex = 0;
    const endIndex = startIndex + pageLimit * pageIndex;
    return filteredCards.slice(startIndex, endIndex);
  };

  const filterCards = (type: string) => {
    setSelected(type);
    type === "All"
      ? setFilteredCards(cards)
      : setFilteredCards(cards.filter((card) => card.type.includes(type)));
  };

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
    rows: filteredCards.length < 3 ? 1 : filteredCards.length < 5 ? 2 : 3,
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
    rows: filteredCards.length > 3 ? 2 : 1,
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
      height: ${filteredCards.length > 4 ? "454px" : "212px"};
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

  const CustomButton = (props: {
    title: string;
    num: number;
    width: string;
  }) => {
    const { title, num, width } = props;
    return (
      <Button
        // w={["96px", "96px", "", "", "", ""]}
        fontFamily={theme.fonts.openSans}
        bg="transparent"
        backgroundImage={
          selected === title
            ? "linear-gradient(to bottom, #1f8efa, #2a72e5)"
            : "none"
        }
        boxShadow={
          selected === title ? "0 3px 8px 0 rgba(49, 127, 203, 0.25)" : ""
        }
        fontSize={"14px"}
        color={selected === title ? "#fff" : "#7a7e87"}
        _hover={{
          backgroundImage: "linear-gradient(to bottom, #2a72e5, #1f8efa)",
          boxShadow: "0 0 0 0 rgba(49, 127, 203, 0.25)",
          color: "#fff",
          paddingLeft: ["0", "0", "12px", "12px", "12px", "12px"],
          paddingRight: ["0", "0", "12px", "12px", "12px", "12px"],
        }}
        w={["96px", "96px", width, width, width, width]}
        mb="15px"
        h="29px"
        mr={[
          (num + 1) % 3 === 0 ? "0px" : "16px",
          (num + 1) % 3 === 0 ? "0px" : "16px",
          "12px",
          "12px",
          "12px",
          "12px",
        ]}
        borderRadius={"24px"}
        px={"12px"}
        onClick={() => filterCards(title)}
      >
        {title}
      </Button>
    );
  };

  return (
    <Flex
      zIndex={10}
      justifyContent={"center"}
      alignItems={"center"}
      flexDir={"column"}
      id="ecosystem"
      mt={["120px", "120px", "", "", "", ""]}
    >
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
        mb={["15px", "15px", "60px", "60px", "60px", "60px"]}
        textAlign={"center"}
      >
        Check out different dapps on Titan{" "}
      </Text>
      <Flex
        w={["", "", "740px", "740px", "1200px", "1200px"]}
        h={["100%", "100%", "44px", "44px", "44px", "44px"]}
        alignItems={[
          "center",
          "center",
          "flex-start",
          "flex-start",
          "flex-start",
          "flex-start",
        ]}
        flexDir={[
          "column-reverse",
          "column-reverse",
          "row",
          "row",
          "row",
          "row",
        ]}
      >
        <Flex
          flexWrap={"wrap"}
          flexDir={"row"}
          mb="15px"
          justifyContent={[
            "",
            "",
            "flex-start",
            "flex-start",
            "center",
            "center",
          ]}
          w={["320px", "320px", "100%", "100%", "100%", "100%"]}
        >
          {types.map((type: any, index: number) => {
            return (
              <CustomButton
                num={index}
                title={type.title}
                key={index}
                width={type.width}
              />
            );
          })}
        </Flex>
        <Link
          target="blank"
          href="https://forms.gle/RnH1fNjiU5tz3osK7"
          width={"120px"}
          fontSize={"14px"}
          fontWeight={600}
          color="#2a72e5"
          mb={["40px", "40px", "", "", "", ""]}
        >
          Add your Dapp
        </Link>
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
          {filteredCards.length > getPaginatedData().length && (
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
          )}
        </Flex>
      ) : tabletView ? (
        <Flex justifyContent={"center"} mt="40px">
          <style>{slickStyle}</style>

          <Slider {...tabSettings} className="slider1">
            {filteredCards.map((card: any, index: number) => (
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
            {filteredCards.map((card: any, index: number) => (
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
