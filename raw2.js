// import { useState, useEffect } from 'react';
// import {
//   Link as RouterLink,
//   useSearchParams,
//   useNavigate,
// } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import {
//   Button,
//   Flex,
//   Heading,
//   Text,
//   FormControl,
//   FormLabel,
//   Input,
//   Link,
//   Spacer,
// } from '@chakra-ui/react';
// import Message from '../components/Message';
// import FormContainer from '../components/FormContainer';
// import { register } from '../actions/userActions';

// const RegisterScreen = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   let [searchParams] = useSearchParams();
//   let redirect = searchParams.get('redirect');

//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [message, setMessage] = useState(null);
  

//   const userRegister = useSelector((state) => state.userRegister);
//   const { loading, error, userInfo } = userRegister;

//   useEffect(() => {
//     if (userInfo) {
//       navigate(redirect ? `/${redirect}` : '/');
//     }
//   }, [navigate, redirect, userInfo]);

//   const submitHandler = (e) => {
//     e.preventDefault();
//     if (password !== confirmPassword) {
//       setMessage('Passwords do not match');
//     } else {
//       dispatch(register(name, email, password));
//     }
//   };

//   return (
//     <Flex w="full" alignItems="center" justifyContent="center" py="5" mt='10'>
//       <FormContainer>
//         <Heading as="h1" mb="8" fontSize="3xl">
//           Register
//         </Heading>

//         {error && <Message type="error">{error}</Message>}
//         {message && <Message type="error">{message}</Message>}

//         <form onSubmit={submitHandler}>
//           <FormControl id="name">
//             <FormLabel>Name</FormLabel>
//             <Input
//               type="name"
//               placeholder="Your Full Name"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//             />
//           </FormControl>

//           <Spacer h="3" />

//           <FormControl id="email">
//             <FormLabel>Email Address</FormLabel>
//             <Input
//               type="email"
//               placeholder="username@domain.com"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//             />
//           </FormControl>

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

//           <Spacer h="3" />

//           <FormControl id="confirmPassword">
//             <FormLabel>Confirm Password</FormLabel>
//             <Input
//               type="password"
//               placeholder="**************"
//               value={confirmPassword}
//               onChange={(e) => setConfirmPassword(e.target.value)}
//             />
//           </FormControl>

//           <Button type="submit" isLoading={loading} mt="4" colorScheme="teal">
//             Register
//           </Button>

//           <Spacer h="3" />
//         </form>

//         <Flex pt="5">
//           <Text fontWeight="semibold">
//             Existing Customer?{' '}
//             <Link as={RouterLink} to="/login">
//               Click here to login.
//             </Link>
//           </Text>
//         </Flex>
//       </FormContainer>
//     </Flex>
//   );
// };

// export default RegisterScreen;




// import { useState, useEffect } from 'react';
// import {
//   Link as RouterLink,
//   useSearchParams,
//   useNavigate,
// } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import {
//   Button,
//   Flex,
//   Heading,
//   Text,
//   FormControl,
//   FormLabel,
//   Input,
//   Link,
//   Spacer,
  
// } from '@chakra-ui/react';
// import Message from '../components/Message';
// import FormContainer from '../components/FormContainer';
// import { register } from '../actions/userActions';

// const RegisterScreen = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   let [searchParams] = useSearchParams();
//   let redirect = searchParams.get('redirect');

//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [message, setMessage] = useState(null);
//   const [formErrors, setFormErrors] = useState({});
//   const [isSubmit, setIsSubmit] = useState(false)

  

//   const userRegister = useSelector((state) => state.userRegister);
//   const { loading, error, userInfo } = userRegister;

//   useEffect(() => {
//     if (userInfo) {
//       navigate(redirect ? `/${redirect}` : '/');
//     };
//     if (Object.keys(formErrors).length===0 && isSubmit){
//     }
//   }, [navigate, redirect, userInfo],formErrors);

  

//   const submitHandler = (e) => {
//     e.preventDefault();
//     setIsSubmit(true)
   
//     if (password !== confirmPassword) {
//       setMessage('Passwords do not match');
//     } else {
//       setFormErrors(validate(name, email, password))
//       dispatch(register(name, email, password));
//       setIsSubmit(true)
   
//     }
//   };

//   const validate = (values) =>{
//     const errors = {};
//     const regex = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/i
//     if (!values.name) {
//       errors.name = "Email is required"
//     }
//     if (!values.email) {
//       errors.email = "Email is required"
//     }
//     if (!values.password) {
//       errors.password = 'Password is required'
//     }
//     return errors;
//   }

//   return (
//     <Flex w="full" alignItems="center" justifyContent="center" py="5" mt='10'>
//       <FormContainer>
//         <Heading as="h1" mb="8" fontSize="3xl">
//           Register
//         </Heading>

//         {error && <Message type="error">{error}</Message>}
//         {message && <Message type="error">{message}</Message>}

//         <form onSubmit={submitHandler}>
//           <FormControl id="name">
//             <FormLabel>Name</FormLabel>
//             <Input
//               type="name"
//               placeholder="Your Full Name"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//             />
//           </FormControl>
//           <p>{formErrors.name}</p>

//           <Spacer h="3" />

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

//           <Spacer h="3" />

//           <FormControl id="confirmPassword">
//             <FormLabel>Confirm Password</FormLabel>
//             <Input
//               type="password"
//               placeholder="**************"
//               value={confirmPassword}
//               onChange={(e) => setConfirmPassword(e.target.value)}
//             />
//           </FormControl>

//           <Button type="submit" isLoading={loading} mt="4" colorScheme="teal">
//             Register
//           </Button>

//           <Spacer h="3" />
//         </form>

//         <Flex pt="5">
//           <Text fontWeight="semibold">
//             Existing Customer?{' '}
//             <Link as={RouterLink} to="/login">
//               Click here to login.
//             </Link>
//           </Text>
//         </Flex>
//       </FormContainer>
//     </Flex>
//   );
// };

// export default RegisterScreen;
