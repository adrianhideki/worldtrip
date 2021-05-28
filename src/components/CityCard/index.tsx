import React from "react";
import { Image, Flex, Text, Stack } from "@chakra-ui/react";

type CityCardProps = {
  image: string;
  city: string;
  country: string;
  flag: string;
};

const CityCard = ({ image, city, country, flag }: CityCardProps) => {
  return (
    <Flex width="100%" justifyContent="center" alignItems="center">
      <Flex
        height={280}
        width={260}
        flexDir="column"
        borderRadius="4px"
        overflow="hidden"
      >
        <Image
          src={image}
          height={170}
          width="100%"
          objectFit="cover"
          objectPosition="center"
        />
        <Flex
          h="100%"
          w="100%"
          border="1px solid"
          borderColor="rgba(255, 186, 8, 0.5)"
          borderRadius="4px"
          p="6"
        >
          <Flex w="100%" h="60px" alignItems="center">
            <Stack flex="1">
              <Text fontSize="1.25rem" fontWeight="600">{city}</Text>
              <Text fontSize="1rem" fontWeight="500" color="#999999">{country}</Text>
            </Stack>
            <Image
              src={flag}
              w={30}
              h={30}
              borderRadius="100%"
              objectFit="cover"
              objectPosition="center"
            />
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default CityCard;
