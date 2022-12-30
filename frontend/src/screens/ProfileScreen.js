import {useState, useEffect} from 'react';
import {
    Link as RouterLink,
    useSearchParams,
    useNavigate
} from 'react-router-dom';
import {
    Flex, 
    Link,
    Image,
    Button, 
    Text,
    FormControl,
    FormLabel,
    Input,
    Spacer,
    Grid,
    Heading,
    Divider,
    
} from "@chakra-ui/react";
import Message from "../components/Message";
import FormContainer from '../components/FormContainer';
import { getUserDetails } from '../actions/userActions';
import Header from '../components/Header';
import ShortlistScreen from './ShortlistScreen';
import { useDispatch, useSelector } from 'react-redux';




const ProfileScreen = () => {

    const dispatch = useDispatch();
const navigate = useNavigate();

const [name, setName] = useState('');
const [email, setEmail] = useState('')
const [password, setPassword] = useState('')
const [confirmPassword, setConfirmPassword] = useState('')
const [message, setMessage] = useState(null)

const userDetails = useSelector((state)=> state.userDetails);
const { loading, error, user} = userDetails;

const userLogin = useSelector((state)=> state.userLogin);
const { userInfo } = userLogin

useEffect (() => {
    if (!userInfo) {
        navigate('/login');
    } else {
       if (!user.name){
        dispatch(getUserDetails);
       } else {
        setName(user.name);
        setEmail(user.name);
       }
    }
}, [navigate, userInfo, user, dispatch]);

const submitHandler = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
        setMessage("Password do not match")
    } else {
        // DISPATCH UPDATE PROFILE
    }
};

    return(
        <>
        <Flex direction ='row' justify='space-between'>
        <Flex direction = 'column' w='200px' h='800px' bgColor='blue.100'  >
            <Flex  direction = 'column'    mt='80px'  h='full'px='6' py='4'>
           <Flex borderBottom='1px' borderColor='blue.300' _hover={{shadow:"md", borderColor:'blue.900',borderBottom:'3px'}}> <Link as={RouterLink} to="/" _hover={{textDecoration:'none'}} mb="3" mt='3'><Text fontSize='lg' fontWeight='bold'>Home</Text></Link> </Flex>
             
            <Flex borderBottom='1px' borderColor='blue.300'  _hover={{shadow:"md", borderColor:'blue.900', borderBottom:'3px'}}> <Link as={RouterLink} to="/updateProfile" _hover={{textDecoration:'none'}} mb="3" mt='3'><Text fontSize='lg' fontWeight='bold'>Update Profile</Text></Link></Flex>
             
            
             
                <Flex direction='column' mt='4' borderBottom='1px' borderColor='blue.300'  _hover={{shadow:"md", borderColor:'blue.900',borderBottom:'3px'}}>
                <Text fontSize='lg' fontWeight='bold'>My Activity</Text>
                 <Spacer h='4'/>
                    <Link as={RouterLink} to ='/shortlist' _hover={{textDecoration:'none'}}><Text fontSize='md' textColor='blue.800' fontWeight='bold'>-Shortlisted</Text></Link>
                    <Link as= {RouterLink} tp="/" _hover={{textDecoration:'none'}}><Text textColor='blue.800' fontSize='md' fontWeight='bold'>-Recently Searched</Text></Link>
                </Flex> 
                
             </Flex>
             
        </Flex>
          <Grid templateColumns={{ sm: '1fr' , md:'1fr 1fr'}} py='5' gap='10'>
            <Flex w='full' alignItems='center' justifyContent ='center' py='5'>
                <FormContainer>
                    <Heading as='h1' mb='8' fontSize='3xl'>
                          User Profile
                    </Heading>
                    {error && <Message type="error">{error}</Message>}
                    {message && <Message type="error">{message}</Message>}

                    <form onSubmit={submitHandler}>
                        <FormControl id='name'>
                            <FormLabel>Name</FormLabel>
                            <Input
                              type='name'
                              placeholder='Your Full Name'
                              value={name}
                              onChange={(e)=> setName(e.target.value)}/>
                            
                        </FormControl>
                        <Spacer h='3'/>
                        <FormControl id="email">
                           <FormLabel>Email Address</FormLabel>
                           <Input
                           type='email'
                           placeholder='username@domain.com'
                           value={email}
                           onChange= {(e)=> setEmail(e.target.value)}/>
                        </FormControl>
                        <Spacer h='3'/>
                        <FormControl id="password">
                           <FormLabel>Password</FormLabel>
                           <Input
                           type='password'
                           placeholder='**********'
                           value={password}
                           onChange= {(e)=> setPassword(e.target.value)}/>
                        </FormControl>
                        <Spacer h='3'/>
                        <FormControl id="confirmPassword">
                           <FormLabel>Confirm Password</FormLabel>
                           <Input
                           type='password'
                           placeholder='**********'
                           value={confirmPassword}
                           onChange= {(e)=> setConfirmPassword(e.target.value)}/>
                        </FormControl>
                        <Spacer h='3'/>
                        <Button type="submit" isLoading={loading} mt='4' colorScheme='teal'>
                            Update
                        </Button>
                        <Spacer h='3'/>
                    </form>
                </FormContainer>
            </Flex>
          </Grid>
        </Flex>
        </>
        
    )
}
 
export default ProfileScreen;