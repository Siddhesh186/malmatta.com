import { Link as RouterLink,useNavigate, useParams} from 'react-router-dom';
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
} from '@chakra-ui/react';
import {IoCaretForwardSharp} from 'react-icons/io5';
import axios from 'axios';
import {useState, useEffect} from 'react';
import {
    Button,
    Flex,
    Heading,
    FormControl,
    FormLabel,
    Input,
    Spacer,
    Link,
} from '@chakra-ui/react';
import Message from '../components/Message';
import Loader from '../components/Loader';
import { listPropertyDetails} from '../actions/propertyActions';
import {useSelector, useDispatch} from 'react-redux';

const CheckoutSteps = ({ step1, step2, step3, step4}) => {
   
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { id: propertyId} = useParams();
    const [name, setName] = useState('');
    const [price, setPrice] = useState(0);
    const [image, setImage] = useState('');
    const [location, setLocation] = useState('');
    const [description, setDescription] = useState('');
    const [boundryWall, setBoundryWall] = useState('');
    const [dimension, setDimension] = useState(0);
    const [gates, setGates] = useState(0);

    const propertyDetails = useSelector((state)=>state.propertyDetails);
    const { loading, error, property} = propertyDetails;

    
   
    return (
        <Flex justfyContent= 'center' mb='8'>
            <Breadcrumb separator={<IoCaretForwardSharp  color='gray.500'/>}>
                {/* step1 */}
                <BreadcrumbItem>
                    
                </BreadcrumbItem>
            </Breadcrumb>
        </Flex>
    )
}