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

  const NextButton = (props: any) => (
    <Button
    {...props}
      className="slick-arrow"
      position="absolute"
      top="-10%"
      right="-30px"
      zIndex="1"
      transform="translateY(-50%)"

    >
      Next
    </Button>
  );
  
  const PrevButton = (props: any) => {

    return (
      <Button
    {...props}
      className="slick-arrow"
      position="absolute"
      top="50%"
      left="-30px"
      zIndex="1"
      transform="translateY(-50%)"
      
    >
      Previous
    </Button>
    )
    
    
  };


  const settings = {
    accessibility: true,   
    speed: 500,
    variableWidth: true,
    swipeToSlide: false,
    centerMode: false,
    centerPadding: "160px",
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    beforeChange: (next: any) => setCurrentIndex(next),
    afterChange: (current: any) => setCurrentIndex(current),
    nextArrow: (<NextButton/>),
    prevArrow:( <PrevButton />),
  };

  const slickerStyles = `

  .slick-slider{
    width: 1300px;
    display: flex !important;
    align-items: center;

  }
  
  `

  return (
    <Flex
      h="945px"
      justifyContent={"center"}
      alignItems={"center"}
      flexDir={"column"}
      mx="150px"
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

     <Flex  alignItems="center" mx={'15px'}>
     <style>{slickerStyles}</style>
     <Slider {...settings}>
      {postList.map((post: any, index: number) => (
       
              <NewsCard
              key={index}
                thumb={post.thumbnail}
                link={post.link}
                title={post.title}
                content={post.content}
                pubDate={post.pubDate}
              />
           
          ))}
        
      </Slider>
     </Flex>
     
     
      
    </Flex>
  );
}

export default News;
