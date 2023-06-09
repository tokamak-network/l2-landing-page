import { Flex, Text, Button, Box, useTheme } from "@chakra-ui/react";
import Image from "next/image";
import Check from "../../app/assets/icon-check.svg";

type RoadmapProps = {
  completed: boolean;
};
function MobileRoadmapHex(props: RoadmapProps) {
  const { completed } = props;
  const theme = useTheme();
  return (
    <Box
      w={completed? '13px':"15px" }
      h={completed? '12px':"14px" }
      bg={completed ? "none" : "#dfe4ee"}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      position="relative"
      overflow="hidden"
      clipPath="polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)"
    >
      <Box
        top={completed? '0px': "1px"}
        left={completed? '0px':"1px"}
        w="13px"
        h="12px"
        backgroundImage={
          completed ? "linear-gradient(to bottom, #1f8efa, #2a72e5)" : ""
        }
        bg={completed ? "" : "white"}
        display={"flex"}
        justifyContent={"space-evenly"}
        alignItems={"center"}
        position="absolute"
        overflow="hidden"
        zIndex={1}
        flexDir={"column"}
        clipPath="polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)"
      ></Box>
    </Box>
  );
}

export default MobileRoadmapHex;
