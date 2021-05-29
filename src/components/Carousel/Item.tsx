import React from "react";
import Link from "next/link";
import { Flex, Text } from "@chakra-ui/react";

type CarouselItemProps = {
  title: string;
  description: string;
  image: string;
  path: string;
};

const CarouselItem = ({
  image,
  title,
  description,
  path,
}: CarouselItemProps) => {
  return (
    <Flex
      backgroundImage={image}
      height="400"
      width="100%"
      flexDir="column"
      alignItems="center"
      justifyContent="center"
      backgroundPosition="center"
      backgroundSize="cover"
    >
      <Link href={path}>
        <a>
          <Text
            color="white"
            fontSize="3rem"
            fontWeight="700"
            textAlign="center"
          >
            {title}
          </Text>
          <Text
            color="white"
            fontSize="1.5rem"
            fontWeight="700"
            textAlign="center"
          >
            {description}
          </Text>
        </a>
      </Link>
    </Flex>
  );
};

export default CarouselItem;
