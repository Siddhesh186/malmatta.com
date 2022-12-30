{/* <Flex bgColor='white.200' direction='column'>
{ properties.filter ( post => {
    if (query ===' '){
        return post ;
    } else if (post.location.toLowerCase().includes(query.toLowerCase())) {
        return post;
    }
}
    
).map((post, index) => (
    <Flex direction ='column' bgColor='white.200' w='300px' ml='10' overflow='hidden'>
        <Flex  _hover={{ color:"black.500"}}> <Link as={RouterLink} to={`/property/${post._id}`} > <Text color="white">{post.location}</Text></Link></Flex>
    </Flex>
))}
</Flex>

// Login Screen
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
     <Flex w="full" alignItems="center" justifyContent="center" py="5" mt='10'>
      <FormContainer>
        <Heading as="h1" mb="8" fontSize="3xl">
          Login
        </Heading>

        {error && <Message type="error">{error}</Message>}

        <form onSubmit={submitHandler}>
          <FormControl id="email">
            <FormLabel>Email Address</FormLabel>
            <Input
              type="email"
              placeholder="username@domain.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormControl>

          <Spacer h="3" />

          <FormControl id="password">
            <FormLabel>Password</FormLabel>
            <Input
              type="password"
              placeholder="**************"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </FormControl>

          <Button type="submit" isLoading={loading} mt="4" colorScheme="teal">
            Login
          </Button>

          <Spacer h="3" />
        </form>

        <Flex pt="5">
          <Text fontWeight="semibold">
            New Customer?{' '}
            <Link as={RouterLink} to="/register">
              Click here to register.
            </Link>
          </Text>
        </Flex>
      </FormContainer>

      
    </Flex>
  );
};

export default LoginScreen;




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
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false)

  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, userInfo } = userLogin;

  useEffect(() => {
    if (userInfo) {
      navigate(redirect ? `/${redirect}` : '/');
    }
    console.log(formErrors)
    if (Object.keys(formErrors).length===0 && isSubmit){
      
    }
  }, [navigate, redirect, userInfo], [formErrors]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
    setFormErrors(validate(email, password))
  };
 
  const validate = (values) =>{
    const errors = {};
    const regex = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/i
    if (!values.email) {
      errors.email = "Email is required"
    }
    if (!values.password) {
      errors.password = 'Password is required'
    }
  }

  return (
     <Flex w="full" alignItems="center" justifyContent="center" py="5" mt='10'>
      <FormContainer>
        <Heading as="h1" mb="8" fontSize="3xl">
          Login
        </Heading>

        {/* {error && <Message type="error">{error}</Message>} */}

//         <form onSubmit={submitHandler}>
//           <FormControl id="email">
//             <FormLabel>Email Address</FormLabel>
//             <Input
//               type="email"
//               placeholder="username@domain.com"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//             />
//           </FormControl>
//           <p>{formErrors.email}</p>

//           <Spacer h="3" />

//           <FormControl id="password">
//             <FormLabel>Password</FormLabel>
//             <Input
//               type="password"
//               placeholder="**************"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//             />
//           </FormControl>
//           <p>{formErrors.password}</p>

//           <Button type="submit" isLoading={loading} mt="4" colorScheme="teal">
//             Login
//           </Button>

//           <Spacer h="3" />
//         </form>

//         <Flex pt="5">
//           <Text fontWeight="semibold">
//             New Customer?{' '}
//             <Link as={RouterLink} to="/register">
//               Click here to register.
//             </Link>
//           </Text>
//         </Flex>
//       </FormContainer>

      
//     </Flex>
//   );
// };

// export default LoginScreen; */}
