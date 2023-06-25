import { Flex, Text, useTheme } from "@chakra-ui/react";
import Image from "next/image";
import RollupAnime from "../animations/RollupAnime";
import OptimismAnime from "../animations/Optimism/OptimismAnime";
import FeeAnime from "../animations/Fee/FeeAnime";
import { useMemo } from "react";

type MissionProps = {
  image: any;
  title: string;
  content: string;
  num: number
};

function MissionCard(props: MissionProps) {
  const { image, title, content, num } = props;
  const theme = useTheme();

  const animeComp = useMemo(() => {
    switch (num) {
case 1: 
<FeeAnime/>
      case 2: 
      return <OptimismAnime />

    }
  },[num])

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
      <Text
        w={["320px", "320px", "226px", "226px", "380px", "380px"]}
        fontSize={"14px"}
        color="#7a7e87"
        fontFamily={theme.fonts.openSans}
      >
        {content}
      </Text>
    </Flex>
  );
}

export default MissionCard;
