"use client";

import { Flex, Link, Text, useTheme } from "@chakra-ui/react";
import MissionCard from "../mission/MissionCard";

function Mission () {

    return (
        <Flex h="945px" justifyContent={"center"} alignItems={"center"} flexDir={'column'} mx='150px'>
        <Text fontSize={'40px'} fontWeight={'bold'}>Mission</Text>
        <Text>
        DARIUS is an optimisitc rollup L2 forked from Optimism focused on connecting
        </Text>
      
      <Flex mt='30px'>
        <MissionCard />
        <MissionCard/>
        <MissionCard/>
      </Flex>
      </Flex>
    )
}

export default Mission