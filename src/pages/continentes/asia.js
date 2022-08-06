import { Image, Flex, Grid, GridItem, Text, SimpleGrid, HStack } from "@chakra-ui/react";
import Link from "next/link";
import HeaderContinente from "../../componentes/header-continentes";
const Asia = () => {
  return (
    <>
      <HeaderContinente />
      <Flex>
        <Image src="/imagens/asiaBanner.png" />
      </Flex>
      <SimpleGrid gap={12} m='50px 30px'  alignItems='center' columns={[1,2]}>
        <GridItem>
          <Text>
            A Ásia é, por convenção, um dos seis continentes do mundo.
            Compreendendo a península ocidental da Eurásia, a Europa geralmente
            divide-se da Ásia a leste pela divisória de águas dos montes Urais,
            o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste
          </Text>
        </GridItem>
        <GridItem alignItems='center' justifyContent='center' display='flex'>
          <HStack spacing='20px'>
          <Image w='5.5rem' src='/imagens/50 países.png'/>
          <Image w='6rem' src='/imagens/60 línguas.png'/>
          <Image paddingBottom='7px' w="11.1rem" src="/imagens/24 cidades.png" />
          </HStack>
         
        </GridItem>
      
    </SimpleGrid>
    </>
  );
};
export default Asia;
