import React from "react";
import { Box, Flex, Image, SimpleGrid, Text } from "@chakra-ui/react";
import ImageLabel from "../ImageLabel";

const TravelType = () => {
  return (
    <Flex justify="center" my="8">
      <SimpleGrid
        columns={[3,3,3,5]}
        spacing="5"
        align="center"
        width="100%"
        justifyContent="space-between"
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
