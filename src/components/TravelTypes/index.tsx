import React from "react";
import { Box, Flex, Image, SimpleGrid, Text } from "@chakra-ui/react";
import ImageLabel from "../ImageLabel";

const TravelType = () => {
  return (
    <Flex justify="center" mb="8">
      <SimpleGrid
        minChildWidth="150px"
        spacing="5"
        align="center"
        justifyContent="center"
        width="80%"
      >
        <ImageLabel label="vida noturna" image="/cocktail.svg" />
        <ImageLabel label="praia" image="/surf.svg" />
        <ImageLabel label="moderno" image="/building.svg" />
        <ImageLabel label="clássico" image="/museum.svg" />
        <ImageLabel label="e mais..." image="/earth.svg" />
      </SimpleGrid>
    </Flex>
  );
};
export default TravelType;
