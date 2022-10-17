
import {Flex, Heading, Link, Box, Icon,} from '@chakra-ui/react'; 
import {MdLogin} from "react-icons/md";
import {BsFillPersonPlusFill, BsUpload} from "react-icons/bs"


const Header = ()=>{
    return ( 
        <Flex
         
         as="header"
         align="center"
         justify="space-between"
         wrap="wrap"
         
         py='6'
         px="6"
         w="100%"
         h='100'
         bgColor="gray.300" 
         top="0"
         zIndex="2"
         pos="fixed"
         >
         <Flex  align="center" mr="5">
            <Heading
            as="h1"
            color="gray.800"
            fontWeight="bold"
            size="md"
            letterSpacing="md"
            >
                <Link href='/'_hover={{ color:"gray.900" , textDecor:"none" }}>
                    Malmatta.com
                </Link>
            </Heading>
         </Flex>
         <Flex 
         borderRadius="md"
         align="center"
         justify="space-between"
         flexDirection="row"
         bg="blue.200"
         mr="20"
         py="1"
         px="1"
         >
        <Box 
         align='center'
         direction="column"
         mr="5"
         border="revert"
         > 
         <Link href='/'_hover={{ color:"gray.500" , textDecor:"none"}}  >
           <Icon as={MdLogin} color="gray.800" _hover={{ color:"gray.500"}} w="6" h="6"  />
           <Heading as="h3" align="center" size="small">Login</Heading>
         </Link>
         
         </Box>
         <Box 
         align='center'
         justify='space-between'
         
         mr="5" 
         >   
         <Link href='/'_hover={{ color:"gray.500" , textDecor:"none"}} >
           <Icon as={BsFillPersonPlusFill} color="gray.800" _hover={{ color:"gray.500"}}  w="6" h="6"  />
           <Heading  as="h3" align="center" size="small">Register</Heading>
         </Link>
         
         </Box>
         <Box 
         align='center'
         justify='space-between'
        
        
         >   
         <Link href='/'_hover={{ color:"gray.500" , textDecor:"none"}} >
           <Icon as={ BsUpload} color="gray.800" _hover={{ color:"gray.500"}}  w="6" h="6"  />
           <Heading  as="h3"  size="sm">Free Post Property</Heading>
         </Link>
         
         </Box>
         </Flex>
        
        </Flex>
    )

}
export default Header;