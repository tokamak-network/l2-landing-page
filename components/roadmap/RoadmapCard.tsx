import { Flex, Text, Button, Box } from "@chakra-ui/react";
import Image from "next/image";
import tokamak_symbol from '../../app/assets/tokamak_symbol.png'
function RoadmapCard() {
  return (
    <Box
      w="100px" /* Adjust the width as per your requirement */
      h="100px" /* Adjust the height as per your requirement */
      bg="#ff0000" 
     display={'flex'}
     justifyContent={'center'}
     alignItems={'center'}
      position="relative"
      overflow="hidden"
      clipPath="polygon( 25% 5%, 75% 5%, 100% 50%, 75% 95%, 25% 95%, 0% 50%)"
      
    >
          <Box
      w="99px" /* Adjust the width as per your requirement */
      h="99px" /* Adjust the height as per your requirement */
      bg="white" 
      display={'flex'}
      justifyContent={'center'}
      alignItems={'center'}
      position="relative"
      overflow="hidden"
      clipPath="polygon( 25% 5%, 75% 5%, 100% 50%, 75% 95%, 25% 95%, 0% 50%)"
      
    >
        <Text color={'black'}>hiiiid</Text>
    </Box>
    </Box>
   
  );
}

export default RoadmapCard;
