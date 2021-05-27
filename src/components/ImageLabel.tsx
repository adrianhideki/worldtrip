import React from "react";
import { Flex, Text, Image } from "@chakra-ui/react";

interface ImageLabelProps {
  label: string;
  image: string;
}

const ImageLabel = ({ label, image }: ImageLabelProps) => {
  return (
    <Flex w="100%" flexDir="column" justify="center" alignItems="center">
      <Image src={image} alt={label} width="85px" height="85px" />
      <Text fontWeight="bold" fontSize="24px" mt="5">
        {label}
      </Text>
    </Flex>
  );
};

export default ImageLabel;
