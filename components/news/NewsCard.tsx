import { Flex, Text, Link,useTheme } from "@chakra-ui/react";
import Image from "next/image";
import dayjs from 'dayjs'
import 'dayjs/locale/en'; 
import customFormat from 'dayjs/plugin/customParseFormat';
dayjs.extend(customFormat);
import useMediaView from "@/app/hooks/useMediaView";

type NewsProps = {
  thumb: string;
  link: string;
  title: string;
  content: string;
  pubDate: string;
};

function NewsCard(props: NewsProps) {
  const { thumb, link, title, content, pubDate } = props;
  const theme = useTheme();
  const { mobileView, tabletView, pcView } = useMediaView();

  const myLoader = ({ src }: any) => {
    return `${src}`;
  };

  return (
    <Flex
      w={mobileView? '320px':tabletView? '355px':"380px"}
      h={tabletView?'421px':"100%"}
      fontFamily={theme.fonts.openSans}
      mr={mobileView? '0px':"0px"}
      mb={mobileView? '36px':tabletView? '45px':"20px"}
      flexDir={"column"}
      as={"a"}
      href={link}
      target="blank"
    >
      <Flex borderRadius={'16px'}
        width={mobileView? 320:tabletView?  355:380}
        height={mobileView?179:tabletView? 199:213}
        >
      <Image
        loader={myLoader}
        src={thumb}
        alt="thumb"
        style={{objectFit: "contain", borderRadius:'16px'}}
        width={mobileView? 320:tabletView? 355: 380}
        height={mobileView?179:tabletView?199:213}
        unoptimized={true}
        priority
     
      />
      </Flex>
     <Text color={'#7a7e87'} fontSize={'12px'} mt='21px'>{ dayjs(pubDate, 'YYYY-MM-DD HH:mm:ss').locale('en').format('MMMM DD, YYYY')}</Text>
      <Text mt='9px' color={'#464d59'} fontSize={'16px'} fontWeight={800}>{title}</Text>
   <Text fontSize={'13px'} mt='15px' color={'#7a7e87'}>{`${content} ...`}</Text>
    </Flex>
  );
}

export default NewsCard;
