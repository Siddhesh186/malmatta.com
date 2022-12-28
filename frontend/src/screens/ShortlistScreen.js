import {useEffect } from 'react';
import {
    Link as RouterLink,
    useParams,
    useSearchParams,
    useNavigate,
} from 'react-router-dom';
import { useDispatch, useSelector} from 'react-redux';
import {
    Flex,
    Text,
    Grid,
    Heading,
    Box,
    Image,
    Link,
    Select,
    Button,
    Icon,

} from "@chakra-ui/react";
import { RiDeleteBinLine} from "react-icons/ri";
import Message from '../components/Message';
import { addToShortlist, removeFromShortlist } from '../actions/shortlistActions';

 const ShortlistScreen = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [ searchParams ] = useSearchParams();

    const { id: propertyId} = useParams();

    const shortlist = useSelector((state)=> state.shortlist);
    const { shortlistItems} = shortlist;

    useEffect(() => {
        if (propertyId) {
            dispatch(addToShortlist(propertyId));
        }
    }, [dispatch, propertyId]);

    const removeFromShortlistHandler = (id) => {
        dispatch(removeFromShortlist(id));
    };
    const checkoutHandler = ()=> {
        navigate('/login?redirect=contactAgent')
    }

    return (
        <Grid>
            <Box>
                
                <Text fontWeight='extrabold' fontSize='lg' mb="6" mt='8' ml='5'>ShortList</Text>
                <Flex  >
                    {shortlistItems.length === 0 ? (
                        <Message>
                            Shortlist is empty..{' '}
                            <Link as= {RouterLink} to='/'>
                                Go back
                            </Link>
                        </Message>
                    ): (
                        <Grid gridTemplateColumns = '5fr 1fr' gap='10' w="full">
                            
                            <Flex direction= 'column'>
                                {shortlistItems.map((item)=>(
                                    <Grid 
                                    w='max'
                                    bgColor='white'
                                    key={item.property}
                                    size='100%'
                                    alignItems='center'
                                    justifyContent='space-between'
                                    borderBottom = '2px'
                                    borderColor = 'gray.200'
                                    py='4'
                                    px='4'
                                    rounded='lg'
                                    templateColumns='1fr 2fr  3fr 2fr 2fr 1fr 2fr '>
                                        <Image
                                        src={item.image}
                                        alt={item.name}
                                        borderRadius='lg'
                                        height='20'
                                        width='20'
                                        objectFit = 'cover'/>

                                        
                                            <Link as={RouterLink} to={`/property/${item.property}`}>
                                            <Text fontWeight = "bold" fontSize='md'>
                                              Location - {item.location} 
                                              </Text>
                                            </Link>
                                            <Text fontWeight ='bold' fontSize='md'>
                                                Dimension - {item.dimension} sqm
                                            </Text>
                                      

                                        <Text fontWeight ='bold' fontSize='md'>
                                         price -{item.price} ₹
                                        </Text>

                                        <Text fontWeight ='bold' fontSize='md'>
                                        type - {item.type}
                                        </Text>
                                        
                                        <Button
                                         type= 'button'
                                         colorScheme='red'
                                         h='8'
                                         onClick={()=> removeFromShortlistHandler(item.property)}>
                                         <Icon as={RiDeleteBinLine}/>
                                         </Button>
                                        
                                        <Button
                                        type='button'
                                        bgColor='gray.800'
                                        colorScheme='teal'
                                        w='55'
                                        h='8'
                                        ml='2'
            
                                        onClick={checkoutHandler}
                                        my='2'>
                                            Proceed To Checkout
                                        </Button>
                                        
                                        
                                                    

                                    </Grid>
                                    

                                ))}
                            </Flex>
                             
                            
                        </Grid>

                    )}
                </Flex>
            </Box>
        </Grid>
    )
 }

 export default ShortlistScreen;