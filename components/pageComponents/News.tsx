"use client";

import {
  Flex,
  Link,
  Text,
  useTheme,
  Box,
  IconButton,
  Button,
  Icon,
} from "@chakra-ui/react";
import NewsCard from "../news/NewsCard";
import usePosts from "@/app/hooks/usePosts";
import Image from "next/image";
import { useEffect, useState } from "react";
import Slider from "react-slick";
import { motion,useMotionValue, useTransform  } from 'framer-motion';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function News() {
  const postList: any = usePosts();
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalCards = postList.length;
  const theme = useTheme();
  const [activeIndex, setActiveIndex] = useState(0);
  const slideWidth = 102.5;
  const slideContainerRef = useMotionValue(0);
  const slideContainerTransform = useTransform(
    slideContainerRef,
    [0, slideWidth * (postList.length - 1)],
    ['0%', `-${slideWidth * (postList.length - 1)}%`]
  );
  
  const parsing = (content: string) => {
    const start = content.indexOf("<p>");
    const end = content.indexOf("</p>") + 4;
    const parsed = content.slice(start, end);

    if (parsed.indexOf("You can find the") !== -1) {
      const xx = content.replace(parsed, "");
      const start2 = xx.indexOf("<p>");
      const end2 = xx.indexOf("</p>");
      const parsed2 = xx.slice(start2 + 3);

      return parsed2.slice(0, 300).replace(/(<([^>]+)>)/gi, "");
    } else {
      return parsed.slice(0, 300).replace(/(<([^>]+)>)/gi, "");
    }
  };
  const handleDrag = ( offset:any) => {
    const distance = offset.x / slideWidth;
    const currentIndex = activeIndex - Math.round(distance);

    slideContainerRef.set(-currentIndex * slideWidth);
  };
  const handleDragEnd = (offset:any, velocity:any ) => {
    const distance = offset.x / slideWidth;

    if (Math.abs(distance) > 0.5 || Math.abs(velocity.x) > 200) {
      const currentIndex = activeIndex - Math.round(distance);

      setActiveIndex((prevIndex) => {
        if (currentIndex < 0) {
          return postList.length - 1;
        } else if (currentIndex >= postList.length) {
          return 0;
        } else {
          return currentIndex;
        }
      });
    }

    slideContainerRef.set(-activeIndex * slideWidth);
  };




  const styleOn = `
  .carousel {
    position: relative;
    width: 1200px;
    overflow: hidden;
  }

  .slides-container {
    display: flex;
    width: 1200px; /* Adjust as needed based on slide width */
    transition: transform 0.5s;
    height: 460px
  }

  .slides {
    display: flex;
    width: 100%;
  }

  .slide {
    flex: 0 0 33.33%; /* Adjust as needed to show three slides */
    /* Add your styles for the slide here */
  }

  .dots {
    display: flex;
    justify-content: center;
    margin-top: 10px;
  }

  .dot {
    width: 10px;
    height: 10px;
    margin: 0 5px;
    background-color: #bbb;
    border-radius: 50%;
    cursor: pointer;
  }

  .dot.active {
    background-color: #333;
  }

  .prev,
  .next {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    padding: 10px;
    background-color: #333;
    color: #fff;
    border: none;
    cursor: pointer;
  }

  .prev {
    left: 10px;
  }

  .next {
    right: 10px;
  }
`
  return (
    <Flex
      h="945px"
      justifyContent={"center"}
      alignItems={"center"}
      flexDir={"column"}
    >
      <Text
        fontSize={"36px"}
        fontFamily={theme.fonts.openSans}
        fontWeight={"bold"}
        w="104px"
        letterSpacing={"wider"}
        mb="20px"
        color={"#1c1c1c"}
      >
        News
      </Text>
      <Text
        fontSize={"16px"}
        fontFamily={theme.fonts.openSans}
        fontWeight={"normal"}
        color={"#7a7e87"}
        mb="60px"
      >
        Check our latest News to stay up to date{" "}
      </Text>

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

      {/* <Flex flexDir={"row"} flexWrap={"wrap"}>
        {postList.slice(0, 3).map((post: any, index: number) => (
          <NewsCard
            key={index}
            thumb={post.thumbnail}
            link={post.link}
            title={post.title}
            content={parsing(post.content)}
            pubDate={post.pubDate}
          />
        ))}
      </Flex> */}
        <style>{styleOn}</style>
       <div className="carousel">
      <div className="slides-container">
        <motion.div
          className="slides"
          style={{ transform: `translateX(-${activeIndex * 102.5}%)` }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {postList.map((post:any, index:number) => (
            <div key={index} className="slide">
             <NewsCard
          
            thumb={post.thumbnail}
            link={post.link}
            title={post.title}
            content={parsing(post.content)}
            pubDate={post.pubDate}
          />
            </div>
          ))}
        </motion.div>
      </div>

      <div className="dots">
        {[...Array(parseInt((postList.length/3).toString()))].map((slide:any, index:number) => (
          <button
            key={index}
            className={`dot ${index === activeIndex ? 'active' : ''}`}
            onClick={() => setActiveIndex(index)}
          />
        ))}
      </div>
    </div>

    </Flex>
  );
}

export default News;
