"use client";

import {
  Flex,
  Link,
  Text,
  useTheme,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  Box,
} from "@chakra-ui/react";
import Image from "next/image";
import useMediaView from "@/app/hooks/useMediaView";
import tokamak_symbol from "../app/assets/tokamak_symbol.png";
import icon_arrow from "../app/assets/icon_nav arrow down_.png";
function Header() {
  return (
    <Flex justifyContent={"space-between"}>
      <Image
        src={tokamak_symbol}
        alt="tokamak_symbol"
        height={40}
        width={40}
      ></Image>
      <Flex>
        <Menu>
          <MenuButton
            display={"flex"}
            flexDir={"row"}
            w="80px"
            border={"1px solid red"}
            mr="20px"
          >
            <Flex justifyContent={"space-between"} alignItems={"center"}>
              {" "}
              <Text>Tools</Text>
              <Flex height={"9px"} width={"11px"}>
                <Image src={icon_arrow} alt="icon_arrow" />
              </Flex>
            </Flex>
          </MenuButton>
          <MenuList>
            <MenuGroup title="Profile">
              <MenuItem>My Account</MenuItem>
              <MenuItem>Payments </MenuItem>
            </MenuGroup>
            <MenuDivider />
            <MenuGroup title="Help">
              <MenuItem>Docs</MenuItem>
              <MenuItem>FAQ</MenuItem>
            </MenuGroup>
          </MenuList>
        </Menu>
        <Text mr="20px" w="100px" border={"1px solid red"}>
          Ecosystem
        </Text>
        <Menu>
          <MenuButton mr="20px" w="100px" border={"1px solid red"}>
            <Flex justifyContent={"space-between"} alignItems={"center"}>
              {" "}
              <Text>Developers</Text>
              <Flex height={"9px"} width={"11px"}>
                <Image src={icon_arrow} alt="icon_arrow" />
              </Flex>
            </Flex>
          </MenuButton>
          <MenuList>
            <MenuGroup title="Mainnet">
              <MenuItem>Github</MenuItem>
              <MenuItem>Guide </MenuItem>
              <MenuItem>Block Explorer </MenuItem>
            </MenuGroup>
            <MenuDivider />
            <MenuGroup title="Testnet">
              <MenuItem>Guide </MenuItem>
              <MenuItem>Block Explorer </MenuItem>
            </MenuGroup>
          </MenuList>
        </Menu>
        <Menu>
          <MenuButton mr="20px" w="80px" border={"1px solid red"}>
            <Flex justifyContent={"space-between"} alignItems={"center"}>
              {" "}
              <Text>Grant</Text>
              <Flex height={"9px"} width={"11px"}>
                <Image src={icon_arrow} alt="icon_arrow" />
              </Flex>
            </Flex>
          </MenuButton>
          <MenuList>
            <MenuItem>GranTON Application </MenuItem>
            <MenuItem>Bug Bounty</MenuItem>
          </MenuList>
        </Menu>
        <Menu>
          <MenuButton mr="20px" w="80px" border={"1px solid red"}>
            <Flex justifyContent={"space-between"} alignItems={"center"}>
              {" "}
              <Text>More</Text>
              <Flex height={"9px"} width={"11px"}>
                <Image src={icon_arrow} alt="icon_arrow" />
              </Flex>
            </Flex>
          </MenuButton>
          <MenuList>
            <MenuGroup title="About">
              <MenuItem>Team</MenuItem>
              <MenuItem>Career </MenuItem>
            </MenuGroup>
            <MenuDivider />
            <MenuGroup title="Community">
              <MenuItem>Discord </MenuItem>
              <MenuItem>Kakao (KR)</MenuItem>
              <MenuItem>Telegram (EN)</MenuItem>
              <MenuItem>Twitter</MenuItem>
              <MenuItem>Medium</MenuItem>
            </MenuGroup>
          </MenuList>
        </Menu>
      </Flex>
      <Flex></Flex>
    </Flex>
  );
}

export default Header;
