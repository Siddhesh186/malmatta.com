import {Box, Link, Image, Flex, Heading, Text,Spacer, Icon,Button,Divider} from "@chakra-ui/react";
import {Link as RouterLink, useParams, useNavigate} from "react-router-dom";
import {FiStar} from "react-icons/fi";
import {IoLocationSharp,IoPricetags} from "react-icons/io5";
import {TbDimensions} from "react-icons/tb"
const Property = ({property})=>{
 
  const navigate = useNavigate()
  const { id } = useParams()
 
  const addToShortlistHandler = () =>{
    navigate('/login?redirect=shortlist')
  }
  
    return (
      <>
      <Flex direction='row' bgColor="gray.300" width='100%' h='max' borderRadius='md' _hover={{shadow:'lg'}} py='3' >
        <Link as={RouterLink} to={`/property/${property._id}`} _hover={{textDecor:"none"}}>
            <Box
            justifyContent="left"      
            transition="all"
            //_hover={{ shadow:"md"}}
            directon="row"
            gap="20"
            ml="4"   
            >
             <Flex ml='4' w='100%'>
             <Image
             mr="8"
             mt='4'
            src={property.image}
            alt="property"
            h="230px"
            w="40%"
            borderRadius='lg'
            _hover={{ shadow:"md"}}
            
            
            />
            <Divider orientation="vertical" borderColor='black'/>
              <Flex direction="row" justify="space-between" ml='3'>
                <Flex gap='3' direction="column" mt="5" mb="3" alignItems ='flex-start'>
                  <Heading as="h4" fontSize="md" color="blue.900" mb="3">
                    Land Type-{property.type}
                  </Heading>
                  <Divider borderColor='gray.400' />
                  <Heading as="h4" fontSize="md" color="blue.900" mb="3" >
                  <Icon as={IoLocationSharp} color="black" w="6" h="6" /> Location- {property.location}
                  </Heading>
                  <Divider borderColor='gray.400'/>
                    <Heading as="h4" fontSize="md" color="blue.900" mb="3">
                    <Icon as={IoPricetags} color="black" w="6" h="6" /> Price- {property.price} ₹
                    </Heading>
                    <Divider borderColor='gray.400'/>
                    <Heading as="h4" fontSize="md" color="blue.900" mb="3">
                    <Icon as={TbDimensions} color="black" w="6" h="6" /> Dimension- {property.dimension} sqm
                  
                    </Heading>
                  
                 </Flex>
              </Flex>
            </Flex>   
            </Box>
        </Link>
        <Flex ml='20' mt='8' mr='10'>
              <Button onClick={addToShortlistHandler} bgColor="blue.200" h="40px" w="110px" _hover={{ bgColor:"dark", shadow:"lg"}}>
                <Icon as={FiStar} color="yellow.500" _hover={{ color:"gray.500"}}  w="6" h="6"  />  ShortList
                </Button>
              </Flex>
            </Flex>  
              
        </>
    )
};
export default Property