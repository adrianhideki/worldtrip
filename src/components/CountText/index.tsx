import React from "react";
import { Flex, Text } from "@chakra-ui/react";

type CountText = {
  count: number;
  description: React.ReactNode;
};

const CountText = ({ count, description }: CountText) => {
  return (
    <Flex flexDir="column" justifyContent="center" alignItems="center" flex="1">
      <Text fontSize="3rem" color="yellow.500" fontWeight="600">
        {count}
      </Text>
      <Text fontSize="1.5rem" fontWeight="600">
        {description}
      </Text>
    </Flex>
  );
};

export default CountText;
