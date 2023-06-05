import {Flex, Text,Heading,Icon} from "@chakra-ui/react";
import {MdOutlineMail,MdPhoneIphone} from 'react-icons/md';
const Footer = () =>{
    return (
        <Flex 
        as="footer"
        justifyContent="center"
        py="5" bgColor='black' h='fit-content' direction='column' >
            <Flex direction='column' justify='center' align='center' m='40' color='white'>
            <Heading as='h2' color='white' mb='4'>
                About Us
            </Heading>
            <Text >
            This website malmatta.com , including any subdomains thereof, and any other websites through which its services are made available, our mobile, tablet and other smart device applications, and application program interfaces etc, , (hereinafter collectively referred to as "malmatta.com") is owned, hosted and operated by Info Edge (India) Ltd (hereinafter referred to as IEIL), a company incorporated in India under the Companies Act, 1956 and having its registered office at Ground Floor, GF-12A, 94, Meghdoot, Nehru Place, New Delhi - 110 020. These terms and conditions, privacy policy and community guidelines regulating use of these Services constitute a legally binding agreement between 99acres and the User (the “Agreement”).
            </Text>
            <Flex direction='column'  align='center' mt='7'>
            <Text fontSize='2xl' color='white'>Contact Us</Text>
                <Flex direction='row'  justify='center' align='center'><Icon as={MdOutlineMail} h='8' w='6'/>
                <Text fontSize='md'  color='white'>Email - malmatta@gmail.com</Text>
                </Flex>
                <Flex direction='row' justify='center' align='center'><Icon as={MdPhoneIphone}  h='8' w='6' />
                <Text fontSize='md'  color='white'>Phone No - +91 8530159553</Text>

                </Flex>
               
               
              
            </Flex>
            <Text mt='10' fontSize='md'>Copyright 2022. Malmatta.com All Rights Reserved.</Text>

            </Flex>
           
            
           
            
        </Flex>
    );
};
 export default Footer;