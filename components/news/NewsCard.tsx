import { Flex, Text, Link,useTheme } from "@chakra-ui/react";
import Image from "next/image";
import dayjs from 'dayjs'
import 'dayjs/locale/en'; 
import customFormat from 'dayjs/plugin/customParseFormat';
dayjs.extend(customFormat);

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
  const myLoader = ({ src }: any) => {
    return `${src}`;
  };

  return (
    <Flex
      w="380px"
      h="309px"
      fontFamily={theme.fonts.openSans}
      mr="100px"
      mb="20px"
      flexDir={"column"}
      as={"a"}
      href={link}
      target="blank"
    >
      <Flex borderRadius={'16px'}
        width={380}
        height={213}
        >
      <Image
        loader={myLoader}
        src={thumb}
        alt="thumb"
        style={{objectFit: "contain", borderRadius:'16px'}}
        width={380}
        height={213}
     
      />
      </Flex>
     <Text color={'#7a7e87'} fontSize={'12px'} mt='21px'>{ dayjs(pubDate, 'YYYY-MM-DD HH:mm:ss').locale('en').format('MMMM DD, YYYY')}</Text>
      <Text mt='9px' color={'#464d59'} fontSize={'16px'} fontWeight={800}>{title}</Text>
   <Text>{content}</Text>
    </Flex>
  );
}

export default NewsCard;
