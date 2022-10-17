import {BrowserRouter, Routes, Route} from "react-router-dom"
import {Flex} from "@chakra-ui/react";
import Header from "./components/Header";
import Footer from "./components/Footer";

import HomeScreen from "./screens/HomeScreen";
import PropertyScreen from "./screens/PropertyScreen";
const App =() => {
    return (
        
         <BrowserRouter>
           <Header/>
          <div style={{ height: '50px' }}></div>
          
          <Flex
          as="main"
          direction="column"
         
          w="100%"
      
          >
        
          <Routes>
            <Route path="/" element={<HomeScreen/>}/>
            <Route path="/property/:id" element={<PropertyScreen/>}/>
          </Routes>
          </Flex>
          <Footer/>
         </BrowserRouter>
        
    )

};
export default App;