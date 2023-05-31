import { Flex, Text, Link } from "@chakra-ui/react";
import Image from "next/image";

type NewsProps = {
  thumb: string;
  link: string;
  title: string;
  content: string;
  pubDate: string;
};

function NewsCard(props: NewsProps) {
  const { thumb, link, title, content, pubDate } = props;
  const myLoader = ({ src }: any) => {
    return `${src}`;
  };

  return (
    <Flex
      w="356px"
      h="309px"
      border={"1px solid red"}
      mr="100px"
      mb="20px"
      flexDir={"column"}
      as={"a"}
      href={link}
      target="blank"
    >
      <Image
        loader={myLoader}
        src={thumb}
        alt="thumb"
        width={356}
        height={140}
     
      />
      <Text>{title}</Text>
    </Flex>
  );
}

export default NewsCard;
