import { Flex, Box, Text, useTheme, Button, Link } from "@chakra-ui/react";
import blue1 from "../app/assets/introAnimation/Blue1.svg";
import blue0 from "../app/assets/introAnimation/Blue0.svg";
import blue2 from "../app/assets/introAnimation/Blue2.svg";
import blue3 from "../app/assets/introAnimation/Blue3.svg";
import blue4 from "../app/assets/introAnimation/Blue4.svg";
import blue5 from "../app/assets/introAnimation/Blue5.svg";
import blue6 from "../app/assets/introAnimation/Blue6.svg";
import blue7 from "../app/assets/introAnimation/Blue7.svg";
import blue8 from "../app/assets/introAnimation/Blue8.svg";
import blue9 from "../app/assets/introAnimation/Blue9.svg";
import blue10 from "../app/assets/introAnimation/Blue10.svg";
import blue11 from "../app/assets/introAnimation/Blue11.svg";
import blue12 from "../app/assets/introAnimation/Blue12.svg";
import blue13 from "../app/assets/introAnimation/Blue13.svg";
import blue14 from "../app/assets/introAnimation/Blue14.svg";
import blue15 from "../app/assets/introAnimation/Blue15.svg";
import blue16 from "../app/assets/introAnimation/Blue16.svg";
import blue17 from "../app/assets/introAnimation/Blue17.svg";
import blue18 from "../app/assets/introAnimation/Blue18.svg";
import blue19 from "../app/assets/introAnimation/Blue19.svg";
import blue20 from "../app/assets/introAnimation/Blue20.svg";
import blue21 from "../app/assets/introAnimation/Blue21.svg";
import blue22 from "../app/assets/introAnimation/Blue22.svg";
import blue23 from "../app/assets/introAnimation/Blue23.svg";
import blue24 from "../app/assets/introAnimation/Blue24.svg";
import blue25 from "../app/assets/introAnimation/Blue25.svg";
import blue26 from "../app/assets/introAnimation/Blue26.svg";
import blue27 from "../app/assets/introAnimation/Blue27.svg";
import blue28 from "../app/assets/introAnimation/Blue28.svg";

import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import { useMemo } from "react";
import useMediaView from "@/app/hooks/useMediaView";

function BlueAnimations() {
  const { mobileView, tabletView, pcView } = useMediaView();
  const items = [
    {
      src: blue0,
      top: "130px",
      left: "6.9%",
    },
    {
      src: blue1,
      top: "-10.2px",
      left: "10.4%",
    },
    {
      src: blue2,
      top: "99.6px",
      left: "10%",
    },
    {
      src: blue3,
      top: "20.5px",
      left: "17.9%",
    },
    {
      src: blue4,
      top: "0px",
      left: "2.6%",
    },
    {
      src: blue5,
      top: "61.7px",
      left: "-1%",
    },
    {
      src: blue6,
      top: "-70px",
      left: "12.4%",
    },
    {
      src: blue7,
      top: "28.8px",
      left: "16.2%",
    },
    {
      src: blue8,
      top: "0px",
      left: "5.6%",
    },
    {
      src: blue9,
      top: "-620.4px",
      left: "25%",
    },
    {
      src: blue10,
      top: "502px",
      left: "24.7%",
    },
    {
      src: blue11,
      top: "-678px",
      left: "29.5%",
    },
    {
      src: blue12,
      top: "389.6px",
      left: "27.1%",
    },
    {
      src: blue13,
      top: "26.2px",
      left: "37%",
    },
    {
      src: blue14,
      top: "-590px",
      left: "41.4%",
    },
    {
      src: blue15,
      top: "-41.3px",
      left: "44.4%",
    },
    {
      src: blue16,
      top: "410.8px",
      left: "40.3%",
    },
    {
      src: blue17,
      top: "4px",
      left: "46.7%",
    },
    {
      src: blue18,
      top: "-194.4px",
      left: "60.8%",
    },
    {
      src: blue19,
      top: "-520px",
      left: "64.9%",
    },
    {
      src: blue20,
      top: "0px",
      left: "69.4%",
    },
    {
      src: blue21,
      top: "-47.9px",
      left: "75.2%",
    },
    {
      src: blue22,
      top: "143.6px",
      left: "80.3%",
    },
    {
      src: blue23,
      top: "230.3px",
      left: "70.9%",
    },
    {
      src: blue24,
      top: "-580.9px",
      left: "81.9%",
    },
    {
      src: blue25,
      top: "237.7px",
      left: "79.6%",
    },
    {
      src: blue26,
      top: "-7px",
      left: "82.8%",
    },
    {
      src: blue27,
      top: "-870px",
      left: "85%",
    },
    {
      src: blue28,
      top: "560.2px",
      left: "89.9%",
    },
  ];

  const tabletItems = [
    {
      src: blue14,
      top: "96.4px",
      left: "9.8%",
    },
    {
      src: blue11,
      top: "2.6px",
      left: "-3.8%",
    },
    {
      src: blue12,
      top: "379.6px",
      left: "-7.8%",
    },
    {
      src: blue13,
      top: "66.2px",
      left: "9.4%",
    },
    {
      src: blue15,
      top: "-664.9px",
      left: "17%",
    },
    {
      src: blue16,
      top: "450.8px",
      left: "17.4%",
    },
    {
      src: blue17,
      top: "4px",
      left: "32.5%",
    },
    {
      src: blue19,
      top: "-625.7px",
      left: "82.6%",
    },
    {
      src: blue20,
      top: "0px",
      left: "93.7%",
    },
    {
      src: blue22,
      top: "108.9px",
      left: "97.6%",
    },
    {
      src: blue18,
      top: "121.2px",
      left: "84.1%",
    },
    {
      src: blue23,
      top: "77.6px",
      left: "88.1%",
    },
  ];

  const mobileItems = [
    {
      src: blue14,
      top: "103.4px",
      left: "-6%",
    },
    {
      src: blue16,
      top: "490.3px",
      left: "-18%",
    },
    {
      src: blue15,
      top: "-605.5px",
      left: "7.5%",
    },
    {
      src: blue17,
      top: "521.7px",
      left: "19.4%",
    },
    {
      src: blue19,
      top: "-617.7px",
      left: "91.5%",
    },
    {
      src: blue18,
      top: "310.1px",
      left: "91.7%",
    },
    {
      src: blue23,
      top: "125.3px",
      left: "90.2%",
    },
  ];

  const imgAnimation = useAnimation();

  const animArray = [
    useAnimation(),
    useAnimation(),
    useAnimation(),
    useAnimation(),
    useAnimation(),
    useAnimation(),
    useAnimation(),
    useAnimation(),
    useAnimation(),
    useAnimation(),
    useAnimation(),
    useAnimation(),
    useAnimation(),
    useAnimation(),
    useAnimation(),
    useAnimation(),
    useAnimation(),
    useAnimation(),
    useAnimation(),
    useAnimation(),
    useAnimation(),
    useAnimation(),
    useAnimation(),
    useAnimation(),
    useAnimation(),
    useAnimation(),
    useAnimation(),
    useAnimation(),
  ];

  const handleMouseMove = (e: any, index?: number) => {
    const { clientX, clientY } = e;
    const randomNumbers = [
      27, 39, 42, 30, 31, 37, 40, 44, 36, 41, 46, 45, 35, 49, 50, 25, 34, 33,
      32, 29, 48, 26, 28, 38, 47, 43,
    ];
    const moveX = clientX - window.innerWidth / 2;
    const moveY = clientY - window.innerHeight / 2;

    imgAnimation.start({
      x: -(moveX / 88),
      y: -(moveY / 88),
    });
    animArray.forEach((anime: any, index: number) => {
      anime.start({
        x: -(moveX / randomNumbers[index]),
        y: -(moveY / randomNumbers[index]),
      });
    });
  };

  const arrayItems = useMemo(() => {
    if (mobileView) {
      return mobileItems;
    } else if (tabletView) {
      return tabletItems;
    } else {
      return items;
    }
  }, [mobileView, tabletView]);

  interface PolygonProps {
    src: string;
    left: string;
    top: string;
    index: number;
  }

  const PolygonComponent: React.FC<PolygonProps> = ({
    src,
    left,
    top,
    index,
  }) => {
    

   

    return (
      <Flex position="relative" id="polygon" left={left} mt={top}>
        <motion.div
          animate={animArray[index]}
          transition={{
            layout: {
              duration: 5,
              type: "spring",
            },
            ease: "easeOut",
            duration: 0.9,
          }}
        >
          <Image src={src} alt="" />
        </motion.div>
      </Flex>
    );
  };

  return (
    <Flex
      h={"750px"}
      zIndex={1000}
      bg="transparent"
      w={"100%"}
      position={"absolute"}
      overflowY={"hidden"}
      overflowX={"hidden"}
    >
      <motion.div
        onMouseMove={(e) => handleMouseMove(e)}
        animate={imgAnimation}
        transition={{
          layout: {
            duration: 5,
            type: "spring",
          },
          ease: "easeOut",
          duration: 0.5,
        }}
        style={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
          width: "101%",
          overflowY: "visible",
          //   overflowX:'hidden'
        }}
      >
        {arrayItems.map((img, index) => (
          <PolygonComponent
            key={index}
            src={img.src}
            left={img.left}
            top={img.top}
            index={index}
          />
        ))}
      </motion.div>
    </Flex>
  );
}

export default BlueAnimations;
