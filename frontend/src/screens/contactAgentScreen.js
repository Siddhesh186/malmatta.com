import { Box,Button,Flex,Link,Input,FormControl,FormLabel,Heading,Spacer } from "@chakra-ui/react"
import React, {useState} from 'react';
import FormContainer from '../components/FormContainer';
import { useDispatch, useSelector } from 'react-redux';
import { getUserDetails } from "../actions/userActions";

function ContactAgentScreen() {
   
  const [name,setName]= useState('');
  const [email,setEmail]= useState('');
  const [phoneNo,setPhoneNo]= useState('');
  const [messageText,setMessageText]= useState('');

  const userDetails = useSelector((state)=> state.userDetails);
  const { loading, error, user} = userDetails;
  
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const response = await fetch('/send-message', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        to: phoneNo,
        text: messageText,
      }),
    });
  
    if (response.ok) {
      console.log('SMS sent successfully');
    } else {
      console.log('Error sending SMS');
    }
  };

  return (
    <Flex w="full" alignItems="center" justifyContent="center" py="5" mt='10' mb='40'>
      <FormContainer>
        <Flex>
            <Heading> Contact Agent</Heading>
        </Flex>
        <form onSubmit={handleSubmit}>
        <FormControl id="name" isRequired>
            <FormLabel color='white'>Name</FormLabel>
            <Input
              type="name"
              placeholder=" "
              value={name}
              bg='white'
               onChange={(e) => setName(e.target.value)}
            />
          </FormControl>
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
          <FormControl id="phoneNo" isRequired>
            <FormLabel color='white'>Phone Number</FormLabel>
            <Input
              type="number"
              placeholder="Enter phone Number"
              value={phoneNo}
              bg='white'
              onChange={(e) => setPhoneNo(e.target.value)}
            />
          </FormControl>

          <Spacer h="3" />
          <Flex mt='5'>
            <Button bg='blue.400' type='submit'>Request Number</Button>
          </Flex>

        </form>
      </FormContainer>
    </Flex>
    
  )
}
export default ContactAgentScreen;