import { Flex } from "@chakra-ui/react";
import { motion } from "framer-motion";
import "./styles.css";

function TabletRing() {
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
      overflowX={"hidden"}
      top="2572px"
    >
      <Flex className="tablet-container" left={'35%'}  zIndex={0}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="1239.38"
          width="1030.426"
        >
          <motion.path
            d="M 319 0 A 319 535 0 1 0 319 1070 A 319 535 0 1 0 319 0 z"
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
          className="tablet-box"
          initial={{ offsetDistance: "50%", scale: 1 }}
          animate={{ offsetDistance: "-50%", scale: 1 }}
          transition={{
            duration: 15,
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear",
          }}
        />
        <motion.div
          className="tablet-box"
          initial={{ offsetDistance: "100%", scale: 1 }}
          animate={{ offsetDistance: "0%", scale: 1 }}
          transition={{
            duration: 15,
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear",
          }}
        />
      </Flex>
    </Flex>
  );
}

export default TabletRing;
