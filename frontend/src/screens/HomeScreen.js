import {  useEffect} from "react";
import axios from "axios";
import {useDispatch, useSelector} from 'react-redux';
import {Flex, Heading, Box, Grid, Spacer} from "@chakra-ui/react";
import Property from "../components/Property";

import { listProperties } from "../actions/propertyActions";
import SearchBar from "../components/SearchBar";
import Loader from '../components/Loader';
import Message from "../components/Message";



const HomeScreen = () => {
  const dispatch = useDispatch();

  const propertyList = useSelector((state) => state.propertyList);
  const {loading, error, properties } = propertyList; 
     
     useEffect(()=> {
      dispatch(listProperties());
     },[dispatch])
  
 

    return (
        <>   

         { loading ? (
           <Loader/>
           ): error ? (
            <Message type="error">{error}</Message>
           ) : (
            <>
            <SearchBar/>

         <Heading as='h1' fontSize="md" mt="10px" ml="4" >
            Featuring some plots for you
         </Heading>
         <Spacer/>
            <Grid gridTemplateColumns='4fr 4fr' w="100%" bgColor="gray.300S" gap="2" mt="4" mb='20' px='4' >
            {properties.slice(0,8).map((prop)=>(
               <Property property={prop} key={prop._id}/>
           ) )}
        </Grid>
        </>
           )}
            
        </>
    );
};
export default HomeScreen;