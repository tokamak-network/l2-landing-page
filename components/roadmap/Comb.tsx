import { Flex, Box } from "@chakra-ui/react";
import RoadmapCard from "./RoadmapCard";
const Comb = () => {
  return (
    <Flex align="center" justify="center" flexDir={"row"}>
      <Flex flexDir={"column"}>
        {[...Array(5)].map((comp, index: number) => (
          <Flex key={index} alignItems={"center"} justifyContent={'flex-end'} mt='-40px'>
            <RoadmapCard />
            <Box
              w={index % 2 === 0?"240px": '120px'}
              h="4px"
              bg="green.500"
            
              position={"relative"}
            />
          </Flex>
        ))}
      </Flex>
      <Box w="10px" h="350px" bg="green.500" position={"relative"} />
      <Flex flexDir={"column"} mt='-140px'>
        {[...Array(5)].map((comp, index: number) => (
          <Flex key={index} alignItems={"center"}  justifyContent={'flex-start'} mt={index===0?'150px':'-40px'}>
            <Box  w={index % 2 === 0?"120px": '240px'} h="4px" bg="green.500" position={"relative"} />
            <RoadmapCard />
          </Flex>
        ))}
      </Flex>
    </Flex>
  );
};

export default Comb;
