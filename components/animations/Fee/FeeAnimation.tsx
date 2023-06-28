import { Flex, Box } from "@chakra-ui/react";
import "./styles.css";
import { motion } from "framer-motion";

export default function FeeAnimation() {
  return (
    <Flex
      mb="20px"
      flexDir={"column"}
      h="140px"
      w="140px"
      // border={"1px solid red"}
      py={"20px"}
      pl="7px"
      pr="4px"
    >
      <motion.div
        className="border-box"
        initial={{ scale: 1 }}
        animate={{ scale: 1.5 }}
        transition={{ duration: 1, repeat: Infinity, repeatType: "mirror" }}
      />
      <svg xmlns="http://www.w3.org/2000/svg" width="130" height="100">
        <motion.ellipse
          cx="70"
          cy="90"
          rx="50"
          ry="23.5"
          fill={"transparent"}
          stroke={"#1c1c1c"}
          initial={{
            cx: 65,
            cy: 65,
            rx: 50,
            ry: 16,
            transform: "translate(0,0)",
          }}
          animate={{
            cx: 65,
            cy: 65,
            rx: 50,
            ry: 16,
            transform: "translate(20 78.318)",
          }}
          className={"first-ellipse"}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatType: "mirror",
            repeatDelay: 9,
          }}
        />

        <motion.ellipse
          cx="70"
          cy="23.5"
          rx="50"
          ry="23.5"
          fill={"transparent"}
          stroke={"#1c1c1c"}
          initial={{ cx: 65, cy: 65, rx: 50, ry: 16 }}
          animate={{
            cx: 65,
            cy: 58,
            rx: 50,
            ry: 23.5,
            transform: "translate(20 78.318)",
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
            repeatType: "mirror",
            repeatDelay: 2,
            delay: 2,
          
          }}
        />
        <motion.ellipse
          cx="70"
          cy="23.5"
          rx="50"
          ry="23.5"
          fill={"transparent"}
          stroke={"#1c1c1c"}
          initial={{ cx: 65, cy: 65, rx: 50, ry: 16 }}
          animate={{
            cx: 65,
            cy: 54,
            rx: 50,
            ry: 27,
            transform: "translate(20 54.449)",
          }}
          transition={{
            delay: 1,
            duration: 1,
            repeatDelay: 2,
            repeat: Infinity,
            repeatType: "mirror",
          }}
        />
        <motion.ellipse
          cx="70"
          cy="23.5"
          rx="50"
          ry="23.5"
          fill={"transparent"}
          stroke={"#1c1c1c"}
          initial={{ cx: 65, cy: 65, rx: 50, ry: 16 }}
          animate={{
            cx: 65,
            cy: 46,
            rx: 50,
            ry: 35,

            transform: "translate(20 39)",
          }}
          transition={{
            duration: 1,
            // delay: 1,
            repeat: Infinity,
            repeatType: "mirror",
            repeatDelay: 2,
          }}
        />
      </svg>
      <Flex w="100%" justifyContent={"flex-end"}>
        <motion.div
          className="filled-box"
          initial={{ scale: 1.5 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1, repeat: Infinity, repeatType: "mirror" }}
        />
      </Flex>
    </Flex>
  );
}
