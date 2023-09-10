import { Flex, Text, useTheme } from "@chakra-ui/react";
import Image from "next/image";
import RollupAnime from "../animations/RollupAnime";
import OptimismAnime from "../animations/Optimism/OptimismAnime";
import FeeAnimation from "../animations/Fee/FeeAnimation";
import { useMemo } from "react";
import RollupAnimation from "../animations/Rollup/RollupAnimation";
type MissionProps = {
  image: any;
  title: string;
  content: string;
  num: number;
};

function MissionCard(props: MissionProps) {
  const { image, title, content, num } = props;
  const theme = useTheme();

  const animeComp = useMemo(() => {
    switch (num) {
      case 0:
        return <RollupAnimation />;
      case 1:
        return <FeeAnimation />;
      case 2:
        return <OptimismAnime />;
    }
  }, [num]);

  return (
    <Flex
      // border={"1px solid red"}
      w="100%"
      h="100%"
      mb="60px"
      mr={
        title === "Powered by OPTIMISM"
          ? "0px"
          : ["0px", "0px", "30px", "30px", "30px", "30px"]
      }
      flexDir={"column"}
      alignItems={"center"}
      // p="20px"
    >
      {/* <Flex w="140px" h="140px"  mb="30px">
       
        <Image src={image} alt='image'/>
      </Flex> */}
      {animeComp}

      <Text
        mb="14px"
        fontWeight={600}
        fontSize={"20px"}
        color="#1c1c1c"
        fontFamily={theme.fonts.openSans}
      >
        {title}
      </Text>
      {title !== "Improved Fee" ? (
        <Text
          w={["100%", "100%", "226px", "226px", "380px", "380px"]}
          fontSize={"14px"}
          px={["20px", "20px", "0px", "0px", "0px", "0px"]}
          color="#7a7e87"
          fontFamily={theme.fonts.openSans}
        >
          {content}
        </Text>
      ) : (
        <Text  w={["100%", "100%", "226px", "226px", "380px", "380px"]}
        fontSize={"14px"}
        px={["20px", "20px", "0px", "0px", "0px", "0px"]}
        color="#7a7e87"
        fontFamily={theme.fonts.openSans}>
          Titan automatically relays L2-{">"}L1 messages on L1 after a 7-day challenge period (<a href="https://medium.com/onther-tech/titan-network-shutdown-notice-for-auto-relay-service-5f9b8616e20a" target="_blank" style={{textDecoration:'underline', cursor:'pointer'}}>deprecated now</a>). It also offers flexible transaction schemes, allowing users to pay in ETH and ERC20 tokens such as TON.
          {/* Titan automatically relays L2-{">"}L1 standard messages without having to pay additional fee on L1 after 7 days wait (this service is <a href="https://medium.com/onther-tech/titan-network-shutdown-notice-for-auto-relay-service-5f9b8616e20a" target="_blank" style={{textDecoration:'underline', cursor:'pointer'}}>deprecated</a>). It also offers flexible transaction scheme that allows users to pay for transaction costs not just in ETH but in ERC20 tokens such as TON. */}
        </Text>
      )}
    </Flex>
  );
}

export default MissionCard;
