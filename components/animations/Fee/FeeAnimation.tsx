import { Flex, Box } from "@chakra-ui/react";
import "./styles.css";
import { motion } from "framer-motion";

export default function FeeAnimation() {
  return (
    <Flex mb="20px">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="140"
        height="140"
        viewBox="0 0 140 140"
      >
        <g data-name="그룹 6545">
          <path style={{ fill: "none" }} d="M0 0h140v140H0z" />
          <g data-name="그룹 6544">
            <g
              data-name="타원 18"
              transform="translate(20 78.318)"
              style={{ stroke: "#1c1c1c", fill: "none" }}
            >
              <motion.ellipse
                cx="50"
                cy="16"
                rx="50"
                ry="16"
                style={{ stroke: "none" }}
              />
              <motion.ellipse
                cx="50"
                cy="16"
                rx="49.5"
                ry="15.5"
                style={{ fill: "none" }}
              />
            </g>
            <g
              data-name="타원 19"
              transform="translate(20 63.318)"
              style={{ stroke: "#1c1c1c", fill: "none" }}
            >
              <motion.ellipse
                cx="50"
                cy="23.5"
                rx="50"
                ry="23.5"
                style={{ stroke: "none" }}
                initial={{ cx: "0", cy: "0", rx: "0", ry: "0" }}
                animate={{
                  cx: "50",
                  cy: "23.5",
                  rx: "50",
                  ry: "23.5",
                  transition: { duration: 0.3, delay: 2, ease: "easeInOut" },
                }}
              />
              <motion.ellipse
                cx="50"
                cy="23.5"
                rx="49.5"
                ry="23"
                style={{ fill: "none" }}
                initial={{ cx: "0", cy: "0", rx: "0", ry: "0" }}
                animate={{
                  cx: "50",
                  cy: "23.5",
                  rx: "50",
                  ry: "23.5",
                  transition: { duration: 0.3, delay: 2, ease: "easeInOut" },
                }}
              />
            </g>
            <g
              data-name="타원 21"
              transform="translate(20 54.449)"
              style={{ stroke: "#1c1c1c", fill: "none" }}
            >
              <motion.ellipse
                cx="50"
                cy="27.934"
                rx="50"
                ry="27.934"
                style={{ stroke: "none" }}
                initial={{ cx: "0", cy: "0", rx: "0", ry: "0" }}
                animate={{
                  cx: "50",
                  cy: "27.934",
                  rx: "50",
                  ry: "27.934",
                  transition: { duration: 0.3, delay: 3, ease: "easeInOut" },
                }}
              />
              <motion.ellipse
                cx="50"
                cy="27.934"
                rx="49.5"
                ry="27.434"
                style={{ fill: "none" }}
                initial={{ cx: "0", cy: "0", rx: "0", ry: "0" }}
                animate={{
                  cx: "50",
                  cy: "27.934",
                  rx: "49.5",
                  ry: "27.434",
                  transition: { duration: 0.3, delay: 3, ease: "easeInOut" },
                }}
              />
            </g>
            <g
              data-name="타원 20"
              transform="translate(20 39)"
              style={{ stroke: "#1c1c1c", fill: "none" }}
            >
              <motion.ellipse
                cx="50"
                cy="35.659"
                rx="50"
                ry="35.659"
                style={{ stroke: "none" }}
                initial={{ cx: "0", cy: "0", rx: "0", ry: "0" }}
                animate={{
                  cx: "50",
                  cy: "35.659",
                  rx: "50",
                  ry: "35.659",
                  transition: {
                    duration: 0.3,
                    delay: 1,
                    ease: "easeInOut",
                    repeat: Infinity,
                  },
                }}
              />
              <motion.ellipse
                cx="50"
                cy="35.659"
                rx="49.5"
                ry="35.159"
                style={{ fill: "none" }}
                initial={{ cx: "0", cy: "0", rx: "0", ry: "0" }}
                animate={{
                  cx: "50",
                  cy: "35.659",
                  rx: "49.5",
                  ry: "35.159",
                  transition: {
                    duration: 3,
                    delay: 1,
                    ease: "easeInOut",
                    repeat: Infinity,
                  },
                }}
              />
            </g>
          </g>
          <motion.g
            data-name="사각형 11"
            style={{ fill: "#fff", stroke: "#1c1c1c" }}
            animate={{
              scale: [1, 7 / 11], // Array of values for scale animation
              transition: {
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse",
              },
            }}
          >
            <path
              style={{ stroke: "none" }}
              d="M0 0h11v11H0z"
              transform="translate(7 20)"
            />
            <path
              style={{ fill: "none" }}
              d="M.5.5h10v10H.5z"
              transform="translate(7 20)"
            />
          </motion.g>
          <path
            data-name="사각형 12"
            transform="translate(129 108)"
            style={{ fill: "#1c1c1c" }}
            d="M0 0h7v7H0z"
            scale="1"
            // animate={{
            //   scale: 1,
            //   transition: {
            //     duration: 2,
            //     repeat: Infinity,
            //     repeatType: "reverse",
            //   },
            // }}
          />
        </g>
      </svg>
    </Flex>
  );
}
