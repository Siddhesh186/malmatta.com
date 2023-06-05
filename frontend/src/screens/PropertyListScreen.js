import { useEffect } from "react";
import {Link as RouterLink, useNavigate} from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import {
    Flex, 
    Box,
    Button,
    Heading,
    Icon,
    Table,
    Thead,
    Tr,
    Th,
    Td,
    Tbody,
} from '@chakra-ui/react';
import { IoPencilSharp,IoTrashBinSharp,IoAdd } from "react-icons/io5";
import Loader from '../components/Loader';
import Message from "../components/Message";
import { listProperties,deleteProperty } from "../actions/propertyActions";

const PropertyListScreen = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const propertyList = useSelector((state)=>state.propertyList);
    const { loading, error, properties} = propertyList;
    
    const userLogin = useSelector((state) => state.userLogin);
    const {userInfo} = userLogin;

    const propertyDelete = useSelector((state)=>state.propertyDelete);
    const {
      loading: loadingDelete,
      error: errorDelete,
      success: successDelete,
    } = propertyDelete;

    useEffect(() => {
        if (userInfo && userInfo.isAdmin) {
            dispatch(listProperties());

        } else {
            navigate('/login')
        }
    },[dispatch, navigate, userInfo, successDelete]);

    const deleteHandler = (id) => {
        if (window.confirm('Are You sure')) {
            //delete Property
            dispatch(deleteProperty(id));
        }
    };

    const createPropertyHandler = () =>{
        //create property
    };
   
    return (
        <>
          <Flex  alignItems="center" justifyContent="space-between" mt='10' >
            <Heading as="h1" fontSize="3xl" mb="5">
              Property
            </Heading>
            
          </Flex>

          {loadingDelete && <Loader/>}
          {errorDelete && <Message type="error">{errorDelete}</Message>}
    
          {loading ? (
            <Loader />
          ) : error ? (
            <Message type="error">{error}</Message>
          ) : (
            <Box bgColor="white" rounded="lg" shadow="lg" px="5" py="5" mb='56'>
              <Table variant="striped" colorScheme="gray" size="sm">
                <Thead>
                  <Tr>
                    <Th>ID</Th>
                    <Th>LOCATION</Th>
                    <Th>PRICE</Th>
                    <Th>DIMENSION</Th>
                    <Th>TYPE</Th>
                    <Th></Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {properties.map((property) => (
                    <Tr key={property._id}>
                      <Td>{property._id}</Td>
                      <Td>{property.location}</Td>
                      <Td>{property.price}</Td>
                      <Td>{property.dimension}</Td>
                      <Td>{property.type}</Td>
                      <Td>
                        <Flex justifyContent="flex-end" alignItems="center">
                          
                          <Button
                            mr="4"
                            colorScheme="red"
                            onClick={() => deleteHandler(property._id)}>
                            <Icon as={IoTrashBinSharp} color="white" size="sm" />
                          </Button>
                        </Flex>
                      </Td>
                    </Tr>
                  ))}
                </Tbody>
              </Table>
            </Box>
          )}
        </>
      );
    };
    
    export default PropertyListScreen;
    
