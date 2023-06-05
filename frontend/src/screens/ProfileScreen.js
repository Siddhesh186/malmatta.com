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
    Icon,
    
} from "@chakra-ui/react";
import Message from "../components/Message";
import FormContainer from '../components/FormContainer';
import { getUserDetails, updateUserProfile} from '../actions/userActions';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../actions/userActions';
import {HiHome} from 'react-icons/hi';
import {BiLogOut} from 'react-icons/bi';
import {  RiProfileLine} from 'react-icons/ri';
import { FiActivity } from 'react-icons/fi';

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

const userUpdateProfile = useSelector((state) => state.userUpdateProfile);
const { success } = userUpdateProfile;


useEffect (() => {
    if (!userInfo) {
        navigate('/login');
    } else {
       if (!user.name){
        dispatch(getUserDetails);
       } else {
        setName(user.name);
        setEmail(user.email);
       }
    }
}, [navigate, userInfo, user, dispatch, success]);

const submitHandler = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
        setMessage("Password do not match")
    } else {
        dispatch (updateUserProfile({ id:user._id, name, email, password}));
    }
};
  const logoutHandler = () =>{
        
        dispatch(logout());
        navigate('/login')
  }

    return(
        <>
        <Flex direction ='row' justify='space-between'>
        <Flex direction = 'column' w='250px' h='800px' bgColor='blue.100'  >
            <Flex  direction = 'column'    mt='60px'  h='full'px='3' py='4'>
           <Flex borderBottom='1px'   _hover={{borderColor:'blue.900'}} direction='row' align='center'>
            <Icon as={HiHome} h='30px' w='30px'></Icon>
             <Link as={RouterLink} to="/" _hover={{textDecoration:'none'}} mb="3" mt='3'><Text fontSize='lg' fontWeight='bold'>Home</Text></Link> </Flex>
             
            <Flex borderBottom='1px'   _hover={{borderColor:'blue.900'}}  align='center'> 
            <Icon as={ RiProfileLine} h='30px' w='30px'></Icon>
            <Link as={RouterLink} to="/profile" _hover={{textDecoration:'none'}} mb="3" mt='3'><Text fontSize='lg' fontWeight='bold'>Update Profile</Text></Link></Flex>
             
            
             
                <Flex direction='column' mt='4'  borderBottom='1px' px='0' _hover={{borderColor:'blue.900'}}  justify='flex-start'>
                    <Flex direction='row' >
                    <Icon as={FiActivity} h='30px' w='30px'></Icon>
                    <Text fontSize='lg' fontWeight='bold' mb='2'>My Activity</Text>
                    </Flex>
                    <Flex direction='column'  justify='flex-start' ml='3' mb='2'>
                    <Link as= {RouterLink} to="/" _hover={{textDecoration:'none'}}><Text textColor='blue.800' fontSize='md' fontWeight='bold'>Recently Searched</Text></Link>
                     <Link as={RouterLink} to ='/shortlist/:id' _hover={{textDecoration:'none'}}><Text fontSize='md' textColor='blue.800' fontWeight='bold'>Shortlisted</Text></Link>
                     
                    </Flex>
                </Flex> 
                <Flex borderBottom='1px'  _hover={{borderColor:'blue.900'}} align='center'>
                    <Icon as={ BiLogOut} h='30px' w='30px'></Icon>
                     <Button onClick={logoutHandler} _hover={{textDecoration:'none'}} px='0'   bgColor='blue.100'><Text fontSize='lg' fontWeight='bold'>Logout</Text></Button> </Flex>
                
             </Flex>
             
        </Flex>
          <Grid templateColumns={{ sm: '1fr' , md:'1fr 1fr'}} py='5' gap='10'>
            <Flex w='full' alignItems='center' justifyContent ='center' py='5'>
                <FormContainer>
                    <Flex borderBottom='1px'   _hover={{borderColor:'black.900'}}  mb="6" justify='center'  align ='center'>
                    <Heading as='h1' mb='8' fontSize='3xl' color='white'>
                          User Profile
                    </Heading>
                    </Flex>
                       
                    {error && <Message type="error">{error}</Message>}
                    {message && <Message type="error">{message}</Message>}
                    {success && <Message type="success">Profile updated</Message>}


                    <form onSubmit={submitHandler}>
                        <FormControl id='name'>
                            <FormLabel color='white'>Name</FormLabel>
                            <Input
                              type='name'
                              placeholder='Your Full Name'
                              value={name}
                              bg='white'
                              onChange={(e)=> setName(e.target.value)}/>
                            
                        </FormControl>
                        <Spacer h='3'/>
                        <FormControl id="email">
                           <FormLabel  color='white'>Email Address</FormLabel>
                           <Input
                           type='email'
                           placeholder='username@domain.com'
                           value={email}
                           bg='white'
                           onChange= {(e)=> setEmail(e.target.value)}/>
                        </FormControl>
                        <Spacer h='3'/>
                        <FormControl id="password">
                           <FormLabel  color='white'>Password</FormLabel>
                           <Input
                           type='password'
                           placeholder='**********'
                           value={password}
                           bg='white'
                           onChange= {(e)=> setPassword(e.target.value)}/>
                        </FormControl>
                        <Spacer h='3'/>
                        <FormControl id="confirmPassword">
                           <FormLabel  color='white'>Confirm Password</FormLabel>
                           <Input
                           type='password'
                           placeholder='**********'
                           value={confirmPassword}
                           bg='white'
                           onChange= {(e)=> setConfirmPassword(e.target.value)}/>
                        </FormControl>
                        <Spacer h='3'/>
                        <Button type="submit" isLoading={loading} mt='4' colorScheme='teal' onClick={submitHandler}>
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
