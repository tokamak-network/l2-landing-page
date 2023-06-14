import { Flex } from "@chakra-ui/react";
import { motion } from "framer-motion";
import "./styles.css";

function BottomRing() {
  const transition = {
    duration: 10,
    repeat: Infinity,
    ease: "easeInOut",
    repeatType: "reverse",
  };

  return (
    <Flex
      position={"absolute"}
      maxW={"100vw"}
      minW={"100vw"}
      minH={"500px"}
      maxH={"930px"}
      overflow={"hidden"}
      top={"4525px"}
      zIndex={0}
    >
      <Flex className="bottom-container" 
      left={"81%"}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1239.38"
          height="1090.426"
        >
          <motion.path
            d="M 319 0 A 319 534.5 0 1 0 319 1069 A 318.5 534.5 0 1 0 319 0"
            fill="transparent"
            strokeWidth="1"
            stroke="#707070"
            strokeLinejoin={"miter"}
            initial={{ pathLength: 1 }}
            animate={{ pathLength: 1 }}
            opacity={0.15}
            transition={{ duration: 10, repeat: Infinity, repeatType: "loop" }}
          />
        </svg>
        <motion.div
          className="bottom-box"
          initial={{  offsetDistance: "100%", scale: 1 }}
          animate={{ offsetDistance: "0%", scale: 1 }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear",
          }}
        />
        <motion.div
          className="bottom-box"
          initial={{ offsetDistance: "50%", scale: 1 }}
        animate={{ offsetDistance: "-50%", scale: 1 }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear",
          }}
        />
      </Flex>
    </Flex>
  );
}

export default BottomRing;
