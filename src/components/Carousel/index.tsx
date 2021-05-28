import React from "react";
import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";

// import Swiper core and required modules
import SwiperCore, {
  Navigation,
  Pagination,
  Mousewheel,
  Keyboard,
} from "swiper/core";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";

// install Swiper modules
SwiperCore.use([Navigation, Pagination, Mousewheel, Keyboard]);

const Carousel = () => {
  return (
    <Flex pb="8" justifyContent="center">
      <Flex maxWidth="1240px" minW="100px">
        <Swiper
          cssMode={true}
          navigation={true}
          pagination={true}
          mousewheel={true}
          keyboard={true}
        >
          <SwiperSlide>
            <Flex
              backgroundImage="/northAmerica.jpg"
              height="400"
              width="100%"
              flexDir="column"
              alignItems="center"
              justifyContent="center"
              backgroundPosition="center"
              backgroundSize="stretch"
            >
              <Text
                color="white"
                fontSize="3rem"
                fontWeight="700"
                textAlign="center"
              >
                América do Norte
              </Text>
              <Text
                color="white"
                fontSize="1.5rem"
                fontWeight="700"
                textAlign="center"
              >
                Reservas naturais e monumentos históricos à
              </Text>
              <Text
                color="white"
                fontSize="1.5rem"
                fontWeight="700"
                textAlign="center"
              >
                atmosfera urbana das metrópoles.
              </Text>
            </Flex>
          </SwiperSlide>
          <SwiperSlide>
            <Flex
              backgroundImage="/southAmerica.jpg"
              height="400"
              width="100%"
              flexDir="column"
              alignItems="center"
              justifyContent="center"
              backgroundPosition="center"
              backgroundSize="stretch"
            >
              <Text
                color="white"
                fontSize="3rem"
                fontWeight="700"
                textAlign="center"
              >
                América do Sul
              </Text>
              <Text
                color="white"
                fontSize="1.5rem"
                fontWeight="700"
                textAlign="center"
              >
                Muitas belezas naturais
              </Text>
            </Flex>
          </SwiperSlide>
          <SwiperSlide>
            <Flex
              backgroundImage="/asia.jpg"
              height="400"
              width="100%"
              flexDir="column"
              alignItems="center"
              justifyContent="center"
              backgroundPosition="center"
              backgroundSize="stretch"
            >
              <Text color="white" fontSize="3rem" fontWeight="700">
                Ásia
              </Text>
              <Text
                color="white"
                fontSize="1.5rem"
                fontWeight="700"
                textAlign="center"
              >
                O maior de todos os continentes.
              </Text>
            </Flex>
          </SwiperSlide>
          <SwiperSlide>
            <Flex
              backgroundImage="/africa.jpg"
              height="400"
              width="100%"
              flexDir="column"
              alignItems="center"
              justifyContent="center"
              backgroundPosition="center"
              backgroundSize="stretch"
            >
              <Text color="white" fontSize="3rem" fontWeight="700">
                África
              </Text>
              <Text
                color="white"
                fontSize="1.5rem"
                fontWeight="700"
                textAlign="center"
              >
                De praias à safaris, um panorama para sua próxima viagem.
              </Text>
            </Flex>
          </SwiperSlide>
          <SwiperSlide>
            <Flex
              backgroundImage="/europaSlide.png"
              height="400"
              width="100%"
              flexDir="column"
              alignItems="center"
              justifyContent="center"
              backgroundPosition="center"
              backgroundSize="stretch"
            >
              <Text color="white" fontSize="3rem" fontWeight="700">
                Europa
              </Text>
              <Text
                color="white"
                fontSize="1.5rem"
                fontWeight="700"
                textAlign="center"
              >
                Também chamada de Velho Mundo.
              </Text>
            </Flex>
          </SwiperSlide>
          <SwiperSlide>
            <Flex
              backgroundImage="/oceania.jpg"
              backgroundPosition="center"
              backgroundSize="stretch"
              height="400"
              width="100%"
              flexDir="column"
              alignItems="center"
              justifyContent="center"
            >
              <Text color="white" fontSize="3rem" fontWeight="700">
                Oceania
              </Text>
              <Text
                color="white"
                fontSize="1.5rem"
                fontWeight="700"
                textAlign="center"
              >
                Clima tropical e milhares de ilhas paradisíacas.
              </Text>
            </Flex>
          </SwiperSlide>
        </Swiper>
      </Flex>
    </Flex>
  );
};

export default Carousel;
