import { Box } from "@chakra-ui/react";
import "./styles.css";

export default function OptimismAnime() {
  return (
    <Box className="container">
      <Box className="container four-point-star" />
      <Box className="container four-point-star-small" />
      <Box className="container dotted-circle" />
      <Box className="container circle" />
      <Box className="container top-left-quarter-circle" />
      <Box className="container line" />
    </Box>
  );
}
