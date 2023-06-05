import { useState, useEffect } from 'react';
import {
  Link as RouterLink,
  useSearchParams,
  useNavigate,
  Await,
} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  Button,
  Flex,
  Heading,
  Text,
  FormControl,
  FormLabel,
  Input,
  Link,
  Spacer,
  Select,
  
} from '@chakra-ui/react';
import Message from '../components/Message';
import FormContainer from '../components/FormContainer';
import { register } from '../actions/userActions';

const RegisterScreen = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  let [searchParams] = useSearchParams();
  let redirect = searchParams.get('redirect');
  
  const [formType, setFormType] = useState('customer');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isAgent,setIsAgent]=useState('');
  const [isClient,setIsClient]=useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState(null);
  const [ phoneNo,setPhoneNo] = useState('');
  
  
  const userRegister = useSelector((state) => state.userRegister);
  const { loading, error, userInfo } = userRegister;

  useEffect(() => {
    if (userInfo) {
      navigate(redirect ? `/${redirect}` : '/');
    };
    
  }, [navigate, redirect, userInfo]);
    
  const submitHandler = (e) => {
    e.preventDefault();
    
    if (password !== confirmPassword ) {
      setMessage('Passwords do not match');
    } else if (!name) {
      setMessage ('Name Required !')
      
    } else if (!email) {
      setMessage ('email Required !')
       
    }
     else if (!password){
      setMessage("Password Required !")
    } else if (password.length <= 6){
      setMessage("password must be greater than 6 character" )
    }else if (password.length >= 10){
      setMessage("password must be less than 10 character" )
    } 
    else {
      dispatch(register(name, email, password,phoneNo));
    
    }
  };

  const toggleFormType =(e)=> {
     e.preventDefault();
     setFormType(formType === 'customer' ? 'gent' : 'customer');
  }
  


  return (
    <Flex w="full" alignItems="center" justifyContent="center" py="5" mt='10'>
      <FormContainer>
        <Flex borderBottom='1px'   _hover={{borderColor:'black.900'}}  mb="6" justify='center'  align ='center'>
        <Heading as="h1" mb="8" fontSize="3xl" color='white'>
          Register
        </Heading>
        </Flex>
       
        {error && <Message type="error">{error}</Message>}
        {message && <Message type="error">{message}</Message>}
       
        <form onSubmit={submitHandler}>
          
        <FormControl id="name">
            <FormLabel color='white'>Name</FormLabel>
            <Input
              type="name"
              placeholder="Your Full Name"
              value={name}
              bg='white'
              onChange={(e) => setName(e.target.value)}
            />
          </FormControl>
         


          <Spacer h="3" />

          <FormControl id="email">
            <FormLabel color='white'>Email Address</FormLabel>
            <Input
              type="email"
              placeholder="username@domain.com"
              value={email}
              bg='white'
              onChange={(e) => setEmail(e.target.value)}
              
            />
          </FormControl>
        

          <Spacer h="3" />

          <FormControl id="phoneNo">
            <FormLabel color='white'>Phone Number</FormLabel>
            <Input
              type="number"
              placeholder="8875******"
              value={phoneNo}
              bg='white'
              onChange={(e) => setPhoneNo(e.target.value)}
              
            />
          </FormControl>

          <FormControl id="password">
            <FormLabel color='white'>Password</FormLabel>
            <Input
              type="password"
              placeholder="**************"
              value={password}
              bg='white'
              onChange={(e) => setPassword(e.target.value)}
           
            />
          </FormControl>

          <Spacer h="3" />

          <FormControl id="confirmPassword">
            <FormLabel color='white'>Confirm Password</FormLabel>
            <Input
              type="password"
              placeholder="**************"
              value={confirmPassword}
              bg='white'
              onChange={(e) => setConfirmPassword(e.target.value)}
              disabled={!password}
            />
          </FormControl>
          <Spacer h="3" />
          <Select placeholder='client/Agent' bg='white' w='36'>
            <option value={isClient} >Client</option>
            <option value={isAgent} onClick={(e)=> setIsAgent(e.target.value)}>Agent</option>
          </Select>
          
     
          

          <Button type="submit" isLoading={loading} mt="4" colorScheme="teal" onClick={
            <Message>Registered successfully</Message>
          }>
            Register
          </Button>
          

          <Spacer h="3" />
        
        </form>
          

        <Flex pt="5" color='white'>
          <Text fontWeight="semibold" >
            Existing Customer?{' '}
            <Link as={RouterLink} to="/login">
              Click here to login.
            </Link>
          </Text>
        </Flex>
      </FormContainer>
    </Flex>
  );
};

export default RegisterScreen;

