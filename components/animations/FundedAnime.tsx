import { Flex, Box } from "@chakra-ui/react";
import { motion } from "framer-motion";
import "./styles.css";

function FundedAnime() {
  const transition = {
    duration: 10,
    repeat: Infinity,
    ease: "easeInOut",
    repeatType: "reverse",
  };

  return (
    <Flex>
      <Flex className="funded">
        <svg xmlns="http://www.w3.org/2000/svg" width="310" height="310">
          <motion.path
            d="M310,155A154.5,154.5 0 0,0 0.5,155A154.5,154.5 0 0,0 310,155Z"
            fill="transparent"
            strokeWidth="1"
            stroke="#707070"
            strokeLinejoin={"miter"}
            initial={{ pathLength: 1, offsetDistance: "100%" }}
            animate={{ pathLength: 1, offsetDistance: "0%" }}
            opacity={1}
            transition={{ duration: 10, repeat: Infinity, repeatType: "loop" }}
          />

          <motion.path
            d="M113,155A56.5,154.5 0 0,0 0,155A56.5,154.5 0 0,0 113,155Z"
            fill="transparent"
            strokeWidth="1"
            strokeDasharray={"4 4"}
            stroke="#707070"
            strokeLinejoin={"miter"}
            initial={{ pathLength: 1, strokeDashoffset: 0 }}
            animate={{ pathLength: 1, strokeDashoffset: 150 }}
            transform={"translate(100)"}
            opacity={1}
            transition={{ duration: 10, repeat: Infinity, repeatType: "loop" }}
          />

          <motion.ellipse
            cy="155"
            cx="155"
            ry="33"
            rx="155"
            fill={"transparent"}
            stroke={"#707070"}
            initial={{ strokeDashoffset: 0 }}
            animate={{ strokeDashoffset: 150 }}
            className={"dotted"}
            strokeDasharray={"4 4"}
            transition={{ duration: 10, repeat: Infinity, repeatType: "loop" }}
          />
        </svg>
        <motion.div
          className="funded-box-one"
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
          className="funded-box-two"
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

export default FundedAnime;
