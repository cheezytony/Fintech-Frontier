import React from 'react';
import { Box, Text, Button } from '@chakra-ui/react';

const LandingPage: React.FC = () => {
  return (
    <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" minHeight="100vh">
      <Text fontSize="md" fontWeight="bold" mb={4}>
        Fintech Frontier
      </Text>
      <Text fontSize="4xl" fontWeight="bold" mb={4}>
        Unlock the Future of Finance
      </Text>
      <Text fontSize="lg" mb={6}>
        Join Fintech Frontier and take control of your financial journey today!
      </Text>
      <Button colorScheme="teal" size="lg" mb={4}>
        Get Started
      </Button>
    </Box>
  );
};

export default LandingPage;
