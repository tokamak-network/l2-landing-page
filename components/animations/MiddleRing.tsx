import { Flex } from "@chakra-ui/react";
import { motion } from "framer-motion";
import "./styles.css";

function MiddleRing() {
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
      top="1818px"
    >
      <Flex className="middle-container" left={"28%"} zIndex={0}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="2247.78"
          width="1531.065"
        >
          <motion.path
            d="M461.07 2.056c206.53-36.11 338.678 407.689 295.151 991.252S509.977 2079.216 303.443 2115.326s-338.678-407.688-295.15-991.252S254.536 38.167 461.07 2.056z"
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
          className="middle-box"
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
          className="middle-box"
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

export default MiddleRing;
