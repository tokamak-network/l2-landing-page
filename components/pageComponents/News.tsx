"use client";

import {
  Flex,
  Link,
  Text,
  useTheme,
  Box,
  IconButton,
  Button,
  Icon
} from "@chakra-ui/react";
import NewsCard from "../news/NewsCard";
import usePosts from "@/app/hooks/usePosts";
import Image from "next/image";
import { useEffect, useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function News() {
  const postList: any = usePosts();
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalCards = postList.length;

const parsing = (content:string) => {
  const start = content.indexOf("<p>");
      const end = content.indexOf("</p>");
      const parsed = content.slice(start + 3, end);

      if (parsed.length > 300) {
        return parsed.slice(0, 300).replace(/(<([^>]+)>)/gi, "");
      }

      return parsed.replace(/(<([^>]+)>)/gi, "");
}

console.log('postList',postList);

  return (
    <Flex
      h="945px"
      justifyContent={"center"}
      alignItems={"center"}
      flexDir={"column"}
    
    >
      <Text fontSize={"40px"} fontWeight={"bold"}>
        News
      </Text>
      <Text>Check our latest News to stay up to date </Text>
     
      {/* <Flex mt="50px">
        <IconButton
          aria-label="Previous Slide"
          icon={<ChevronLeftIcon />}
          onClick={handleClickPrev}
          transform="translateY(-50%)"
          zIndex="1"
        />
        <IconButton
          aria-label="Next Slide"
          icon={<ChevronRightIcon />}
          onClick={handleClickNext}
          transform="translateY(-50%)"
          zIndex="1"
        />
      </Flex> */}

     <Flex flexDir={'row'} flexWrap={'wrap'}>
    
      {postList.slice(0,3).map((post: any, index: number) => (
       
              <NewsCard
              key={index}
                thumb={post.thumbnail}
                link={post.link}
                title={post.title}
                content={ parsing(post.content)}
                pubDate={post.pubDate}
              />
           
          ))}
        
    
     </Flex>
     
     
      
    </Flex>
  );
}

export default News;
