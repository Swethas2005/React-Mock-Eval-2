import React from 'react';
import { useEffect, useState }  from 'react';
import { Spinner, Box, Image, Text } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';

function SingleUser() {
  const { userId } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  function fetchProduct() {
    setLoading(true);
    setError(null);
    fetch(`https://dummyjson.com/products/${userId}`)
      .then((response) => response.json())
      .then((data) => {
        setProduct(data);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        setError(error);
      });
  }

  useEffect(() => {
    fetchProduct();
  }, [userId]);

  if (loading) {
    return (
      <div>
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="blue.500"
          size="xl"
        />
      </div>
    );
  }

  if (error) {
    return <div>Failed to fetch</div>;
  }

  return (
    <div>
      <h1 style={{ textAlign: "center"  , marginTop: "10px",color:"blue",fontSize:"30px",fontWeight:"bold"}}>Product Details</h1>
      <Box 
          borderWidth="1px"
          borderRadius="lg"
          p="6"
          textAlign="center"
          m="5"
          bg="white"
          boxShadow="lg"
          width={"30%"}
          height={"30%"}
          ml={"35%"}
          overflow="hidden">
        <Text fontSize="2xl" fontWeight="bold">
          {product.title}
        </Text>
        <Image src={product.thumbnail} alt={product.title} />
        <Text fontWeight="bold">Category: {product.category}</Text>
        <Text fontWeight="bold">Brand: {product.brand}</Text>
        <Text fontWeight="bold" color={"orange.500"} fontSize={"xl"}>Rating: {product.rating}</Text>
        <Text fontWeight="bold" color={"green.500"} fontSize={"xl"}>Price: {product.price}</Text>
      </Box>
    </div>
  );
}

export default SingleUser;
