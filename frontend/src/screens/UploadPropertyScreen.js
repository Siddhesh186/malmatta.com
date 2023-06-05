import axios from 'axios';
import { useState, useEffect } from "react";
import { useNavigate , Link as RouterLink,useSearchParams, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
 Flex,
 Button,
 Text,
 FormControl,
 FormLabel,
 Spacer,
 Link,
 Input,
 Heading,
 Checkbox,
 Icon,
 Breadcrumb,
 BreadcrumbItem,
} from '@chakra-ui/react';
import {IoCaretForwardSharp} from 'react-icons/io5';
import Message from '../components/Message';
import Loader from '../components/Loader';
import FormContainer from "../components/FormContainer";
import { listProperties,deleteProperty, createProperty} from "../actions/propertyActions";
import { PROPERTY_CREATE_RESET, PROPERTY_CREATE_SUCCESS } from '../constants/propertyConstants';
import {TiInputCheckedOutline} from 'react-icons/ti';

const MultiForm = () =>{
     
      const navigate = useNavigate();
      const dispatch = useDispatch();

      let [searchParams] = useSearchParams();
      let redirect = searchParams.get('redirect');

      const {id:propertyId} = useParams();

      const [page, setPage] = useState(1);
      const [name, setName] = useState('');
      const [location,setLocation] = useState('');
      const [type,setType] = useState('');
      const [price, setPrice] = useState(0);
      const [image, setImage] = useState('');
      const [boundryWall,setBoundryWall] = useState('');
      const [dimension, setDimension] = useState(0);
      const [description, setDescription] = useState('');
      const [gates, setGates] = useState(0);
      const [uploading, setUploading] = useState(false);
      const [formData, setFormData] = useState({});

  const handleNext = (data) => {
    setFormData({ ...formData, ...data });
    setPage(page + 1);
  };

  const handlePrevious = () => {
    setPage(page - 1);
  };

  const handleSubmit = () => {
    // handle form submission here
  };

      const propertyDetails = useSelector((state)=> state.propertyDetails);
      const { loading, error, property} = propertyDetails

      const propertyCreate = useSelector((state) => state.propertyCreate);
      const {
        loading: loadingCreate,
        error: errorCreate,
        success: successCreate,
        // property:createProperty,
        
      } = propertyCreate;

      useEffect(()=> {
        dispatch({ type: PROPERTY_CREATE_RESET});
        
      },[dispatch])

      useEffect(()=> {
        if (successCreate) {
            
            navigate(redirect ? `/${redirect}` : '/')
            
        } 
    }
      , [dispatch, navigate, successCreate ])

      

     
      
    

     const uploadFileHandler = async (e) => {
        const file = e.target.files[0];
        const formData = new FormData();
        formData.append('image', file);
        setUploading(true);

        try {
            const config = {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            };

            const {data} = await axios.post('/api/uploads', formData, config);
            setImage(data);
            setUploading(error);
        } catch (err) {
            console.error(err);
            setUploading(false);
        }
     }
     
      const validateForm = ()=>{
        // form Validation

     }

     const submitHandler = (e) =>{
        e.preventDefault()
        dispatch(createProperty())
     }
     
     return (
        <Flex w='full' alignItems='center' bgColor='white'  justify='center' py='5' mt='-7' direction='row' h='800px' mb='32'>
            <Flex mr='5'direction='column' align='flex-start' mt='-56' >
                 <Heading color='blue.600' alignContent='start' fontFamily='cursive'> We are here to get you best deals</Heading>
                 <Flex direction='row'  justify='center' align='flex-start'>
                    <Icon as={TiInputCheckedOutline} color='green.200' h='10' w='10'/>
                    <Text fontSize='2xl' color='blue.500' >Contact with Trained Agent</Text>
                 </Flex>
                 <Flex direction='row'  justify='center' align='flex-start'>
                    <Icon as={TiInputCheckedOutline} color='green.200' h='10' w='10'/>
                    <Text fontSize='2xl' color='blue.500' >Best Deal For Your Property</Text>
                 </Flex>
                 <Flex direction='row'  justify='center' align='flex-start'>
                    <Icon as={TiInputCheckedOutline} color='green.200' h='10' w='10'/>
                    <Text fontSize='2xl' color='blue.500' >Advertise For Free</Text>
                 </Flex>
            </Flex>
            <FormContainer >
                <Flex borderBottom='1px' _hover={{borderColor:'black.900'}} >
                    <Heading as='h1' mb='8' fontSize= '4xl' color='white'>
                        Post Your Property
                    </Heading>
                    
                </Flex>

                  {loadingCreate && <Loader/>}
                  {errorCreate && <Message type='error'>{errorCreate}</Message>}
              {loading ? (
                <Loader/>
              ) : error ? (
                <Message type='error'>{error}</Message>
              ) : (   
               <form onSubmit={submitHandler}>
                
                
                {page ===1 && (
                    <Flex direction='column' >
                        <FormControl id='name' isRequired >
                            <FormLabel color='white'>Name</FormLabel>
                            <Input type='text'
                            placeholder="Your full name"
                            value={name}
                            bg='white'
                            onChange={(e)=> setName(e.target.value)}/>
                        </FormControl>

                        <Spacer h='3'/>
                        <FormControl id='location' isRequired>
                            <FormLabel color='white'>Location</FormLabel>
                            <Input type='text'
                            placeholder="Location of property"
                            value={location}
                            bg='white'
                            onChange={(e)=> setLocation(e.target.value)}/>
                        </FormControl>
                        <Spacer h='3'/>
                        <FormControl id='type' isRequired>
                            <FormLabel color='white'>Type</FormLabel>
                            <Input type='text'
                            placeholder="NA plot Or A plot"
                            value={type}
                           
                            bg='white'
                           
                            onChange={(e)=> setType(e.target.value)}/>
                            
                        </FormControl>
                   

                        <br/>
                        <Button onClick={handleNext} disabled={!name}  h='8' w='20' colorScheme="teal">Next</Button>

                    </Flex>
                )}
                { page ===2 && (
                    <Flex direction='column' >
                        {/* IMAGE */}
                      <FormControl id='image' isRequired>
                        <FormLabel color='white'>Image</FormLabel>
                        <Input type='text'
                        placeholder="Enter Image Url"
                        value={image}
                        bg='white'
                        onChange={(e)=> setImage(e.target.value)}/>
                        <Input 
                        type='file'
                         bg='gray.100'
                        id='image-file'
                        onChange={uploadFileHandler}/>
                    </FormControl>

                    <Spacer h='3'/>
                    <FormControl id='dimension' isRequired>
                        <FormLabel color='white'>Dimesnion</FormLabel>
                        <Input type='number'
                        placeholder="Enter Dimension"
                        value={dimension}
                        bg='white'
                        onChange={(e)=> setDimension(e.target.value)}/>
                    </FormControl>
                    <Spacer h='3'/>
                    <FormControl id='price' isRequired>
                        <FormLabel color='white'>Price</FormLabel>
                        <Input type='number'
                        placeholder="Enter Pricing"
                        value={price}
                        bg='white'
                        onChange={(e)=> setPrice(e.target.value)}/>
                    </FormControl>
                    <br/>
                      <Flex direction='row'> 
                       <Button onClick={handlePrevious} h='8' w='20' mr='4' colorScheme="teal">Previous</Button>
                        <Button onClick={handleNext} h='8' w='20' colorScheme="teal">Next</Button>
                        </Flex>
                </Flex>
                )}
                { page === 3 && (
                    <Flex direction='column'>
                        <FormControl id='description' isRequired>
                        <FormLabel color='white'>description</FormLabel>
                        <Input type='text'
                        placeholder="Add Description"
                        value={description}
                        bg='white'
                        onChange={(e)=> setDescription(e.target.value)}/>
                    </FormControl>
                    <Spacer h='3'/>
                        <FormControl id='gates' isRequired>
                        <FormLabel color='white'>Number of gates</FormLabel>
                        <Input type='number'
                        placeholder=" "
                        value={gates}
                        bg='white'
                        onChange={(e)=> setGates(e.target.value)}/>

                    </FormControl>
                    <Spacer h='3'/>
                        <FormControl id='boundryWall' isRequired>
                        <FormLabel color='white'>Boundrywall</FormLabel>
                        <Input type='text'
                        placeholder=" "
                        value={boundryWall}
                        bg='white'
                        onChange={(e)=> setBoundryWall(e.target.value)}/>
                    </FormControl>
                        
                    <Flex direction='row' align='center' mt='3' >
                     <Button onClick={handlePrevious} h='8' w='20' mr='4' colorScheme="teal">Previous</Button>
                     <Button isLoading={loading}  h='8' w='20' colorScheme="teal" type='submit'  >
                        Submit
                    </Button>
                    </Flex>
                    </Flex>
                    
                )}
               </form>
               )} 
            </FormContainer>
        </Flex>
     )
};

export default MultiForm;
 
