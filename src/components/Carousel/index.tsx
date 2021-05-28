import React from "react";
import { Flex } from "@chakra-ui/react";
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
import CarouselItem from "./Item";

// install Swiper modules
SwiperCore.use([Navigation, Pagination, Mousewheel, Keyboard]);

const Carousel = () => {
  return (
    <Flex pb="8" justifyContent="center">
      <Flex width="1280px" minW="100px">
        <Swiper
          cssMode={true}
          navigation={true}
          pagination={true}
          mousewheel={true}
          keyboard={true}
        >
          <SwiperSlide>
            <CarouselItem
              image="/northAmerica.jpg"
              title="América do Norte"
              description="Reservas naturais e monumentos históricos"
              path="/continents/north-america"
            />
          </SwiperSlide>
          <SwiperSlide>
            <CarouselItem
              image="/southAmerica.jpg"
              title="América do Sul"
              description="Muitas belezas naturais"
              path="/continents/south-america"
            />
          </SwiperSlide>
          <SwiperSlide>
            <CarouselItem
              image="/asia.jpg"
              title="Ásia"
              description="O maior de todos os continentes."
              path="/continents/asia"
            />
          </SwiperSlide>
          <SwiperSlide>
            <CarouselItem
              image="/africa.jpg"
              title="África"
              description="De praias à safaris, um panorama para sua próxima viagem."
              path="/continents/africa"
            />
          </SwiperSlide>
          <SwiperSlide>
            <CarouselItem
              image="/europaSlide.png"
              title="Europa"
              description="Também chamada de Velho Mundo."
              path="/continents/europe"
            />
          </SwiperSlide>
          <SwiperSlide>
            <CarouselItem
              image="/oceania.jpg"
              title="Oceania"
              description="Clima tropical e milhares de ilhas paradisíacas."
              path="/continents/oceania"
            />
          </SwiperSlide>
        </Swiper>
      </Flex>
    </Flex>
  );
};

export default Carousel;
