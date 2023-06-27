import { Flex, Box } from "@chakra-ui/react";
import "./styles.css";
import { motion } from "framer-motion";

export default function RollupAnimation() {
  return (
    <Flex mr="40px" mb="20px">
      <Box className="box">
        <Box className="box top-circle" />
        <Box className="box ellipse" />
        <Box className="box dotted-ellipse" />
        <Box className="box line" />
        <Box className="box dot" />
        <Box className="box bottom-circle" />
      </Box>
    </Flex>
    // <svg
    //   xmlns="http://www.w3.org/2000/svg"
    //   width="140"
    //   height="140"
    //   viewBox="0 0 140 140"
    // >
    //   <g data-name="그룹 6543" transform="translate(-480 -1051)">
    //     <path
    //       transform="translate(480 1051)"
    //       style={{ fill: "none" }}
    //       d="M0 0h140v140H0z"
    //     />
    //     <g data-name="그룹 6540" transform="translate(-6 -13)">
    //       <path d="M501 1134h110v1H501z" />
    //       <g data-name="그룹 6542">
    //         <g
    //           data-name="타원 16"
    //           transform="translate(528 1087)"
    //           style={{ stroke: "#1c1c1c", fill: "none" }}
    //         >
    //           <motion.ellipse
    //             cx="18"
    //             cy="47.5"
    //             rx="18"
    //             ry="47.5"
    //             style={{ stroke: "none" }}
    //           />
    //           <motion.ellipse
    //             cx="18"
    //             cy="47.5"
    //             rx="17.5"
    //             ry="47"
    //             style={{ fill: "none" }}
    //           />
    //         </g>
    //         <g
    //           data-name="타원 17"
    //           transform="translate(549 1087)"
    //           style={{
    //             strokeDasharray: "4 4",
    //             stroke: "#1c1c1c",
    //             fill: "none",
    //           }}
    //         >
    //           <ellipse
    //             cx="18"
    //             cy="47.5"
    //             rx="18"
    //             ry="47.5"
    //             style={{ stroke: "none" }}
    //           />
    //           <ellipse
    //             cx="18"
    //             cy="47.5"
    //             rx="17.5"
    //             ry="47"
    //             style={{ fill: "none" }}
    //           />
    //         </g>
    //       </g>
    //       <motion.circle
    //         data-name="타원 26"
    //         cx="1.5"
    //         cy="1.5"
    //         r="1.5"
    //         transform="translate(500 1133)"
    //         initial={{ pathLength: 0 }}
    //         animate={{ pathLength: 1 }}
    //         transition={{ duration: 8, repeat: Infinity }}
    //       >
    //         <motion.path d="M501 1134h110v1H501z" style={{ fill: "none" }} />
    //       </motion.circle>
    //     </g>
    //     <g
    //       data-name="타원 24"
    //       transform="translate(598 1162)"
    //       style={{ stroke: "#000", fill: "none" }}
    //     >
    //       <circle cx="7" cy="7" r="7" style={{ stroke: "none" }} />
    //       <circle cx="7" cy="7" r="6.5" style={{ fill: "none" }} />
    //     </g>
    //     <circle
    //       data-name="타원 25"
    //       cx="3"
    //       cy="3"
    //       r="3"
    //       transform="translate(492 1071)"
    //     />
    //   </g>
    // </svg>
  );
}
