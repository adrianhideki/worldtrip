import React from "react";
import { Center, Divider as DividerChakra, Flex } from "@chakra-ui/react";
import theme from '../styles/theme';

const Divider = () => {
  return (
    <Flex justifyContent="center" pt="6">
      <Center width="90px" display="flex">
        <DividerChakra borderWidth="0px" borderTopWidth="2px" borderColor={theme.colors.current} />
      </Center>
    </Flex>
  );
};

export default Divider;
