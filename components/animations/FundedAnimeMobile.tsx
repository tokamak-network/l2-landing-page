import { Flex, Box } from "@chakra-ui/react";
import { motion } from "framer-motion";
import "./styles.css";

function FundedAnimeMobile() {
  const transition = {
    duration: 10,
    repeat: Infinity,
    ease: "easeInOut",
    repeatType: "reverse",
  };

  return (
    <Flex>
      <Flex className="funded">
        <svg xmlns="http://www.w3.org/2000/svg" width="260" height="260">
          <motion.path
            d="M260,130A123,123 0 0,0 0.4,130A123,123 0 0,0 260,130Z"
            fill="transparent"
            strokeWidth="1"
            stroke="#707070"
            strokeLinejoin={"miter"}
            initial={{ pathLength: 1, offsetDistance: "100%" }}
            animate={{ pathLength: 1, offsetDistance: "0%" }}
            opacity={1}
            transition={{ duration: 10, repeat: Infinity, repeatType: "loop" }}
          />

          {/* <motion.path
            d="M260,155A130,180 0 0,0 0,155A130,180 0 0,0 260,130Z"
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
          /> */}
          <motion.ellipse
            cx="130" cy="130" rx="47.806" ry="130"
            fill={"transparent"}
            stroke={"#707070"}
            strokeWidth="1"
            // initial={{ strokeDashoffset: 0 }}
            // animate={{ strokeDashoffset: 150 }}
            // className={"dotted"}
            // strokeDasharray={"4 4"}
            transition={{ duration: 10, repeat: Infinity, repeatType: "loop" }}
          />

          <motion.ellipse
            cx="130"
            cy="130"
            ry="27.677"
            rx="130"
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
          className="funded-box-one-mobile"
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
          className="funded-box-two-mobile"
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

export default FundedAnimeMobile;
