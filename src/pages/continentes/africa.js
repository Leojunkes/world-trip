import {
  Image,
  Flex,
  Grid,
  GridItem,
  Text,
  SimpleGrid,
  HStack,
} from "@chakra-ui/react";
import Link from "next/link";
import HeaderContinente from "../../componentes/header-continentes";
const Africa = () => {
  return (
    <>
      <HeaderContinente />
      <Flex>
        <Image src="/imagens/africabanner.png" />
      </Flex>
      <SimpleGrid gap={12} m="50px 30px" alignItems="center" columns={[1, 2]}>
        <GridItem>
          <Text>
            A África é o terceiro continente mais extenso com cerca de 30
            milhões de quilômetros quadrados, cobrindo 20,3% da área total da
            terra firme do planeta. É o segundo continente mais populoso da
            Terra com cerca de um bilhão de pessoas, representando cerca de um
            sétimo da população mundial, e 54 países independentes.
          </Text>
        </GridItem>
        <GridItem alignItems="center" justifyContent="center" display="flex">
          <HStack spacing="20px">
            <Image w="5.5rem" src="/imagens/50 países.png" />
            <Image w="6rem" src="/imagens/60 línguas.png" />
            <Image paddingBottom='7px' w="11.1rem" src="/imagens/24 cidades.png" />
          </HStack>
        </GridItem>
      </SimpleGrid>
    </>
  );
};
export default Africa;
