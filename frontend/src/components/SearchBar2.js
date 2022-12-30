 import {Flex, Heading,Input, Icon,Box, Text, Link ,Image } from "@chakra-ui/react";
import axios from 'axios';
import {useDispatch, useSelector} from 'react-redux';
import  {useState, useEffect} from "react";
import { Link as RouterLink, useParams, useSearchParams} from "react-router-dom";
import {FiSearch} from "react-icons/fi";
import PropertyScreen from "../screens/PropertyScreen";
import Property from "./Property";
import { listProperties } from "../actions/propertyActions";

function SearchBar (){
    const { id } = useParams();
    const [property, setProperty] = useState({});
    const [properties, setProperties] = useState({}); 
    const dispatch = useDispatch()
    
   
    
   

    useEffect(() => {
      const getProperty = async () => {
        const { data } = await axios.get(`/api/properties/${id}`);
        setProperty(data);
        setProperties(data);
      };
  
      getProperty();
    }, [id]);
   
   
     const[filteredProps,setFilteredProps] = useState([])

     const handleFilter = (event)=> {
        const searchWord = event.target.value;
        const newFilter = properties.filter((value)=> {
            return value.location.toLowerCase().includes(searchWord.toLowerCase());
        });
       setFilteredProps(newFilter)
     };
    return(
        
        <Flex 
        align="center"
        justifyContent="center"
        h="250px"
        bgColor="blue.200"
        direction="row"
        mt="5"
        
        //bgImage='images/bg5jpg.jpg'
       
        >
        
            <Flex  direction='column'>
            <Flex
            align="center"
            bgColor="gray.200"
            
            w="400px"
            radius="4"
            direction="row"
            justify="space-between">
                <Input type="text" placeholder="Search for location" onChange={handleFilter} color='black' mr="3"/>
                <Icon as={FiSearch} color="black" _hover={{ color:"gray.500"}} w="6" h="6" ></Icon>
                
            </Flex>
            {   filteredProps.length !==0 && (
                <Flex direction="column" bgColor="blue.400" w="300px"  ml="0" overflow="hidden">
                {filteredProps.map((value,key)=>(
                
                       <Flex  _hover={{ color:"black.500"}}> <Link as={RouterLink} to={`/property/${property._id}`} > <Text color="white">{value.location}</Text></Link></Flex>

                ))}
            </Flex>
            )}
            </Flex>
            
       
        </Flex>    
    )
}
       
        
export default SearchBar;