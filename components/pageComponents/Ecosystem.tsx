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
  const cards: ICard[] = [
    {
      title: "TONStarter",
      image: TONStarter,
      url: "https://tonstarter.tokamak.network/",
      content:
        "TONStarter is a decentralized launchpad platform that supports public fundraising, and strong liquidity economics. Integration to Titan is expected to improve the user experience by offering lower fees and more competitive ways to boost your investment.",
      status: "COMING SOON",
      type: ["Launchpad"],
    },
    {
      title: "Tokamak Fast Withdrawal",
      image: Native,
      url: "https://bridge.tokamak.network/#/",
      content:
        "Tokamak Fast Withdrawal is a quick way to move assets from L2 to L1 using assets staked in Staking V2. Users can quickly withdraw assets without delay based on the liquidity provided by Staker, and liquidity providers can receive fees paid by users.",
      status: "COMING SOON",
      type: ["Bridge"],
    },
    {
      title: "Tokamak Bridge",
      image: TONStarter,
      url: "",
      content:
        "Bridge & Swap is a unified Dapp that supports both bridge and swap functionality to Titan Network.",
      status: "",
      type: ['Bridge',"DEX"],
    },
    {
      title: "TONDEX",
      image: DEX,
      url: "",
      content:
        "TONStarter is a decentralized launchpad platform that supports public fundraising, and strong liquidity economics. L2 migration.",
      status: "COMING SOON",
      type: ["DEX"],
    },
    {
      title: "Dragons of Midgard",
      image: DOM,
      url: "https://dragonsofmidgard.com/",
      content:
        "Dragons of Midgard is a playable NFT Collectible PVP game set in the medieval era in the kingdom of midgard. 5555 Unique Dragons living and evolving on the Ethereum Blockchain controlled by AURA.",
      status: "",
      type: ["Game", 'NFT'],
    },
    {
      title: "LYDA",
      image: LYDA,
      url: "https://www.lyda.so/",
      content:
        "LYDA is a platform to launch social tokens to transform social capitals in fandoms into economic benefits for creators and fans. LYDA eliminated the early stage investment for fan token IDO’s on the technical side, …",
      status: "",
      type: ["Social",'DAO','NFT'],
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
          href="https://j8vmrrhl32u.typeform.com/to/PVC3jyum"
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
