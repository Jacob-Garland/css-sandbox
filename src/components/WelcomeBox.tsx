import { Box, Text, Heading } from '@chakra-ui/react';

export default function WelcomeBox() {
    return (
        <Box position="fixed" top={28} left={4} right={64} bottom={0} 
            bg={{ base: "gray.200", _dark: "gray.600"}} 
            boxShadow={"lg"} borderRadius={"xl"} 
            borderColor={{ base: 'white', _dark: 'black'}} 
            borderWidth={3} p={7}>
            <Box width="96%" height="100%" 
                bg={{ base: "gray.100", _dark: "gray.700"}} 
                borderRadius={"xl"} borderColor={'black'} 
                borderWidth={2} boxShadow={"lg"} display="flex" 
                flexDirection="column" alignItems="center">
                <Heading fontSize={'2xl'} fontWeight={'bold'} color={{ base: 'green.500', _dark: 'green.400' }} mb={4} mt={8} p={4}>
                    Welcome to the CSS Framework Sandbox!
                </Heading>
                <Text fontSize={'lg'} color={{ base: 'black', _dark: 'white' }} textAlign={'center'}>
                    Start by choosing a popular CSS framework from the dropdown menu in the top right corner.<br />
                    You can then customize the CSS on each framework's sample page by clicking on components.<br />
                    Use the tool tray on the right to adjust various properties, utilizing the choosen framework.<br />
                    Explore the features and see how different frameworks handle styling and components!<br />
                </Text>
                <Text fontSize={'lg'} color={{ base: 'black', _dark: 'white' }} textAlign={'center'} mt={8}>
                    &copy; Prevail Software {new Date().getFullYear()}
                </Text>
                <Text fontSize={'lg'} color={{ base: 'black', _dark: 'white' }} textAlign={'center'}>
                    Made with ❤️, Chakra UI, & React
                </Text>
            </Box>
        </Box>
    )
};