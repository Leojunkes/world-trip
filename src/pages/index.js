import Head from 'next/head';
import Image from 'next/image';

import { Button, Flex, Input } from '@chakra-ui/react';
import { useState } from 'react';
import axios from 'axios';
import Header from '../componentes/header';
import Content from '../componentes/content';

export default function Home() {
  // function teste(e) {
  //   e.preventDefault();
  //   axios.post('/api/hello', { name });
  // }
  return (
    <div>
      <Head>
        <title>World-Trip</title>
      </Head>
      <Header/>
      <Content/>
    </div>
  );
}
