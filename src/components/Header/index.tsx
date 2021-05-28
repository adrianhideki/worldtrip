import React from "react";
import { Flex, Icon, Switch } from "@chakra-ui/react";
import { useColorMode } from "@chakra-ui/react";
import { FaSun, FaMoon } from "react-icons/fa";
import Link from "next/link";

const Header = () => {
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <Flex
      as="header"
      w="100%"
      mx="auto"
      top="0"
      h="100px"
      align="center"
      justify="flex-end"
      mb="1"
    >
      <Flex flex="1" justify="center" align="center">
        <Link href="/">
          <a>
            <img src="/logo.png" alt="logo" />
          </a>
        </Link>
      </Flex>
      <Flex display="inline" align="center" position="absolute" left="auto">
        <Icon as={colorMode === "dark" ? FaSun : FaMoon} mr="5" />
        <Switch
          size="md"
          colorScheme="cyan.200"
          isChecked={colorMode === "dark"}
          id="dark-theme"
          onChange={toggleColorMode}
          mr="5"
        />
      </Flex>
    </Flex>
  );
};

export default Header;
