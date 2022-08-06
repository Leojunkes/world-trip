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
const AmericaSul = () => {
  return (
    <>
      <HeaderContinente />
      <Flex>
        <Image src="/imagens/americaDosul.png" />
      </Flex>
      <SimpleGrid gap={12} m="50px 30px" alignItems="center" columns={[1, 2]}>
        <GridItem>
          <Text>
            A América do Sul é um continente que compreende a porção meridional
            da América. Também é considerada um subcontinente do continente
            americano. A sua extensão é de 17 819 100 km², abrangendo 12% da
            superfície terrestre e 6% da população mundial.
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
export default AmericaSul;
