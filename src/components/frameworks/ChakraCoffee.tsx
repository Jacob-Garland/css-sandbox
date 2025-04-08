import {
    Box,
    Button,
    Center,
    Container,
    Flex,
    Heading,
    Text,
    VStack,
    SimpleGrid,
    HStack
  } from '@chakra-ui/react';
import { useFontStore } from '../../state/useFontStore';
import { LuHouse, LuMenu, LuPhone } from 'react-icons/lu';
  
export const ChakraCoffee = () => {
    const { selectedFont } = useFontStore();

    return (
      <Box style={{ fontFamily: selectedFont.family }}>
        {/* Header */}
        <Box bg="black" color="white" px={6} py={4}>
          <Flex align="center" justify="space-between">
            <Text fontSize="xl" fontWeight="bold">Brewed Awakening</Text>
            <HStack gap={4}>
              <Button variant="ghost" _hover={{ bg: 'yellow.400', color: 'black' }} borderRadius={'xl'} p={2} color={'yellow.400'}><LuHouse />Home</Button>
              <Button variant="ghost" _hover={{ bg: 'yellow.400', color: 'black' }} borderRadius={'xl'} p={2} color={'yellow.400'}><LuMenu />Menu</Button>
              <Button variant="ghost" _hover={{ bg: 'yellow.400', color: 'black' }} borderRadius={'xl'} p={2} color={'yellow.400'}><LuPhone />Contact</Button>
            </HStack>
            <HStack gap={2}>
              <Button variant='ghost' borderColor="yellow.400" borderRadius={'md'} color="yellow.400" _hover={{ bg: 'yellow.300', color: 'white' }} p={2}>Log In</Button>
              <Button bg="yellow.400" color="black" _hover={{ bg: 'yellow.300', color: 'white' }} borderRadius={'md'} p={2}>Sign Up</Button>
            </HStack>
          </Flex>
        </Box>

        {/* Hero Section */}
        <Flex
          // bgImage="../../../public/coffee-bg.jpg"
          bgColor={'gray.800'}
          bgSize="cover"
          bgPos="center"
          h="400px"
          align="center"
          justify="center"
          textAlign="center"
        >
          <VStack gap={4}>
            <Heading fontSize="5xl" color={'white'}>Brewed Awakening</Heading>
            <Text fontSize="xl" color={'white'}>Your daily dose of craft coffee</Text>
            <Button bg="yellow.400" color="black" _hover={{ bg: 'yellow.300', color: 'white' }} borderRadius={'md'} p={2} size="lg" mt={4} fontWeight="semibold">
              Explore Menu
            </Button>
          </VStack>
        </Flex>
  
        {/* About Section */}
        <Container maxW="4xl" py={16} color={{ base: 'black', _dark: 'white' }} textAlign="center">
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
          <Heading fontSize="3xl" mb={4} color={{ base: 'black', _dark: 'white' }}>Customer Love</Heading>
          <Text fontSize="xl" fontStyle="italic" color={{ base: 'gray.800', _dark: 'gray.200' }}>
            "This place is my second home. Great vibes, even better coffee."
          </Text>
          <Text mt={2} fontWeight="bold" color={{ base: 'black', _dark: 'white' }}>– Jessie M.</Text>
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