import React from "react";
import { Box, Flex, HStack, Text } from "@chakra-ui/react";

type BannerProps = {
  bannerImage?: string;
  title: string;
}

const Banner = ({ bannerImage, title} : BannerProps) => {
  return (
    <Flex>
      <Flex
        backgroundImage={bannerImage ?? ""}
        width="100%"
        backgroundSize="cover"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        height="300px"
        justifyContent="flex-start"
        flexDir="column"
      >
        <Box
          backgroundImage="linear-gradient(to bottom, #00000053, #00000088)"
          display="flex"
          flex="1"
          alignItems="flex-end"
        >
          <Text color="white" fontSize="3rem" fontWeight="600" mb="5" ml="10">
            {title}
          </Text>
        </Box>
      </Flex>
    </Flex>
  );
};

export default Banner;