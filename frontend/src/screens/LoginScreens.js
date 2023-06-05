import { useState, useEffect } from 'react';
import {
  Link as RouterLink,
  useSearchParams,
  useNavigate,
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
  Divider,
} from '@chakra-ui/react';
import Message from '../components/Message';
import FormContainer from '../components/FormContainer';
import { login } from '../actions/userActions';

const LoginScreen = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  let [searchParams] = useSearchParams();
  let redirect = searchParams.get('redirect');

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, userInfo } = userLogin;

  useEffect(() => {
    if (userInfo) {
      navigate(redirect ? `/${redirect}` : '/');
    }
  }, [navigate, redirect, userInfo]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  return (
     <Flex w="full" alignItems="center" justifyContent="center" py="5" mt='10' mb='40'  >
      <FormContainer>
        <Flex borderBottom='1px'  mb='8'  _hover={{borderColor:'black.900'}}  justify='center'  align ='center'>
        <Heading as="h1" mb='6'  fontSize="3xl" color='white'>
          Login
        </Heading>
        </Flex>
        
        {error && <Message type="error">{error}</Message>}

        <form onSubmit={submitHandler} >
          <FormControl id="email" isRequired>
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

          <FormControl id="password" isRequired>
            <FormLabel color='white'>Password</FormLabel>
            <Input
              type="password"
              placeholder="**************"
              value={password}
              bg='white'
              onChange={(e) => setPassword(e.target.value)}
            />
          </FormControl>

          <Button type="submit" isLoading={loading} mt="4" colorScheme="teal">
            Login
          </Button>

          <Spacer h="3" />
        </form>

        <Flex pt="5">
          <Text fontWeight="semibold" color='white'>
            New Customer?{' '}
            <Link as={RouterLink} to="/register" color='white'>
              Click here to register.
            </Link>
          </Text>
        </Flex>
      </FormContainer>

      
    </Flex>
  );
};

export default LoginScreen;