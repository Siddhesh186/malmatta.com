import {BrowserRouter, Routes, Route} from "react-router-dom"
import {Flex} from "@chakra-ui/react";
import Header from "./components/Header";
import Footer from "./components/Footer";

import HomeScreen from "./screens/HomeScreen";
import PropertyScreen from "./screens/PropertyScreen";
import ShortlistScreen from "./screens/ShortlistScreen";
import LoginScreen from "./screens/LoginScreens";
import RegisterScreen from "./screens/RegisterScreen";
const App =() => {
    return (
        
         <BrowserRouter>
           <Header/>
          <div style={{ height: '50px' }}></div>
          
          <Flex
          as="main"
          direction="column"
          bgColor="white"
          w="100%"
      
          >
        
          <Routes>
            <Route path="/" element={<HomeScreen/>}/>
            <Route path="/property/:id" element={<PropertyScreen/>}/>
            <Route path="/shortlist/:id" element={<ShortlistScreen/>}/>
            <Route path="/shortlist" element={<ShortlistScreen/>}/>
            <Route path="/login" element={<LoginScreen/>}/>
            <Route path="/register" element={<RegisterScreen />} />
          </Routes>
          </Flex>
          <Footer/>
         </BrowserRouter>
        
    )

};
export default App;