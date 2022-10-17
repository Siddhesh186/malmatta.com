import {Flex, Box, Text, Heading, Link,Button, Image, Divider,Grid, Spacer,Icon} from "@chakra-ui/react";
import { Link as RouterLink, useParams} from "react-router-dom";
import properties from "../Properties";
import {FiStar} from "react-icons/fi"

const PropertyScreen = () =>{
    const {id} = useParams()
    const property = properties.find((prop)=> prop._id === id) 
   

    return(
        <>
         <Flex
        justify="space-between"
        
        mt="1"
        mb="3"
        ml="2">
            <Button as={RouterLink} to="/" >
                Go Back
            </Button>
        </Flex>
        <Flex direction="row" gap="10" bgColor="gray.200" h="400" mb="10" mt="5" ml="2" mr="2" _hover={{shadow:"lg"}} borderRadius="lg" >
            {/*column 1 */}
            <Flex direction="column" ml="5">
             <Image _hover={{size:"lg", bgColor:"dark", shadow:"lg"}} src={property.image} alt="property" w="300px" h="300px" borderRadius="md" ml="2"  mt="4" mb="4"/>
             <Text size="md" fontWeight="bold">Posted on {property.posted_on}  by owner {property.owner_name}</Text>
            </Flex>
            
              {/*column 2 */}
            <Flex direction="column"  py="10" px="10"  gap="55">
                <Text fontWeight="bold"  color="black">
                   Property type-{property.property_type}
                </Text>
                <Text  fontWeight="bold" color="black">
                  Location- {property.location}
                </Text>
               
                < Text fontWeight="bold" color="black">
                  Boundry Wall- {property.boundry_wall}
                </Text>

            </Flex> 
         
              {/*column 2 */}
              <Flex direction="column"  py="10" px="10" gap="55">
                <Flex >
                    <Text fontWeight="bold">Price : </Text>
                    <Text fontWeight="bold">₹{property.price}</Text>
                </Flex>
                <Flex >
                    <Text fontWeight="bold">Dimension : </Text>
                    <Text fontWeight="bold">{property.dimension}sq.m.</Text>
                </Flex>
                <Flex >
                    <Text fontWeight="bold">Description : </Text>
                    <Text fontWeight="bold">{property.description}</Text>
                </Flex>
               <Flex justifyContent="space-between" direction="column">
                <Button as={RouterLink} to="/" bgColor="blue.200" w="40" h="35" mb="4" _hover={{ bgColor:"dark", shadow:"lg"}}>
                    Contact Agent
                </Button>
               
                <Button as={RouterLink} to="/" bgColor="blue.200" w="40" h="35" _hover={{ bgColor:"dark", shadow:"lg"}}>
                <Icon as={FiStar} color="yellow.500" _hover={{ color:"gray.500"}}  w="6" h="6"  />  ShortList
                </Button>
               </Flex>
               

              </Flex>
        </Flex>
        </>

       
    );

};
export default PropertyScreen;