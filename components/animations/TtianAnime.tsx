import { Flex, Box } from "@chakra-ui/react";
import { motion } from "framer-motion";
import "./styles.css";

function TitanAnime() {
  const transition = {
    duration: 10,
    repeat: Infinity,
    ease: "easeInOut",
    repeatType: "reverse",
  };

  return (
    <Flex>
      <Flex width="402px" height="405.468px">
        <svg xmlns="http://www.w3.org/2000/svg" width="402" height="405.468">
          <motion.path
            d="M0 200h400v0.1H0z"
            fill="transparent"
            strokeWidth="1"
            stroke="#7a7e87"
            strokeLinejoin={"miter"}
          />
          <motion.path
            d="M200 0v400h0.1V0z"
            fill="transparent"
            strokeWidth="1"
            stroke="#7a7e87"
            strokeLinejoin={"miter"}
          />
          <motion.path
            d="M284 -250v760h0.1V0z"
            fill="transparent"
            strokeWidth="1"
            stroke="#7a7e87"
            className={"diagonal"}
            strokeLinejoin={"miter"}
          />
          <motion.ellipse
            cx="200"
            cy="200"
            rx="155"
            ry="155"
            fill={"transparent"}
            stroke={"#707070"}
            initial={{ strokeDashoffset: 150 }}
            animate={{ strokeDashoffset: 150 }}
          />
          <motion.ellipse
            cx="200"
            cy="200"
            rx="35"
            ry="155"
            fill={"transparent"}
            stroke={"#707070"}
            strokeDasharray={"4 4"}
            initial={{ rx: 155, ry: 155, rotate: 45 }}
            animate={{ rx: 0, ry: 155 }}
            transition={{
              duration: 10,
              repeat: Infinity,
              repeatType: "mirror",
            }}
          />
          <motion.ellipse
            cx="200"
            cy="200"
            rx="74"
            ry="155"
            fill={"transparent"}
            stroke={"#707070"}
            strokeDasharray={"4 4"}
            initial={{ rx: 155, ry: 155, rotate: 45 }}
            animate={{ rx: 0, ry: 155 }}
            transition={{
              duration: 10,
              repeat: Infinity,
              repeatType: "mirror",
              delay: 2,
            }}
          />

          <motion.ellipse
            cx="200"
            cy="200"
            rx="108"
            ry="155"
            fill={"transparent"}
            stroke={"#707070"}
            strokeDasharray={"4 4"}
            initial={{ rx: 155, ry: 155, rotate: 45 }}
            animate={{ rx: 0, ry: 155 }}
            transition={{
              duration: 10,
              repeat: Infinity,
              repeatType: "mirror",
              delay: 4,
            }}
          />

          <motion.ellipse
            cx="200"
            cy="200"
            rx="137"
            ry="155"
            fill={"transparent"}
            stroke={"#707070"}
            strokeDasharray={"4 4"}
            initial={{ rx: 155, ry: 155, rotate: 45 }}
            animate={{ rx: 0, ry: 155 }}
            transition={{
              duration: 10,
              repeat: Infinity,
              repeatType: "mirror",
              delay: 6,
            }}
          />
            <motion.ellipse
            cx="200"
            cy="200"
            rx="137"
            ry="155"
            fill={"transparent"}
            stroke={"#707070"}
            strokeDasharray={"4 4"}
            initial={{ rx: 155, ry: 155, rotate: 45 }}
            animate={{ rx: 0, ry: 155 }}
            transition={{
              duration: 10,
              repeat: Infinity,
              repeatType: "mirror",
              delay: 8,
            }}
          />
            <motion.ellipse
            cx="200"
            cy="200"
            rx="137"
            ry="155"
            fill={"transparent"}
            stroke={"#707070"}
            strokeDasharray={"4 4"}
            initial={{ rx: 155, ry: 155, rotate: 45 }}
            animate={{ rx: 0, ry: 155 }}
            transition={{
              duration: 10,
              repeat: Infinity,
              repeatType: "mirror",
              delay: 10,
            }}
          />
          
         
        </svg>
        <motion.div
          className="titan-box-vertical"
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
          className="titan-box-horizontal"
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
            className="titan-box-diagonal"
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

export default TitanAnime;
