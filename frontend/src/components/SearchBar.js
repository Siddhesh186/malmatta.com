import {Flex, Input, Icon, Box, Text, Link, Image, Heading, Divider, Center} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import {useDispatch,useSelector } from "react-redux";
import { Link as RouterLink, useParams} from "react-router-dom";
import {FiSearch} from "react-icons/fi";
import {RiCloseFill} from "react-icons/ri";
import { listPropertyDetails } from "../actions/propertyActions";

const SearchBar= ()=>{
     const { id } = useParams();
     const dispatch = useDispatch();
     const [filteredProps, setFilteredProps] = useState([])
     const [wordEntered, setWordEntered] = useState("")

     const propertyList = useSelector((state) => state.propertyList);
     const { properties} = propertyList;

     useEffect(() => {
        dispatch(listPropertyDetails(id))
      }, [id, dispatch]);

      const handleFilter =(event)=>{
        const searchWord = event.target.value;
        setWordEntered(searchWord)
        const newFilter = properties.filter ( (post) => {
            return post.location.toLowerCase().includes(searchWord.toLowerCase());
            });
            if (searchWord === "") {
                setFilteredProps([])
            } else {
                setFilteredProps(newFilter)
            }
            
       };

       const clearInput= ()=>{
        setFilteredProps([]);
        setWordEntered("")
       };

     return (
        <Flex
        align='center'
        justifyContent='center'
        h='200px'
        gap='5'
        bgColor='white.100'
        direction='column'
        mt='5'>
             {/* <Flex mt='10'  mb='5'ml='20'  boxShadow='lg'    align='center' w='max' >
                <Image h='150px' w='1000px' src="images/land.jpg" alt="picture" borderRadius='md'></Image>
            </Flex> */}
            
            <Flex align='center' mb='2'><Heading as='h2' fontStyle='oblique' fontFamily='cursive'>Pick your dream plot</Heading></Flex>
            
            
            <Flex direction='column' bgColor='gray.200' borderRadius='lg' mt='2'mb='2' >
                <Flex
                align='center'
                w='400px'
                color='gray.200'
                direction='row'
                justify='space-between'>
                    <Input type='text' textColor='black' placeHolder= 'Search for location' value={wordEntered} onChange={handleFilter} mr='3'/>
                    { filteredProps.length ===0 ? <Icon as={FiSearch} color='black' _hover={{ color:'gray.500'}} w='6' h='6'></Icon>
                     : <Icon as={RiCloseFill} color='black' _hover={{ color:'gray.500'}} w='6' h='6' onClick={clearInput}></Icon>   
                    }
                    
                     
                </Flex>

               
                <Flex align='center' direction="column" bgColor="gray.100" w="400px"  ml="0" overflow="hidden" borderRadius='md'>
                
               {filteredProps.length !==0 && filteredProps.slice(0,10).map((post,key)=>(
                
                       <Flex  _hover={{ color:"black.500"}}> <Link as={RouterLink} to={`/property/${post._id}`} > <Text color="black">{post.location}</Text></Link></Flex>

                ))}
                
                </Flex>
                
                
                </Flex>
                <Divider borderColor='gray.200'/>
        </Flex>
        
     )


}
export default SearchBar;