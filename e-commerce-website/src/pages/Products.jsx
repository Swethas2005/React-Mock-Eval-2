import React, { useEffect, useState } from "react";
import { Skeleton, SimpleGrid, Box, Image, Text, Button, Stack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Select } from '@chakra-ui/react';

function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [sortBy, setSortBy] = useState('price');

  function fetchProducts(sortBy) {
    setLoading(true);
    setError(null);
    fetch(`https://dummyjson.com/products?sortBy=${sortBy}&order=asc`)
      .then((response) => response.json())
      .then((data) => {
        if (Array.isArray(data.products)) {
          setProducts(data.products);
        } else {
          setError(new Error("Invalid response format"));  
        }
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        setError(error);
      });
  }

  useEffect(() => {
    fetchProducts(sortBy);
  }, [sortBy]);

  const handleSortChange = (event) => {
    setSortBy(event.target.value);
  };
  

  if (loading) {
    return (
      <SimpleGrid columns={[1, 2, 3, 4]} spacing={10} mt="4" mb="4">
        {[...Array(8)].map((_, index) => (
          <Box key={index} borderWidth="1px" borderRadius="lg" overflow="hidden" p="6">
            <Skeleton height="150px" mb="4" />
            <Stack spacing="4">
              <Skeleton height="20px" />
              <Skeleton height="20px" />
              <Skeleton height="20px" />
            </Stack>
          </Box>
        ))}
      </SimpleGrid>
    );
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <Select value={sortBy} onChange={handleSortChange} mb="4" width={"30%"} mt={"5"} ml={"10%"} textAlign={"center"} boxShadow={"lg"} borderRadius={"-lg"}>
        <option value="price">asc</option>
        <option value="asc">desc</option>
      </Select>

      
        
      

      <SimpleGrid columns={[1, 2, 3, 4]} spacing={10} mt="4" mb="4">
        {products.map((product) => (
          <Box
            key={product.id}
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
          >
            <Image ml={"auto"} mr={"auto"}
              src={product.thumbnail} 
              alt={product.title}
              boxSize="150px"
              objectFit="contain"
            />
            <Box p="6" textAlign="center">
              <Text fontWeight="bold">{product.title}</Text>
              <Text>${product.price}</Text>
              <Text>{product.category}</Text>
              <Link to={`/SingleUser/${product.id}`}>
                <Button mt="4" colorScheme="teal">
                  View
                </Button>
              </Link>
            </Box>
          </Box>
        ))}
      </SimpleGrid>
    </div>
  );
}

export default Products;
