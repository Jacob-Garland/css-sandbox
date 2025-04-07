import { Box } from '@chakra-ui/react';
import { BulmaCoffee } from './frameworks/BulmaCoffee';
import { BootstrapCoffee } from './frameworks/BootstrapCoffee';
import { ChakraCoffee } from './frameworks/ChakraCoffee';
import { TailwindCoffee } from './frameworks/TailwindCoffee';

export default function BrowserWindow({framework}: { framework: string }) {
    const renderFramework = () => {
        switch (framework) {
            case 'bulma':
                return <BulmaCoffee />;
            case 'bootstrap':
                return <BootstrapCoffee />;
            case 'tailwind':
                return <TailwindCoffee />;
            default:
                return <ChakraCoffee />;
        }
    };

    return (
        <Box position="fixed" top={24} left={4} right={64} bottom={0} bg="gray.600" boxShadow={"lg"} borderRadius={"xl"} p={7}>
            <Box width="98%">
                <Box maxHeight="800px" overflowY="auto" p={4}>
                    {renderFramework()}
                </Box>
            </Box>
        </Box>
    );
};