import { Flex } from "@chakra-ui/react";
import { motion } from "framer-motion";
import "./styles.css"
 
function TopRing() {
  const transition = { duration: 10, repeat: Infinity, ease: "easeInOut" ,repeatType: 'reverse'};

  return (
    <Flex className="top-container" top={'992px'} left={'-28%'}>
    <svg xmlns="http://www.w3.org/2000/svg" width="1339.38" height="1130.426">
      <motion.path
        d="M 319 0 A 319 534.5 0 1 0 319 1069 A 318.5 534.5 0 1 0 319 0"
        fill="transparent"
        strokeWidth="1"
        stroke="#707070"
       strokeLinejoin={'miter'}
        initial={{ pathLength: 1 }}
        animate={{ pathLength: 1 }}
        opacity={0.15}
        transition={{duration: 10, repeat: Infinity,repeatType: 'loop'}}
      />
    </svg>
    <motion.div
      className="top-box"
      initial={{ offsetDistance: "50%", scale: 1 }}
      animate={{ offsetDistance: "-50%", scale: 1 }}
      transition={{duration: 10, repeat: Infinity,repeatType: "loop", ease: 'linear'}}
    />
     <motion.div
      className="top-box"
      initial={{ offsetDistance: "100%", scale: 1 }}
      animate={{ offsetDistance: "0%", scale: 1 }}
      transition={{duration: 10, repeat: Infinity,repeatType: "loop", ease: 'linear'}}
    />
  </Flex>
  );
}

export default TopRing;
