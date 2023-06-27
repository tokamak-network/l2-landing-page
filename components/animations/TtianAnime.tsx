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
            initial={{ strokeDashoffset: 0 }}
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
            initial={{ rx: 155, ry: 155}}
            animate={{ rx: 35, ry: 155}}
            transition={{ duration: 10, repeat: Infinity, repeatType: "mirror" }}
          />

          {/* <motion.ellipse
            cx="200"
            cy="200"
            rx="74"
            ry="155"
            fill={"transparent"}
            stroke={"#707070"}
            strokeDasharray={"4 4"}
            initial={{ rx: 155, ry: 155}}
            animate={{ rx: 74, ry: 155 }}
            transition={{ duration: 10, repeat: Infinity, repeatType: "loop" }}
          />
         
          <motion.ellipse
            cx="200"
            cy="200"
            rx="108"
            ry="155"
            fill={"transparent"}
            stroke={"#707070"}
            strokeDasharray={"4 4"}
            initial={{  rx: 155, ry: 155}}
            animate={{  rx: 108, ry: 155}}
            transition={{ duration: 10, repeat: Infinity, repeatType: "loop" }}
          />
          <motion.ellipse
            cx="200"
            cy="200"
            rx="137"
            ry="155"
            fill={"transparent"}
            stroke={"#707070"}
            strokeDasharray={"4 4"}
            initial={{  rx: 155, ry: 155 }}
            animate={{  rx: 137, ry: 155 }}
            transition={{ duration: 10, repeat: Infinity, repeatType: "loop" }}
          /> */}
        </svg>
        <motion.div
          className="titan-box-vertical"
          initial={{ offsetDistance: "100%", scale: 1 }}
          animate={{ offsetDistance: "0%", scale: 1 }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear",
          }}
        />
        <motion.div
          className="titan-box-horizontal"
          initial={{ offsetDistance: "100%", scale: 1 }}
          animate={{ offsetDistance: "0%", scale: 1 }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear",
          }}
        />

        <Flex className="titan">
          <motion.div
            className="titan-box-diagonal"
            initial={{ offsetDistance: "100%", scale: 1 }}
            animate={{ offsetDistance: "0%", scale: 1 }}
            transition={{
              duration: 10,
              repeat: Infinity,
              repeatType: "loop",
              ease: "linear",
            }}
          />
        </Flex>
      </Flex>
    </Flex>
  );
}

export default TitanAnime;
