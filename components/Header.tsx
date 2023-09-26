"use client";

import {
  Flex,
  Link,
  Text,
  useTheme,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuGroup,
  MenuDivider,
  Button,
  useBreakpointValue,
  useMediaQuery,
} from "@chakra-ui/react";
import Image from "next/image";
import useMediaView from "@/app/hooks/useMediaView";
import L2BL from "../app/assets/L2-BI.svg";
import arrow from "../app/assets/caret-up.png";
import github from "../app/assets/navi_icon_github.svg";
import github_hover from "../app/assets/navi_icon_github_hover.svg";
import explorer from "../app/assets/navi_icon_block-explorer.svg";
import explorer_hover from "../app/assets/navi_icon_block-explorer_hover.svg";
import guide from "../app/assets/navi_icon_guide.svg";
import guide_hover from "../app/assets/navi_icon_guide_hover.svg";
import grant from "../app/assets/navi_icon_granton.svg";
import grant_hover from "../app/assets/navi_icon_granton_hover.svg";
import bug from "../app/assets/navi_icon_bug-bounty.svg";
import bug_hover from "../app/assets/navi_icon_bug-bounty_hover.svg";
import discord from "../app/assets/navi_icon_discord.svg";
import discord_hover from "../app/assets/navi_icon_discord_hover.svg";
import kakao from "../app/assets/navi_icon_kakao.svg";
import kakao_hover from "../app/assets/navi_icon_kakao_hover.svg";
import telegram from "../app/assets/navi_icon_telegram.svg";
import telegram_hover from "../app/assets/navi_icon_telegram_hover.svg";
import twitter from "../app/assets/navi_icon_Twitter.svg";
import twitter_hover from "../app/assets/navi_icon_Twitter_hover.svg";
import medium from "../app/assets/navi_icon_medium.svg";
import medium_hover from "../app/assets/navi_icon_medium_hover.svg";
import team from "../app/assets/navi_icon_team.svg";
import team_hover from "../app/assets/navi_icon_team_hover.svg";
import career from "../app/assets/navi_icon_career.svg";
import career_hover from "../app/assets/navi_icon_career_hover.svg";
import { useState, useEffect, useRef } from "react";

// import { HashLink } from "react-router-hash-link";

function Header() {
  const theme = useTheme();
  const [menuStates, setMenuStates] = useState([false, false, false]);
  const [isLargeScreen, setIsLargeScreen] = useState(true);

  const handleMenuToggle = (index: number) => {
    const updatedMenuStates = [...menuStates];

    if (index === 0) {
      updatedMenuStates[0] = !updatedMenuStates[0];
      updatedMenuStates[1] = false;
      updatedMenuStates[2] = false;
    } else if (index === 1) {
      updatedMenuStates[1] = !updatedMenuStates[1];
      updatedMenuStates[0] = false;
      updatedMenuStates[2] = false;
    } else {
      updatedMenuStates[2] = !updatedMenuStates[2];
      updatedMenuStates[0] = false;
      updatedMenuStates[1] = false;
    }
    setMenuStates(updatedMenuStates);
  };
  
  const handleClick = (index:number) => {
    const updatedMenuStates = [...menuStates];

    if (index === 0) {
      updatedMenuStates[0] = true;
      updatedMenuStates[1] = false;
      updatedMenuStates[2] = false;
    } else if (index === 1) {
      updatedMenuStates[1] = true;
      updatedMenuStates[0] = false;
      updatedMenuStates[2] = false;
    } else {
      updatedMenuStates[2] = !true;
      updatedMenuStates[0] = false;
      updatedMenuStates[1] = false;
    }    
    setMenuStates(updatedMenuStates);
  }

  useEffect(() => {
    function handleResize() {
      setIsLargeScreen(window.innerWidth > 1199);
    }

    handleResize(); // Set initial value
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const CustomMenuItem = (props: any) => {
    const { link, title, icon, iconHover } = props;
    const [hover, setHover] = useState(false);
    return (
      <Link href={link} isExternal style={{ textDecoration: "none" }}>
        <MenuItem
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          color={"#7a7e87"}
          _focus={{ background: "transparent" }}
          _hover={{ bg: "none", color: "#2a72e5" }}
        >
          <Flex mr="9px">
            <Image src={hover ? iconHover : icon} alt="icon" />
          </Flex>
          {title}
        </MenuItem>
      </Link>
    );
  };
  
  return (
    <Flex
      justifyContent={"space-between"}
      bg="#fafbfc"
      h="78px"
      alignItems={"center"}
      // zIndex={10000}
      position={"relative"}
    >
      <Flex
        height={"40px"}
        ml={["0px", "0px", "30px", "30px", "40px", "40px"]}
        width={"126px"}
      >
        <Image src={L2BL} alt="tokamak_symbol" height={40} width={126}></Image>
      </Flex>

      <Flex>
        <Link
          href="#ecosystem"
          textDecor={"none"}
          zIndex={1000}
          _hover={{ textDecor: "none" }}
        >
          <Text
            fontSize="16px"
            mr="60px"
            color={"#1c1c1c"}
            fontFamily={theme.fonts.openSans}
            fontWeight={600}
          >
            Ecosystem
          </Text>
        </Link>

        <Menu onClose={() => handleMenuToggle(0)} isOpen={menuStates[0]}>
          <MenuButton
            zIndex={1001}
            mr="33px"
            onClick={() => handleClick(0)}
            onMouseOver={() => handleMenuToggle(0)}
            // onMouseLeave={() => handleMenuToggle(0)}
            bg={"transparent"}
            _hover={{
              background: "transparent",
              border: "none",
              outline: "none",
            }}
            _focus={{
              background: "transparent",
              border: "none",
              outline: "none",
            }}
            _active={{
              background: "transparent",
              border: "none",
              outline: "none",
            }}
          >
            <Flex justifyContent={"space-between"} alignItems={"center"}>
              {" "}
              <Text
                color={"#1c1c1c"}
                fontFamily={theme.fonts.openSans}
                fontWeight={600}
              >
                Developers
              </Text>
              <Flex
                height={"24px"}
                width={"24px"}
                transform={menuStates[0] === true ? "" : "rotate(180deg)"}
              >
                <Image src={arrow} alt="icon_arrow" />
              </Flex>
            </Flex>
          </MenuButton>
          <MenuList
            zIndex={1001}
            fontSize={"13px"}
            ml="-15px"
            border={"none"}
            minWidth="187px"
            boxShadow={"0 1px 4px 0 rgba(96, 97, 112, 0.14)"}
            onMouseLeave={() => handleMenuToggle(0)}
          >
            <MenuGroup
              title="MAINNET"
              fontSize={"13px"}
              fontFamily={theme.fonts.openSans}
              fontWeight={600}
            >
              <CustomMenuItem
                title={"Github"}
                icon={github}
                iconHover={github_hover}
                link={"https://github.com/tokamak-network"}
              />

              <CustomMenuItem
                title={"Guide"}
                icon={guide}
                iconHover={guide_hover}
                link={
                  "https://tokamaknetwork.gitbook.io/home/02-service-guide/titan"
                }
              />
              <CustomMenuItem
                title={"Block Explorer"}
                icon={explorer}
                iconHover={explorer_hover}
                link={"https://explorer.titan.tokamak.network"}
              />
            </MenuGroup>
            <MenuDivider borderColor={"#f4f7f8"} mx="10px" />
            <MenuGroup fontSize={"13px"} title="TESTNET">
              <CustomMenuItem
                title={"Guide"}
                icon={guide}
                iconHover={guide_hover}
                link={
                  "https://onther.notion.site/Darius-L2-Testnet-Dev-Document-5023767f30754d21876b049da68f0128"
                }
              />
              <CustomMenuItem
                title={"Block Explorer"}
                icon={explorer}
                iconHover={explorer_hover}
                link={"https://explorer.titan-goerli.tokamak.network/"}
              />
            </MenuGroup>
          </MenuList>
        </Menu>
        <Flex justifyContent={"space-between"} alignItems={"center"}>
          <Link
            href="https://tokamak.notion.site/Tokamak-Network-Grant-Program-GranTON-f2384b458ea341a0987c7e73a909aa21"
            textDecor={"none"}
            zIndex={1000}
            _hover={{ textDecor: "none" }}
            target="_blank"
          >
            <Text
              fontSize="16px"
              mr="60px"
              color={"#1c1c1c"}
              fontFamily={theme.fonts.openSans}
              fontWeight={600}
            >
              Grant
            </Text>
          </Link>
        </Flex>
        <Menu onClose={() => handleMenuToggle(2)} isOpen={menuStates[2]}>
          <MenuButton
            zIndex={1001}
            mr="30px"
            w="80px"
            onClick={() => handleClick(2)}
            onMouseEnter={() => handleMenuToggle(2)}
          >
            <Flex justifyContent={"space-between"} alignItems={"center"}>
              {" "}
              <Text
                color={"#1c1c1c"}
                fontFamily={theme.fonts.openSans}
                fontWeight={600}
              >
                More
              </Text>
              <Flex
                height={"24px"}
                width={"24px"}
                transform={menuStates[2] === true ? "" : "rotate(180deg)"}
              >
                <Image src={arrow} alt="icon_arrow" />
              </Flex>
            </Flex>
          </MenuButton>
          <MenuList
            zIndex={1001}
            fontSize={"13px"}
            ml="-15px"
            border={"none"}
            minWidth="187px"
            boxShadow={"0 1px 4px 0 rgba(96, 97, 112, 0.14)"}
            onMouseLeave={() => handleMenuToggle(2)}
          >
            <MenuGroup
              title="ABOUT"
              fontSize={"13px"}
              fontFamily={theme.fonts.openSans}
              fontWeight={600}
            >
              <CustomMenuItem
                title={"Team"}
                icon={team}
                iconHover={team_hover}
                link={"https://tokamak.network/about"}
              />
              <CustomMenuItem
                title={"Career"}
                icon={career}
                iconHover={career_hover}
                link={
                  "https://medium.com/onther-tech/onther-looking-to-recruit-blockchain-contributor-984ea4368824"
                }
              />
            </MenuGroup>
            <MenuDivider borderColor={"#f4f7f8"} mx="10px" />
            <MenuGroup
              title="COMMUNITY"
              fontSize={"13px"}
              fontFamily={theme.fonts.openSans}
              fontWeight={600}
            >
              <CustomMenuItem
                title={"Discord"}
                icon={discord}
                iconHover={discord_hover}
                link={"https://discord.com/invite/J4chV2zuAK"}
              />
              {/* <CustomMenuItem
                title={"Kakao (KR)"}
                icon={kakao}
                iconHover={kakao_hover}
                link={"https://open.kakao.com/o/g2zlglHd"}
              /> */}
              <CustomMenuItem
                title={"Telegram (EN)"}
                icon={telegram}
                iconHover={telegram_hover}
                link={"https://t.me/tokamak_network"}
              />
              <CustomMenuItem
                title={"Twitter"}
                icon={twitter}
                iconHover={twitter_hover}
                link={"https://twitter.com/tokamak_network"}
              />
              <CustomMenuItem
                title={"Medium"}
                icon={medium}
                iconHover={medium_hover}
                link={"https://medium.com/onther-tech"}
              />
            </MenuGroup>
          </MenuList>
        </Menu>
      </Flex>
      {isLargeScreen && <Flex></Flex>}
    </Flex>
  );
}

export default Header;
