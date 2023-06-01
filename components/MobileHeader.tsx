"use client";

import {
  Flex,
  useTheme,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button
} from "@chakra-ui/react";
import Image from "next/image";
import L2BL from "../app/assets/L2-BI.svg";
import icon_burger from '../app/assets/icon_buger.svg'
import { useRef } from "react";
function MobileHeader() {
    const theme = useTheme();
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = useRef()


    return (
        <Flex bg='#fafbfc' h='78px' alignItems={"center"} justifyContent={"space-between"}>
  <Flex height={"40px"} ml={"20px"} width={"126px"}>
        <Image src={L2BL} alt="tokamak_symbol" height={40} width={126}></Image>
      </Flex>
      <Flex>
      {/* <Button   px={0}
        mx={0}
        w={'30px'}
        h={'30px'}
        onClick={onOpen}
        bg={'transparent'}
        _focus={{
          bg: 'transparent',
        }}
        _active={{
          bg: 'transparent',
        }}>
        Open
      </Button> */}
      <Flex  onClick={onOpen} h='48px' w='48px' borderRadius={'8px'} mr='20px' border='1px solid #e8edf2' justifyContent={'center'} alignItems={'center'}>
        <Image src={icon_burger} alt="icon_burger"/>
      </Flex>
      <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        size={'xs'}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader></DrawerHeader>

          <DrawerBody>
          
          </DrawerBody>

          <DrawerFooter>
         
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
      </Flex>
        </Flex>
    )
}

export default MobileHeader