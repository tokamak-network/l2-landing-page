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

function BlueAnimations() {
  const imgAnimation = useAnimation();
  const handleMouseMove = (e: any) => {
    const { clientX, clientY } = e;

    const moveX = clientX - window.innerWidth / 2;
    const moveY = clientY - window.innerHeight / 2;
    const offsetFactor = 50;
    imgAnimation.start({
      x: -((moveX ) / (offsetFactor)),
      y: -((moveY) / (offsetFactor)),
    });
  };

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
        top: "123.6px",
        left: "77.3%",
      },
      {
        src: blue23,
        top: "230.3px",
        left: "70.9%",
      },
      {
        src: blue24,
        top: "-593.9px",
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

  return (
    <Flex
      h={"750px"}
      zIndex={1000}
      bg="transparent"
      w={"100%"}
      position={"absolute"}
      overflowY={"visible"}
      overflowX={'hidden'}
    >
      <motion.div
        onMouseMove={(e) => handleMouseMove(e)}
        animate={imgAnimation}
        style={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
          width: "101%",
          overflowY: "visible",
        //   overflowX:'hidden'
        }}
      >
        {items.map((img: any, index: number) => {
          return (
            <Flex
              key={index}
              position={"relative"}
              //   top={img.top}
              left={img.left}
              mt={img.top}
            >
              <motion.div
                onMouseMove={(e) => handleMouseMove(e)}
                animate={imgAnimation}
              >
                <Image src={img.src} alt="" />
              </motion.div>
            </Flex>
          );
        })}
      </motion.div>
    </Flex>
  );
}

export default BlueAnimations;
