import React from "react";
import { GetStaticProps } from "next";
import http from "../../services/http";
import {
  Box,
  Flex,
  Heading,
  SimpleGrid,
  Stack,
  Text,
  Tooltip,
} from "@chakra-ui/react";
import Banner from "../../components/Banner";
import CountText from "../../components/CountText";
import CityCard from "../../components/CityCard";

type city = {
  name: string;
  country: string;
  image: string;
  flag: string;
};

type continent = {
  banner: string;
  title: string;
  description: string;
  countryCount: number;
  languageCount: number;
  cityCount: number;
  cities: city[];
};

type ContinentProps = {
  data: continent;
};

const Continent = ({ data }: ContinentProps) => {
  return (
    <Box as="main">
      <Banner title={data.title} bannerImage={data.banner} />
      <Stack p="20" pb="5" maxWidth="1280px" mx="auto">
        <SimpleGrid columns={[1, 1, 1, 2]} spacing="10">
          <Text
            textAlign="justify"
            display="flex"
            flex="1"
            fontSize="1.5rem"
            lineHeight="2.25rem"
          >
            {data.description}
          </Text>
          <Flex flex="1" justify="center">
            <SimpleGrid columns={[1, 1, 1, 2, 3]} spacing="6">
              <CountText count={data.countryCount} description="países" />
              <CountText count={data.languageCount} description="línguas" />
              <CountText
                count={data.cityCount}
                description={
                  <Tooltip
                    label="The 100 Most Popular City Destinations"
                    aria-label="A tooltip"
                  >
                    cidades +100
                  </Tooltip>
                }
              />
            </SimpleGrid>
          </Flex>
        </SimpleGrid>
        <Heading py="10">Cidades +100</Heading>
        <SimpleGrid
          columns={[1, 1, 2, 3, 4]}
          spacing="10"
          justifyContent="center"
          alignItems="center"
        >
          {data.cities.map((c) => (
            <CityCard
              image={c.image}
              city={c.name}
              country={c.country}
              flag={c.flag}
              key={c.name}
            />
          ))}
        </SimpleGrid>
      </Stack>
    </Box>
  );
};

export default Continent;

export async function getStaticPaths() {
  return {
    paths: [
      { params: { id: "asia" } }, // See the "paths" section below
    ],
    fallback: "blocking", // See the "fallback" section below
  };
}

export const getStaticProps: GetStaticProps = async (context) => {
  const response = await http.get(`/continents?name=${context.params.id}`);

  return {
    props: {
      data: response.data,
    },
  };
};
