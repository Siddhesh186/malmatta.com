import {render} from 'react-dom';
import { Provider } from 'react-redux';
import  store from './store'
import App from "./App";
import {ChakraProvider} from "@chakra-ui/react"
render(
  <Provider store={store}>
    <ChakraProvider>
     <App/>

   </ChakraProvider>
  </Provider>
   
   ,document.querySelector('#root'));