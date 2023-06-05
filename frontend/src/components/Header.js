import { useState } from 'react';


import { useDispatch, useSelector } from 'react-redux';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import {
  Flex,
  Heading,
  Link,
  Box,
  Icon,
  Menu,
  MenuButton,
  MenuList,
  MenuItem as MenuItemChakra,
  Button,
  Text
} from '@chakra-ui/react';
import { HiUser, HiOutlineMenuAlt3 } from 'react-icons/hi';
import {FcUpload} from 'react-icons/fc';
import {RiRegisteredLine  } from 'react-icons/ri';
import { IoChevronDown } from 'react-icons/io5';
import { logout } from '../actions/userActions';

const MenuItem = ({ children, url }) => {
  return (
    <Link
      as={RouterLink}
      mt={{ base: 4, md: 0 }}
      to={url}
      fontSize="sm"
      letterSpacing="wide"
      color="whiteAlpha.600"
      fontWeight="bold"
      textTransform="uppercase"
      mr="5"
      display="block"
      _hover={{ color: 'whiteAlpha.800' }}>
      {children}
    </Link>
  );
};

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [show, setShow] = useState(false);

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const logoutHandler = () => {
    dispatch(logout());
    navigate('/login');
  };

  return (
    <Flex
      as="header"
      align="center"
      justify="space-between"
      wrap="wrap"
      py="6"
      px="6"
      bgColor="gray.600"
      w="100%"
      top="0"
      zIndex="2"
      pos="fixed">
      <Flex align="center" mr="5">
        <Heading
          as="h1"
          color="whiteAlpha.800"
          fontWeight="bold"
          size="md"
          letterSpacing="md">
          <Link
            as={RouterLink}
            to="/"
            _hover={{ color: 'gray.500', textDecor: 'none' }}>
            Malmatta.com
          </Link>
        </Heading>
      </Flex>

      <Box
        display={{ base: 'block', md: 'none', sm: 'block' }}
        onClick={() => setShow(!show)}>
        <Icon as={HiOutlineMenuAlt3} color="white" w="6" h="6" />
        <title>Menu</title>
      </Box>

      <Box
        alignItems="center"
        display={{ base: show ? 'block' : 'none', md: 'flex' }}
        width={{ base: 'full', md: 'auto' }}>
        
        

        {/* Login/Logout Views */}
        {userInfo ? (
          <Menu>
           
            <Flex
             align='center'
            as={RouterLink} to='/uploadproperty'
             w='56'
            
             mr='4'
             h='10'
             justify='center'
             borderRadius='md'
            bgColor='gray.100 '>
               <Text fontSize='lg' color='black' fontFamily='heading' fontWeight='medium'>Post Property</Text> 
              <Icon as={FcUpload} h='4' w='8'></Icon>
            
            </Flex>
            
             
            <MenuButton
              as={Button}
              rightIcon={<IoChevronDown />}
              _hover={{ textDecoration: 'none', opacity: '0.7' }}>
              {userInfo.name}
            </MenuButton>
           
            <MenuList>
              <MenuItemChakra as={RouterLink} to="/profile">
                Profile
              </MenuItemChakra>
              <MenuItemChakra onClick={logoutHandler}>Logout</MenuItemChakra>
            </MenuList>
          </Menu>
        ) : (
          <>
          <MenuItem url="/register">
          <Flex alignItems="center" color="white">
            <Icon as={RiRegisteredLine} w="4" h="4" mr="1"  />register
           
          </Flex>
        </MenuItem>
          <MenuItem url="/login" >
            <Flex alignItems="center" color='white'>
              <Icon as={HiUser} w="4" h="4" mr="1"  /> Login
            </Flex>
          </MenuItem>
          </>
        )}

        {/* {Admin Menu} */}
        {userInfo && userInfo.isAdmin && (
          <Menu>
            <MenuButton
            ml='5'
            color='white'
            fontWeight='semibold'
            as={Link}
            textTransform="uppercase"
            _hover={{ textDecor: 'none', opacity: 'o.7'}}
            >
                Manage <Icon as={IoChevronDown}/>
            </MenuButton>
            <MenuList>
              <MenuItemChakra as = {RouterLink} to = '/admin/userlist'>
                All Users 
              </MenuItemChakra>
              <MenuItemChakra as = {RouterLink} to = '/admin/propertylist'>
                All Properties
              </MenuItemChakra>
            </MenuList>
          </Menu>
        )}
      </Box>
    </Flex>
  );
};

export default Header;
