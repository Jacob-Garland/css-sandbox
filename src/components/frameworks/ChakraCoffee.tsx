import {
    Box,
    Button,
    Center,
    Container,
    Flex,
    Heading,
    Text,
    VStack,
    SimpleGrid
  } from '@chakra-ui/react';
import { useFontStore } from '../../state/useFontStore'
  
  export const ChakraCoffee = () => {
    const { selectedFont } = useFontStore();

    return (
      <Box style={{ fontFamily: selectedFont.family }}>
        {/* Hero Section */}
        <Flex
          bgImage="../../../public/coffee-bg.jpg"
          bgSize="cover"
          bgPos="center"
          h="400px"
          align="center"
          justify="center"
          textAlign="center"
          color="white"
        >
          <VStack gap={4}>
            <Heading fontSize="5xl">Brewed Awakening</Heading>
            <Text fontSize="xl">Your daily dose of craft coffee</Text>
            <Button colorScheme="yellow" color="black">
              Explore Menu
            </Button>
          </VStack>
        </Flex>
  
        {/* About Section */}
        <Container maxW="4xl" py={16} textAlign="center">
          <Heading fontSize="3xl" mb={4}>About Us</Heading>
          <Text fontSize="lg">
            Brewed Awakening is your cozy corner coffee hub. We specialize in organic beans,
            ethically sourced, roasted locally, and brewed fresh with love and precision.
          </Text>
        </Container>
  
        {/* Menu Section */}
        <Box bg={'gray.100'} py={16}>
          <Container maxW="6xl" textAlign="center">
            <Heading fontSize="3xl" mb={10}>Featured Menu</Heading>
            <SimpleGrid columns={{ base: 1, md: 3 }} gap={8}>
              {[
                { title: 'Caramel Macchiato', desc: 'Rich espresso layered with velvety milk and caramel.' },
                { title: 'Iced Vanilla Latte', desc: 'Cool down with our chilled take on a favorite classic.' },
                { title: 'Hazelnut Cold Brew', desc: 'Slow-brewed and infused with subtle nutty flavor.' }
              ].map((item, i) => (
                <Box key={i} p={6} shadow="md" bg={'white'} rounded="md">
                  <Heading fontSize="xl" mb={2}>{item.title}</Heading>
                  <Text>{item.desc}</Text>
                </Box>
              ))}
            </SimpleGrid>
          </Container>
        </Box>
  
        {/* Testimonials */}
        <Container maxW="3xl" py={16} textAlign="center">
          <Heading fontSize="3xl" mb={4}>Customer Love</Heading>
          <Text fontSize="xl" fontStyle="italic">
            "This place is my second home. Great vibes, even better coffee."
          </Text>
          <Text mt={2} fontWeight="bold">– Jessie M.</Text>
        </Container>
  
        {/* Footer */}
        <Box bg="black" color="white" py={6}>
          <Center>
            <Text>&copy; {new Date().getFullYear()} Brewed Awakening. All rights reserved.</Text>
          </Center>
        </Box>
      </Box>
    );
};  