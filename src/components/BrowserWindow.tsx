import { Box } from '@chakra-ui/react';

export default function BrowserWindow({framework}: { framework: string }) {
    const renderFramework = () => {
        switch (framework) {
            case 'chakra':
                return <Box>Chakra UI</Box>;
            case 'bootstrap':
                return <Box>Bootstrap</Box>;
            case 'tailwind':
                return <Box>Tailwind CSS</Box>;
            case 'bulma':
                return <Box>Bulma</Box>;
            default:
                return <Box>Select a framework</Box>; // default is <ChakraComponent />
        } // Replace these with <ChakraComponent />, <BootstrapComponent />, etc.
    };

    return (
        <Box width="80%" mt="80px" mx="auto" borderRadius="md">
            <Box as="img" width="100%">
                <Box maxHeight="600px" overflowY="auto" p={4}>
                    {renderFramework()}
                </Box>
            </Box>
        </Box>
    );
};