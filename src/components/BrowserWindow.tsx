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
        <Box width="80%" mt="80px" mx="auto" borderRadius="md">
            <Box width="100%">
                <Box maxHeight="600px" overflowY="auto" p={4}>
                    {renderFramework()}
                </Box>
            </Box>
        </Box>
    );
};