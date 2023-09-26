"use client";

import {
  Flex,
  useTheme,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  useDisclosure,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Link,
  Text
} from "@chakra-ui/react";
import Image from "next/image";
import L2BL from "../app/assets/L2-BI.svg";
import icon_burger from "../app/assets/icon_buger.svg";
import { useRef } from "react";
import icon_close from "../app/assets/icon_close.svg";
import arrow from "../app/assets/mobile-caret-up.svg";
import { useState } from "react";
import github from "../app/assets/navi_icon_github_mobile.svg";
import explorer from "../app/assets/navi_icon_block-explorer_mobile.svg";
import guide from "../app/assets/navi_icon_guide_mobile.svg";
import grant from "../app/assets/navi_icon_granton_mobile.svg";
import bug from "../app/assets/navi_icon_bug-bounty_mobile.svg";
import discord from "../app/assets/navi_icon_discord_mobile.svg";
import kakao from "../app/assets/navi_icon_kakao_mobile.svg";
import telegram from "../app/assets/navi_icon_telegram_mobile.svg";
import twitter from "../app/assets/navi_icon_Twitter_mobile.svg";
import medium from "../app/assets/navi_icon_medium_mobile.svg";
import team from "../app/assets/navi_icon_team_mobile.svg";
import career from "../app/assets/navi_icon_career_mobile.svg";

function MobileHeader() {
  const theme = useTheme();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();
  const [menuStates, setMenuStates] = useState([false, false, false]);

  const handleMenuToggle = (index: number) => {
    const updatedMenuStates = [...menuStates];
    updatedMenuStates[index] = !updatedMenuStates[index];
    setMenuStates(updatedMenuStates);
  };

  const CustomLink = (props: any) => {
const {link, image, title} = props
    return (
      <Link
      // border={'1px solid red'}
     display={'flex'}
      href={link}
      isExternal
      height='50px' 
      alignItems={'center'}
      style={{ textDecoration: "none"}}
    >
      <Flex ml='30px'>
        <Flex mr="12px">
          <Image src={image} alt="icon" />
        </Flex>
        <Text fontFamily={theme.fonts.openSans} fontSize={'16px'} color={'#1c1c1c'}>
        {title}
        </Text>
       
      </Flex>
    </Link>
    )
  }

  return (
    <Flex
      bg="#fafbfc"
      h="78px"
      alignItems={"center"}
      justifyContent={"space-between"}
    >
      <Flex   _hover={{cursor:'pointer'}} height={"40px"} ml={"20px"} width={"126px"} zIndex={1001}>
        <Image src={L2BL} alt="tokamak_symbol" height={40} width={126}></Image>
      </Flex>
      <Flex zIndex={1001}>
        <Flex
          onClick={onOpen}
          h="48px"
          w="48px"
          borderRadius={"8px"}
          _hover={{cursor:'pointer'}}
          mr="20px"
          border="1px solid #e8edf2"
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Image src={icon_burger} alt="icon_burger" />
        </Flex>
        <Drawer isOpen={isOpen} placement="right" onClose={onClose} size={"xl"}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerHeader
              h={"78px"}
              alignItems={"center"}
              pr={"10px"}
              pl={"20px"}
              bg='#fff'
              py="19px"
              display={"flex"}
              flexDir={"row"}
              justifyContent={"space-between"}
            >
              <Flex height={"40px"} width={"133px"}  _hover={{cursor:'pointer'}}>
                <Image
                  src={L2BL}
                  alt="tokamak_symbol"
                  height={40}
                  width={126}
                ></Image>
              </Flex>
              {/* <DrawerCloseButton /> */}
              <Flex
                border={"1px solid #e8edf2"}
                height={"48px"}
                width={"48px"}
                justifyContent={"center"}
                alignItems={"center"}
                borderRadius={"8px"}
                mr="20px"
                _hover={{cursor:'pointer'}}
                onClick={onClose}
              >
                <Image
                  src={icon_close}
                  alt="icon_close"
                  height={32}
                  width={32}
                ></Image>
              </Flex>
            </DrawerHeader>

            <DrawerBody bg='#fff' fontFamily={theme.fonts.openSans} px="30px">
              <Link href="#ecosystem" onClick={onClose}>
              <Flex
                h="65px"
                fontSize={"20px"}
                fontWeight={600}
                color={"#1c1c1c"}
                alignItems={"center"}
              >
                Ecosystem
              </Flex>
              </Link>
              <Accordion allowToggle>
                <AccordionItem border={"none"}>
                  {({ isExpanded }) => (
                    <>
                      <h2>
                        <AccordionButton
                          // border={'1px solid red'}
                          p="0px"
                          bg="transparent"
                          _hover={{ bg: "transparent" }}
                          _focus={{ bg: "transparent" }}
                          _active={{ bg: "transparent" }}
                        >
                          <Flex
                            h="65px"
                            fontSize={"20px"}
                            fontWeight={600}
                            color={"#1c1c1c"}
                            alignItems={"center"}
                            onClick={() => handleMenuToggle(0)}
                            w="100%"
                            justifyContent={"space-between"}
                          >
                            Developers
                          </Flex>
                          {isExpanded ? (
                            <Flex
                              height={"24px"}
                              width={"24px"}
                              transition={"transform 0.2s"}
                            >
                              <Image src={arrow} alt="icon_arrow" />
                            </Flex>
                          ) : (
                            <Flex
                              height={"24px"}
                              width={"24px"}
                              transform={"rotate(180deg)"}
                              transition={"transform 0.2s"}
                            >
                              <Image src={arrow} alt="icon_arrow" />
                            </Flex>
                          )}
                        </AccordionButton>
                      </h2>
                      <AccordionPanel pb={4} flexDir={"column"} p="0px">
                        <Flex
                          h={"50px"}
                          fontFamily={theme.fonts.openSans}
                          fontSize={"16px"}
                          fontWeight={600}
                          alignItems={"center"}
                        >
                          MAINNET
                        </Flex>
                        <CustomLink image={github} link={'https://github.com/tokamak-network'} title={'Github'}/>
                        <CustomLink image={guide} link={'https://tokamaknetwork.gitbook.io/home/02-service-guide/titan'} title={'Guide'}/>
                        <CustomLink image={explorer} link={'https://explorer.titan.tokamak.network'} title={'Block Explorer'}/>
                        <Flex
                          h={"50px"}
                          fontFamily={theme.fonts.openSans}
                          fontSize={"16px"}
                          fontWeight={600}
                          alignItems={"center"}
                        >
                          TESTNET
                        </Flex>
                        <CustomLink image={guide} link={'https://onther.notion.site/Darius-L2-Testnet-Dev-Document-5023767f30754d21876b049da68f0128'} title={'Guide'}/>
                        <CustomLink image={explorer} link={'https://explorer.titan-goerli.tokamak.network/'} title={'Block Explorer'}/>
                        
                      </AccordionPanel>
                    </>
                  )}
                </AccordionItem>
                <Link href="https://tokamak.notion.site/Grant-Announcement-EN-503f8396ee604673b0023e0183810e75" onClick={onClose} isExternal>
              <Flex
                h="65px"
                fontSize={"20px"}
                fontWeight={600}
                color={"#1c1c1c"}
                alignItems={"center"}
              >
                Grant
              </Flex>
              </Link>

                <AccordionItem border={"none"}>
                  {({ isExpanded }) => (
                    <>
                      <h2>
                        <AccordionButton
                          p="0px"
                          bg="transparent"
                          _hover={{ bg: "transparent" }}
                          _focus={{ bg: "transparent" }}
                          _active={{ bg: "transparent" }}
                        >
                          <Flex
                            h="65px"
                            fontSize={"20px"}
                            fontWeight={600}
                            color={"#1c1c1c"}
                            alignItems={"center"}
                            onClick={() => handleMenuToggle(0)}
                            w="100%"
                            justifyContent={"space-between"}
                          >
                            More
                          </Flex>
                          {isExpanded ? (
                            <Flex
                              height={"24px"}
                              width={"24px"}
                              transition={"transform 0.2s"}
                            >
                              <Image src={arrow} alt="icon_arrow" />
                            </Flex>
                          ) : (
                            <Flex
                              height={"24px"}
                              width={"24px"}
                              transform={"rotate(180deg)"}
                              transition={"transform 0.2s"}
                            >
                              <Image src={arrow} alt="icon_arrow" />
                            </Flex>
                          )}
                        </AccordionButton>
                      </h2>
                      <AccordionPanel pb={4} flexDir={"column"} p="0px">
                        <Flex
                          h={"50px"}
                          fontFamily={theme.fonts.openSans}
                          fontSize={"16px"}
                          fontWeight={600}
                          alignItems={"center"}
                        >
                          ABOUT
                        </Flex>
                        <CustomLink image={team} link={'https://tokamak.network/about'} title={'Team'}/>
                        <CustomLink image={career} link={'https://medium.com/onther-tech/onther-looking-to-recruit-blockchain-contributor-984ea4368824'} title={'Career'}/>
                        <Flex
                          h={"50px"}
                          fontFamily={theme.fonts.openSans}
                          fontSize={"16px"}
                          fontWeight={600}
                          alignItems={"center"}
                        >
                          COMMUNITY
                        </Flex>
                        <CustomLink image={discord} link={'https://discord.com/invite/J4chV2zuAK'} title={'Discord'}/>
                        {/* <CustomLink image={kakao} link={'https://open.kakao.com/o/g2zlglHd'} title={'Kakao (KR)'}/> */}
                        <CustomLink image={telegram} link={'https://t.me/tokamak_network'} title={'Telegram (EN)'}/>
                        <CustomLink image={twitter} link={'https://twitter.com/tokamak_network'} title={'Twitter'}/>
                        <CustomLink image={medium} link={'https://medium.com/onther-tech'} title={'Medium'}/>                        
                      </AccordionPanel>
                    </>
                  )}
                </AccordionItem>
              </Accordion>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Flex>
    </Flex>
  );
}

export default MobileHeader;
