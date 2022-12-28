<Flex bgColor='white.200' direction='column'>
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