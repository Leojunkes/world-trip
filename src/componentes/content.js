import {
  Image,
  Flex,
  Box,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Text,
  VStack,
} from "@chakra-ui/react";
import Link from "next/link";
import CarouselAuto from "./carousel-auto";
import Swipercarousel from "./swipercarousel";

const Content = () => {
  return (
    <Flex flexDir="column" id="content">
      <Box>
        <Image  src="/imagens/Banner.png" />
      </Box>
      <Box >
        <Tabs mt="50px">
          <TabList display='flex' className='optionsFun' justifyContent="space-around">
            <Tab flexDir="column" paddingBottom="50px" _focus="none">
              <VStack spacing="24px">
                <Image width='5rem' src="/imagens/cocktail 1.png" />
                <Text fontWeight="600">Vida Noturna</Text>
              </VStack>
            </Tab>

            <Tab flexDir="column" paddingBottom="50px" _focus="none">
              <VStack spacing="24px">
                <Image width='5rem' src="/imagens/surf 1.png" />
                <Text fontWeight="600">Praia</Text>
              </VStack>
            </Tab>
            <Tab flexDir="column" paddingBottom="50px" _focus="none">
              <VStack spacing="24px">
                <Image width='5rem' src="/imagens/building 1.png" />
                <Text fontWeight="600">Moderno</Text>
              </VStack>
            </Tab>
            <Tab flexDir="column" paddingBottom="50px" _focus="none">
              <VStack spacing="24px">
                <Image width='5rem' src="/imagens/museum 1.png" />
                <Text fontWeight="600">Clássico</Text>
              </VStack>
            </Tab>
            <Tab flexDir="column" paddingBottom="50px" _focus="none">
              <VStack spacing="24px">
                <Image width='5rem' src="/imagens/earth 1.png" />
                <Text fontWeight="600">e mais ...</Text>
              </VStack>
            </Tab>
          </TabList>

          
        </Tabs>
      </Box>
      <Box className="escolhaText" display="flex" flexDir='column' alignItems='center' fontSize='1.5rem' m='50px auto'>
        <Text fontWeight='500' >Vamos nessa?</Text><br/><Text fontWeight='500'>Então escolha seu Continente</Text>
      </Box>
      
      <Swipercarousel/>
    </Flex>
  );
};
export default Content;
