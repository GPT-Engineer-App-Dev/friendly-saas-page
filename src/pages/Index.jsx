import { Box, Container, Heading, Text, Button, Stack, Input, FormControl, FormLabel } from '@chakra-ui/react';
import { FaEnvelope, FaCheckCircle, FaDollarSign, FaInfoCircle } from 'react-icons/fa';

const Index = () => {
  return (
    <Container maxW="container.xl" py={10}>
      <Box textAlign="center" p={5}>
        <Heading as="h1" size="2xl" mb={2}>Welcome to Our SaaS Platform!</Heading>
        <Text fontSize="xl">Innovative solutions to boost your business.</Text>
      </Box>

      <Stack spacing={8} my={10}>
        <Box bg="gray.100" p={5} borderRadius="md">
          <Heading as="h2" size="lg"><FaInfoCircle /> Product Overview</Heading>
          <Text mt={2}>Our product helps businesses increase efficiency and reduce costs through advanced automation.</Text>
        </Box>

        <Box bg="gray.100" p={5} borderRadius="md">
          <Heading as="h2" size="lg"><FaCheckCircle /> Features</Heading>
          <Stack mt={2} spacing={3}>
            <Text>Feature 1: Streamlined operations</Text>
            <Text>Feature 2: Comprehensive analytics</Text>
            <Text>Feature 3: Custom integrations</Text>
          </Stack>
        </Box>

        <Box bg="gray.100" p={5} borderRadius="md">
          <Heading as="h2" size="lg"><FaDollarSign /> Pricing</Heading>
          <Stack mt={2} spacing={3}>
            <Text>Basic: $10/month</Text>
            <Text>Pro: $30/month</Text>
            <Text>Enterprise: Contact us for pricing</Text>
          </Stack>
        </Box>

        <Box bg="gray.100" p={5} borderRadius="md">
          <Heading as="h2" size="lg"><FaEnvelope /> Contact Us</Heading>
          <FormControl mt={4}>
            <FormLabel>Email Address</FormLabel>
            <Input type="email" placeholder="Enter your email" />
            <Button mt={4} colorScheme="blue">Submit</Button>
          </FormControl>
        </Box>
      </Stack>
    </Container>
  );
};

export default Index;