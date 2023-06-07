"use client";

import { Flex, Link, Text, useTheme } from "@chakra-ui/react";
import MissionCard from "../mission/MissionCard";
import useMediaView from "@/app/hooks/useMediaView";
import rollup from "../../app/assets/Rollup.svg";
import optimism from "../../app/assets/Optimism.svg";
import fee from "../../app/assets/Fee.svg";
function Mission() {
  const theme = useTheme();
  const { mobileView, tabletView, pcView } = useMediaView();

  return (
    <Flex
      justifyContent={"center"}
      alignItems={"center"}
      // border={'1px solid blue'}
      flexDir={"column"}
      // mx="150px"
    >
      <Text
        mt={["90px", "90px", "120px", "120px", "120px", "120px"]}
        fontSize={ ["32px",'32px','36px','36px','36px', "36px"]}
        fontFamily={theme.fonts.openSans}
        fontWeight={"bold"}
        // w="104px"
        letterSpacing={"wider"}
        mb="20px"
        color={"#1c1c1c"}
      >
        Mission
      </Text>
      <Text
        fontSize={"16px"}
        fontFamily={theme.fonts.openSans}
        color={"#7a7e87"}
        w={['320px', '320px','100%','100%','100%','100%']}
        mb={ "60px"}
        textAlign={'center'}
      >
       Darius is committed to delivering a seamless L2 experience for all users and dapps
      </Text>

      <Flex mt="30px" justifyContent={mobileView? 'center':"space-between"} alignItems={['center','center','flex-start','flex-start','flex-start','flex-start']} flexDir={['column', 'column','row','row','row','row']}>
        <MissionCard
          image={rollup}
          title={"Rollup Security"}
          content="Darius is a secure and scalable blockchain platform designed for decentralized applications. It utilizes Ethereum L1’s proven security measures and rollup technology, which posts all transaction data and every state root to Ethereum L1."
        />
        <MissionCard
          image={fee}
          title={"Improved Fee"}
          content="In addition to lower transaction fee, Darius also offers flexible transaction scheme that allows users to pay for transaction costs not just in ETH but in ERC20 tokens such as TON."
        />
        <MissionCard
          image={optimism}
          title={"Powered by OPTIMISM"}
          content="Darius is a customized fork of the Optimism code base, aimed at building and improving upon an already great software. Our development team is committed to continuously integrating new features and improving existing ones."
        />
      </Flex>
    </Flex>
  );
}

export default Mission;
