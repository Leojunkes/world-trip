import {
  Image,
  Flex,
  Grid,
  GridItem,
  Text,
  SimpleGrid,
  HStack,
  Box,
} from "@chakra-ui/react";
import Link from "next/link";
import paises from "../../../data/paises.json";
import HeaderContinente from "../../componentes/header-continentes";
const AmericaNorte = () => {
  return (
    <>
      <HeaderContinente />
      <Flex>
        <Image src="/imagens/mexicoBanner.png" />
      </Flex>
      <SimpleGrid gap={12} m="50px 30px" alignItems="center" columns={[1, 2]}>
        <GridItem>
          <Text>
            A América do Norte corresponde à parte norte do continente
            americano, é formada por três países, Estados Unidos, Canadá e
            México, que ocupam juntos uma área de 23,6 milhões de quilômetros
            quadrados. Essa porção do continente americano está situada no
            ocidente e no hemisfério norte, esse limita-se ao norte com o Oceano
            Ártico, leste com Oceano Atlântico, sudeste com o mar das Caraíbas e
            no sul e oeste com o Oceano Pacífico.
          </Text>
        </GridItem>
        <GridItem alignItems="center" justifyContent="center" display="flex">
          <HStack spacing="20px">
            <Image w="5.5rem" src="/imagens/50 países.png" />
            <Image w="6rem" src="/imagens/60 línguas.png" />
            <Image w="10.5rem" src="/imagens/24 cidades.png" />
          </HStack>
        </GridItem>
      </SimpleGrid>

      <SimpleGrid
        gap={12}
        m="50px 30px"
        alignItems="center"
        columns={[1, 3]}
      >
        {paises.americadoNorte.map((p) => (
          <GridItem m='0 auto' border='1px solid green' borderRadius='5px' w="10.5rem">
            <Image src={p.imagem} />
            <Text fontSize='1rem' m='10px 0 0 10px' fontWeight="bold">{p.cidade}</Text>
            <Box paddingBottom='20px' display='flex'>
              <Text m='10px 0 0 10px' paddingTop="10px" fontSize="0.9rem" color="gray.400">
                {p.país}
              </Text>
              <Image m='0 0 0 4px' w='2.1rem'h='2.1rem' borderRadius='100px' src={p.icon} />
            </Box>
          </GridItem>
        ))}
      </SimpleGrid>
    </>
  );
};
export default AmericaNorte;
