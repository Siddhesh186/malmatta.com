import {Box, Link, Image, Flex, Heading, Text,Spacer, Icon,Button,Divider} from "@chakra-ui/react";
import {Link as RouterLink} from "react-router-dom";
import {FiStar} from "react-icons/fi"
const Property = ({property})=>{
    return (
        <Link as={RouterLink} to={`/property/${property._id}`} _hover={{textDecor:"none"}}>
            <Box
            justifyContent="left"
            w="100%"
            h="250px"
            borderRadius="lg"
            bgColor="gray.300"
            transition="all"
            _hover={{ shadow:"md"}}
            directon="row"
            gap="20"
            ml="4">
            
             <Flex ml='4'>
             <Image
             mr="8"
             ml="2"
             mt="2"
             mb="2"
            src={property.image}
            alt="property"
            h="230px"
            w="30%"
            
            objectFit="cover"
           
            />
              <Flex direction="row" justify="space-between" >
                <Flex gap="30" direction="column" mt="5" mb="3">
                  <Heading as="h4" fontSize="md" color="blue.900" mb="3">
                    Land Type-{property.type}
                  </Heading>
                  <Heading as="h4" fontSize="md" color="blue.900" mb="3">
                   Location- {property.location}
                  </Heading>
                    <Text fontSize="2x1" fontWeight="bold" color="blue.900">Price-₹{property.price}</Text>
                    <Text fontSize="2x1" fontWeight="bold" color="blue.900">Area-{property.dimension} sq.m.</Text>
                    
                 </Flex>
                
                 <Flex ml="30px" mt="5"  >
                    <Button ml="150px" as={RouterLink} to="/" bgColor="blue.200" size="md" _hover={{ bgColor:"dark", shadow:"lg"}}>
                    <Icon as={FiStar} color="yellow.500" _hover={{ color:"gray.500"}}  w="6" h="6"  />  ShortList
                   </Button>
                   </Flex>   
              </Flex>
                
            </Flex>   
            
            
            </Box>
        </Link>
    )
};
export default Property