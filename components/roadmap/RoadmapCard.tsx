import { Flex, Text, Button, Box } from "@chakra-ui/react";
import Image from "next/image";
import tokamak_symbol from '../../app/assets/tokamak_symbol.png'

type RoadmapProps = {
  top: string;
  left:string
}
function RoadmapCard(props:RoadmapProps ) {
  const {top, left} = props
  return (
    <Box
    top={top}
    left={left}
      w="220px" /* Adjust the width as per your requirement */
      h="150px" /* Adjust the height as per your requirement */
     backgroundImage={'linear-gradient(to bottom, #1f8efa, #2a72e5)'}
     display={'inline-block'}
     justifyContent={'center'}
     alignItems={'center'}
      position='relative'
      overflow="hidden"
      clipPath="polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)"
      
    >
        
        <Text color={'black'}>hiiiid</Text>

    </Box>
   
  );
}

export default RoadmapCard;
