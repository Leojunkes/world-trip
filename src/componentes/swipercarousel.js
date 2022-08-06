import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Link from 'next/link';

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";
import { Box, Image } from "@chakra-ui/react";

export default function Swipercarousel() {
  return (
    <Box className="swiper-container" paddingBottom='50px'>
      <Swiper  navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide><a href="/continentes/europa" ><Image src='/imagens/Continents Slide.png' /></a></SwiperSlide>
        <SwiperSlide><a href="/continentes/oceania" ><Image src='/imagens/oceania.png' /></a></SwiperSlide>
        <SwiperSlide><a href="/continentes/africa" ><Image src='/imagens/africa.png' /></a></SwiperSlide>
        <SwiperSlide><a href="/continentes/americadoSul" ><Image src='/imagens/americadosul.png' /></a></SwiperSlide>
        <SwiperSlide><a href="/continentes/asia" ><Image src='/imagens/asia.png' /></a></SwiperSlide>
        <SwiperSlide><a href="/continentes/americaNorte" ><Image src='/imagens/americadonorte1.png' /></a></SwiperSlide>
        
        
      </Swiper>
    </Box>
  );
}
