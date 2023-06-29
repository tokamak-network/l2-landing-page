import { Flex, Box } from "@chakra-ui/react";
import { motion } from "framer-motion";
import "./styles.css";

function TitanAnimeMobile() {
  const transition = {
    duration: 10,
    repeat: Infinity,
    ease: "easeInOut",
    repeatType: "reverse",
  };

  return (
    <Flex>
      <Flex width="322px" height="324.778px" mb='23.2px'>
        <svg xmlns="http://www.w3.org/2000/svg" width="322" height="324.778">
          <motion.path
            d="M0 162h322v0.1H0z"
            fill="transparent"
            strokeWidth="1"
            stroke="#7a7e87"
            strokeLinejoin={"miter"}
          />
          <motion.path
            d="M162 0v322h0.1V0z"
            fill="transparent"
            strokeWidth="1"
            stroke="#7a7e87"
            strokeLinejoin={"miter"}
          />
          <motion.path
            d="M229 -190v416h0.1V0z"
            fill="transparent"
            strokeWidth="1"
            stroke="#7a7e87"
            className={"diagonal"}
            strokeLinejoin={"miter"}
          />
          <motion.ellipse
            cx="162"
            cy="162"
            rx="124"
            ry="124"
            fill={"transparent"}
            stroke={"#707070"}
            initial={{ strokeDashoffset: 150 }}
            animate={{ strokeDashoffset: 150 }}
          />
          <motion.ellipse
            cx="162"
            cy="162"
            rx="30"
            ry="124"
            fill={"transparent"}
            stroke={"#707070"}
            strokeDasharray={"4 4"}
            initial={{ rx: 124, ry: 124, rotate: 45 }}
            animate={{ rx: 0, ry: 124 }}
            transition={{
              duration: 10,
              repeat: Infinity,
              repeatType: "mirror",
            }}
          />
          <motion.ellipse
            cx="162"
            cy="162"
            rx="59"
            ry="124"
            fill={"transparent"}
            stroke={"#707070"}
            strokeDasharray={"4 4"}
            initial={{ rx: 124, ry: 124, rotate: 45 }}
            animate={{ rx: 0, ry: 124 }}
            transition={{
              duration: 10,
              repeat: Infinity,
              repeatType: "mirror",
              delay: 2,
            }}
          />
          <motion.ellipse
            cx="162"
            cy="162"
            rx="59"
            ry="124"
            fill={"transparent"}
            stroke={"#707070"}
            strokeDasharray={"4 4"}
            initial={{ rx: 124, ry: 124, rotate: 45 }}
            animate={{ rx: 0, ry: 124 }}
            transition={{
              duration: 10,
              repeat: Infinity,
              repeatType: "mirror",
              delay: 4,
            }}
          />
          <motion.ellipse
            cx="162"
            cy="162"
            rx="59"
            ry="124"
            fill={"transparent"}
            stroke={"#707070"}
            strokeDasharray={"4 4"}
            initial={{ rx: 124, ry: 124, rotate: 45 }}
            animate={{ rx: 0, ry: 124 }}
            transition={{
              duration: 10,
              repeat: Infinity,
              repeatType: "mirror",
              delay: 6,
            }}
          />
          <motion.ellipse
            cx="162"
            cy="162"
            rx="59"
            ry="124"
            fill={"transparent"}
            stroke={"#707070"}
            strokeDasharray={"4 4"}
            initial={{ rx: 124, ry: 124, rotate: 45 }}
            animate={{ rx: 0, ry: 124 }}
            transition={{
              duration: 10,
              repeat: Infinity,
              repeatType: "mirror",
              delay: 8,
            }}
          />
          <motion.ellipse
            cx="162"
            cy="162"
            rx="59"
            ry="124"
            fill={"transparent"}
            stroke={"#707070"}
            strokeDasharray={"4 4"}
            initial={{ rx: 124, ry: 124, rotate: 45 }}
            animate={{ rx: 0, ry: 124 }}
            transition={{
              duration: 10,
              repeat: Infinity,
              repeatType: "mirror",
              delay: 10,
            }}
          />
        </svg>
        <motion.div
          className="titan-box-vertical-mobile"
          initial={{ offsetDistance: "100%" }}
          animate={{ offsetDistance: "0%" }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "linear",
          }}
        />
        <motion.div
          className="titan-box-horizontal-mobile"
          initial={{ offsetDistance: "100%" }}
          animate={{ offsetDistance: "0%" }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "linear",
          }}
        />

        <Flex className="titan">
          <motion.div
            className="titan-box-diagonal-mobile"
            initial={{ offsetDistance: "100%" }}
            animate={{ offsetDistance: "0%" }}
            transition={{
              duration: 10,
              repeat: Infinity,
              repeatType: "mirror",
              ease: "linear",
            }}
          />
        </Flex>
      </Flex>
    </Flex>
  );
}

export default TitanAnimeMobile;
