import { useEffect} from "react";
import { useDispatch, useSelector } from 'react-redux';
import {Flex, Box, Text, Heading, Link,Button, Image, Divider,Grid, Spacer,Icon} from "@chakra-ui/react";
import { Link as RouterLink, useNavigate, useParams} from "react-router-dom";
import {  listPropertyDetails } from "../actions/propertyActions";
import Loader from '../components/Loader';
import Message from '../components/Message'
import {FiStar, TbDimensions,IoPricetagsOutline,TfiLocationPin,GiBrickWall} from "react-icons/fi"
import { addToShortlist } from "../actions/shortlistActions";


const PropertyScreen = () =>{

    const dispatch = useDispatch();  
    const navigate = useNavigate();
    const { id } = useParams();
    
    
    const propertyDetails = useSelector((state)=> state.propertyDetails)
    const {loading, error, property} = propertyDetails

    useEffect(() => {
      dispatch(listPropertyDetails(id))
    }, [id, dispatch]);
   
const addToShortlistHandler = () =>{
  
  navigate('/login?redirect=shortlist')
}
   


    return(
        <>
         <Flex
        justify="space-between"
        bgColor='white'
        mt="5"
        mb="3">
            <Button as={RouterLink} to="/"  bgColor='white'>
                Go Back
            </Button>
         </Flex>   
        
         
        {loading ? (
        <Loader />
      ) : error ? (
        <Message type="error">{error}</Message>
      ) : (
        
       
        <Flex w='500' bgColor='blue.100' mr='40' ml='40'    h="450" borderRadius="lg" overflow='hidden' _hover={{shadow:'md'}}  >
        <Flex direction="row" gap="10" mt='10'   ml="10" mr="10"  px='3'  borderRadius="lg"  >
            {/*column 1 */}
            <Flex direction="column" ml="5" mt='5'>
             <Image _hover={{size:"lg", bgColor:"dark", shadow:"lg"}} src={property.image} alt="property" w="300px" h="300px" borderRadius="md" ml="2"  mt="4" mb="4"/>
             {/* <Text size="md" fontWeight="bold">Posted on {property.posted_on}  by owner {property.name}</Text> */}
            </Flex>
            
              {/*column 2 */}
            <Flex direction="column"  mt='10'  gap="55" >
                <Text fontWeight="bold"  color="black">
                   Property type-{property.type}
                </Text>
                <Text  fontWeight="bold" color="black">
                  Location- {property.location}
                </Text>
               
                < Text fontWeight="bold" color="black">
                  Boundry Wall- {property.boundryWall}
                </Text>

            </Flex> 
         
              {/*column  */}
              <Flex direction="column"   mt='10' px="10" gap="55">
                <Flex >
                    
                    <Text fontWeight="bold">Price: {property.price} ₹</Text>
                </Flex>
                <Flex >
                 
                    <Text fontWeight="bold">Dimension: {property.dimension} sq.m.</Text>
                </Flex>
                <Flex >
                    
                    <Text fontWeight="bold">Description: {property.description} </Text>
                    
                </Flex>
               <Flex  direction="row" mt='10'>
                <Button as={RouterLink} to="/" bgColor="blue.400" w="40" h="35" mb="4" _hover={{ bgColor:"dark", shadow:"lg"}}>
                    Contact Agent
                </Button>
               
                <Button onClick={addToShortlistHandler} 
                 bgColor="blue.400" w="40" h="35" ml='4' _hover={{ bgColor:"dark", shadow:"lg"}}>
                <Icon as={FiStar} color="yellow.500" _hover={{ color:"gray.500"}}  w="6" h="6"  />   ShortList
                </Button>
               </Flex>
               

              </Flex>
              
            </Flex>
        </Flex>
        
      )}
      
        </>

       
    );

};
export default PropertyScreen;