import { Image, Flex } from "@chakra-ui/react";
import Link from "next/link";
const HeaderContinente = () => {
  return (
    <Flex alignItems='center' m="0 auto" id="header">
      <Link cursor="pointer" href='/'>
      <Image position="absolute" ml='30px' w='1.5rem' h='1.5rem' src="/imagens/chevron-left.png" />
      </Link>
      
      <Image src="/imagens/Header.png" />
    </Flex>
  );
};
export default HeaderContinente;
