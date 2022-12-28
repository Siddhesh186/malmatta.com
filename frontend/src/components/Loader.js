import { Spinner, Flex } from "@chakra-ui/react";

const Loader = () =>{
    return(
        <Flex alignItems='center' justifyContent="center" mt='4'>
      <Spinner
      thickness="4px"
      speed="0.65S"
      emptyColor="gray.200"
      color="blue.500"
      size="xl"
      lable="loading..."/>
    </Flex>
    );
    
};

export default Loader;