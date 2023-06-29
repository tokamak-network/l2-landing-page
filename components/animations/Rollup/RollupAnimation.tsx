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
  );
}
