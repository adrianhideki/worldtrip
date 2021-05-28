import React from "react";
import Head from "next/head";
import { Flex, Image, Stack, Text } from "@chakra-ui/react";
import TravelType from "../components/TravelTypes";
import Divider from "../components/Divider";
import Carousel from "../components/Carousel";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Home | worldtrip</title>
      </Head>
      <main>
        <Image src="/banner.png" alt="viajar" width="100%" height="auto" />
        <Stack spacing="10" justifyContent="center" maxWidth="1280px" mx="auto">
          <TravelType />
          <Divider />
          <Flex align="center" flexDir="column">
            <Text fontSize="36px" display="flex" as="div">
              Vamos Nessa?
            </Text>
            <Text fontSize="36px" display="flex" as="div">
              Escolha seu continente
            </Text>
          </Flex>
          <Carousel />
        </Stack>
      </main>
    </div>
  );
}
