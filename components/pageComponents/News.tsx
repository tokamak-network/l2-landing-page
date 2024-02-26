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
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import Slider from "react-slick";
import useMediaView from "@/app/hooks/useMediaView";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function News() {
  const postList: any = usePosts();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentIndexTab, setCurrentIndexTab] = useState(0);

  const totalCards = postList.length;
  const theme = useTheme();
  const { mobileView, tabletView, pcView } = useMediaView();
  const [pageIndex, setPageIndex] = useState<number>(1);
  const [pageLimit, setPageLimit] = useState<number>(2);

  const parsing = (content: string) => {
    const start = content.indexOf("<p>");
    const end = content.indexOf("</p>") + 4;
    const parsed = content.slice(start, end);

    if (parsed.indexOf("You can find the") !== -1) {
      const xx = content.replace(parsed, "");
      const start2 = xx.indexOf("<p>");
      const end2 = xx.indexOf("</p>");
      const parsed2 = xx.slice(start2 + 3);

      return parsed2.slice(0, 200).replace(/(<([^>]+)>)/gi, "");
    } else {
      return parsed.slice(0, 200).replace(/(<([^>]+)>)/gi, "");
    }
  };

  const tabSettings = {
    accessibility: true,
    speed: 500,
    variableWidth: true,
    swipeToSlide: false,
    infinite: false,
    dots: true,
    slidesToShow: 2,
    initialSlide: 0,
    slidesToScroll: 2,
    arrows: false,
    rows: 2,
    // infinite: true,
    beforeChange: (next: any) => setCurrentIndexTab(next),
    afterChange: (current: any) => setCurrentIndexTab(current),
  };

  const settings = {
    accessibility: true,
    speed: 500,
    variableWidth: true,
    swipeToSlide: false,
    infinite: false,
    dots: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: false,
   
    beforeChange: (next: any) => setCurrentIndex(next),
    afterChange: (current: any) => setCurrentIndex(current),
  };

  const getPaginatedData = () => {
    const startIndex = 0;
    const endIndex = startIndex + pageLimit * pageIndex;
    return postList.slice(startIndex, endIndex);
  }; 

  const slickerStyles = tabletView
    ?
     `
   .slick-slider{
    width:  800px !important;
  }
  .slick-list {
    margin-left: 30px
  }
  .slick-slide{
    height: 420px;
    margin-bottom: 60px;
    width: 385px
  }
  .slick-slide slick-active{
    width: 355px !important
  }
  .slick-dots{
    position: relative;
    display: flex !important;
    justify-content: center
  }
  .slick-dots li {
    // height: 9px;
    width: 9px
  }
  .slick-dots li button {
    width: 9px;
    height: 9px;
    padding: 0px
  }
  .slick-dots li button:before {
    color: #dfe4ee;
    opacity: 1;
    width: 9px;
    height: 9px;
    padding: 0px
  }
  .slick-dots li.slick-active button:before{
    color: #2a72e5;
    opacity: 1;
    width: 9px;
    height: 9px;
    padding: 0px
  }
  `
    : `
    .slider2 {
      width:  1240px;
      padding-left:15px;
      .slick-slider{
        width:  1200px;
      }
      .slick-list {
        //  margin-left: 20px
      }
      .slick-slide{
        height: 170px;
        margin-bottom: 60px;
      }
      .slick-slide slick-active{
        width: 380px !important
      }
      .slick-dots{
        display:flex;
        margin-top:60px !important;
      }
      .slick-dots li {
        // height: 9px;
        width: 9px
      }
      .slick-dots li button {
        width: 9px;
        height: 9px;
        padding: 0px
      }
      .slick-dots li button:before {
        color: #dfe4ee;
        opacity: 1;
        width: 9px;
        height: 9px;
        padding: 0px
      }
      .slick-dots li.slick-active button:before{
        color: #2a72e5;
        opacity: 1;
        width: 9px;
        height: 9px;
        padding: 0px
      }
    }
   
  `;


  return (
    <Flex
      justifyContent={"center"}
      alignItems={"center"}
      flexDir={"column"}
      height={"100%"}
      pb='60px'
      zIndex={10}
      mt={['120px','120px','150px','150px','180px','180px' ]}
    >
      <Text
        fontSize={mobileView ? "32px" : "36px"}
        fontFamily={theme.fonts.openSans}
        fontWeight={"bold"}
        // w="104px"
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
        mb={mobileView ? "50px" : "60px"}
      >
        Check our latest News to stay up to date{" "}
      </Text>
      {mobileView ? (
        <Flex
          flexDir={"column"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          {getPaginatedData().map((post: any, index: number) => (
            <NewsCard
            key={post.title}
            num={index}
              thumb={post.thumbnail}
              link={post.link}
              title={post.title}
              content={parsing(post.content)}
              pubDate={post.pubDate}
            />
          ))}
        {postList.length > getPaginatedData().length &&  <Button
            bg="transparent"
            border={"1px solid #dfe4ee"}
            _focus={{ bg: "transparent" }}
            _active={{ bg: "transparent" }}
            height={"29px"}
            width={"96px"}
            borderRadius={"24px"}
            onClick={() => setPageIndex(pageIndex + 1)}
          >
            More
          </Button>}
        </Flex>
      ) : tabletView ? (
        <Flex alignItems="center">
          <style>{slickerStyles}</style>
          {postList.length > 0 && (
            <Slider {...tabSettings} >
              {postList.slice(0, 8).map((post: any, index: number) => (
                <NewsCard
                  key={post.title}
                  num={index}
                  thumb={post.thumbnail}
                  link={post.link}
                  title={post.title}
                  content={parsing(post.content)}
                  pubDate={post.pubDate}
                />
              ))}
            </Slider>
          )}
        </Flex>
      ) : (
        <Flex alignItems="center">
          <style>{slickerStyles}</style>
          <Slider {...settings} className="slider2">
            {postList.slice(0, 9).map((post: any, index: number) => (
              <NewsCard
              key={post.title}
              num={index}
                thumb={post.thumbnail}
                link={post.link}
                title={post.title}
                content={parsing(post.content)}
                pubDate={post.pubDate}
              />
            ))}
          </Slider>
        </Flex>
      )}
    </Flex>
  );
}

export default News;
