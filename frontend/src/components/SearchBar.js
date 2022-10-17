import {Flex, Heading,Input, Icon,Box, Text, Link  } from "@chakra-ui/react";
import React, {useState} from "react";
import { Link as RouterLink, useParams, useSearchParams} from "react-router-dom";
import {FiSearch} from "react-icons/fi";
import properties from "../Properties";
import PropertyScreen from "../screens/PropertyScreen";
import Property from "./Property";


function SearchBar (property){
   
   
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
        direction="column"
        mt="5"
       
        >
            <Flex
            align="center"
            bg="gray.700"
            
            w="400px"
            radius="4"
            direction="row"
            justify="space-between">
                <Input type="text" placeholder="Search for location" onChange={handleFilter} color="white" mr="3"/>
                <Icon as={FiSearch} color="gray.500" _hover={{ color:"gray.500"}} w="6" h="6" ></Icon>
                
            </Flex>
            {   filteredProps.length !==0 && (
                <Flex direction="column" bgColor="blue.400" w="300px"  ml="0" overflow="hidden">
                {filteredProps.map((value,key)=>(
                
                       <Flex  _hover={{ color:"black.500"}}> <Link as={RouterLink} to={`/property/${property._id}}`} > <Text color="white">{value.location}</Text></Link></Flex>

                ))}
            </Flex>
            )}
       
        </Flex>    
    )
}
       
        
export default SearchBar;