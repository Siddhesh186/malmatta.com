import { useState, useEffect} from "react";
import axios from "axios";
import {useDispatch, useSelector} from 'react-redux';
import {Flex, Heading, Box, Grid, Spacer} from "@chakra-ui/react";
import Property from "../components/Property";
//import SearchBar from "../components/SearchBar";
import { listProperties } from "../actions/propertyActions";
import SearchBar from "../components/SearchBar";

const HomeScreen = () => {
   const [properties, setProperties] = useState([]);

   useEffect(() => {
     const fetchProperties = async () => {
       const { data } = await axios.get('/api/properties');
       setProperties(data);
     };
 
     
     fetchProperties();
   }, []);
 

    return (
        <>
        <SearchBar/>
         <Heading as='h1' fontSize="3x1" mt="10px" ml="4" >
            Featured For You
         </Heading>
         <Spacer/>
         
            <Grid direction="column" w="50%" bgColor="white" gap="2" mt="2">
             {properties.map((prop)=>(
                <Property property={prop} key={prop._id}/>
            ) )}
         </Grid>
         
         
        </>
    );
};
export default HomeScreen;