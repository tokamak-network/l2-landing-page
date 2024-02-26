import { Flex, Text, Link, useTheme } from "@chakra-ui/react";
import Image from "next/image";
import dayjs from "dayjs";
import "dayjs/locale/en";
import customFormat from "dayjs/plugin/customParseFormat";
dayjs.extend(customFormat);
import useMediaView from "@/app/hooks/useMediaView";

type NewsProps = {
  thumb: string;
  link: string;
  title: string;
  content: string;
  pubDate: string;
  num: number;
};

function NewsCard(props: NewsProps) {
  const { thumb, link, title, content, pubDate, num } = props;
  const theme = useTheme();
  const { mobileView, tabletView, pcView } = useMediaView();

  const myLoader = ({ src }: any) => {
    return `${src}`;
  };
  

  return (
    <Flex
      w={["320px", "320px", "355px", "355px", "380px", "380px"]}
      h={tabletView ? "200px" : "100%"}
      fontFamily={theme.fonts.openSans}
      mr={mobileView ? "0px" : num === 8 ? "0px" : "30px"}
      mb={mobileView ? "36px" : tabletView ? "45px" : "20px"}
      flexDir={"column"}
      as={"a"}
      href={link}
      target="blank"
    >
      {/* <Flex
        borderRadius={"16px"}
        border={"1px solid #dfe4ee"}
        width={mobileView ? 320 : tabletView ? 355 : 380}
        height={mobileView ? 179 : tabletView ? 199 : 213}
      >
        <Image
          loader={myLoader}
          src={thumb}
          alt="thumb"
          style={{ objectFit: "cover", borderRadius: "16px" }}
          width={mobileView ? 320 : tabletView ? 355 : 380}
          height={mobileView ? 179 : tabletView ? 199 : 213}
          unoptimized
          priority
        />
      </Flex> */}
      <Text color={"#7a7e87"} fontSize={"12px"} mt="21px" fontWeight={600}>
        {dayjs(pubDate, "YYYY-MM-DD HH:mm:ss")
          .locale("en")
          .format("MMMM DD, YYYY")}
      </Text>
      <Text
        mt="9px"
        color={"#464d59"}
        fontSize={"16px"}
        fontWeight={800}
      
        width={mobileView ? 320 : tabletView ? 355 : 380}
        whiteSpace={'nowrap'}
        textOverflow={"ellipsis"}
        overflow={'hidden'}
      >
        {title}
      </Text>
      <Text
        fontSize={"13px"}
        mt="15px"
        color={"#7a7e87"}
        whiteSpace={'normal'}
        textOverflow={"ellipsis"}
        overflow={'hidden'}
      >{`${content} ...`}</Text>
    </Flex>
  );
}

export default NewsCard;
