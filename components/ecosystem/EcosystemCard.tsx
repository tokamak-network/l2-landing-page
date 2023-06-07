import { Flex, Text, useTheme } from "@chakra-ui/react";
import Image from "next/image";
import useMediaView from "@/app/hooks/useMediaView";

type EcoProps = {
  image: any;
  title: string;
  content: string;
  url: string;
  status: string;
  num:number
};

function EcosystemCard(props: EcoProps) {
  const { image, title, content, url, status, num } = props;
  const theme = useTheme();
  const { mobileView, tabletView, pcView } = useMediaView();

  return (
    <Flex
      fontFamily={theme.fonts.openSans}
      w={['320px','320px','355px','355px','380px','380px']}
      height={['192px','192px', "212px","212px","212px","212px"]}
      border="solid 1px #f5f5f5"
      borderRadius={"16px"}
      p="20px"
      _hover={{ boxShadow: "0 3px 8px 0 rgba(49, 127, 203, 0.25)" }}
      mr={mobileView ? "0px" : (num+1) % 6 === 0 ||(num+2) % 6 === 0 ? '0px':"30px"}
      mb="30px"
      flexDir={"column"}
    >
      <Flex mb="21px">
        <Flex
          h="64px"
          w="64px"
          border={"1px solid #f5f5f5"}
          mr="20px"
          borderRadius={"16px"}
        >
          <Image src={image} alt="" />
        </Flex>
        <Flex flexDir={"column"}>
          <Text
            lineHeight={1.25}
            mb="4px"
            fontWeight={"bold"}
            fontSize={"16px"}
            color={"#464d59"}
          >
            {title} {num+1} { ((num+1) % 6 === 0 ||(num+2) % 6 === 0 ).toString()}
          </Text>
          <Text
            lineHeight={1.67}
            mb="4px"
            fontWeight={600}
            fontSize={"12px"}
            color={"#7a7e87"}
          >
            {url}
          </Text>
          <Text
            fontWeight={"normal"}
            mb="4px"
            fontSize={"10px"}
            color={"#cccccc"}
          >
            {status}
          </Text>
        </Flex>
      </Flex>
      <Text mb="4px" fontWeight={"normal"} fontSize={"13px"} color={"#7a7e87"}>
        {content}
      </Text>
    </Flex>
  );
}

export default EcosystemCard;
