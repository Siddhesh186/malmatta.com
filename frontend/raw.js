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
{/* <FormControl id="name">
            <FormLabel>Name</FormLabel>
            <Input
              type="name"
              placeholder="Your Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </FormControl>
         


          <Spacer h="3" />

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

          <Spacer h="3" />

          <FormControl id="confirmPassword">
            <FormLabel>Confirm Password</FormLabel>
            <Input
              type="password"
              placeholder="**************"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              disabled={!password}
            />
          </FormControl>

          <Button type="submit" isLoading={loading} mt="4" colorScheme="teal" onClick={
            <Message>Registered successfully</Message>
          }>
            Register
          </Button>
          

          <Spacer h="3" /> */}
    //       return (
    //         <Flex w='full' alignItems='center' bgColor='white'  justify='center' py='5' mt='-7' direction='row' h='800px' mb='32'>
    //             <Flex mr='5'direction='column' align='flex-start' mt='-56' >
    //                  <Heading color='blue.600' alignContent='start' fontFamily='cursive'> We are here to get you best deals</Heading>
    //                  <Flex direction='row'  justify='center' align='flex-start'>
    //                     <Icon as={TiInputCheckedOutline} color='green.200' h='10' w='10'/>
    //                     <Text fontSize='2xl' color='blue.500' >Contact with Trained Agent</Text>
    //                  </Flex>
    //                  <Flex direction='row'  justify='center' align='flex-start'>
    //                     <Icon as={TiInputCheckedOutline} color='green.200' h='10' w='10'/>
    //                     <Text fontSize='2xl' color='blue.500' >Best Deal For You Property</Text>
    //                  </Flex>
    //                  <Flex direction='row'  justify='center' align='flex-start'>
    //                     <Icon as={TiInputCheckedOutline} color='green.200' h='10' w='10'/>
    //                     <Text fontSize='2xl' color='blue.500' >Advertise For Free</Text>
    //                  </Flex>
    //             </Flex>
    //             <FormContainer >
    //                 <Flex borderBottom='1px' _hover={{borderColor:'black.900'}} >
    //                     <Heading as='h1' mb='8' fontSize= '4xl' color='white'>
    //                         Post Your Property
    //                     </Heading>
                        
    //                 </Flex>
    
    //                   {loadingCreate && <Loader/>}
    //                   {errorCreate && <Message type='error'>{errorCreate}</Message>}
    //               {loading ? (
    //                 <Loader/>
    //               ) : error ? (
    //                 <Message type='error'>{error}</Message>
    //               ) : (   
    //                <form onSubmit={createPropertyHandler}>
                    
                    
    //                 {page ===1 && (
    //                     <Flex direction='column' >
    //                         <FormControl id='name' isRequired >
    //                             <FormLabel color='white'>Name</FormLabel>
    //                             <Input type='text'
    //                             placeholder="Your full name"
    //                             value={name}
    //                             bg='white'
    //                             onChange={(e)=> setName(e.target.value)}/>
    //                         </FormControl>
    
    //                         <Spacer h='3'/>
    //                         <FormControl id='location' isRequired>
    //                             <FormLabel color='white'>Location</FormLabel>
    //                             <Input type='text'
    //                             placeholder="Location of property"
    //                             value={location}
    //                             bg='white'
    //                             onChange={(e)=> setLocation(e.target.value)}/>
    //                         </FormControl>
    //                         <Spacer h='3'/>
    //                         <FormControl id='type' isRequired>
    //                             <FormLabel color='white'>Type</FormLabel>
    //                             <Input type='text'
    //                             placeholder="NA plot Or A plot"
    //                             value={type}
                               
    //                             bg='white'
                               
    //                             onChange={(e)=> setType(e.target.value)}/>
                                
    //                         </FormControl>
                       
    
    //                         <br/>
    //                         <Button onClick={nextPage} disabled={!name}  h='8' w='20' colorScheme="teal">Next</Button>
    
    //                     </Flex>
    //                 )}
    //                 { page ===2 && (
    //                     <Flex direction='column' >
    //                         {/* IMAGE */}
    //                       <FormControl id='image' isRequired>
    //                         <FormLabel color='white'>Image</FormLabel>
    //                         <Input type='text'
    //                         placeholder="Enter Image Url"
    //                         value={image}
    //                         bg='white'
    //                         onChange={(e)=> setImage(e.target.value)}/>
    //                         <Input 
    //                         type='file'
    //                          bg='gray.100'
    //                         id='image-file'
    //                         onChange={uploadFileHandler}/>
    //                     </FormControl>
    
    //                     <Spacer h='3'/>
    //                     <FormControl id='dimension' isRequired>
    //                         <FormLabel color='white'>Dimesnion</FormLabel>
    //                         <Input type='number'
    //                         placeholder="Enter Dimension"
    //                         value={dimension}
    //                         bg='white'
    //                         onChange={(e)=> setDimension(e.target.value)}/>
    //                     </FormControl>
    //                     <Spacer h='3'/>
    //                     <FormControl id='price' isRequired>
    //                         <FormLabel color='white'>Price</FormLabel>
    //                         <Input type='number'
    //                         placeholder="Enter Pricing"
    //                         value={price}
    //                         bg='white'
    //                         onChange={(e)=> setPrice(e.target.value)}/>
    //                     </FormControl>
    //                     <br/>
    //                       <Flex direction='row'> 
    //                        <Button onClick={previousPage} h='8' w='20' mr='4' colorScheme="teal">Previous</Button>
    //                         <Button onClick={nextPage} h='8' w='20' colorScheme="teal">Next</Button>
    //                         </Flex>
    //                 </Flex>
    //                 )}
    //                 { page === 3 && (
    //                     <Flex direction='column'>
    //                         <FormControl id='description' isRequired>
    //                         <FormLabel color='white'>description</FormLabel>
    //                         <Input type='text'
    //                         placeholder="Add Description"
    //                         value={description}
    //                         bg='white'
    //                         onChange={(e)=> setDescription(e.target.value)}/>
    //                     </FormControl>
    //                     <Spacer h='3'/>
    //                         <FormControl id='gates' isRequired>
    //                         <FormLabel color='white'>Number of gates</FormLabel>
    //                         <Input type='number'
    //                         placeholder=" "
    //                         value={gates}
    //                         bg='white'
    //                         onChange={(e)=> setGates(e.target.value)}/>
    
    //                     </FormControl>
    //                     <Spacer h='3'/>
    //                         <FormControl id='boundryWall' isRequired>
    //                         <FormLabel color='white'>Boundrywall</FormLabel>
    //                         <Input type='text'
    //                         placeholder=" "
    //                         value={boundryWall}
    //                         bg='white'
    //                         onChange={(e)=> setBoundryWall(e.target.value)}/>
    //                     </FormControl>
                            
    //                     <Flex direction='row' align='center' mt='3' >
    //                      <Button onClick={previousPage} h='8' w='20' mr='4' colorScheme="teal">Previous</Button>
    //                      <Button isLoading={loading}  h='8' w='20' colorScheme="teal" type='submit'  >
    //                         Submit
    //                     </Button>
    //                     </Flex>
    //                     </Flex>
                        
    //                 )}
    //                </form>
    //                )} 
    //             </FormContainer>
    //         </Flex>
    //      )
    // };
    
    // export default MultiForm;
     
    


