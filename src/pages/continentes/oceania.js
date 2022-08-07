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
import HeaderContinente from "../../componentes/header-continentes";
import paises from "../../../data/paises.json";
const Oceania = () => {
  return (
    <>
      <HeaderContinente />
      <Flex>
        <Image src="/imagens/oceaniaBanner.png" />
      </Flex>
      <SimpleGrid gap={12} m="50px 30px" alignItems="center" columns={[1, 2]}>
        <GridItem>
          <Text>
            A Oceania é um continente localizado a sudeste da Ásia,
            compreendendo um conjunto de ilhas somado à Austrália, essa última
            considerada como uma massa continental chamada de “Australásia”.
            Possui uma área total de 8.480.355 km², onde habitam aproximadamente
            38 milhões de pessoas. Por ter sido o último continente a ser
            colonizado pelos europeus, a Oceania é alcunhada de “novíssimo
            continente”, em distinção a Europa (o velho mundo) e à América (o
            novo mundo), segundo a regionalização eurocêntrica da Terra.
          </Text>
        </GridItem>
        <GridItem alignItems="center" justifyContent="center" display="flex">
          <HStack spacing="20px">
            <Image w="5.5rem" src="/imagens/50 países.png" />
            <Image w="6rem" src="/imagens/60 línguas.png" />
            <Image
              paddingBottom="7px"
              w="11.1rem"
              src="/imagens/24 cidades.png"
            />
          </HStack>
        </GridItem>
      </SimpleGrid>
      <SimpleGrid
        gap={12}
        m="50px 30px"
        alignItems="center"
        columns={[2, 3, 4]}
      >
        {paises.paisesExemplos.map((p, key) => (
          <GridItem
            key={key}
            m="0 auto"
            border="1px solid green"
            borderRadius="5px"
            w="10.5rem"
          >
            <Image src={p.imagem} />
            <Text fontSize="1rem" m="10px 0 0 10px" fontWeight="bold">
              {p.cidade}
            </Text>
            <Box paddingBottom="20px" display="flex">
              <Text
                m="10px 0 0 10px"
                paddingTop="10px"
                fontSize="0.9rem"
                color="gray.400"
              >
                {p.país}
              </Text>
              <Image
                m="0 0 0 4px"
                w="2.1rem"
                h="2.1rem"
                borderRadius="100px"
                src={p.icon}
              />
            </Box>
          </GridItem>
        ))}
      </SimpleGrid>
    </>
  );
};
export default Oceania;
