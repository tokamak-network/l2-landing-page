import { Flex, Text, Button } from "@chakra-ui/react";
import Image from "next/image";
import tokamak_symbol from '../../app/assets/tokamak_symbol.png'
function FundCard() {
  return (
    <Flex
      w="300px"
      h="360px"
      border={"1px solid red"}
      mr="20px"
      mb="20px"
      p='20px'
      justifyContent={'space-between'}
      alignItems={'center'}
      flexDir={'column'}
    >

        <Flex justifyContent={'center'} alignItems={'center'}>
            <Flex height={'40px'} width={'50px'} mr='20px'>
            <Image src={tokamak_symbol} alt='tokamak_symbol' />
            </Flex>
          <Text>GranTON</Text>
        </Flex>
        <Flex>
<Button>Apply for GranTON</Button>
        </Flex>
    </Flex>
  );
}

export default FundCard;
